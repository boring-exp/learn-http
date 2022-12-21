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