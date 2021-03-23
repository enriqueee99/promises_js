//iterator and iterable

/* const iterable = [1,2,3,4,5];
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next()
} */


//generators
function* iterable(){
    yield "hello bro";
   // console.log('hello console');
    yield "hello 2";
    //console.log('we continue our code');
    yield 'hello 3';
    yield 'hello 4';
}

let iterador = iterable();
/* console.log(iterador.next()); //one to one
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); //undefined */

for(let y of iterador){
    //console.log(y)
} //print all datas

const arr = [...iterable()];
//console.log(arr);



//generator example 2
/* function* increment(i){
    yield i + 1;
    yield i + 2;
}

var obj = increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next()); */


//generator in object literals
/* const obj = {
    * generatorMethod(){
        yield 'holi'    
    }
};
const genObj = obj.generatorMethod();
console.log(genObj.next()); */


//generator in class definitions
class myClass {
    * generatorMethod(){
        //console.log('first')
        yield 'second';
        //console.log('tercero xd')
    }
}


//necesario primero instanciarla en nueva clase
const myInst = new myClass() ;
const genObj = myInst.generatorMethod();
//console.log(genObj.next())
//console.log(genObj.next())


//proxys
const persona = {
    nombre: '',
    apellido: '',
    edad: ''
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe dentro del objeto persona`)
        }

        if((prop === 'nombre' || prop === 'apellido') &&
        !(/^[A-Za-z]+$/g.test(valor))){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blancos`)
        }
        obj[prop] = valor;
    }
}

const anthony = new Proxy(persona, manejador);
anthony.nombre = 'Anthony';
anthony.apellido = 'Candelario';
anthony.edad = 22;
//anthony.correo = 'candelario@unesum.edu.ec';


//proxy empleado basic syntaxis
/* const empleado = {
    nombre: 'Anthony',
    apellido: '',
    password: 12345
}
console.log(empleado.nombre)

var handler = {};
var pEmpleado = new Proxy(empleado, handler);


empleado.nombre = 'Enrique';
console.log(empleado.nombre); */



//proxy empleado basic syntaxis validated
const empleado = {
    nombre: 'Anthony',
    apellido: '',
    password: 12345
}
console.log(empleado)

var handler = {
    set(obj, prop, value){
        obj[prop] = value
    }
};
var pEmpleado = new Proxy(empleado, handler);


empleado.nombre = 'Enrique';
empleado.id = 'abc'
console.log(empleado);












/*function combos(list) {
    const n = list.length;
    let result = [];
   
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            result.push([list[i], list[j]]);
        }
    }
     
    return result;
}
 
//console.log(combos(['a', 'b', 'c', 'd']));
*/