import { useState } from 'react';

const Avatar = ({ imageUrl, imgClass, imgStyle }) => (
  <img
    src={imageUrl}
    className={`card-img-center ${imgClass}`}
    alt="Foto de perfil"
    style={imgStyle || {}}
  />
);

const BasicInfo = ({ name, description, nameClass }) => (
  <div className="fade-in">
    <h5 className={`card-title fw-bold mb-3 ${nameClass || ''}`}>
      {name}
    </h5>
    <p className="card-text text-muted fst-italic px-4 mb-4">
      {description}
    </p>
  </div>
);

const SocialLinks = ({ links, buttonClasses }) => (
  <div className="d-flex justify-content-center gap-3 flex-wrap">
    {Object.entries(links).map(([platform, url]) => (
      <button
        key={platform}
        className={`btn ${buttonClasses[platform] || 'btn-primary'}`}
        onClick={() => window.open(url, '_blank')}
      >
        {platform}
        <i className={`bi bi-${platform.toLowerCase()} ms-2`}></i>
      </button>
    ))}
  </div>
);

const DetailedInfo = ({ details }) => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="mt-4">
      {Object.entries(details).map(([section, content]) => (
        <div key={section} className="mb-3">
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => setActiveSection(activeSection === section ? null : section)}
          >
            {section}
            <i className={`bi bi-chevron-${activeSection === section ? 'up' : 'down'} ms-2`}></i>
          </button>

          <div
            className={`collapse ${activeSection === section ? 'show' : ''} overflow-hidden`}
          >
            {activeSection === section && (
              <div className="p-3 border-start border-end border-bottom rounded-bottom">
                {Array.isArray(content) ? (
                  <ul className="list-unstyled mb-0">
                    {content.map((item, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check2 text-success me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-0">{content}</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const MainCard = ({ cardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailedInfo = cardData.detailedInfo || {};

  return (
    <div
      className={`card text-center shadow-sm rounded-4 ${cardData.cardClass}`}
      style={{ transform: isExpanded ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.3s' }}
    >
      <Avatar
        imageUrl={cardData.imageUrl}
        imgClass={cardData.imgClass}
        imgStyle={cardData.imgStyle}
      />

      <div className="card-body">
        <BasicInfo
          name={cardData.name}
          description={cardData.description}
          nameClass={cardData.nameClass}
        />

        <SocialLinks
          links={{
            GitHub: cardData.github,
            LinkedIn: cardData.linkedin,
            WhatsApp: cardData.whatsapp,
            ...(cardData.email && { Email: cardData.email })
          }}
          buttonClasses={{
            GitHub: cardData.githubClass,
            LinkedIn: cardData.linkedinClass,
            WhatsApp: cardData.whatsappClass,
            Email: cardData.emailClass
          }}
        />

        <button
          className="btn btn-outline-primary mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} ms-2`}></i>
        </button>

        {isExpanded && (
          <DetailedInfo details={detailedInfo} />
        )}
      </div>

      {cardData.footer && (
        <div className={`card-footer ${cardData.footerColor || ''}`}>
          {cardData.footerIcon && <i className={`${cardData.footerIcon} me-2`}></i>}
          {cardData.footerText}
        </div>
      )}
    </div>
  );
};

export default MainCard;
