const objetoA: {
  readonly chaveA: 'Valor A', // readonly -> Valor Imutável
  chaveB?: 'Valor B', // Atribuição opcional
  [key: string]: unknown; // Index Signature
} = {
  chaveA: 'Valor A', // can't be altered
  chaveB: 'Valor B',
};
