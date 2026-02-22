# Utility Tools Collection

React hooks for markdown rendering and charts, plus a Python diagnostic tool for LightRAG.

## Components

**useMarkdown** - React hook for rendering markdown with LaTeX, Mermaid diagrams, syntax highlighting, and emojis

**useECharts** - React hook for ECharts integration with automatic theme support

**LightRAG Diagnostic** - Python tool to verify LightRAG initialization status

## Installation

### React Hooks

Install dependencies:

```bash
npm install echarts katex markdown-it markdown-it-texmath markdown-it-mermaid markdown-it-emoji dompurify highlight.js
```

Copy `file1.ts` and `file2.ts` to your project.

### Python Tool

Run directly with Python 3.7+:

```bash
python new.py --demo
```

## Usage

### useMarkdown

```typescript
import useMarkdown from './useMarkdown';

const { render } = useMarkdown();
const html = render('# Hello\n\nMath: $E = mc^2$');
```

### useECharts

```typescript
import useECharts from './useECharts';

const { initECharts, disposeECharts } = useECharts({ message });
initECharts('prefix', 'chart-id');
```

### LightRAG Diagnostic

```python
from new import check_lightrag_setup

await check_lightrag_setup(rag, verbose=True)
```

## License

MIT License - Copyright (c) 2025 Andrei Onel
