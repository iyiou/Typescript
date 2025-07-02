export class Empresa {
  readonly nome: string; // Não é necessário utilizar public
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionarColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) { }
}


const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('You', 'Uoy');
const colaborador2 = new Colaborador('Me', 'Em');
const colaborador3 = new Colaborador('Then', 'Neht');
empresa1.adicionarColaboradores(colaborador1);
empresa1.adicionarColaboradores(colaborador2);
empresa1.adicionarColaboradores(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
