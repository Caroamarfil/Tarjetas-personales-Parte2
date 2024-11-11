import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainCard from './components/MainCard/MainCard';
import { cardsData } from './components/CardsData/Data';
import BackButton from './BackButton';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // Estado para mostrar los botones en línea

  const handleCardSelect = (name) => {
    setSelectedCard(name);
    setShowAllCards(false);
    setShowButtons(true); // Muestra los botones cuando selecciona un miembro
  };

  const handleShowAllCards = () => {
    setSelectedCard(null);
    setShowAllCards(true);
    setShowButtons(true); // Muestra los botones cuando se clickea "Ver todo el equipo"
  };

  // Función para resetear el estado
  const resetState = () => {
    setSelectedCard(null);
    setShowAllCards(false);
    setShowButtons(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="title-container">
          <h1>Equipo de desarrollo Grupo 6</h1>
        </div>

        {/* Los botones deben tener una disposición diferente dependiendo del estado */}
        <div className={`button-container mt-5 ${showButtons ? 'buttons-inline' : ''}`}>
          <div className="buttons-wrapper">
            <button
              className="btn btn-outline-primary"
              onClick={handleShowAllCards}
            >
              Ver todo el equipo
            </button>
            {cardsData.map((card) => (
              <button
                key={card.name}
                className="btn btn-outline-primary"
                onClick={() => handleCardSelect(card.name)}
              >
                {card.name}
              </button>
            ))}
          </div>
        </div>

        {/* Aquí mostramos el BackButton en la vista principal y en las rutas dinámicas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
                  {showAllCards ? (
                    cardsData.map((card) => (
                       <MainCard key={card.name} cardData={card} /> 
                    ))
                  ) : selectedCard ? (
                    <MainCard cardData={cardsData.find((card) => card.name === selectedCard)} />
                  ) : null}
                </div>
                {showButtons && <BackButton resetState={resetState} />} {/* Pasamos la función resetState */}
              </>
            }
          />

          <Route
            path="/card/:name"
            element={
              <>
                <MainCard />
                <BackButton resetState={resetState} /> {/* Pasamos la función resetState */}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
