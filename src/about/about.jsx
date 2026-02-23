import React from 'react';

export function About() {
  const [image, setImage] = React.useState('This is a placeholder for when I will have the image be called.')
  const [word, setWord] = React.useState('I have decided that I am going to do the word of the Day on the about page.')
  const [def, setDefinition] = React.useState('Definition Placeholder')

  //I also thing I would be more efficient to save the word of the day and definition on the backend
  //Cross that bridge when i get to it.

  React.useEffect(
    () => {
      setImage('oceanview.jpg');
      setWord("Foray");
      setDefinition("A foray is an initial and often hesitant attempt to do something in a new or different field or area of activity");
    }, []    
  );

  return (
    <main>
        <br/>
        <p>This is a app that allows users to take a little 
            break from their day and maintain a healthy and 
            flexible mind.
        </p>
        <p>Any recommendations or issues can be reported to me through the repository</p>

        <p>Please enjoy this lovely image of the ocean</p>

        <img src={image} alt="Bright Blue Ocean" width="600"></img>

        <div>The word of the day will be {word}:</div>
        <div>Definition: {def}</div>
        
    </main>
  );
}