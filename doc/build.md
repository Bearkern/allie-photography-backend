# 建置流程

## 0. 新增基本檔案

- `.gitignore`
- `README.md`

## 1. 用 express generator 建立基本檔案

```
npx express-generator
```

## 2. Typescript

1. 新增資料夾 `src` 與 `src/routes`
2. 新增 `.ts` files
3. 新增 `tsconfig.json`，重點設定為：
   - `"include": ["./src"]`
   - `"outDir": "./dist"`

## 3. 修改 `www`

- 將 `app.js` 的路徑做修正，改成 typescript 編譯完的檔案路徑
  ```js
  const app = require('../dist/app');
  ```

## 4. MongoDB & dotenv

- 安裝 Mongoose 與 dotenv 套件
  ```
  npm install mongoose dotenv
  ```
- 新增 `src/connections` 資料夾，以及 `src/connections/index.ts`
  > 由於 typescript 不認識 `process.env`，因此需要額外去設定，[查到的做法](https://stackoverflow.com/questions/45194598/using-process-env-in-typescript)大致有兩種：
  >
  > - 在 `.d.ts` 檔設定 global 的 interface (在此專案為 `environment.d.ts`)
  > - 在 `process.env` 程式碼之前添加
  >   ```
  >   declare var process : {
  >     env: {
  >       DATABASE_PASSWORD: string
  >     }
  >   }
  >   ```
- 新增 `.env` 與 `example.env`，並把 `.env` 加入 `.gitignore`
- 在 `app.ts` 引入 `connections/index.ts`
  ```js
  import './connections';
  ```

## 5. 調整架構

- 在 `src/model` 資料夾加入 MongoDB 的 Model
  > 在此先用教學範例 `post.ts`
- 在 `src/controllers` 和 `src/routes` 資料夾新增管理 `Post` Model 的檔案
- 在 `src/service` 新增成功處理與錯誤處理 (`handleSuccess.ts`、`handleError.ts`)
- 在 `app.ts` 引入上述新增的 `posts` 路由

## 6. 其它

### 套件

- 引入 JSON 檔需先引入 fs 套件 (Node.js 內建)

  ```js
  import fs from 'fs';

  // example
  JSON.parse(fs.readFileSync('./src/db/data/filename.json', 'utf-8'));
  ```
