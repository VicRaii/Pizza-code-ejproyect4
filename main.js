import { createFoodImage } from "./public/src/components/FoodImage/FoodImage";
import { Header } from "./public/src/components/Header/Header";
import { foodImageArray } from "./public/src/components/data/foodImage";
import "./style.css";

// esto es lo primero que ocurre en nuestra página al renderizarse.

Header();
createFoodImage(foodImageArray);
