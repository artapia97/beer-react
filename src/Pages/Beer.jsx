import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerStyles from "../styles/Beer.module.css"; 
import { useParams } from "react-router-dom";

const Beer = () => {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const url = `https://api.sampleapis.com/beers/ale/${id}`;
  
  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={BeerStyles.beerContainer}>
      <h1>Cerveza Nro. {beer.id}</h1>
      <img src={beer.image} alt={beer.name} />
      <p>
        La {beer.name} tiene un valor de {beer.price}.
        {beer.rating && beer.rating.average ? (
          <>
            Tiene una calificación promedio de {beer.rating.average} basada en la opinión de {beer.rating.reviews} personas.
          </>
        ) : (
          <span>Calificación no disponible.</span>
        )}
      </p>
    </div>
  );
};

export default Beer;
