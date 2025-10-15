import React from "react";
import salad from '../src/Images/salad.jpg';
import bruchetta from '../src/Images/bruchetta.jpg';
import dessert from '../src/Images/dessert.webp'

function recipes() {
    return (  
 <div class="card">
    <div class="food-list">
        <div class="box">
            <div class="img-box">
            <img src={salad} alt='salad' width='70' height='100' id="img-box1"/>
            <br/>
            <img src={bruchetta} alt='bruchetta' width='100' height='100'/>
            <br/>
            <img src={dessert} alt='dessert' width='100' height='100'/>
            </div>
            <div class="txt-box">
                <h1>Greek Salad</h1>
                <p id="special-font">The famous greek salad filled with cripsy lettuce, peppers, olives and a Chicago style fetta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <h1>Bruschetta</h1>
                <p id="special-font">Our Bruschetta is made on a lovely white bread, with rich tomatoes and basil leaves, topped with garlic and olive oil. This is a dish you will come back for everytime.</p>
                <h1>Lemon Dessert</h1>
                <p id="special-font">Our Lemon dessert is made from scratch, using a luscious lemon filling, topped with a whipped cream, and bread crumbs. To finish it off, a lemon is placed on top for more zing!</p>
            </div>
            <button>Order Delivery</button>
            </div>
          </div>
        </div>
    );
}
  
export default recipes;