# Best Practices

Follow these guidelines to write maintainable and efficient SSAL scripts.

## Script Organization

### 1. Use Clear Task Names

```ssal
# Good
task buildRelease:
    run "gcc -O3 main.c"

# Avoid
task b:
    run "gcc -O3 main.c"
```

### 2. Group Related Tasks

```ssal
# Build tasks
task build:
    run "gcc main.c"

task buildDebug:
    run "gcc -g main.c"

task buildRelease:
    run "gcc -O3 main.c"

# Test tasks
task test:
    run "./runtests"

task testUnit:
    run "./runtests unit"
```

## Variable Usage

### 1. Define Constants at the Top

```ssal
var VERSION = "1.0.0"
var COMPILER = "gcc"
var FLAGS = "-Wall -Werror"
var OUTPUT = "app"

task build:
    run "$COMPILER $FLAGS main.c -o $OUTPUT"
```

### 2. Use Descriptive Variable Names

```ssal
# Good
var BUILD_DIR = "build"
var SOURCE_FILES = "src/*.c"

# Avoid
var dir = "build"
var src = "src/*.c"
```

## Task Design

### 1. Single Responsibility

Each task should do one thing well:

```ssal
# Good
task compile:
    run "gcc -c main.c"

task link:
    run "gcc main.o -o app"

task build: compile link

# Avoid
task build:
    run "gcc -c main.c"
    run "gcc main.o -o app"
    run "./runtests"
    run "./deploy"
```

### 2. Use Task Dependencies

Instead of duplicating commands, use task dependencies:

```ssal
task deploy:
    run "gcc -c main.c"

task test:
    tsk build
    run "./runtests"
```

## Error Handling

### 1. Add Status Messages

```ssal
task build:
    ech "Starting build process..."
    run "$COMPILER main.c -o $OUTPUT"
    ech "Build completed successfully"
```

### 2. Validate Inputs

```ssal
task build:
    ech "Checking prerequisites..."
    run "command -v $COMPILER"
    ech "Building project..."
    run "$COMPILER main.c"
```

## Documentation

### 1. Comment Complex Tasks

```ssal
# Builds the project with optimization and creates a distribution package
# Requires: gcc, zip
# Output: dist/app-{VERSION}.zip
task buildDist:
    run "$COMPILER -O3 main.c -o $OUTPUT"
    run "zip dist/app-$VERSION.zip $OUTPUT"
```

### 2. Document Dependencies

```ssal
# Required environment variables:
# - API_KEY: The deployment API key
# - ENV: Target environment (dev/prod)
task deploy:
    run "./deploy.sh $API_KEY $ENV"
```
