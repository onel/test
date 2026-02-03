# Utility Tools Collection

A collection of React hooks and Python diagnostic tools for enhanced markdown rendering, chart integration, and LightRAG development.

## What's Included

This repository contains:

- **React Markdown Hook** - Render markdown with LaTeX math, Mermaid diagrams, syntax highlighting, and emoji support
- **React ECharts Hook** - Integrate ECharts visualizations with automatic theming and lifecycle management
- **LightRAG Diagnostic Tool** - Python utility to verify LightRAG initialization and troubleshoot setup issues

## Installation

### React Hooks

Copy the TypeScript files into your React project:

```bash
# Copy hooks to your project
cp file1.ts your-project/hooks/useECharts.ts
cp file2.ts your-project/hooks/useMarkdown.ts
```

Install required dependencies:

```bash
npm install echarts katex markdown-it markdown-it-texmath markdown-it-mermaid markdown-it-emoji dompurify highlight.js
```

### Python Tool

No installation required. Run directly:

```bash
python new.py --demo
```

## Usage

### Markdown Rendering

Render markdown with LaTeX, Mermaid diagrams, and syntax highlighting:

```typescript
import useMarkdown from './useMarkdown';

function MyComponent() {
  const { render } = useMarkdown();
  
  const markdown = `
# Hello World

Math: $E = mc^2$

\`\`\`mermaid
graph TD
  A --> B
\`\`\`
  `;
  
  return <div dangerouslySetInnerHTML={{ __html: render(markdown) }} />;
}
```

### ECharts Integration

Integrate ECharts with automatic theme support and cleanup:

```typescript
import useECharts from './useECharts';

function ChartComponent({ message }) {
  const { initECharts, disposeECharts } = useECharts({ message });
  
  useEffect(() => {
    initECharts('prefix', 'chart-id');
    return () => disposeECharts();
  }, []);
  
  return <div id="chart-id" className="echarts-container" />;
}
```

### LightRAG Diagnostic

Check if your LightRAG instance is properly initialized:

```python
from lightrag import LightRAG
from new import check_lightrag_setup

# Create your RAG instance
rag = LightRAG(working_dir="./data", ...)

# Check initialization status
await check_lightrag_setup(rag, verbose=True)
```

Run the demo to see the diagnostic tool in action:

```bash
python new.py --demo
```

## Contributing

Contributions are welcome. To set up for development:

1. Clone the repository
2. For TypeScript: Install dependencies with `npm install` or your preferred package manager
3. For Python: Ensure Python 3.7+ is installed
4. Make your changes and test thoroughly before submitting

## License

MIT License - Copyright (c) 2025 Andrei Onel
