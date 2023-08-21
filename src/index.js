import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    // name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData
  const numPizzas =pizzas.length
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas>0 ?
      <React.Fragment>
      <p>Our menu features a variety of dishes to choose from, including classic American fare, as well as more unique dishes inspired by international cuisines</p>
       <ul className="pizzas">
        {pizzaData.map((pizza, i) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
        ))}
      </ul>  
      </ React.Fragment>
      : <p> We are working on our menu, please come back later :)</p>}
     
    </main>
  );
}
function Pizza({pizzaobj}) {
  // if(pizzaobj.soldOut) return null
  return (
    <li className={`pizza ${pizzaobj.soldOut?"sold-out":""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" :  pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 10;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);


  return (
    <footer className="footer">
      
       { 
       !isOpen ? <Order 
       openHour={openHour}
       closeHour={closeHour}
        />  :
      
          (<p className="order">We're happy to see you between {openHour}:00am to {closeHour }:00pm</p>)}
    </footer>
  );
}
 
function Order ({ closeHour, openHour })
{
  return(<div className="order">
  <p>We're happy to see you between {openHour}:00am to {closeHour}:00pm. Come visit us or order online. </p>
  <button className="btn">Order</button>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
