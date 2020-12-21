import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    //console.log('useEffect')
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${count}`
    );
    const users = await data.json();
    //console.log(users)
    setEquipo(users.results);
  };

  const updatePrevious = () => {
    if (count < 1) {
      setCount(count == 1);
    } else {
      setCount(count - 1);
    }
    obtenerDatos();
  };

  const updateNext = () => {
    if (count >= 1) {
      setCount(count + 1);
    } else {
      setCount(count + 1);
    }
    obtenerDatos();
  };

  console.log(count)

  return (
    <div>
      <h1>Nosotros</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros${item.id}`}>
              {item.name} - {item.species} - {item.origin.name}
            </Link>
          </li>
        ))}
        <button
          className="bnt btn-primary mt-4"
          onClick={() => updatePrevious()}
        >
          Anterior
        </button>
        <button className="bnt btn-warning" onClick={() => updateNext()}>
          Siguiente
        </button>
      </ul>
    </div>
  );
};

export default Nosotros;
