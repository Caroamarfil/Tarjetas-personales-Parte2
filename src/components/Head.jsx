import React from 'react';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navigate = useNavigate();
  const { handleCardSelect, handleShowAllCards, showButtons, cardsData } =
    useContext(CardContext);

  return (
    <div className='App'>
      <div className='title-container'>
        <h1>Equipo de desarrollo Grupo 6</h1>
      </div>

      {/* Los botones deben tener una disposición diferente dependiendo del estado */}
      <div
        className={`button-container mt-5 ${
          showButtons ? 'buttons-inline' : ''
        }`}
      >
        <div className='buttons-wrapper'>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              handleShowAllCards(true);
              navigate('/all');
            }}
          >
            Ver todo el equipo
          </button>
          {cardsData.map((card) => (
            <button
              key={card.id}
              className='btn btn-outline-primary'
              onClick={() => {
                handleCardSelect(card.name);
                navigate(`/${card.id}`);
              }}
            >
              {card.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Head;
