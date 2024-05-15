export interface IProductsConfig {
    chip: string;
    SSD: string;
    memory: string;
    display: string;
  }

export interface IProducts {
  id: string;
  title: string;
  price: number;
  image?: string;
  year: number;
  configure: IProductsConfig;
}

