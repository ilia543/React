import React, { useState } from 'react';
import './App.css';
import { languages } from './languages';
import { randWord } from './words';
import { utils } from './utils'

function App() {
  const [currentWord, setCurrentWord] = React.useState(randWord);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  const wrongGuessCount = (guessedLetters.filter(l => !currentWord.includes(l))).length;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length + 1;
  const isGameOwer = isGameWon || isGameLost;

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";


  function addGuessedLetter(l){
    setGuessedLetters(prev => {
      return prev.includes(l) ? prev : [...prev, l];
    });
  };

  const languageElements = languages.map((l, i) => {
    const isLanguageLost = i < wrongGuessCount;
    const styles = {
      backgroundColor: l.backgroundColor,
      color: l.color
    };
    
    const spclass = !isLanguageLost ? "lang" : "lang1";
    const spantxt = !isLanguageLost ? l.name : "💀";

    return (
      <span key={l.name} className={`${spclass}`} style={styles}>{spantxt}</span>
    );
  });

  const inputWord = [...currentWord].map((l, index) =>{
    return <span key={index} className='inpL'>{guessedLetters.includes(l) ? l : ""}</span>
  });

  const keyboard = alphabet.split("").map(l => {
    const isGuessed = guessedLetters.includes(l);
    const isCorrect = isGuessed && currentWord.includes(l);
    const isWrong = isGuessed && !currentWord.includes(l);

    const buttonClass = `keyboardButtons ${isCorrect ? 'butgreen' : isWrong ? 'butred' : ''}`;

    return <button 
              onClick={() => addGuessedLetter(l)} 
              className={buttonClass}
              key={l}>{l}
            </button>
  });

  const gameendsect = (() => {
    if(isGameWon && !isGameLost){
      return (
        <section className='gameendsectW'>
          <p className='text-2xl'>you Win!</p>
          <p>well done</p>
        </section>
      );
    }else if(isGameLost){
      return (
        <section className='gameendsectL'>
          <p className='text-2xl'>you lost!</p>
          <p>try again. the word was: {currentWord}</p>
        </section>
      );
    }else if(wrongGuessCount < languages.length + 1 && wrongGuessCount > 0){
      if(wrongGuessCount === 1){
        return(
          <section className='gameendsectHTML'>
            <p className='text-2xl'>{utils("HTML")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 2){
        return(
          <section className='gameendsectCSS'>
            <p className='text-2xl'>{utils("CSS")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 3){
        return(
          <section className='gameendsectJavaScript'>
            <p className='text-2xl'>{utils("JavaScript")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 4){
        return(
          <section className='gameendsectReact'>
            <p className='text-2xl'>{utils("React")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 5){
        return(
          <section className='gameendsectTypescript'>
            <p className='text-2xl'>{utils("TypeScript")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 6){
        return(
          <section className='gameendsectNodejs'>
            <p className='text-2xl'>{utils("Node.js")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 7){
        return(
          <section className='gameendsectexpressjs'>
            <p className='text-2xl'>{utils("express.js")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 8){
        return(
          <section className='gameendsectRuby'>
            <p className='text-2xl'>{utils("Ruby")}</p>
            <p>💀</p>
          </section>
        );
      }else if(wrongGuessCount === 9){
        return(
          <section className='gameendsectGraphQl'>
            <p className='text-2xl'>{utils("GraphQl")}</p>
            <p>💀</p>
          </section>
        );
      };
    }else{
      return (
        <section className='gameendsectD'>
          <p>#</p>
          <p>#</p>
        </section>
      );
    };
  });

  const keyboardBlock = React.useRef(null);
  React.useEffect(() => {
    if (isGameOwer) {
      keyboardBlock.current.classList.add('pointer-events-none', 'opacity-50');
    }
  }, [isGameOwer]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <main>
        <header>
          <p className='text-6xl phead'>game</p>
        </header>

        {gameendsect()}

        <section className='languages'>
          {languageElements}
        </section>
        
        <section className='inpW'>
          {inputWord}
        </section>

        <section className='keyboard' ref={keyboardBlock}>
          {keyboard}
        </section>
        
        <section className='enterSect'>
          {isGameOwer && <button className='enter' onClick={handleReload} >enter</button>}
        </section>
      </main>
    </>
  );
};

export default App;