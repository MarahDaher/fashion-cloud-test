export interface IAPIFeatures {
  query: any;
  queryString: any;
  filter(): this;
  sort(defultValue?: string): this;
  paginate(): this;
  getQuery(): any;
}
