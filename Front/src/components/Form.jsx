import React from "react";
import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

function Form(props) {
  //props
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.datos}>
          <label htmlFor="username">Username:</label>

          <input
            name="username"
            placeholder="Escribe tu nombre de usuario"
            type="text"
            className={style.datos}
            value={userData.username}
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>
        </div>
        <br></br>

        <div className={style.datos}>
          <label htmlFor="password"> Password </label>

          <input
            name="password"
            placeholder="Escribe tu constraseña"
            type="password"
            className={style.inputName}
            value={userData.password}
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>
        <br></br>
        <div className={style.contenedor}>
          <button className={style.boton}>LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
