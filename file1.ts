import useAppearanceStore from 'stores/useAppearanceStore';
// @ts-ignore
import * as echarts from 'echarts';
import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Parses an ECharts option string and converts it to a JavaScript object.
 * Extracts content within curly braces and evaluates it as a JavaScript object.
 * 
 * @param {string} optStr - The option string containing ECharts configuration
 * @returns {object} The parsed ECharts option object
 * @throws {Error} When the option format is invalid or parsing fails
 */
const parseOption = (optStr: string) => {
  try {
    const match = optStr.match(/\{(.+)\}/s);
    if (!match) return {};
    return new Function(`return {${match[1]}}`)();
  } catch (error) {
    throw new Error('Invalid ECharts option format');
  }
};

/**
 * React hook for managing ECharts instances within a message context.
 * Provides methods to initialize and dispose of chart instances with automatic cleanup.
 * 
 * @param {object} params - Hook parameters
 * @param {object} params.message - Message object containing chart data
 * @param {string} params.message.id - Unique identifier for the message
 * @returns {object} Object containing chart management methods
 * @returns {Function} returns.disposeECharts - Function to clean up all chart instances
 * @returns {Function} returns.initECharts - Function to initialize a specific chart
 */
export default function useECharts({ message }: { message: { id: string } }) {
  const { t } = useTranslation();
  const theme = useAppearanceStore((state) => state.theme);
  const messageId = useMemo(() => message.id, [message]);
  const containersRef = useRef<{ [key: string]: echarts.EChartsType }>({});

  /**
   * Disposes of all ECharts instances and cleans up event listeners.
   * Calls cleanup function for each chart instance and resets the containers reference.
   */
  const disposeECharts = () => {
    const chartInstances = Object.values(containersRef.current);
    chartInstances.forEach(({ cleanup }: { cleanup: Function }) => {
      cleanup();
    });
    containersRef.current = {};
  };

  /**
   * Initializes an ECharts instance for a specific chart container.
   * Finds the chart container, parses its configuration, and sets up the chart with resize handling.
   * 
   * @param {string} prefix - Prefix for the chart instance key
   * @param {string} chartId - Unique identifier for the chart
   */
  const initECharts = (prefix: string, chartId: string) => {
    if (containersRef.current[`${prefix}-${chartId}`]) return; // already initialized
    const chartInstances = containersRef.current;
    const container = document.querySelector(
      `#${messageId} .echarts-container#${chartId}`,
    ) as HTMLDivElement;
    if (!container) return;
    const encodedConfig = container.getAttribute('data-echarts-config');
    if (!encodedConfig) return;
    try {
      const config = decodeURIComponent(encodedConfig);
      const option = parseOption(config);
      const chart = echarts.init(container, theme);
      chart.setOption(option);
      const resizeHandler = () => chart.resize();
      window.addEventListener('resize', resizeHandler);
      chartInstances[`${prefix}-${chartId}`] = {
        chartId,
        instance: chart,
        cleanup: () => {
          window.removeEventListener('resize', resizeHandler);
          chart.dispose();
        },
      };
    } catch (error: any) {
      container.innerHTML = `
        <div class="text-gray-400">
          ${t('Message.Error.EChartsRenderFailed')}
        </div>
      `;
    }
  };

  return {
    disposeECharts,
    initECharts,
  };
}