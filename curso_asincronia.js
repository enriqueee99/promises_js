//TEMPORIZADORES SETIMEOUT AND SETINTERVAL

//se ejecuta indefinidamente hasta aplicar el clear
const intervalo = setInterval(() =>{
    console.log('hola beibi me ejecuto cada segundo, perdon ')
}, 3000)

clearInterval(intervalo);


//se ejecuta una sola vez
const tiempo = setTimeout(() =>{
    console.log('yo si me ejecuto cada dos segundos.');
}, 1000)

clearTimeout(tiempo)







//CALLBACKS
/*function cuadradoCallbacks(value, callback){
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}

cuadradoCallbacks(0,(value, result)=>{
    console.log('inicia callback.');
    console.log(`Callbacks: ${value}, ${result}`);
    cuadradoCallbacks(1,(value, result)=>{
        console.log(`Callbacks: ${value}, ${result}`);
        cuadradoCallbacks(2,(value, result)=>{
            console.log(`Callbacks: ${value}, ${result}`);
            cuadradoCallbacks(3,(value, result)=>{
                console.log(`Callbacks: ${value}, ${result}`);
                cuadradoCallbacks(4,(value, result)=>{
                    console.log(`Callbacks: ${value}, ${result}`);
                    cuadradoCallbacks(5,(value, result)=>{
                        console.log(`Callbacks: ${value}, ${result}`);
                    })
                })
            })
        })
    })
})*/


/*const calculate = (n1, n2, operation) => operation(n1, n2);

const add = (n1, n2) => n1 + n2;

const result = calculate(1,8, add);
console.log(result)*/

const calculate = (n1, n2, operation) => operation(n1, n2);
const multiply = (n1, n2) => n1 * n2;
const result = calculate(4,4, multiply);
//console.log(result)

const calcular = (numero1, numero2) => operacion (numero1, numero2);
const restar = (numero1, numero2) => numero1 - numero2;
const resultado = calculate(8,5, restar);
//console.log(resultado)





//callback example book
const bookDB = [
    {id: 1, title: 'Clean Code'},
    {id: 2, title: 'Programing in C++'},
    {id: 3, title: 'The programatic programer'}
];


function getBookById (id, callback){
    const book = bookDB.find(book => book.id === id);
    if(!book){
        const error = new Error();
        error.message = 'Book no found!';
        return callback(error);
    }

    callback(null, book);
}

getBookById(2, (err, book) =>{
    if(err){
       return console.log(err.message);
    } 
    //return console.log(book)
});







//sencillo
const func1 = (callback) =>{
    console.log('inicio');
    callback();
    func2();
    console.log('fin');
}

const func2 = () => console.log('proceso intermedio');
const func3 = () => console.log('no soy un proceso intermedio xd')

//func1(func3)





//callback despues de cargar documento
window.addEventListener('load', ()=>{
    const title = document.getElementById('title');
    title.innerHTML = 'nosoi'
})






//inputs add


const less = (number1, number2, callback) =>{
    return callback(number1 - number2);
}

document.getElementById('btnAdd').addEventListener('click', () =>{
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);

    less(num1, num2, (result) =>{
       console.log(`La resta es: ${result}`)
    })
});









//promesas
function  cuadradoPromise(value){
    if(typeof value !== 'number') 
    return Promise.reject(`Error, the value ${value} entered is not a number`) 
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                value,
                result: value * value
            })
        },0 |Math.random() * 1000)
    })
}

/* cuadradoPromise(0)
.then((obj) =>{
    console.log('start the promise');
    console.log(`promise ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1)
})
.then(obj =>{
    console.log(`promise ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2)
})
.then(obj =>{
    console.log(`promise ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3)
})
.then(obj =>{
    console.log(`promise ${obj.value}, ${obj.result}`);
    return cuadradoPromise('holi')
})
.then(obj =>{
    console.log(`promise ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5)
})
.then(obj =>{
    console.log(`promise ${obj.value}, ${obj.result}`);
    console.log('end of the promise')
})
.catch(err => console.error(err)); */




//estructura sencilla
let x = 10;
const p = new Promise((resolve, reject) =>{
    if(x == 10){
         resolve ('the variable is equal to 10')
        } else {
            reject ('the variable is not equal to 10') 
        }
});

/*p
.then(res =>{
    console.log(`success: ${res}`);
})
.catch(error =>{
    console.log(`error: ${error}`)
});*/



/* let y = 10;
console.log('1. process started..');

setTimeout(() =>{
    y = y * 3 + 2;
    console.log('2. finished process..');
}, 2000);


console.log(`3. the result is: ${y}`) */







function job () {
    return new Promise(function(resolve, reject){
        reject();
    });
};

/* let promise = job();
promise.
then((function(){
    console.log('success 1');
}))
.then(function(){
    console.log('success 2');
})
.then(function(){
    console.log('success 3');
})
.catch(function(){
    console.log('error 1');
})
.then(function() {
    console.log('success 4')
}) */





//version arrow function
/*const job = () =>{
    return new Promise((resolve, reject) =>{
        reject();
    });
};

job().
then(() => console.log('success 1'))
.then(() => console.log('success 2'))
.then(() => console.log('success 3'))
.catch(()=> console.log('error 1'))
.then(() => console.log('success 4'))*/








/*function job(state){
    return new Promise(function (resolve, reject) {
        if(state){
            resolve('success');
        } else {
            reject('error');
        }
    })
}


let promise = job(true);
promise.
then(function(data){
    console.log(data);
    return job(false);
})
.catch(function(error){
    console.log(error);
    return 'error caught';
})
.then(function(data){
    console.log(data);
    return job(true);
})
.catch(function(error){
    console.log(error);
})*/






//version arrow function
/*const job = (state) =>{
    return new Promise(function (resolve, reject) {
        (state) ? resolve('success') :  reject('error');
    })
}

job(true).
then((data) =>{
    console.log(data);
    return job(false);
})
.catch((error) =>{
    console.log(error);
    return 'error caugth';
})
.then((data) =>{
    console.log(data);
    return job(true);
})
.catch((error) => console.log(error));*/








/*function job(state){
    return new Promise(function(resolve, reject){
        if(state){
            resolve ('success');
        } else {
            reject ('error');
        }
    })
}

let promise = job(true);
promise.
then(function (data){
    console.log(data);
    return job(true);
})
.then(function(data){
    if(data !== 'victory') {
        throw 'defeat';
    }
    return job(true);
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
    return 'error caugth'
})
.then(function(data){
    console.log(data);
    return new Error('test');
})
.then(function(data){
    console.log('success: ' +data.message);
})
.catch(function(data){
    console.log('error: ' +data.message);
});*/










//nuevos ejercicios de prmesa
/* const timeOut = (t) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve (`Completed in ${t}`);
        }, t)
    })

    }



timeOut(1000)
.then(result => console.log(result)) //completed in 1000

 
//resolving a promise.all
Promise.all([timeOut(100), timeOut(200)])
.then(result => console.log(result)); */












const timeOut = (t) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`Completed in ${t}`)
        }, t);
    })
}

const durations = [1000, 2000, 3000];
const promises = [];

durations.map((duration) => {
    promises.push(timeOut(duration))
})

console.log(promises);

Promise.all(promises)
.then(response => console.log(response))