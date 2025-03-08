# Installation

SSAL can be installed either globally or as a project dependency. Choose the method that best suits your needs.

## Global Installation

Installing SSAL globally makes it available system-wide:

```sh
npm install -g ssal
```

Verify the installation:
```sh
ssal --version
```

## Project Installation

For project-specific usage, install SSAL as a development dependency:

```sh
npm install --save-dev ssal
```

Add SSAL scripts to your `package.json`:
```json
{
  "scripts": {
    "build": "ssal build",
    "test": "ssal test"
  }
}
```

## Requirements

- Node.js 14.0.0 or higher
- npm 6.0.0 or higher

## Platform Support

SSAL works on:
- Windows
- macOS
- Linux

No additional configuration is needed for cross-platform compatibility.