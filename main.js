/*let imprimeArray = ["uno", 2, null, 0]
function impArr(imprimeArray){
    imprimeArray.forEach(function(element){
           console.log(element)
    })
}

impArr(imprimeArray) */

/*Ejercicio Grupal */
//mex= variable que gaurda cantidad de mexicanos
//arg= variable que guarda cantidad de argentinos
//ven = v=ariable que guarda cantidad de venezolanos
//per = variable que guarda cantidad de peruanos
//nacionalidades = argumento que alverga los parametros del elemento  nacionalidad.
//nacionalidad = elemento de la función.


let nacionalidad = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano"];

function foundNacionalidad(nacionalidades){
    let mex=0
    let arg=0
    let ven=0
    let per=0
    
    nacionalidades.forEach((nacionalidad)=>{
        if(nacionalidad==="mexicano"){
            mex= mex+1
        }else if(nacionalidad==="argentino"){
            arg=arg+1
        }else if(nacionalidad==="venezolano"){
            ven=ven+1
        }else if(nacionalidad==="peruano"){
            per=per+1
        }
    })
    console.log(`mexicano ${mex}`)
    console.log(`argentino ${arg}`)
    console.log(`venezolano ${ven}`)
    console.log(`peruano ${per}`)
}

foundNacionalidad(nacionalidad)



//Ejercicio mejorado sin aplicar variables para cada país, sino un objeto literal.

const nationality = ['mexicano', 'argentino', 'argentino', 'venezolano', 'peruano', 'mexicano', 'argentino', 'peruano', 'venezolano'];

const counterNationality = {}; /* {} = de esta forma se establece un objeto literal, ya que no es un objeto numero. */

nationality.forEach(item => {
  if(counterNationality[item]) {
    counterNationality[item]++;
  } else {
    counterNationality[item] = 1;
  }
})

console.log(counterNationality);
 