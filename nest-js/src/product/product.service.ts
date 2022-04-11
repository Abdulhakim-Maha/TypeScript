import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: 'mango', id: 1, price: 250 },
    { name: 'apple', id: 2, price: 200 },
    { name: 'banana', id: 3, price: 230 },
  ];

  findAll(): ProductDTO[] {
    return this.products;
  }
  findById(id: number) {
    return this.products.find((pd) => pd.id === id);
  }
  findCondition(predecate: (product: ProductDTO) => boolean) {
    return this.products.filter((pd) => predecate(pd));
  }
}
