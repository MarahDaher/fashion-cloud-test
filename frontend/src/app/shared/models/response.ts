export interface IResponse<T> {
  success: string;
  result: number;
  data: T;
  message?: string;
}
