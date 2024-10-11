
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assurez-vous que le chemin est correct
import './index.css'; // Fichier de styles global (si nécessaire)
 // Chemin correct vers Fruits.jsx (dans components)

// Sélectionne l'élément 'root' du DOM et crée un root React
const root = createRoot(document.getElementById('root'));

// Rendu de l'application React dans le DOM
root.render(

    <App />
 

 
);
