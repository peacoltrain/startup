import React from 'react';
import { data } from 'react-router-dom';

export function About() {
  const [image, setImage] = React.useState('This is a placeholder for when I will have the image be called.')
  const [word, setWord] = React.useState('I have decided that I am going to do the word of the Day on the about page.')
  const [def, setDefinition] = React.useState('Definition Placeholder')

  //I also thing I would be more efficient to save the word of the day and definition on the backend
  //Cross that bridge when i get to it.

  //API endpoints I will use https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  //and https://random-word-api.herokuapp.com/word


  React.useEffect(() => {

    function getWord() {
      // Get Random Word from first free api
      fetch('https://random-word-api.herokuapp.com/word')
        .then(response => response.json())
        .then(data => {

          const randomWord = data[0];
          console.log("Random word:", randomWord);

          // Get Definition
          return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
            .then(response => response.json())
            .then(dictData => {

              console.log(dictData);

              setImage('oceanview.jpg');
              setWord(randomWord);
              setDefinition(
                dictData?.[0]?.meanings?.[0]?.definitions?.[0]?.definition ||
                "Definition not found"
              );

            });

        });

    }

    getWord();

  }, []);

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

        <div>The word of the day will be {word.charAt(0).toUpperCase() + word.slice(1)}:</div>
        <div>Definition: {def}</div>
        
    </main>
  );
}