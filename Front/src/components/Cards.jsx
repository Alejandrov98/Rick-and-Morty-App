import Card from './Card';
import style from './Cards.module.css';
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className= {style.container}> {
      characters.map(({name, gender, species, image, id}, index) => {
         return <Card 
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         key = {index}
         onClose = {() => onClose(id)}
         id={id} 
         />
      }) 
   }
   </div>;
}
