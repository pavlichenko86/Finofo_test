import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "components/Loader";
import {Wrapper} from "./styles";
import FruitsList from "components/FruitsList";
import Jar from "../Jar";
import {Fruits} from "../../types/fruits";
import Error from '../Error';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {

  const [fruits, setFruits] = useState<Fruits[]>([]);
  const [fruitsInJar, setFruitsInJar] = useState<Fruits[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  const fetchFruits = async (url: string) => {
    try {
      const response = await axios.get(`${baseUrl}/${url}`);
      setFruits(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFruits('fruit/all');
  }, []);

  const handleAddToJar = (id: number) => {
    const fruit = fruits.find((fruit) => fruit.id === id);

    setFruitsInJar([...fruitsInJar!, fruit!]);
  }

  const handleAddArrayToJar = (fruits: Fruits[]) => {
    setFruitsInJar([...fruitsInJar!, ...fruits!]);
  }

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Error onUpdate={() => fetchFruits('fruit/all')} />
  }
  return (
    <Wrapper>
      <FruitsList fruits={fruits} onAdd={handleAddToJar} onAddArray={handleAddArrayToJar} />
      <Jar fruitsInJar={fruitsInJar} />
    </Wrapper>
  );
}

export default App;
