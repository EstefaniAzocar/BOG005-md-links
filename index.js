// const {
//   getMdFiles,
//   getObjetsLinks,
//   convertPath,
// } = require("./functions.js");

import { convertPath, getMdFiles, getObjetsLinks } from "./funciones.js";


const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    //Función que convierte ruta en absoluta
    const convertedRoute = convertPath(path)
    //Función que evalua si la ruta es un archivo .md
    const arrFiles = getMdFiles(convertedRoute)
    //Función que lee el archivo y valida opciones
    getObjetsLinks(arrFiles)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};

mdLinks('archivo2.md')

// module.exports = {
//   mdLinks,
// };
export {
  mdLinks,
}