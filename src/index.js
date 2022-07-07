export function testFn(chaine) {
  // Déclarez en dessous :

  chaine = chaine[0].toUpperCase() + chaine.slice(1).toLowerCase();

  // Ne touchez pas au return :
  return chaine;
}

console.log(testFn("chat"));
