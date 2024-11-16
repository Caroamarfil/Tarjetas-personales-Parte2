import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../context/CardContext';

const MainCard = ({ cardData }) => {
  const { cardsData } = useContext(CardContext);
  const { name: cardNameFromUrl } = useParams();
  const card =
    cardData ||
    cardsData.find((card) => card.name === decodeURIComponent(cardNameFromUrl));

  if (!card) {
    return <div className='text-center mt-4 fs-4'>Tarjeta no encontrada</div>;
  }

  return (
    <div
      className={`card text-center shadow-sm rounded-4 uniform-card ${
        card.cardClass
      } ${card.name === 'Tiago Ibarrola' ? 'tiago-background' : ''}`}
    >
      {/* Condicional para verificar si tiene header */}
      {card.header ? (
        // Si tiene header, la imagen va dentro del header
        <div className='bg-primary p-4 rounded-top-4'>
          <div className='position-relative'>
            <img
              src={card.imageUrl || '/api/placeholder/150/150'}
              className={`rounded-circle border border-4 border-white shadow mx-auto`}
              alt='Foto de perfil'
              style={
                card.imgStyle || {
                  width: '130px',
                  height: '130px',
                  objectFit: 'cover',
                  marginBottom: '-4rem',
                }
              }
            />
          </div>
        </div>
      ) : (
        // Si no tiene header, la imagen va fuera del header
        <img
          src={card.imageUrl || '/api/placeholder/150/150'}
          className={`card-img-center ${card.imgClass}`}
          alt='Foto de perfil'
          style={card.imgStyle || {}}
        />
      )}

      <div className='card-body'>
        <h5
          className={`card-title fw-bold mb-3 ${card.nameClass || ''} ${
            card.name === 'Tiago Ibarrola' ? 'tiago-name' : ''
          }`}
        >
          {card.name}
        </h5>

        {card.tags && card.tags.length > 0 && (
          <div className='d-flex justify-content-center gap-2 mb-3'>
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className={
                  tag.className || 'badge bg-primary bg-opacity-10 text-primary'
                }
              >
                {tag.label || tag}
              </span>
            ))}
          </div>
        )}

        <p
          className={`card-text text-muted fst-italic px-4 mb-4 ${
            card.name === 'Tiago Ibarrola' ? 'tiago-description' : ''
          }`}
        >
          {card.description}
        </p>

        <div className='d-flex justify-content-center gap-3 flex-wrap'>
          {card.github && (
            <button
              onClick={() => window.open(card.github, '_blank')}
              className={`btn ${card.githubClass || card.buttonClass} ${
                card.name === 'Tiago Ibarrola' ? 'tiago-button' : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              GitHub
              {card.githubIcon &&
                (card.githubIcon.includes('http') ? (
                  <img
                    className='img-fluid mb-1 ms-1'
                    style={{ width: '20px' }}
                    src={card.githubIcon}
                    alt='GitHub'
                  />
                ) : (
                  <i
                    className={`img-fluid mb-1 ms-1 ${card.githubIcon}`}
                    style={{ fontSize: '20px' }}
                    aria-hidden='true'
                  ></i>
                ))}
            </button>
          )}

          {card.linkedin && (
            <button
              onClick={() => window.open(card.linkedin, '_blank')}
              className={`btn ${card.linkedinClass || card.buttonClass} ${
                card.name === 'Tiago Ibarrola' ? 'tiago-button' : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LinkedIn
              {card.linkedinIcon &&
                (card.linkedinIcon.includes('http') ? (
                  <img
                    className='img-fluid mb-1 ms-1'
                    style={{ width: '20px' }}
                    src={card.linkedinIcon}
                    alt='LinkedIn'
                  />
                ) : (
                  <i
                    className={`img-fluid mb-1 ms-1 ${card.linkedinIcon}`}
                    style={{ fontSize: '20px' }}
                    aria-hidden='true'
                  ></i>
                ))}
            </button>
          )}

          {card.whatsapp && (
            <button
              onClick={() =>
                window.open(`https://wa.me/${card.whatsapp}`, '_blank')
              }
              className={`btn ${card.whatsappClass || card.buttonClass} ${
                card.name === 'Tiago Ibarrola' ? 'tiago-button' : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              WhatsApp
              {card.whatsappIcon &&
                (card.whatsappIcon.includes('http') ? (
                  <img
                    className='img-fluid mb-1 ms-1'
                    style={{ width: '20px' }}
                    src={card.whatsappIcon}
                    alt='WhatsApp'
                  />
                ) : (
                  <i
                    className={`img-fluid mb-1 ms-1 ${card.whatsappIcon}`}
                    style={{ fontSize: '20px' }}
                    aria-hidden='true'
                  ></i>
                ))}
            </button>
          )}

          {card.email && (
            <button
              onClick={() => window.open(`mailto:${card.email}`, '_blank')}
              className={`btn ${card.emailClass || card.buttonClass} ${
                card.name === 'Tiago Ibarrola' ? 'tiago-button' : ''
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Email
              {card.emailIcon &&
                (card.emailIcon.includes('http') ? (
                  <img
                    className='img-fluid mb-1 ms-1'
                    style={{ width: '20px' }}
                    src={card.emailIcon}
                    alt='Email'
                  />
                ) : (
                  <i
                    className={`img-fluid mb-1 ms-1 ${card.emailIcon}`}
                    style={{ fontSize: '20px' }}
                    aria-hidden='true'
                  ></i>
                ))}
            </button>
          )}
        </div>
      </div>

      {/* Mostrar el footer solo si existe */}
      {card.name === 'Tiago Ibarrola' ? (
        <div className='card-footer position-relative overflow-hidden'>
          <div className='technologies-slider'>
            <div className='slider-content'>
              <img
                src='https://img.icons8.com/color/48/javascript.png'
                alt='JavaScript'
                className='tech-icon'
              />
              <img
                src='https://img.icons8.com/color/48/typescript.png'
                alt='TypeScript'
                className='tech-icon'
              />
              <img
                src='https://img.icons8.com/color/48/c-sharp-logo.png'
                alt='C#'
                className='tech-icon'
              />
              <img
                src='https://img.icons8.com/color/48/kotlin.png'
                alt='Kotlin'
                className='tech-icon'
              />
              <img
                src='https://img.icons8.com/fluency/48/java-coffee-cup-logo.png'
                alt='Java'
                className='tech-icon'
              />
              <img
                src='https://img.icons8.com/color/48/python.png'
                alt='Python'
                className='tech-icon'
              />
            </div>
          </div>
        </div>
      ) : (
        card.footer && (
          <div className={`card-footer ${card.footerColor || ''}`}>
            {card.footerIcon && <i className={`${card.footerIcon} me-2`}></i>}
            {card.footerText}
          </div>
        )
      )}
    </div>
  );
};

export default MainCard;

// https://img.icons8.com/fluency/48/java-coffee-cup-logo.png
