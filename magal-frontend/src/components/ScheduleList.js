import React, { useEffect, useState } from 'react';
import { getHoraires } from '../api';

function ScheduleList() {
  const [horaires, setHoraires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHoraires()
      .then(data => setHoraires(data))
      .catch(() => setHoraires([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Chargement des horaires...</div>;

  return (
    <div className="card p-3 bg-light">
      <h3 className="mb-3">Liste des horaires du Magal</h3>
      <ul className="list-group">
        {horaires.length === 0 ? (
          <li className="list-group-item text-danger">Aucun horaire trouvé.</li>
        ) : (
          horaires.map((item) => (
            <li className="list-group-item" key={item.id}>
              <strong>{item.evenement}</strong> - {item.heure} à {item.lieu}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ScheduleList;