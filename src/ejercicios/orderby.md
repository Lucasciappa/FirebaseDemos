import { retornaDocumentos } from './helpers/mostrar-documentos';
// select * from usuarios order by nombre asc, salario asc

const usuariosRef = db.collection("usuarios");

usuariosRef
    .orderBy("nombre", "desc")
    .orderBy("salario")
    .get().then(retornaDocumentos)