import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";

export default function Card({ name, species, gender, onClose, image, id }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, onClose, image, id }));
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.boton} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div className={style.Card}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <img className={style.img} src={image} alt="" />
    </div>
  );
}
