import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //console.log(useParams())
  const { id } = useParams();
  console.log(id);

  const [personaje, setPersonaje] = React.useState({});

  React.useEffect(() => {
    //console.log('useEffect')
    const obtenerDatos = async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const users = await data.json();
      //console.log(users)
      setPersonaje(users);
    };
    obtenerDatos();
  }, [id]);

  return (
    <div>
      <h3>{personaje.name}</h3>
      <p>{personaje.species}</p>
      <p>{personaje.created}</p>
      <img src={personaje.image} alt="imagen" />
    </div>
  );
};

export default User;
