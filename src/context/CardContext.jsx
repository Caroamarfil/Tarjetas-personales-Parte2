import { createContext, useState } from 'react';
import { cardsData } from '../data/Data';

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la tarjeta seleccionada
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
    <CardContext.Provider
      value={{
        selectedCard,
        showAllCards,
        showButtons,
        cardsData,
        handleCardSelect,
        handleShowAllCards,
        resetState,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
