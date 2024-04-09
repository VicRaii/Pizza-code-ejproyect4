import "./Header.css";

const arrayEnlaces = [
  {
    url: "#",
    texto: "Pizzas",
    // componente: Pizzas()
  },
  {
    url: "#",
    texto: "Delivery",
    // componente: Pizzas()
  },
  {
    url: "#",
    texto: "About",
    // componente: Pizzas()
  },
  {
    url: "#",
    texto: "Contact",
    // componente: Pizzas()
  },
];

export const Header = () => {
  const headerHTML = document.createElement("header");
  const logo = document.createElement("img");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  logo.src = "/assets/logoPizzaCode.png";

  for (const enlace of arrayEnlaces) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = enlace.url;
    a.textContent = enlace.texto;
    li.appendChild(a);
    ul.appendChild(li);
  }

  headerHTML.appendChild(logo);
  headerHTML.appendChild(nav);
  nav.appendChild(ul);
  document.body.appendChild(headerHTML);
};
