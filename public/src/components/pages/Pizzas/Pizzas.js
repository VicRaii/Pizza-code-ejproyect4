import { cookPizza } from "../../CookPizza/CookPizza";
import { printSection } from "../../PizzasSection/PizzasSection";
import { printPizzasSelect } from "../../PizzasSelect/PizzasSelect";
import { pizzas } from "../../data/pizzas";
import "./Pizzas.css";

export const Pizzas = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";

  const pizzasSection = document.createElement("section");
  pizzasSection.className = "pizzas";
  divApp.appendChild(pizzasSection);

  printSection(pizzasSection, pizzas[0]);

  printPizzasSelect(pizzasSection);

  const pizzaTabla = document.createElement("img");

  cookPizza(pizzaTabla, pizzas[0].img);

  divApp.appendChild(pizzaTabla);

  const tabla = document.createElement("img");

  tabla.src = "/assets/tabla2.png";
  tabla.className = "tabla";

  divApp.appendChild(tabla);
};

//! 1:17 parte 2
