import { createFoodImage } from "./public/src/components/FoodImage/FoodImage";
import { Header } from "./public/src/components/Header/Header";
import { foodImageArray } from "./public/src/components/data/foodImage";
import { Pizzas } from "./public/src/components/pages/Pizzas/Pizzas";
import "./style.css";

// esto es lo primero que ocurre en nuestra página al renderizarse.

Header();
Pizzas();
createFoodImage(foodImageArray);

//! 1:46 

