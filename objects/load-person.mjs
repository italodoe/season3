import {readFileSync } from "fs";

const buf = readFileSync("person.json");
const json = buf.toString();
const person = JSON.parse(json);
console.log(person);

const jsonConverted = JSON.stringify(person);
console.log(jsonConverted);