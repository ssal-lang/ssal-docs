# Troubleshooting

This guide helps you diagnose and fix common issues when working with SSAL.

## Common Issues

### Command Not Found

**Problem:**

```ssal
Error: Command 'ssal' not found
```

**Solutions:**

1. Verify installation:

```sh
npm list -g ssal
```

2. Check PATH:

```sh
echo $PATH
```

3. Reinstall:

```sh
npm uninstall -g ssal
npm install -g ssal
```

### Task Execution Failures

**Problem:**
Task fails without clear error message

**Solutions:**

1. Add debug output:

```ssal
task build:
    ech "Starting build..."
    ech "Using compiler: $COMPILER"
    run "$COMPILER main.c"
```

2. Check variable values:

```ssal
task debug:
    ech "COMPILER=$COMPILER"
    ech "FLAGS=$FLAGS"
    ech "OUTPUT=$OUTPUT"
```

### Cross-Platform Issues

**Problem:**
Script works on one OS but fails on another

**Solutions:**

1. Use platform-agnostic paths:

```ssal
# Good
var OUTPUT = "build/app"

# Avoid
var OUTPUT = "build\\app"
```
