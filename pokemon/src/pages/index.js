import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Input } from '../../styles/home';
import Modal from '@/components/Modal';

export default function Home() {

  const [teste1, setTeste1] = useState()
  const [teste2, setTeste2] = useState()
  const [open, setOpen] = useState()


 

  const searchPokemon = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then((stats) => {
        setTeste1(stats.data)
      }).catch(() => {
        console.log('ERRO')
      })
    setOpen(true)
  }

  console.log(teste, "teste");
  console.log(teste1, "teste1");

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input onChange={(e) => setTeste2(e.target.value)}></Input>
        <button onClick={() => searchPokemon(teste2.toLowerCase())}>buscar</button>
        {open &&
          <Modal>
            <div>
              <p>Nome: {teste1?.name}</p>
              <p>Posição: {teste1?.order}</p>
              <p> Tipo: {teste1?.types[0].type?.name}</p>
              <div>
                <p>Habilidades:</p>
                <div>
                  {
                    teste1?.abilities.map(powers => {
                      return (
                        <div>
                          <p> {powers.ability.name} </p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div>
                {
                  teste1?.stats.map(teste => {
                    return (
                      <div style={{ display: 'flex' }}>
                        <p> {teste.stat.name}: </p>
                        <p> {teste.base_stat} </p>

                      </div>
                    )
                  })
                }
              </div>
              <img src={teste1?.sprites.other.dream_world.front_default} />
            </div>
          </Modal>
        }
      </div>

      <div>
        <button >Todos os Pokemons</button>
      </div>
    </>
  )
}
