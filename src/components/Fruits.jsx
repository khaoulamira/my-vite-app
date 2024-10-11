


export default function Fruits({ fruitss }) {
  // Fonction pour afficher la liste des fruits
  const displayFruit = () => {
   
    return fruitss.map((fruita) => (
      <li key={fruita}>Les fruits: {fruita}</li>
    ));
  };

  // Rendu de l'élément JSX
  return (
    <>
      <h1>Fruit naturel :</h1>
      <ul>{displayFruit()}</ul>
    </>
  );
}


