import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const BackButton = () => {
  const { resetState } = useContext(CardContext);
  const handleBackClick = () => {
    resetState(true); // Restablecer la vista principal
  };

  return (
    <div className='text-center mb-4'>
      <Link
        to='/'
        className='btn btn-primary rounded'
        style={{ marginTop: '20px' }}
        onClick={handleBackClick}
      >
        Volver
      </Link>
    </div>
  );
};

export default BackButton;
