import React from 'react';

const horaires = [
  { id: 1, evenement: "Ouverture officielle", heure: "08:00", lieu: "Grande Mosquée" },
  { id: 2, evenement: "Conférence religieuse", heure: "10:00", lieu: "Salle Cheikh Ahmadou Bamba" },
  { id: 3, evenement: "Déjeuner collectif", heure: "13:00", lieu: "Cour centrale" },
  { id: 4, evenement: "Clôture", heure: "16:00", lieu: "Grande Mosquée " }
];

function ScheduleList() {
  return (
    <div className="card p-3 bg-light">
      <h3 className="mb-3">Liste des horaires du Magal</h3>
      <ul className="list-group">
        {horaires.map((item) => (
          <li className="list-group-item" key={item.id}>
            <strong>{item.evenement}</strong> - {item.heure} à {item.lieu}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleList;