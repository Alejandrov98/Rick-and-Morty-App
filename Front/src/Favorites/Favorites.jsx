import { useSelector, useDispatch } from "react-redux";
import style from "./Favorite.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch =  useDispatch(); 

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))

  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))

  }

  return (
    <div>
      <div>
        <select className={style.desplegable} onChange={handleOrder}>
          <option value="order" disabled="disabled">
            Orden
          </option>
          <option className={style.selecciones} value="Ascendente" >
            Ascendente
          </option>
          <option className={style.selecciones} value="Descendente">Descendente</option>
        </select>
        <select className={style.desplegable} onChange={handleFilter}>
          <option value="filter" disabled="disabled">
            Genero
          </option>
          <option className={style.selecciones} value="Male">Male</option>
          <option className={style.selecciones} value="Unknow">Unknow</option>
          <option className={style.selecciones} value="Female">Female</option>
          <option className={style.selecciones} value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <div className={style.container}>
            <Link to={`/detail/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            <div>
              <h2>{character.species}</h2>
              <h2>{character.gender}</h2>
            </div>
            <img className={style.img} src={character.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
