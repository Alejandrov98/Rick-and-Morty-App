import { useState } from 'react';
import style from './Nav.module.css'

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0);

   const handleSearch = (event) => {
      let {value} = event.target;
      setCharacter(value);
   };

   return (
      <div className= {style.searchBar}>
         <input type='search' className={style.divSearch} onChange={handleSearch} />
      <button className= {style.button} onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
