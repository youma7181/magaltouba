import React from 'react';

function Home() {
  return (
    <div className="text-center mt-5">
      {/* Image en haut, bien visible */}
      <img
        src="https://wallpapers.com/images/hd/senegal-grand-mosque-of-touba-srqvq743ho3buk6g.jpg"
        alt="Grande Mosquée de Touba"
        className="img-fluid rounded shadow mb-4"
        style={{ maxHeight: "350px", width: "100%", objectFit: "contain" }}
      />
      {/* Titre et description en dessous */}
      <h2 className="fw-bold mb-3">Bienvenue à la plateforme du Magal de Touba</h2>
      <p className="lead">
        Retrouvez toutes les informations essentielles pour votre pèlerinage : horaires, points d’intérêt, inscription et notifications en temps réel.
      </p>
    </div>
  );
}

export default Home;