# ai-app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


## Create folder 
``` packages/client | packages/server ```

## 1. In server => bun init => choose
 ``` blank ```

## 2. In server =>       
``` bun add express```  ```bun add -d @types/express```

### => i. In server => package.json =>   

```bash 
"scripts": 
    "start": "bun run index.ts", // run server builtin
    "dev": "bun --watch run index.ts" // watch mode like nodemon
  ```
## 3. In server =>       