import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import BackButton from './BackButton';
import MainCard from './MainCard';

const MenuCard = () => {
  const { showAllCards, cardsData, showButtons } = useContext(CardContext);
  return (
    <>
      <div className='d-flex justify-content-center gap-4 flex-wrap mt-4'>
        {showAllCards
          ? cardsData.map((card) => <MainCard key={card.id} cardData={card} />)
          : null}
      </div>
      {showButtons && <BackButton />}
    </>
  );
};

export default MenuCard;
