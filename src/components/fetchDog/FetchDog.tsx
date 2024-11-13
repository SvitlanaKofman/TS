import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";

interface IDogData {
    message: string
    status: string
}

export default function FetchDog(): JSX.Element {

  const [dogImg, setDogImg] = useState<string>('');

  const fetchDog = (): void => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((data: IDogData): void => {
        setDogImg(data.message);
      });
  };

  console.log('render!');

  // ! fetchDog(); - вызов функции изменяющей state без useEffect() вызовет бесконечный ререндр компонента

  // * вызов внутри useEffect случится только при начале жизненного цикла (один раз за цикл)
  useEffect(() => {
    fetchDog();
  }, []);


  return (
    <div className="lesson-container">
      {dogImg && (
        <>
          <h3>Fetch dog 🐶</h3>
          <img height={200} src={dogImg} alt="" />
          <MyButton func={fetchDog} text={'update dog'} />
        </>
      )}

    </div>
  );
}