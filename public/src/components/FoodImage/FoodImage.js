import "./FoodImage.css";

export const createFoodImage = (array) => {
  for (const element of array) {
    let anchoAleatorio = Math.random() * window.innerWidth;
    let altoAleatorio = Math.random() * window.innerHeight;
    let estilosAleatorios;
    let stringFinal;

    if (element.aleatorio) {
      estilosAleatorios = `style="top: ${altoAleatorio}px; left: ${anchoAleatorio}px"`;
      stringFinal = `<img src="${element.url}" class="food-image ${element.nombre}" ${estilosAleatorios}/>`;
    } else {
      stringFinal = `<img src="${element.url}" class="food-image ${element.nombre}"/>`;
    }

    document.body.innerHTML += stringFinal;
  }
};

//! 1:06 directo
