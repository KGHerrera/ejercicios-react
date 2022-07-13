import React from "react";
import { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
      e.preventDefault();

      if(!form.artist || !form.song){
          alert("datos incompletos");
          return;
      }

      handleSearch(form);
      setForm(initialForm);

  }

  const handleReset = e => {
      setForm(initialForm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="nombre del artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="nombre de la cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default SongForm;
