# Twig Template Renderer

A simple Node.js CLI tool to render Twig templates to HTML for design testing.

## Features

- Render `.twig` templates with JSON context data
- Automatically output to `output/<template>.html`
- Auto-creates output directory if missing

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
├── context/            # JSON context files
│   └── example.json
└── output/             # Rendered HTML files
```

## Example Template (`templates/example.twig`)

```twig
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ subject }}</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: #f5f5f5; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .footer { background: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="header">
    <h1>{{ header_text }}</h1>
  </div>
  <div class="content">
    <p>Hello {{ user.name }},</p>
    <p>{{ body }}</p>
  </div>
  <div class="footer">
    <p>{{ footer_text }}</p>
  </div>
</body>
</html>
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
