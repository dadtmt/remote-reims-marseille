import React from "react";
import ParticipantList from "./ParticipantList";

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
