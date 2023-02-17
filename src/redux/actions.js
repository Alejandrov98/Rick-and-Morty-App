import { ADD_FAVORITE, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITES, payload: id };
};

export const filterCards = (gender) => {

  return {type:FILTER, payload:gender }
}

export const orderCards = (id) => {
  return {type:ORDER, payload:id}
}
