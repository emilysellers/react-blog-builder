import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font, text, align }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop
  return (
    <div className={`preview ${font}`} style={{ textAlign: align }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
    </div>
  );
}
