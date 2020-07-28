import { createElement, render, patch } from "./vdom";

//创建虚拟dom
let oldVnode = createElement("ul", {}, 
    createElement('li', {
        style: {
            background: 'red'
        },
        key: 'A'
    }, 'A'),
    createElement('li', {
        style: {
            background: 'yellow'
        },
        key: 'B'
    }, 'B'),
    createElement('li', {
        style: {
            background: 'blue'
        },
        key: 'C'
    }, 'C')
)

let newVnode = createElement("ul", {}, 
    createElement('li', {
        style: {
            background: 'green'
        },
        key: 'D'
    }, 'D'),
    createElement('li', {
        style: {
            background: 'red'
        },
        key: 'A'
    }, 'A'),
    createElement('li', {
        style: {
            background: 'yellow'
        },
        key: 'B'
    }, 'B'),
    createElement('li', {
        style: {
            background: 'blue'
        },
        key: 'C'
    }, 'C'),
    createElement('li', {
        style: {
            background: 'green'
        },
        key: 'E'
    }, 'E')
)

render(oldVnode, app);

setTimeout(() => {
    patch(oldVnode, newVnode);
}, 2000)

console.log(oldVnode);