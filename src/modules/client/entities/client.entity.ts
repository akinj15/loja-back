export interface ClientInn {
  codigo: string;
  classe: string;
  sublocalidade: string;
  numero: string;
  complemento: string;
  tipologradouro: string;
  pais: string;
  fone: string;
  chave: number;
  nome: string;
  uf: string;
  logradouro: string;
  localidade: string;
  cgccpf: string;
  cep: string;
}

export interface Client {
  id: string;
  name: string;
  code: string;
  class: string;
  neighborhood: string;
  complement: string;
  country: string;
  number: string;
  fone: string;
  state: string;
  city: string;
  street: string;
  cgccpf: string;
  cep: string;
  key: number;
}
