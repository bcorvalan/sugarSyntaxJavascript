//Dynamic Property Objects (Propiedades dinamicas)
/*
Nos permite crear propiedades de manera dinamica en un objeto
*/
const reactStudent = {
    curso: "React",
    camada: 2430,
    horario: "20.30"
  };
  
  console.log(reactStudent);
  
  const students = ["Camila", "Florencia", "Nacho"];
  students.forEach((index, student) => (reactStudent[`id_${index}`] = student));
  
  //console.log(reactStudent);
  
  //Tener en cuenta que se pueden asignar valores dinamicos dentro de la creaciòn del mismo objeto
  let aleatorio = Math.round(Math.random());
  const javaScriptStudent = {
    curso: "JavaScript",
    camada: 2430,
    horario: "20.30",
    [`id_${aleatorio}`]: "Valor random"
  };
  
  console.log(javaScriptStudent);
  