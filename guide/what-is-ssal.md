# What is SSAL?

SSAL (pronounced "sal" like the Portuguese word for salt) is a lightweight, cross-platform automation language designed to simplify project tasks such as building, running, and cleaning up files. It serves as an easy alternative to batch files, shell scripts, and Makefiles.

## Why SSAL?

When working on projects, developers often need to automate repetitive tasks like:
- Building source code
- Running tests
- Cleaning build artifacts
- Deploying applications

While there are many existing solutions (Make, npm scripts, shell scripts), SSAL provides a simpler, more consistent approach that works across all platforms.

## Key Benefits

### 1. Simple Syntax
SSAL uses a straightforward, easy-to-read syntax that anyone can understand:

```ssal
task build:
    run "gcc main.c -o app"
```

### 2. Cross-Platform
Write once, run anywhere. SSAL scripts work the same way on Windows, macOS, and Linux.

### 3. Language Agnostic
Use SSAL with any programming language or project type:
- C/C++ compilation
- Python script execution
- Node.js development
- And more!

### 4. Lightweight
SSAL is small, fast, and has zero external dependencies.