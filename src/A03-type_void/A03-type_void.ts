// tipo void é quando métodos ou funções não retornam nada.

function withoutReturn(...args: string[]): void { // tipo void = return undefined
  console.log(args.join(' '));

  const pessoa = {
    nome: 'You',
    sobrenome: 'You2',
    exibirNome(): void {
      console.log(this.nome + this.sobrenome);
    }
  };
  withoutReturn('You', 'You2');
  pessoa.exibirNome();
}
