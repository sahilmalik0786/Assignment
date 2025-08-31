declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    MONGODB_URI: string;
    JWT_SECRET: string;
    EMAIL_PASS:string;
    EMAIL_USER:string;
    NODE_ENV:string;
    FRONTEND_URL:string;
  }
}
