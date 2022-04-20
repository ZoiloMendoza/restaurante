//pedir orden de comida
//el mesero captura nuestra orden
//el mesero pasa la orden a la cocina
//los chef preparan las ordenes
//el mesero entrega 

//aqui vamos de nuevo
const open = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${ingrediente} abierto`);
            resolve(ingrediente);
        }, 1000);
    });
}

const freir = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${ingrediente} frito`);
            resolve(ingrediente);
        }, 1000);
    });
};

const placeSauce = (ingrediente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${ingrediente} bañado`);
            resolve(ingrediente);
        }, 1000); 
    });
}

const cowboysEggs = () => {
    const ingrediente = "Huevo"

    open(ingrediente).then(freir).then(placeSauce).then((resultado) => {
        setTimeout(() => {
         console.log(`${resultado} servidos`);
        }, 1000);
    });

    // open(ingrediente,  () => {
    //     freir(ingrediente, () => {
    //         placeSauce(ingrediente, () => {
    //             console.log("Huevos servidos"); //en este caso es un console.log
    //         });
    //     });
    // });

//     setTimeout(() => {
//     //abrir los huevos
//     console.log("Huevos abiertos");
//     }, 1000);
    
//     setTimeout(() => {
//         //freirlos
//     console.log("Huevos fritos");
//     }, 3000);

//     setTimeout(() => {
//         //colocar salsa ranchera
//     console.log("Huevos bañados");
//     }, 1000);

//     return "Huevos rancheros";
//   //servir
}

const order1 = cowboysEggs();
//console.log(order1);


const cookMolletations = () => {

//molletes
  //partir el pan
  //colocar frijoles
  //colocar queso
  //hornear
  //servir
}

const cookChilaquiles = () => {


//chilaquiles
  //se coloca la tortilla a freir
  //se coloca la salsa
  //servir
}
