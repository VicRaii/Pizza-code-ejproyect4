import { createFoodImage } from "./public/src/components/FoodImage/FoodImage";
import { foodImageArray } from "./public/src/components/data/foodImage";
import "./style.css";

// esto es lo primero que ocurre en nuestra página al renderizarse.
createFoodImage(foodImageArray);
