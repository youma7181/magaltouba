import React, { useState } from 'react';
import { registerPelerin } from '../api';

function RegistrationForm() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    let newErrors = {};
    if (!form.nom) newErrors.nom = "Le nom est obligatoire";
    if (!form.prenom) newErrors.prenom = "Le prénom est obligatoire";
    if (!form.telephone) newErrors.telephone = "Le téléphone est obligatoire";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalide";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await registerPelerin(form);
        setSuccess("Inscription réussie !");
        setForm({
          nom: '',
          prenom: '',
          telephone: '',
          email: ''
        });
        setErrors({});
      } catch (err) {
        setSuccess("");
        setErrors({ general: "Erreur lors de l'inscription. Réessayez." });
      }
    } else {
      setSuccess('');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h3 className="mb-3">Formulaire d’inscription</h3>
      {success && <div className="alert alert-success">{success}</div>}
      {errors.general && <div className="alert alert-danger">{errors.general}</div>}
      <div className="mb-3">
        <label className="form-label">Nom :</label>
        <input type="text" className="form-control" name="nom" value={form.nom} onChange={handleChange} />
        {errors.nom && <div className="text-danger">{errors.nom}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Prénom :</label>
        <input type="text" className="form-control" name="prenom" value={form.prenom} onChange={handleChange} />
        {errors.prenom && <div className="text-danger">{errors.prenom}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Téléphone :</label>
        <input type="text" className="form-control" name="telephone" value={form.telephone} onChange={handleChange} />
        {errors.telephone && <div className="text-danger">{errors.telephone}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email :</label>
        <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <button type="submit" className="btn btn-primary">S’inscrire</button>
    </form>
  );
}

export default RegistrationForm;