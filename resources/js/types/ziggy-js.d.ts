declare module 'ziggy-js' {
  interface Ziggy {
    namedRoutes: {
      [key: string]: string;
    };
    parameters: {
      [key: string]: any;
    };
    baseUrl: string;
  }

  export default function route(
    name: keyof Ziggy['namedRoutes'],
    params?: Ziggy['parameters'][keyof Ziggy['parameters']],
    absolute?: boolean,
    config?: any
  ): string;
}
