declare module 'vue-recaptcha-v3' {
  export function useReCaptcha(): {
    executeRecaptcha: (action: string) => Promise<string>;
  };

  export const VueReCaptcha: any;
}
