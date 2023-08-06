import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/BASE_URL";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const endPoints = [];
      for (let i = 1; i <= 30; i++) {
        endPoints.push(axios.get(`${BASE_URL}/${i}`));
      }
      const response = await axios.all(endPoints);
      const fetchedPokemons = response.map((response) => response.data);
      setPokemons(fetchedPokemons);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);
  console.log(pokemons);

  return (
    <ApiContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
