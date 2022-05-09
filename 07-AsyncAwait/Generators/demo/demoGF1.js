/* function* generatorShowInstructors() {
  console.log("Iniciando generator function");
  yield "Franco";
  yield "Toni"
  console.log("Generator function terminada");
}

var generatorObject = generatorShowInstructors();
console.log(generatorObject);
console.log(generatorObject.next());

console.log(generatorObject.next());
console.log(generatorObject.next()); */

/* function* generatorShowInstructorsWithParameter() {
  console.log("Iniciando generator function with parameter");
  console.log(1, yield);
  console.log(2, yield);
}

var generatorObjectParameter = generatorShowInstructorsWithParameter();

generatorObjectParameter.next();
generatorObjectParameter.next('Franco');
generatorObjectParameter.next('Toni');
 */

function* generationNumber(){
  let i=0;
  let flag = true;
  while(flag){
    i++;
    yield i;
  }
}
let nextNumber = generationNumber();
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);
console.log(nextNumber.next().value);


/* function inifinito(){
  let i=0;
  while(true){
    i++;
    console.log(i);
  }
}
inifinito(); */