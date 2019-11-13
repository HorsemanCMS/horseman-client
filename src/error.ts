export interface HorsemanError {
  [key: string]: any;
  error?: {
    status: number;
    message: string;
    code?: number;
  };
}
//Transform Error into HorsemanError
export const ReturnError = (e: Error): HorsemanError => ({
  error: { message: e.message, status: 0 }
});
