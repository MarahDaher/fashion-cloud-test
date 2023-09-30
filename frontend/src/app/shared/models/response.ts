export interface IResponse<T> {
  status: string;
  result?: number;
  data: T;
  message?: string;
}
