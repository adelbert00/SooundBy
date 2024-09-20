declare module '@emailjs/browser' {
  export function init(userID: string): void;
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: { [key: string]: any },
    userID: string
  ): Promise<any>;
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    userID: string
  ): Promise<any>;
}
