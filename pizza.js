const pizzasList=[
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

const inputN = document.getElementById("inputpizza");

const isEmpty = (input) => !input.length;

const cardsContainer=document.getElementById("container-pizza-renderizado");

const cError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const sError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};


const NumberInput = () => {
  let valid = false;
  const inputValor = inputN.value;
  if (isEmpty(inputValor)) {
    sError(inputN);
  } else if (!inputValor > 0 && !inputValor <= 3) {
    sError(inputN);
  } else {
    cError(inputN);
    valid = true;
  }
  return valid;
};

const FormValid = () => {
  return NumberInput(inputN);
};
const form = document.getElementById("form");
const containerPizzas = document.getElementById("container-pizza-renderizado");

let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
const saveLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

const saveData = () => {
  const inputValor = inputN.value;
  const findPizza = pizzasList.find((e) => e.id == inputValor) || [];
  pizzas = [
    ...pizzas,
    {
      id: findPizza.id,
      nombre: findPizza.nombre,
      precio: findPizza.precio,
    },
  ];
};

const renderizado = (pizza) => {
  const { id, nombre, ingredientes, precio } = pizza;
  return `<br>
            El id ${id} pertence a la pizza ${nombre}, y su
           precio  es: ${precio}<br><br>
          `;
};

const renderPizza = () => {
  cardsContainer.innerHTML = pizzas.map(renderizado).join("");
};

const isValidForm = () => {
  return NumberInput(inputN);
};
const submitForm = (e) => {
  e.preventDefault();
  if (isValidForm()) {
    saveData();
    saveLocalStorage();
    renderPizza();
    form.reset();
  }
};

const init = () => {
  window.addEventListener("DOMContentLoaded", renderPizza(pizzas));
  form.addEventListener("submit", submitForm);
};

init();




