# Utility Collection

A collection of React hooks and Python utilities for visualization, markdown rendering, and LightRAG diagnostics.

## Components

### TypeScript/React Hooks

- **useECharts** (`file1.ts`) - React hook for ECharts visualization with theme support and automatic resize handling
- **useMarkdown** (`file2.ts`) - React hook for markdown rendering with LaTeX (KaTeX), Mermaid diagrams, syntax highlighting, emoji support, and code copying

### Python Tools

- **LightRAG Diagnostic Tool** (`new.py`) - Diagnostic utility to verify LightRAG instance initialization status

## Installation

### TypeScript/React Components

Copy the hook files into your React project:

```bash
cp file1.ts your-project/hooks/useECharts.ts
cp file2.ts your-project/hooks/useMarkdown.ts
```

Install required dependencies:

```bash
npm install echarts markdown-it markdown-it-texmath katex markdown-it-mermaid highlight.js dompurify markdown-it-emoji
```

### Python Tool

Copy the diagnostic tool to your LightRAG project:

```bash
cp new.py your-lightrag-project/tools/check_initialization.py
```

## Usage

### useECharts Hook

```typescript
import useECharts from './hooks/useECharts';

function MyComponent({ message }) {
  const { initECharts, disposeECharts } = useECharts({ message });
  
  useEffect(() => {
    initECharts('chart', 'my-chart-id');
    return () => disposeECharts();
  }, []);
  
  return <div id="my-chart-id" className="echarts-container" />;
}
```

### useMarkdown Hook

```typescript
import useMarkdown from './hooks/useMarkdown';

function MarkdownRenderer({ content }) {
  const { render } = useMarkdown();
  
  return (
    <div dangerouslySetInnerHTML={{ __html: render(content) }} />
  );
}
```

### LightRAG Diagnostic Tool

```python
from lightrag import LightRAG
from check_initialization import check_lightrag_setup

rag = LightRAG(working_dir="./data")
await rag.initialize_storages()

# Check initialization status
await check_lightrag_setup(rag, verbose=True)
```

Run the demo:

```bash
python new.py --demo
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
