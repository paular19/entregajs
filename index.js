let pizzas=[
    {
        nombre: "Especial",
        id: 1,
        ingredientes:["tomate","queso","jamon"],
        precio: "$800",
    },

    {
        nombre: "Muzzarella",
        id: 2,
        ingredientes:["tomate","queso","cebolla"],
        precio: "$700",
    },

    {
        nombre: "Cantimpalo",
        id: 3,
        ingredientes:["tomate","queso","cantimpalo"],
        precio: "$700",
    },

    {
        nombre: "Turca",
        id: 4,
        ingredientes:["tomate","queso","ajo"],
        precio: "$700",
    }
]

const pizzasImpar = pizzas.filter((imp)=>{
    return imp.id % 2!==0;
});

pizzasImpar.forEach((res)=>{document.write(`El ID de la pizza ${res.nombre} es impar` + "<br>")});

pizzas.some((imp)=>{return imp.precio < 600})
document.write("No, no hay pizza con precio menor a $600"+"<br>")

pizzas.forEach((res)=>{document.write(`La pizza es ${res.nombre} el valor de la pizza es ${res.precio} ` + "<br>")});


pizzas.forEach((imp) => {
    imp.ingredientes.forEach((ingredientes) => {
document.write(`La pizza es ${res.nombre}  sus ingredientes son ${res.ingredientes} `)
})

}// PERDON ESTE PUNTO NO ME SALIO 
