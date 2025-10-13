import salad from '../src/Images/salad.jpg';

const recipes = () => {
    return(
    <a href="/">
    <img src={salad} alt='greek salad'/>
    </a>
   );
}; 
  
export default recipes;