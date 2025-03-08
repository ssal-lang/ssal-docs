# Getting Started with SSAL

This guide will help you create your first SSAL script and understand the basics of task automation.

## Quick Start

1. Install SSAL globally:
```sh
npm install -g ssal
```

2. Create a new file named `tasks.ssal` in your project:
```ssal
# My first SSAL script
task hello:
    ech "Hello, SSAL!"
```

3. Run your task:
```sh
ssal hello
```

## Basic Example

Here's a more practical example for a C++ project:

```ssal
# Define variables
var COMPILER = "g++"
var SOURCE = "main.cpp"
var OUTPUT = "app"

# Build task
task build:
    run "$COMPILER $SOURCE -o $OUTPUT"

# Run task
task run:
    run "./$OUTPUT"

# Clean task
task clean:
    delete "$OUTPUT"
```