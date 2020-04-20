export interface IProduct {
  readonly id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}
