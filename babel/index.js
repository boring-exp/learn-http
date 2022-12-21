import base from './base.js'
console.log(base)
const a = 1;
const b = () => console.log('hello world')
const c = {
    name: 'pjw',
    age: '24',
    info: {}
}

const {name, age: peopelAge, info} = c;

// const test = c && c.info && c.info.name
const test = c?.info?.name?.age

const array = [1, 2, 3, 4]
array.forEach(item => console.log(item))

const asyncTask = new Promise((resolve, reject) => {
    resolve(1)
})