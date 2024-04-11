import "./CookPizza.css";

export const cookPizza = (pizzaTabla, img) => {
  pizzaTabla.src = img;

  pizzaTabla.className = "pizza-tabla";
};
