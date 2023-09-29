export interface IResponse<T> {
  success: boolean;
  result: number;
  data: T;
  message?: string;
}
