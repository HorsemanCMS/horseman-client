export interface HorsemanError {
  status: number;
  message: string;
  code?: number;
}

interface HorsemanErrorResponse {
  data: undefined;
  error: HorsemanError;
}

//Transform Error into HorsemanError
export const ReturnError = (e: Error): HorsemanErrorResponse => {
  console.error(e);
  return {
    data: undefined,
    error: {
      message: e.message,
      status: 0
    }
  };
};
