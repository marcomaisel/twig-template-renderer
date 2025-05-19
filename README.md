# Twig Template Renderer

A simple Node.js CLI tool to render Twig templates to HTML for design testing.

## Features

- Render `.twig` templates with JSON context data
- Automatically output to `output/<template>.html`
- Supports Twig namespaces like `@components`

## Prerequisites

- Node.js v14 or higher
- npm

## Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/twig-template-renderer.git
cd twig-template-renderer

# Install dependencies
npm install
```

## Usage

```bash
# Render a template named 'example' with context 'example'
node index.js --template example --context example

# Output will be written to:
# output/example.html
```

## Project Structure

```
twig-template-renderer/
├── README.md           # This file
├── package.json        # Project metadata & dependencies
├── index.js            # CLI entry point
├── templates/          # Twig templates
│   └── example.twig
├── components/         # Shared Twig components (used with @components)
│   ├── base.twig
│   └── salutation.twig
├── context/            # JSON context files
│   └── example.json
└── output/             # Rendered HTML files
```

## Example Template with Namespace Support (`templates/example.twig`)

You can use Twig namespace syntax in templates:

```twig
{% extends '@components/base.twig' %}
{% block content %}
  {% include '@components/salutation.twig' %}
{% endblock %}
```

## Example Context (`context/example.json`)

```json
{
  "subject": "Welcome to Our Service!",
  "header_text": "Thanks for Signing Up",
  "user": { "name": "John Doe" },
  "body": "We're excited to have you on board. To get started, please verify your email address.",
  "footer_text": "© 2025 My Company"
}
```

## License

MIT
