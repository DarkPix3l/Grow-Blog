declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPACE_ID: string;
      ACCESS_TOKEN: string;
    }
  }
}

export {};