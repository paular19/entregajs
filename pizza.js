const pizzas=[
   {
        nombre: "Italiana",
         id: 1,
         ingredientes:["tomate","queso","jamon"],
         precio: "$800",
         img: "./img/italiana.jpg",
     },

     {
         nombre: "Margarita",
         id: 2,
        ingredientes:["tomate","queso","cebolla"],
         precio: "$700",
         img: "./img/margarita.jpg",
    },

   {
             nombre: "Pepperoni",
         id: 3,
         ingredientes:["tomate","queso","cantimpalo"],
         precio: "$700",
         img: "./img/peperoni.jpg",
     },

     {
         nombre: "Hongos",
         id: 4,
         ingredientes:["tomate","queso","ajo"],
         precio: "$700",
         img: "./img/hongos.jpg",
    }
 ]

//traemos los elementos del dom necesarios para realizar el ejercicio

const resultContainer = document.getElementById("result-container");
const form = document.getElementById("form");
const input = document.querySelector(".form_input");

function obtenerlocals(){
  pizzas=localStorage.getItem(searchPizza)
}

function savelocals(){
  localStorage.setItem("pizzas",JSON.stringify(pizzas));
}
console.log(savelocals);





//buscar el array de pizza que coincida con el valor dado por parametro
const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

const showEmptyError = () =>{
   resultContainer.innerHTML =`
   <div class="pizza-container">
            <h2 class="error-title">Por favor ingrese un número para poder buscar en el menú</h2>
            <img src= ./img/buscar.png>
          </div>`;
};

const renderResult = (pizza) => {
  if(!pizza){
    resultContainer.innerHTML=`
   <div class="pizza-container">
      <h2 class="error-title">No existe una pizza con el ID ingresado</h2>
      <img src= ./img/404.png>
  </div>
    `;
  }else{
    resultContainer.innerHTML=`        
    <div class="pizza-container">
    <h2 class="result-title">${pizza.nombre}</h2>
    <h3 class="result-price">${pizza.precio}</h3>
    <img src= ${pizza.img}>
    <p>Realice una nueva busqueda</p>
  </div> 
    `
    
  }

  }




const submitSearch = (e) =>{
  e.preventDefault();
  const searchedValue = input.value;
  if(!searchedValue){
    showEmptyError();
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue));
  renderResult(searchedPizza);
  form.reset();
};


const init= () => {
  form.addEventListener("submit",submitSearch)

};

init()