import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import styles from './fetchCat.module.css'

export default function FetchCat() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchCatFact() {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setCatFacts((prevFacts) => [...prevFacts, data.fact]);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCatFact();
  }, []);
  // console.log(catFacts);

  function deleteAllData() {
    setCatFacts([]);
  }

  return (
    <div className="lesson-container">
     <h3>FetchCat</h3>
      <button className={styles.button}onClick={fetchCatFact}>GET MORE INFO</button>
      {catFacts.length > 0 && (
        <button className={styles.button2} onClick={deleteAllData}>DELETE ALL DATA</button>
      )}
      {loading && <Loader />}
      {catFacts.length > 0 && (
        <div
          style={{
            maxHeight: "700px",
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {catFacts.map((fact, index) => (
            <p key={index}>{fact}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import Loader from "../loader/Loader";

// export default function CatFacts(): JSX.Element {
//   const [catFacts, setCatFacts] = useState<string>[];
//   const [loading, setLoading] = useState<boolean>false;

//   async function fetchCatFact() {
//     setLoading(true);
//     try {
//       const response = await fetch("https://catfact.ninja/fact");
//       const data = await res.json();
//       setCatFacts((prevFacts) => [...prevFacts, data.fact]);
//     } catch (error) {
//       console.error("Ошибка при загрузке данных:", error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   function deleteAllData() {
//     setCatFacts ([]);
//   }
//   return (
//     <div>
//         <button onClick={fetchCatFact}>GET MORE INFO</button>
//         {catFacts.length > 0 && <button onClick={deleteAllData}>DELETE ALL DATA</button>}
//         {loading && <Loader/>}
//         {catFacts.length > 0 && (
//             <div
//             style={{
//                 maxHeight: '700px',
//                 overflowY: 'auto',
//                 border: '1px solid #ccc',
//                 padding: '10px',
//                 marginTop: '10px',
//             }}
//             >
//             {catFacts.map((fact, index) => (
//               <p key={index}>{fact}</p>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
