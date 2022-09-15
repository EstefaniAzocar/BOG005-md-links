#!/usr/bin/env node

// const mdLinks = require('./index.js')
// const argv = process.argv;
// var clc = require('cli-color');
// const {
//     totalAndUnique,
//     broken,
// } = require("./functions.js");

import { broken, totalAndUnique } from "./funciones.js";
import { mdLinks } from "./index.js";
const argv = process.argv;
import clc from "cli-color";

// const argv = [
//     'algo',
//     'otro algo',
//     'archivo2.md',
//     '--validate'
// ]

//Opciones API
const readOptions = () => {
    let options = { validate: false };
    if (argv.length > 3) {
        console.log(argv, argv.length)
        if (argv.includes('--validate') || argv.includes('--v')) {
            options.validate = true

        } else {
            options = {};
        }
    }
    //md-linkconsole.log(option)
    return options
}



//Opciones CLI
mdLinks(argv[2], readOptions())
    .then((res) => {
        if (argv.includes('--stats') || argv.includes('--s')) {
            totalAndUnique(res);
            if ((argv.includes('--validate') || argv.includes('--v'))) {
                broken(res);
            }
        } else if (argv.includes('--validate') || argv.includes('--v')) {
            res.forEach(arr => {
                arr.forEach(e => {
                    console.log(clc.green(`\n${e.file} \n${e.href} \n${e.message} \n${clc.yellow (e.status)} \n${e.text}`));
                })
            })
        } else {
            res.forEach(arr => {
                arr.forEach(e => {
                    console.log(clc.green<<(`\n${e.file} \n${e.href} \n${e.text}`));
                })
            })
        }
    })
    .catch((error) => {
        console.log(clc.red('Ruta no valida', error));
    });