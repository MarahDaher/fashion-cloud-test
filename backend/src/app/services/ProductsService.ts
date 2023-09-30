import ProductRepository from "../repositres/ProductsRepository";

class ProductService {
  //typeof ProductRepository is used as the type of the repository property.
  //This tells TypeScript that repository is an instance of the ProductRepository
  private repository: typeof ProductRepository;

  constructor(repository: typeof ProductRepository) {
    this.repository = repository;
  }

  async getAllProducts(queryString: any) {
    return this.repository.getAll(queryString);
  }
}

export default new ProductService(ProductRepository);
