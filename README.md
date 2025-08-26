# AI-App

To install dependencies:

```bash
bun install
```

To run:

```bash
"scripts":
    "start": "bun run index.ts", // run server builtin
    "dev": "bun --watch run index.ts" // watch mode like nodemon
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## Create folder

`packages/client | packages/server`

## 1. In server => bun init => choose

`blank`

## 2. In server =>

` bun add express` `bun add -d @types/express`

### => i. In server => package.json =>

```bash
"scripts":
    "start": "bun run index.ts", // run server builtin
    "dev": "bun --watch run index.ts" // watch mode like nodemon
```

## 3. In server =>

# Client or UI

## 1. packages/client

`bun add vite .`

## 2. vite.config.js => add api path/url

```bash
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': 'http://localhost:2000'
    }
  }
})

```

# RUN BOTH SERVER CONCURRENTLY (CLIENT/SERVER)

## 1. In main app outside package root path

### 1. Install it

`bun add -d concurrently`

### 2. Write concurrently code in index.ts main file

### 3. In main Package.json

```bash
"scripts": {
    "dev": "bun run index.ts",
    "format" "prettier --write ." }  // wnen .prettierrc code added in main project
```

# Install schdcn ui in vite

## 1. tsconfig.json of client

```bash
 "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

## 1. tsconfig.json of client

```bash
 "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

## 2. tsconfig.app.json of client

```bash
"baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
```

## 3. vite.config.ts of client

`bun add -D @types/node`
`import path from "path"`
`import tailwindcss from "@tailwindcss/vite"`

```bash
plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
```

## 4. Run in CLI

`bunx --bun shadcn@latest init`

# Add .prettierrc file

```bash
bun add -d prettier
```

## 1. make file .prettierignore file => Add below

node_modules
bun.lock

## 2. Run formatter in package.json file name
``` 
bun run format
```


# Husky => Automate github flow
## 1. Install first in root directory
``` bun add --dev husky ```

## 2. Intialize husky
``` bunx husky init ```
``` bun add -d lint-staged ```

### 1. In .husky folder => pre-commit filename
``` bun run format ```

# Automating Pre-commit Checks With Husky

## 1. Install lint-staged
``` bun add -d lint-staged ```

## 2. Add file => .lintstagedrc
```
{
    "*.{js,jsx,ts,tsx,css}":"prettier --write"
}
```
## 3. To verify it
``` git log --oneline ```

