# Syntax Reference

This page details the complete syntax specification for SSAL.

## Comments

Single-line comments start with `#`:

```ssal
# This is a comment
task build:  # This is also a comment
    run "gcc main.c"
```

## Variables

### Declaration

Variables are declared using the `var` keyword:

```ssal
var NAME = "value"
var VERSION = "1.0.0"
var COMPILER = "gcc"
```

### Usage

Reference variables using `$`:

```ssal
task build:
    run "$COMPILER main.c -o $OUTPUT"
```

## Tasks

Tasks are the primary unit of work in SSAL:

```ssal
task taskname:
    command1
    command2
    command3
```

### Task Dependencies

Tasks can depend on other tasks:

```ssal
task test: build
    run "./runtests"
```

## Commands

### Built-in Commands

1. `run`: Execute shell commands

```ssal
run "npm install"
```

2. `ech`: Print to console

```ssal
ech "Building project..."
```

3. `delete`: Remove files

```ssal
delete "build/"
```

4. `tsk`: Invoke another task

```ssal
tsk "task_name"
```

## Best Practices

1. Use descriptive task names
2. Comment complex operations
3. Keep tasks focused and single-purpose
4. Use variables for reusable values
