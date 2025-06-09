//Evite utilizar any! sempre que possivel passa a tipagem para o programa

function showMessage(msg: any) { // modo explicito
  return msg;
}

console.log(showMessage(([1,2,3])));
console.log(showMessage(1));
console.log(showMessage(("Olá")));

