import { useEffect, useState } from 'react'
import Card from "../Components/Card"
import axios from 'axios';

const titleStyles = {
  backgroundColor: "white",
  color: "black",
  width: "40%",
  height: "40px",
  display: "flex", // Agrega flexbox
  justifyContent: "center", // Centra horizontalmente
  alignItems: "center", // Centra verticalmente
  margin: "20px auto",
  borderRadius: "5px",
};


const Home = () => {
  const [beers, setBeers] = useState([])

  const url = "https://api.sampleapis.com/beers/ale";

  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      });
  }, []);

  return (
    <>
      <h1 style={titleStyles}>Bienvenidos al Beer Project</h1>
      <div className="list-container">
        {beers.map((beer) => (
          <Card key={beer.id} beer={beer} />
        ))};
      </div>
    </>
  );
};

export default Home;