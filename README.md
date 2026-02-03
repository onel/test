# Utility Tools Collection

A collection of utility tools including a LightRAG diagnostic tool and React hooks for markdown rendering and chart integration.

## What's Included

- **LightRAG Diagnostic Tool** - Python utility to verify LightRAG initialization status
- **Markdown Renderer Hook** - React hook for rendering markdown with LaTeX, Mermaid diagrams, and syntax highlighting
- **ECharts Hook** - React hook for integrating ECharts with theme support

## Installation

### Python Tool

```bash
python new.py --demo
```

### React Hooks

```typescript
import useECharts from './file1';
import useMarkdown from './file2';
```

## Usage

### LightRAG Diagnostic

```python
from new import check_lightrag_setup

# Check your LightRAG instance
await check_lightrag_setup(rag_instance, verbose=True)
```

### Markdown Renderer

```typescript
const { render } = useMarkdown();
const html = render(markdownString);
```

### ECharts Integration

```typescript
const { initECharts, disposeECharts } = useECharts({ message });
```

## Contributing

Contributions are welcome. To set up for development:

1. Clone the repository
2. For Python: Ensure Python 3.7+ is installed
3. For TypeScript: Install dependencies with your package manager
4. Make your changes and test thoroughly

## License

MIT License - Copyright (c) 2025 Andrei Onel
