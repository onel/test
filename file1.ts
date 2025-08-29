import useAppearanceStore from 'stores/useAppearanceStore';
// @ts-ignore
import * as echarts from 'echarts';
import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Parses an ECharts option string and converts it to a JavaScript object.
 * @param {string} optStr - The option string containing ECharts configuration in object format
 * @returns {object} The parsed ECharts option object
 * @throws {Error} Throws an error if the option format is invalid
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
 * Custom React hook for managing ECharts instances within a message context.
 * Provides methods to initialize and dispose of chart instances with automatic cleanup.
 * @param {object} params - The hook parameters
 * @param {object} params.message - The message object containing chart data
 * @param {string} params.message.id - The unique identifier for the message
 * @returns {object} An object containing chart management methods
 * @returns {Function} returns.disposeECharts - Function to dispose all chart instances
 * @returns {Function} returns.initECharts - Function to initialize a chart instance
 */
export default function useECharts({ message }: { message: { id: string } }) {
  const { t } = useTranslation();
  const theme = useAppearanceStore((state) => state.theme);
  const messageId = useMemo(() => message.id, [message]);
  const containersRef = useRef<{ [key: string]: echarts.EChartsType }>({});

  /**
   * Disposes all ECharts instances and cleans up event listeners.
   * @returns {void}
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
   * @param {string} prefix - The prefix to use for the chart instance key
   * @param {string} chartId - The unique identifier for the chart
   * @returns {void}
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

  /**
   * Returns the chart management functions for disposing and initializing ECharts instances.
   * @returns {object} Object containing disposeECharts and initECharts functions
   */
  return {
    disposeECharts,
    initECharts,
  };
}