import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Pokemons() {
  const [teste, setTeste] = useState()
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
      )
      .then((preview) => {
        setTeste(preview.data.results)
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Testando</p>
      </div>
    </>
  )
}
