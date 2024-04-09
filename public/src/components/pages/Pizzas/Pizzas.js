import "./Pizzas.css";

export const Pizzas = () => {
  const divApp = document.querySelector("#app");

  const tabla = document.createElement("img");

  tabla.src = "/assets/tabla.png";
  tabla.className = "tabla";

  divApp.appendChild(tabla);
};

