// src/components/ObservationTable.js
import React, { useState } from 'react';

const ObservationTable = () => {
  // État pour le filtre de l'espèce
  const [filter, setFilter] = useState('');

  // Exemple d'observations à afficher
  const observations = [
    { id: 1, species: 'Sparrow', date: '2025-04-10', location: 'Paris' },
    { id: 2, species: 'Eagle', date: '2025-04-11', location: 'Lyon' },
    { id: 3, species: 'Owl', date: '2025-04-12', location: 'Toulouse' },
  ];

  // Filtrer les observations en fonction de l'espèce
  const filteredObservations = observations.filter(observation =>
    observation.species.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Liste des Observations</h2>
      
      {/* Champ de filtre */}
      <input
        type="text"
        placeholder="Filtrer par espèce"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Mise à jour du filtre
      />

      {/* Tableau d'observations */}
      <table>
        <thead>
          <tr>
            <th>Espèce</th>
            <th>Date</th>
            <th>Lieu</th>
          </tr>
        </thead>
        <tbody>
          {/* Affichage des lignes du tableau */}
          {filteredObservations.length > 0 ? (
            filteredObservations.map(observation => (
              <tr key={observation.id}>
                <td>{observation.species}</td>
                <td>{observation.date}</td>
                <td>{observation.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Aucune observation trouvée.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ObservationTable;
