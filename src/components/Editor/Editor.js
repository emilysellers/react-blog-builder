import React from 'react';

import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  font,
  setFont,
  text,
  setText,
  align,
  setAlign,
}) {
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const subtitleHandler = (event) => {
    setSubtitle(event.target.value);
  };
  const fontHandler = (event) => {
    setFont(event.target.value);
  };
  const textHandler = (event) => {
    setText(event.target.value);
  };
  const alignHandler = (event) => {
    setAlign(event.target.value);
  };
  return (
    <div className="editor">
      <div className="form-control">
        <input
          name="title"
          type="text"
          value={title}
          onChange={titleHandler}
          // onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input name="subtitle" type="text" value={subtitle} onChange={subtitleHandler} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={fontHandler}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input
              name="align"
              type="radio"
              value="left"
              checked={align === 'left'}
              onChange={alignHandler}
            />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="center"
              checked={align === 'center'}
              onChange={alignHandler}
            />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="right"
              checked={align === 'right'}
              onChange={alignHandler}
            />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea value={text} onChange={textHandler} style={{ height: '250px' }} />
        <label>Text</label>
      </div>
    </div>
  );
}
