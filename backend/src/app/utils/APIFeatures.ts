class APIFeatures {
  private query: any;
  private queryString: any;

  constructor(query: any, queryString: any) {
    this.query = query;
    this.queryString = queryString;
  }

  // Implement filtering logic
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "per_page", "sort"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    return this;
  }

  // Implement sorting logic
  sort(defultValue?: string) {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query.sort(sortBy);
    } else {
      this.query = this.query.sort(defultValue);
    }
    return this;
  }

  // Implement pagination logic
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const per_page = this.queryString.per_page * 1 || 1;
    const skip = (page - 1) * per_page;

    this.query = this.query.skip(skip).limit(per_page);

    return this;
  }

  // Add a getter method to access the 'query' property
  getQuery() {
    return this.query;
  }
}

export default APIFeatures;
