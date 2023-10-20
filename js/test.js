try {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    // .then(data => console.log(data.results))
    // .then(res => console.log(res.results[0]))
    .then(data =>{
        let nombre = data.results[0][`name`];
        let genero = data.results[0][`gender`];
        let email = data.results[0][`email`];
        JSON.stringify(nombre);
        const Array = Object.values(nombre);
        const union = Array.join(` `);

        console.log(union) 
        console.log(genero)
        console.log(email)
    })
} catch (error) {
    console.error("hubo un error perro")
}