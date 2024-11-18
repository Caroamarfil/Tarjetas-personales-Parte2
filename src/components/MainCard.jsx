import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../context/CardContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MainCard = ({ cardData }) => {
  const { cardsData } = useContext(CardContext);
  const { name: cardNameFromUrl } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const card =
    cardData ||
    cardsData.find((card) => card.name === decodeURIComponent(cardNameFromUrl));

  if (!card) {
    return <div className='text-center mt-4 fs-4'>Tarjeta no encontrada</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isDario = card.name === 'Dario Skidelsky';
  const isTiago = card.name === 'Tiago Ibarrola';
  const isCaro = card.name === 'Carolina Amarfil';

  return (
    <div
      className={`card text-center shadow-sm rounded-4 uniform-card ${
        card.cardClass
      } ${isTiago ? 'tiago-background' : isCaro ? 'caro-background' : ''}`}
    >
      {card.header ? (
        <div className='bg-primary p-4 rounded-top-4'>
          <div className='position-relative'>
            <img
              src={card.imageUrl}
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
        
        <img
          src={card.imageUrl}
          className={`card-img-center ${card.imgClass}`}
          alt='Foto de perfil'
          style={card.imgStyle || {}}
        />
      )}

      <div className='card-body'>
        <h5
          className={`card-title fw-bold mb-3 ${card.nameClass || ''} ${isTiago ? 'tiago-name' : ''
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
          className={`card-text text-muted fst-italic px-4 mb-4 ${isTiago ? 'tiago-description' : ''} ${card.descriptionClass || ''}`}
        >
          {card.description}
        </p>

        {card.additionalInfo && (
          <button
            onClick={toggleExpand}
            className="btn btn-link text-decoration-none mb-3 d-flex align-items-center justify-content-center gap-2"
          >
            {isExpanded ? (
              <>
                Mostrar menos <ChevronUp size={20} />
              </>
            ) : (
              <>
                Más información <ChevronDown size={20} />
              </>
            )}
          </button>
        )}

        {isExpanded && card.additionalInfo && (
          <div className="additional-info mb-4 px-4">
            {card.additionalInfo.experience && (
              <div className="mb-3">
                <h6 className="fw-bold text-primary mb-2">Experiencia</h6>
                <ul className="list-unstyled">
                  {card.additionalInfo.experience.map((exp, index) => (
                    <li key={index} className="mb-2">
                      <div className="fw-semibold">{exp.role}</div>
                      <div className="small text-muted">{exp.company}</div>
                      <div className="small text-muted">{exp.period}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {card.additionalInfo.education && (
              <div className="mb-3">
                <h6 className="fw-bold text-primary mb-2">Educación</h6>
                <ul className="list-unstyled">
                  {card.additionalInfo.education.map((edu, index) => (
                    <li key={index} className="mb-2">
                      <div className="fw-semibold">{edu.degree}</div>
                      <div className="small text-muted">{edu.institution}</div>
                      <div className="small text-muted">{edu.year}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {card.additionalInfo.skills && (
              <div className="mb-3">
                <h6 className="fw-bold text-primary mb-2">Habilidades</h6>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {card.additionalInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge bg-secondary bg-opacity-10 text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {card.additionalInfo.hobbies && (
              <div>
                <h6 className="fw-bold text-primary mb-2">Hobbies</h6>
                <p className="text-muted small">{card.additionalInfo.hobbies.join(', ')}</p>
              </div>
            )}

            {card.additionalInfo.languages && (
              <div className="mb-3">
                <h6 className="fw-bold text-primary mb-2">Idiomas</h6>
                <ul className="list-unstyled">
                  {card.additionalInfo.languages.map((lang, index) => (
                    <li key={index} className="small text-muted">
                      {lang.language}: {lang.level}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {card.additionalInfo.certifications && (
              <div className="mb-3">
                <h6 className="fw-bold text-primary mb-2">Certificaciones</h6>
                <ul className="list-unstyled">
                  {card.additionalInfo.certifications.map((cert, index) => (
                    <li key={index} className="mb-2">
                      <div className="fw-semibold">{cert.name}</div>
                      <div className="small text-muted">{cert.issuer}</div>
                      <div className="small text-muted">{cert.year}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className='d-flex justify-content-center gap-3 flex-wrap'>
          {card.github && (
            <button
              onClick={() => window.open(card.github, '_blank')}
              className={`btn ${card.githubClass || card.buttonClass} ${
                isTiago ? 'tiago-button' : isDario? 'dario-btn' : ''
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
               isTiago ? 'tiago-button' : isDario? 'dario-btn' : ''
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
                isTiago ? 'tiago-button' : isDario? 'dario-btn' : ''
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
                isTiago ? 'tiago-button' : ''
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

      {isTiago ? (
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