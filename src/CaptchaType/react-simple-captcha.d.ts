declare module "react-simple-captcha" {
    export function loadCaptchaEnginge(
      length: number,
      textColor?: string,
      backgroundColor?: string,
      characterType?: string
    ): void;
  
    export function LoadCanvasTemplate(): JSX.Element;
  
    export function validateCaptcha(userInput: string): boolean;
  }
  