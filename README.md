# Utilities Collection

A collection of TypeScript React hooks and Python diagnostic tools for markdown rendering and LightRAG development.

## Components

### TypeScript React Hooks

**useMarkdown** - Render markdown with advanced features:
- LaTeX math expressions with KaTeX
- Mermaid diagrams
- Syntax highlighting
- Emoji support
- ECharts integration
- Code copy functionality

**useECharts** - Initialize and manage ECharts instances in React components with automatic theme handling and cleanup.

### Python Tools

**LightRAG Diagnostic Tool** - Check LightRAG initialization status and verify proper setup before use.

## Installation

### TypeScript Hooks

Copy the hook files into your React project:

```bash
cp file1.ts your-project/hooks/useECharts.ts
cp file2.ts your-project/hooks/useMarkdown.ts
```

Install dependencies:

```bash
npm install echarts katex markdown-it markdown-it-texmath markdown-it-mermaid highlight.js dompurify markdown-it-emoji
```

### Python Tool

Copy the diagnostic tool to your project:

```bash
cp new.py your-project/lightrag/tools/check_initialization.py
```

## Usage

### useMarkdown Hook

```typescript
import useMarkdown from './hooks/useMarkdown';

function MyComponent() {
  const { render } = useMarkdown();
  const html = render('# Hello\n\n$E = mc^2$');
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

### useECharts Hook

```typescript
import useECharts from './hooks/useECharts';

function ChartComponent({ message }) {
  const { initECharts, disposeECharts } = useECharts({ message });
  
  useEffect(() => {
    initECharts('prefix', 'chartId');
    return () => disposeECharts();
  }, []);
  
  return <div className="echarts-container" id="chartId" />;
}
```

### LightRAG Diagnostic Tool

Run the demo:

```bash
python new.py --demo
```

Check your LightRAG instance:

```python
from new import check_lightrag_setup

async def verify_setup():
    rag = LightRAG(working_dir="./data")
    await check_lightrag_setup(rag, verbose=True)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
