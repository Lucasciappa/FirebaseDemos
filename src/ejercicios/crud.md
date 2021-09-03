# Referencia al documento


const usuario = {
    nombre: "Susana",
    activo: false,
    fechaNac: 0,
    salario: 1750
}

const usuariosRef = db.collection("usuarios");

 // INSERT INTO usuarios....

 usuariosRef
     .add(usuario)
     .then( docRef => {
         console.log( docRef );
        
     })
     .catch( err => console.log('error', err))



 // UPDATE USUARIOS

 usuariosRef
     .doc("0SxMPIW5bAIvgvFuQPSi")
     .update({
         activo:false
     });



 // Destructivo

 usuariosRef
     .doc("0SxMPIW5bAIvgvFuQPSi")
     .set({
         activo: false,
         edad: 40,
         casado: true
     });



// DELETE FROM USUARIOS where id = xxxx

usuariosRef
    .doc("0SxMPIW5bAIvgvFuQPSi")
    .delete()
    .then( () => console.log("Borrado"))
    .catch( err => console.log("error", err));



// SELECT * FROM USUARIOS

usuariosRef
    .onSnapshot( snap => {
       retornaDocumentos(snap)
    })
usuariosRef
    .onSnapshot( retornaDocumentos )



// SIN OBSERVADOR 
usuariosRef
    .get().then(snap => retornaDocumentos(snap) );


/*
Select * from ususario where activo = true
*/
usuariosRef
    .where("activo", "==", true)
    .get().then(snap => retornaDocumentos(snap) );


usuariosRef
    .where("salario", "<=", 1500)
    .get().then(snap => retornaDocumentos(snap) );

usuariosRef
    .where("salario", ">=", 1500)
    .where("salario", "<", 2500)
    .get().then(snap => retornaDocumentos(snap) );


usuariosRef
    .where("salario", ">=", 1500)
    .where("activo", "==", true)
    .get().then(snap => retornaDocumentos(snap) );
