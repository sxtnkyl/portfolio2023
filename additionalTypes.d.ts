declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTACT_FORM_ENDPOINT: string;
      NEXT_PUBLIC_CONTACT_FORM_API_KEY: string;
    }
  }
}

export {};
