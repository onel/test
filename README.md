# Utility Tools Collection

React hooks and Python tools for markdown rendering, charts, and LightRAG diagnostics.

## Installation

### React Hooks

Install dependencies:

```bash
npm install echarts katex markdown-it markdown-it-texmath markdown-it-mermaid markdown-it-emoji dompurify highlight.js
```

Copy `file1.ts` and `file2.ts` into your project.

### Python Tool

Run directly with Python 3.7+:

```bash
python new.py --demo
```

## Usage

### Markdown with LaTeX and Mermaid

```typescript
import useMarkdown from './file2';

const { render } = useMarkdown();
const html = render('# Title\n\nMath: $E = mc^2$');
```

### ECharts Integration

```typescript
import useECharts from './file1';

const { initECharts, disposeECharts } = useECharts({ message });
initECharts('prefix', 'chart-id');
```

### LightRAG Diagnostic

```python
from new import check_lightrag_setup

await check_lightrag_setup(rag, verbose=True)
```

## Contributing

1. Clone the repository
2. Install dependencies (TypeScript: `npm install`, Python: Python 3.7+)
3. Make changes and test
4. Submit a pull request

## License

MIT License - Copyright (c) 2025 Andrei Onel
