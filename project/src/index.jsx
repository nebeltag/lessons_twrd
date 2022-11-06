// console.log('hello');

import React from "react";
import ReactDom from "react-dom";
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const appContainer = document.querySelector('#app');

//<<<<<<<<<<<Lesson2_part1>>>>>>>>>>>>>>>

// let kusokKoda = <div>
//   <h1>Hello React</h1>
// </div>

// let arr = ['Саша', 'Иванов', 'Молодец'];

// let objDTO = {
//   1: { value: 'Raz' },
//   2: { value: 'Dva' },
//   3: { value: 'Tri' }
// }

// let domArrFromArr = arr.map((el, index) => <li key={'ol1_id_' + index} > {el}</li >);
// let domArrFromObj = Object.keys(objDTO).map((index) => <li key={'ul1_id_' + index} > {objDTO[index].value} number {index}</li >);
//Object.keys возвращает массив из объекта
//Object.keys(objDTO)>>>[1,2,3].map()>>>[<li key={'ul1_id_' + index} > {objDTO[index].value} number {index}</li >)]
// let kusokKoda = <div>
//   <ol> {domArrFromArr} </ol>
//   <hr />
//   <ul>{domArrFromObj}</ul>
// </div>
// ReactDom.render(
//   kusokKoda,
//   appContainer
// )