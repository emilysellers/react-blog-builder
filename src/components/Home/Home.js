import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [text, setText] = useState('');
  const [align, setAlign] = useState('right');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      {/* <Preview title={title} subtitle={subtitle} font={font} text={text} align={align} /> */}
      <Preview {...{ title, subtitle, font, text, align }} />
      {/* <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        text={text}
        setText={setText}
        align={align}
        setAlign={setAlign}
      /> */}
      <Editor
        {...{
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
        }}
      />
    </main>
  );
}
