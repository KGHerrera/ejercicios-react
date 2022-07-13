import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <div>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>{artist.intBornYear}</p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <p style={{ width: 700 + "px", marginBottom: 40 + "px" }}>
        {artist.strBiographyEN}
      </p>
    </div>
  );
};

export default SongArtist;
