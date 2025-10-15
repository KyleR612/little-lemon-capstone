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
            <img src={salad} alt='salad' width='70' height='100'/>
            <br/>
            <img src={bruchetta} alt='bruchetta' width='100' height='100'/>
            <br/>
            <img src={dessert} alt='dessert' width='100' height='100'/>
            </div>
            <div class="txt-box">
                <h1>Greek Salad</h1>
                <p id="special-font">The famous greek salad filled with cripsy lettuce, peppers, olives and a Chicago style fetta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <h1>Bruchetta</h1>
                <p id="special-font"></p>
                <h1>Lemon Dessert</h1>
                <p id="special-font"></p>
            </div>
            <button>Order Delivery</button>
            </div>
          </div>
        </div>
    );
}
  
export default recipes;