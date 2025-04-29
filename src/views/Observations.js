import React from "react";
import ObservationTable from "../components/ObservationTable";  // Import du composant ObservationTable

export default function Observations() {
  return (
    <div className="px-4 md:px-10 mx-auto w-full py-10">
      <h1 className="text-3xl font-semibold text-blueGray-700 mb-6">Observations</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-blueGray-600">
          Ici s'afficheront les observations naturalistes sur une carte interactive,
          avec des statistiques, des filtres, et une vue tableau.
        </p>
      </div>

      {/* Section pour afficher le tableau des observations */}
      <div className="mt-6">
        <ObservationTable /> {/* Intégration du tableau des observations */}
      </div>
    </div>
  );
}
