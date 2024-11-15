import { useState } from 'react';
import { motion } from 'framer-motion';
const Avatar = ({ imageUrl, imgClass, imgStyle }) => (
  <motion.img
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    src={imageUrl}
    className={`card-img-center ${imgClass}`}
    alt="Foto de perfil"
    style={imgStyle || {}}
  />
);

const BasicInfo = ({ name, description, nameClass }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h5 className={`card-title fw-bold mb-3 ${nameClass || ''}`}>
      {name}
    </h5>
    <p className="card-text text-muted fst-italic px-4 mb-4">
      {description}
    </p>
  </motion.div>
);

const SocialLinks = ({ links, buttonClasses }) => (
  <div className="d-flex justify-content-center gap-3 flex-wrap">
    {Object.entries(links).map(([platform, url]) => (
      <motion.button
        key={platform}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`btn ${buttonClasses[platform] || 'btn-primary'}`}
        onClick={() => window.open(url, '_blank')}
      >
        {platform}
        <i className={`bi bi-${platform.toLowerCase()} ms-2`}></i>
      </motion.button>
    ))}
  </div>
);

const DetailedInfo = ({ details }) => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="mt-4">
      {Object.entries(details).map(([section, content]) => (
        <div key={section} className="mb-3">
          <motion.button
            className="btn btn-outline-primary w-100"
            onClick={() => setActiveSection(activeSection === section ? null : section)}
            whileHover={{ scale: 1.02 }}
          >
            {section}
            <i className={`bi bi-chevron-${activeSection === section ? 'up' : 'down'} ms-2`}></i>
          </motion.button>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeSection === section ? 'auto' : 0,
              opacity: activeSection === section ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
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
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const MainCard = ({ cardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
    const detailedInfo = cardData.detailedInfo || {};

  return (
    <motion.div
      className={`card text-center shadow-sm rounded-4 ${cardData.cardClass}`}
      whileHover={{ y: -5 }}
      animate={{ scale: isExpanded ? 1.02 : 1 }}
      transition={{ duration: 0.3 }}
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

        <motion.button
          className="btn btn-outline-primary mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <i className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} ms-2`}></i>
        </motion.button>

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
    </motion.div>
  );
};

export default MainCard;