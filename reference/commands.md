# Command Reference

SSAL provides several built-in commands for common operations. This page documents all available commands and their usage.

## run

Executes a shell command.

### Syntax

```ssal
run "command"
```

### Examples

```ssal
run "gcc main.c -o app"
run "npm install"
run "python script.py"
```

## ech

Prints text to the console.

### Syntax

```ssal
ech "message"
```

### Examples

```ssal
ech "Starting build process..."
ech "Build completed successfully"
ech "Version: $VERSION"
```

## delete

Deletes files or directories.

### Syntax

```ssal
delete "path"
```

### Examples

```ssal
delete "build/"
delete "main.exe"
delete "*.tmp"
```

## Command Chaining

Commands in a task are executed sequentially:

```ssal
task build:
    ech "Starting build..."
    run "gcc main.c -o app"
    ech "Build complete!"
```

## Error Handling

By default, if any command fails:

- Execution stops
- Non-zero exit code is returned
- Error message is displayed
