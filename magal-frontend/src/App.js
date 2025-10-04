import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Registration from './pages/Registration';
import PointsOfInterest from './pages/PointsOfInterest';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      {/* HEADER : Image floue en arrière-plan, titre centré en bas */}
      <header
        style={{
          position: "relative",
          minHeight: "230px",
          backgroundImage: "url('https://netcomsn.com/wp-content/uploads/2022/08/mosquee-touba-netcomsn.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
        className="mb-4 shadow"
      >
        {/* Overlay flou sur l'image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(5px)",
            background: "rgba(0,0,0,0.25)",
            zIndex: 1,
          }}
        />
        {/* Titre centré en bas du header */}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: "50%",
            bottom: "20px",
            transform: "translateX(-50%)",
            color: "white",
            textAlign: "center",
            width: "80%",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h1 className="display-5 fw-bold mb-1">Magal de Touba</h1>
          <p className="lead mb-0">Plateforme pour pèlerins et organisateurs</p>
        </div>
      </header>

      {/* MENU NAVIGATION */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/schedule">Horaires</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/registration">Inscription</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/points">Points d'intérêt</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/notifications">Notifications</Link></li>
          </ul>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/points" element={<PointsOfInterest />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-light text-center py-3 mt-5 border-top">
        <small>© {new Date().getFullYear()} Magal de Touba. Tous droits réservés.</small>
      </footer>
    </Router>
  );
}

export default App;