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
            <img src={salad} alt='salad'/>
            <br/>
            
            </div>
            <div class="txt-box">
                <h1>Greek Salad: $12.99</h1>
                <p class="special-font">The famous greek salad filled with cripsy lettuce, peppers, olives and a Chicago style fetta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
            <button class="delivery-btn">Order Delivery</button>
            </div>


            <div class="box">
            <div class="img-box">
            <img src={bruchetta} alt='bruchetta'/>
            </div>
            <div class="txt-box">
               <h1>Bruschetta: $5.99</h1>
                <p class="special-font">Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetabes.</p>
            </div>
            <button class="delivery-btn">Order Delivery</button>
            </div>

            <div class="box">
            <div class="img-box">
            <img src={dessert} alt='dessert'/>
            </div>
            <div class="txt-box">
               <h1>Lemon Dessert: $4.78</h1>
                <p class="special-font">Our Lemon dessert is made from scratch, using a luscious lemon filling, topped with a whipped cream, and bread crumbs. To finish it off, a lemon is placed on top for more zing!</p>
            </div>
            <button class="delivery-btn">Order Delivery</button>
            </div>
          </div>
        </div>

        
    );
}
  
export default recipes;