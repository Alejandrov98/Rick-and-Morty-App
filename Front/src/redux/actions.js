import { /*ADD_FAVORITE, DELETE_FAVORITES, */ FILTER, ORDER } from "./action-types";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
// export const FILTER = "FILTER";
// export const ORDER = "ORDER";


export function addFav(personaje) {
  return async function (dispatch) {
    try {
      await fetch("http://localhost:3001/favorites", {
        method: "POST",
        body: JSON.stringify(personaje),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: ADD_FAV,
            payload: data,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return async function (dispatch) {
    try {
      await fetch(`http://localhost:3001/favorites/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) dispatch({ type: REMOVE_FAV, payload: id });
        });
    } catch (error) {
      console.log(error);
    }
  };
}


export const filterCards = (gender) => {

  return {type:FILTER, payload:gender }
}

export const orderCards = (id) => {
  return {type:ORDER, payload:id}
}



// export const addFavorite = (character) => {
//   return { type: ADD_FAVORITE, payload: character };
// };

// export const deleteFavorite = (id) => {
//   return { type: DELETE_FAVORITES, payload: id };
// };

// export const filterCards = (gender) => {

//   return {type:FILTER, payload:gender }
// }

// export const orderCards = (id) => {
//   return {type:ORDER, payload:id}
// }
