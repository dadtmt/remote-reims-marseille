import React from "react";
import ParticipantList from "./ParticipantList";

// Instructions pour 16H30

// Fork le repo
// clone le repo
// cd repo
// npm install

// Afficher la liste ds participants avec leur token
// En utilisant l'export de participants.js
// modifier ParticipantList
// dans ParticipantList il va falloir faire un map
// un map sur quoi ?
// un map qui renvoi quoi ?

// Quel(s) composant(s) ai je besoin de créer ?
// Composant que je veux afficher est une liste de participants
// Participants
// ParticipantList
// La majuscule c'est pour et seuleument pour les noms de composants

function App() {
  return (
    <div className="App">
      Afficher la liste des participants
      <ParticipantList />
    </div>
  );
}

export default App;
