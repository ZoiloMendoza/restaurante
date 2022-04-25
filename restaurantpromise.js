//pedir orden de comida
//el mesero captura nuestra orden
//el mesero pasa la orden a la cocina
//los chef preparan las ordenes
//el mesero entrega 

//aqui vamos de nuevo
const CocinandoHuevosRancheros =  () => {
    const ingrediente = "Huevos";

const abrir = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ingrediente == "Huevos") {
              const resultado = `${ingrediente} abiertos`;
              console.log(resultado);
              resolve(resultado);
            }else {
              reject("Ingrediente inválido");
            }
        }, 1000);
    });
};

const freir = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ingrediente == "Huevos abiertos") {
              const resultado = `Huevos fritos`;
              console.log(resultado);
              resolve(resultado);
            }else {
              reject("No se puede freir");
            }
        }, 1000);
    });
};

const salsa = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ingrediente == "Huevos fritos") {
              const resultado = `Huevos rancheros`; 
              console.log(resultado);
              resolve(resultado);
            }else {
              reject("Ingrediente inválido");
            }
        }, 1000); 
    });
};

    abrir(ingrediente)
     .then(freir)
     .then(salsa)
     .then((resultado) => {
         return `${resultado} Servidos`;
     })
     .catch((err) => {
         console.log(err);
     }).finally(() => {
         console.log("El proceso ha finalizado");
     });
};

const CocinandoMolletes = () => {

}

const CocinandoChilaquiles = () => {


//chilaquiles
  //se coloca la tortilla a freir
  //se coloca la salsa
  //servir
}



const imprimirOrden = () => {
    const orden1 = CocinandoHuevosRancheros();
    const orden2 = CocinandoMolletes();
    const orden3 = CocinandoChilaquiles();
}

console.log("Orden 1", orden1);