import {$, imprimirArr} from "./dom.js";

const list = $("#list");

const frutas = ["Pera", "Manzana", "Melocoton", "Frambuesa", "Mango", "Sandia"];

imprimirArr(frutas, list, "li");

