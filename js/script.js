// ! DESAFIO 1

let cont = [
    {
        id: 1,
        nombre: "monster",
        precio: 800,
        stock: true,
        descripcion: "nashe",
    }
];

let data = JSON.stringify(cont);
console.log(data);

// ! DESAFIO 2

let CopyData = [...cont];

CopyData.map(datos => console.log(datos))


let num = [1,2,3,4,5];

const suma = num.reduce((acc, item) => {
    return acc + item
});

console.log(suma)



// ! GENERADOR DE IMAGENES



// let btn = document.getElementById("boton");

// const callAPI = () =>{
//     let div = document.getElementById("container");

//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     // .then(res => console.log(res))
//     .then(res =>{
//         div.setAttribute("src", `${res.message}`);
//     })

// }

// btn.addEventListener("click", callAPI);


//https://images.dog.ceo/breeds/coonhound/n02089078_2921.jpg
//"https://jsonplaceholder.typicode.com/users"




// ! API DE STAR WARS

// fetch('http://swapi.dev/api/people/')
//   .then((response) => response.json())
//   .then((data) => {
//   for(let i = 0; i < data.results.length; i++){
//     console.log(data['results'][i]['name']);
//   }

//     // console.log(data[`results`][9][`name`])
// });

const contenedor = document.getElementById("contenedor");

fetch('https://dummyjson.com/products')
.then(res => res.json())
// .then(console.log)
.then(info => {
    const total = info.products;
    for(let i = 0; i < total.length; i++){
        console.log(info[`products`][i][`title`])
    }
})