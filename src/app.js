/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["Un", "El"];
  let subject = ["perro", "gato", "cocodrilo", "canguro", "mono", "elefante"];
  let action = ["se paró", "se cayó", "se sentó", "saltó", "mordió"];
  let possetion = ["en mi tarea", "en mi pie", "en mi carro", "en mi zapato"];
  let where = ["en la calle", "en mi casa", "en el trabajo"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
