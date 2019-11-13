export type HorsemanError = {
  status: number;
  message: string;
  code?: number;
}

export type HorsemanErrorResponse = {
  error: HorsemanError;
}

//Transform Error into HorsemanError
export const ReturnError = (e: Error): HorsemanErrorResponse => {
  console.error(e);
  return {
    error: {
      message: e.message,
      status: 0
    }
  };
};
