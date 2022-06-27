import { useEffect, useState } from 'react';
import './game.scss';

const Game = () => {
  const [playerValue, setPlayerValue] = useState('');
  const [cpuValue, setCpuValue] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [tieScore, setTieScore] = useState(-1);
  const [win, setWin] = useState('');

  useEffect(() => {
    if ((playerValue === 'rock' && cpuValue === 'scissors') || (playerValue === 'rock' && cpuValue === 'lizard')) {
      setPlayerScore(playerScore + 1);
      setWin('player');
    } else if ((playerValue === 'paper' && cpuValue === 'rock') || (playerValue === 'paper' && cpuValue === 'spock')) {
      setPlayerScore(playerScore + 1);
      setWin('player');
    } else if ((playerValue === 'scissors' && cpuValue === 'paper') || (playerValue === 'scissors' && cpuValue === 'lizard')) {
      setPlayerScore(playerScore + 1);
      setWin('player');
    } else if ((playerValue === 'lizard' && cpuValue === 'spock') || (playerValue === 'lizard' && cpuValue === 'paper')) {
      setPlayerScore(playerScore + 1);
      setWin('player');
    } else if ((playerValue === 'spock' && cpuValue === 'rock') || (playerValue === 'spock' && cpuValue === 'scissors')) {
      setPlayerScore(playerScore + 1);
      setWin('player');
    } else if (playerValue === cpuValue) {
      setTieScore(tieScore + 1);
      setWin('');
    } else {
      setCpuScore(cpuScore + 1);
      setWin('cpu');
    }
  }, [playerValue, cpuValue]);

  const gameValues = [
    {
      name: 'rock',
      img: 'rock.svg',
    },
    {
      name: 'paper',
      img: 'paper.svg',
    },
    {
      name: 'scissors',
      img: 'scissors.svg',
    },
    {
      name: 'lizard',
      img: 'lizard.svg',
    },
    {
      name: 'spock',
      img: 'spock.svg',
    },
  ];

  const getRandomValue = () => (gameValues[Math.floor(Math.random() * gameValues.length)]);

  return (
    <div>
      <div className="scores">
        <div className="scores__wrapper">
          <h3 className="scores__text">Your score</h3>
          <h2 className="scores__count">{playerScore}</h2>
        </div>
        <div className="scores__wrapper">
          <h3 className="scores__text">Tie</h3>
          <h2 className="scores__count">{tieScore}</h2>
        </div>
        <div className="scores__wrapper">
          <h3 className="scores__text">Cpu score</h3>
          <h2 className="scores__count">{cpuScore}</h2>
        </div>
      </div>
      <div className="game">
        <div className={win === 'player' ? 'game__wrapper active' : 'game__wrapper'}>
          <img className="game__image" src={`${playerValue}.svg`} alt={playerValue} />
        </div>
        <p className="game__vs">VS</p>
        <div className={win === 'cpu' ? 'game__wrapper active' : 'game__wrapper'}>
          <img className="game__image" src={`${cpuValue}.svg`} alt={cpuValue} />
        </div>
      </div>
      <div className="btns">
        {
          gameValues.map(({ name, img }) => (
            <button
              className="btn"
              key={name}
              onClick={() => { setPlayerValue(name); setCpuValue(getRandomValue().name); }}
            >
              <img src={img} alt={name} />
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Game;
