import React from 'react';
import recipes from './recipes';

const Menu = () => {
    return(
        <div className='menu-container'>
          <div className='menu-header'>
            <h2>This weeks specials!</h2>
            <button className="orderbtn">Order Menu</button>
          </div>

          {/* menu cards */}
          <div>
            {
                recipes.map(recipe => <div key={recipe.id}>
                    <img src={recipes.image} alt=''/>
                    <div>
                        <div>
                            <h5>{recipe.title}</h5>
                        </div>
                    </div>
                </div>)
            }
          </div>
      </div>
    );
};

export default Menu;