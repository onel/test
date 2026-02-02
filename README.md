# Utility Tools Collection

A collection of utility tools for LightRAG diagnostics and React UI components.

## Components

### LightRAG Diagnostic Tool (`new.py`)
Python tool to verify LightRAG initialization status and prevent common setup errors.

### ECharts React Hook (`file1.ts`)
React hook for integrating ECharts with theme support and automatic cleanup.

### Markdown Renderer Hook (`file2.ts`)
React hook for rendering Markdown with LaTeX (KaTeX), Mermaid diagrams, syntax highlighting, and ECharts plugin support.

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

### ECharts Hook
```typescript
const { initECharts, disposeECharts } = useECharts({ message });
```

### Markdown Hook
```typescript
const { render } = useMarkdown();
const html = render(markdownString);
```

## License

MIT License - Copyright (c) 2025 Andrei Onel