import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from '@/components/Modal';


export default function Pokemons() {
  const [teste, setTeste] = useState()
  const [teste1, setTeste1] = useState()
  const [teste2, setTeste2] = useState()
  const [open, setOpen] = useState()

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
        <div>
          {
            teste?.map((pokebola,index) => {
              return (
                <div key={index}>
                  <p> {pokebola.name} </p>
                 
                </div>
              )
            })
          }
        </div>
     
      </div>
    </>
  )
}
