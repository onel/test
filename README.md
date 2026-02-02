# Utility Tools Collection

A collection of utility tools for LightRAG diagnostics and React UI components.

## Components

### LightRAG Diagnostic Tool (`new.py`)

Python tool for checking LightRAG initialization status. Verifies that storage components and pipeline status are properly initialized before use.

**Usage:**
```bash
python new.py --demo
```

Or import and use programmatically:
```python
from new import check_lightrag_setup
await check_lightrag_setup(rag_instance, verbose=True)
```

### ECharts React Hook (`file1.ts`)

React hook for integrating ECharts with automatic theme support and resize handling.

**Usage:**
```typescript
import useECharts from './file1';

const { initECharts, disposeECharts } = useECharts({ message });
```

### Markdown Renderer Hook (`file2.ts`)

React hook for rendering Markdown with support for:
- LaTeX math expressions (KaTeX)
- Mermaid diagrams
- Syntax highlighting (highlight.js)
- ECharts integration
- Emoji support

**Usage:**
```typescript
import useMarkdown from './file2';

const { render } = useMarkdown();
const html = render(markdownString);
```

## License

MIT License - Copyright (c) 2025 Andrei Onel