export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "staging";
      MONGODB_CONNECT_STRING: string;
      JWT_SECRET: string;
    }
  }
}
