import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import BackButton from './BackButton';
import MainCard from './MainCard';

const CardDetail = () => {
  const { selectedCard, cardsData, showButtons } = useContext(CardContext);
  return (
    <>
      {selectedCard ? (
        <MainCard
          cardData={cardsData.find((card) => card.name === selectedCard)}
        />
      ) : null}
      {showButtons && <BackButton />} {/* Pasamos la función resetState */}
    </>
  );
};

export default CardDetail;
