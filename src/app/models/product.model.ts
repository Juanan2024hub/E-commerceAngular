
import { BasicProduct } from './basic-product.model';
import { ProductProperties } from './product-properties.model';

export type ShoeSize = {
  eu: number;
  us: number;
};

export type BikeSize = {
  frameSize: string;
  wheelSize: number;
};

export type ClothingSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export type Product =
  | {
      category: 'shoes';
      basic: BasicProduct;
      properties: ProductProperties;
      size: ShoeSize;
    }
  | {
      category: 'bike';
      basic: BasicProduct;
      properties: ProductProperties;
      size: BikeSize;
    }
  | {
      category: 'clothing';
      basic: BasicProduct;
      properties: ProductProperties;
      size: ClothingSize;
    };
