export interface ProductInn {
  codigo: string;
  ean: string;
  classe: string;
  chave: number;
  preco: number;
  estoque: number;
  imgUrl: string;
  nome: string;
  marca: string;
  ncm: string;
}

export interface Product {
  id: string;
  name: string;
  key: number;
  code: string;
  image: string;
  stock: number;
  price: number;
  class: string;
  brand: string;
  ncm: string;
  ean: string;
}
