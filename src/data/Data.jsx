import perfilTiago from '../images/perfilTiago.jpg';
import perfilCaro from '../images/perfilCaro.jpg';
import perfilDario from '../images/DarioPic.jpg';
import perfilMaxi from '../images/perfilMaxi.jpg';
import perfilMaria from '../images/maria.png';


export const cardsData = [
  //Datos y estilos de Tiago
  {
    id: 1,
    name: 'Tiago Ibarrola',
    description: 'Me encanta el mundo de la tecnología y siempre estoy buscando nuevos desafíos.',
    imageUrl: perfilTiago,
    github: 'https://github.com/tiago-appdev',
    linkedin: 'https://www.linkedin.com/in/tiagoibarrola/',
    whatsapp: '5493704232537',
    cardClass: 'bg-light text-dark border border-dark-subtle',
    imgClass: 'rounded-circle mx-auto d-block p-3 w-50 h-auto',
    githubClass: 'btn btn-primary rounded',
    linkedinClass: 'btn btn-primary rounded',
    whatsappClass: 'btn btn-primary rounded',
    githubIcon: 'https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000',
    linkedinIcon: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
    whatsappIcon: 'https://img.icons8.com/?size=100&id=30448&format=png&color=000000',
additionalInfo: {
      experience: [
        {
          role: 'Prácticas académicas',
          company: 'IFTS N° 29',
          period: '2023 - Presente',
        },
      ],
      education: [
        {
          degree: 'Técnico en Reparación y Mantenimiento de PC',
          institution: 'Instituto Mariano Moreno',
          year: '2009-2011',
        },
        {
          degree: 'Tecnicatura Superior en Desarrollo de Software',
          institution: 'IFTS N°29',
          year: '2023 - Actualidad',
        },
      ],
      hobbies: ['Leer', 'Programar', 'Ver series', 'Actividades al aire libre'],
      languages: [
        { language: 'Spanish', level: 'Nativo' },
        { language: 'English', level: 'B1-Intermedio' },
        { language: 'Guarani', level: 'Profesional' },
      ],
      certifications: [
        {
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'AWS',
          year: '2024',
        },
      ],
    }
  },
  //Datos y estilos de Dario
  {
    id: 2,
    name: 'Dario Skidelsky',
    description:
      'Desarrollador apasionado por crear experiencias digitales innovadoras e impactantes',
    imageUrl: perfilDario,
    github: 'https://github.com/darioque',
    linkedin: 'https://linkedin.com/in/dario-skidelsky',
    email: 'mailto:darioque@dsk.ar',
    cardClass: 'bg-light text-dark border border-dark-subtle',
    imgClass: 'rounded-circle mx-auto d-block p-3 w-50 h-auto',
    imgStyle: {
      width: '130px',
      height: '130px',
      objectFit: 'cover',
      marginBottom: '0',
    },
    githubClass: 'btn btn-primary d-flex align-items-center gap-2',
    linkedinClass: 'btn btn-outline-primary d-flex align-items-center gap-2',
    emailClass: 'btn btn-outline-primary d-flex align-items-center gap-2',
    header: true,
    headerClass: 'bg-primary p-4 rounded-top-4',
    tags: [
      {
        label: 'Java',
        className: 'badge bg-primary bg-opacity-10 text-primary',
      },
      { label: 'Python', className: 'badge bg-info bg-opacity-10 text-info' },
    ],
    footer: true,
    footerText: 'Disponible para proyectos',
    footerIcon: 'bi bi-clock me-1',
    footerColor: 'bg-light text-muted small py-3',
    githubIcon: 'bi bi-github',
    linkedinIcon: 'bi bi-linkedin',
    emailIcon: 'bi bi-envelope',
    additionalInfo: {
        experience: [
          { role: 'Java Developer', company: 'Globant', period: '2024 - Present' },
          { role: 'Analista Programador', company: 'RI', period: '2023 - 2024' }
        ],
        education: [
          { degree: 'Ingeneria en Sistemas', institution: 'UTN', year: '2019-En Curso' }
        ],
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Java'],
        hobbies: ['Programar', 'Gaming', 'Anime', 'Futbol'],
        languages: [
          { language: 'Spanish', level: 'Nativo' },
          { language: 'English', level: 'C2 - Avanzado' },
          { language: 'Portugués', level: 'B1 - Intermedio' }
        ],
        certifications: [
          { name: 'Certified Tech Developer', issuer: 'Egg', year: '2023' }
        ]
      }
  },
  //Datos y estilos de Caro
  {
    id: 3,
    name: 'Carolina Amarfil',
    description:
      'Disfruto de los desafíos que me presenta la programación y me encanta aprender nuevas cosas todos los días.',
    imageUrl: perfilCaro,
    github: 'https://github.com/Caroamarfil',
    linkedin: 'https://www.linkedin.com/in/carolina-amarfil-3a8125261/',
    whatsapp: '543518017680',
    cardClass: 'bg-light text-dark border border-dark-subtle pink-card',
    whatsappClass: 'btn btn-secondary text-light ',
    imgClass: 'rounded-circle mx-auto mb-4 border border-3 border-white shadow',
    imgStyle: {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginTop: '2rem',
    },
    githubClass: 'btn btn-secondary text-light',
    linkedinClass: 'btn btn-secondary text-light',
    githubIcon: 'bi bi-github',
    linkedinIcon: 'bi bi-linkedin',
    whatsappIcon: 'bi bi-whatsapp',
    additionalInfo: {
      experience: [
        { role: 'Prácticas académicas', company: 'IFTS N° 29', period: '2023 - Present' }
      ],
      education: [
        { degree: 'Tecnicutura Superior en Desarrollo de Software', institution: 'IFTS N°29', year: '2023-En Curso' }
      ],
      hobbies: ['Leer', 'Cinéfila','Cocina étnica'],
      languages: [
        { language: 'Spanish', level: 'Nativo' },
        { language: 'English', level: 'C2 - Avanzado' }
      ],
      certifications: [
        { name: 'Full Stack Developer- Python', issuer: 'Codo a codo 4.0', year: '2023' },
        { name: 'Programación desde cero', issuer: 'Egg', year: '2022' }
        
      ]
    }
  },
  // Datos y estilos de Mary
  {
    id: 4,
    name: 'Maria Ozuna',
    nameClass: 'style-script-regular',
    description:
      'Soy una desarrolladora de software apasionada por el diseño de interfaces amigables y accesibles.',
    imageUrl: perfilMaria,
    github: 'https://github.com/MariaOzuna',
    linkedin: 'https://www.linkedin.com/in/maria-ozuna/',
    whatsapp:
      'https://wa.me/543454347792?text=Estoy%20interesado/a%20en%20trabajar%20contigo',
    cardClass: 'bg-light text-dark border border-dark-subtle bg-gradient',
    imgClass: 'rounded-circle mx-auto d-block p-3 w-50 h-auto',
    imgStyle: {
      width: '130px',
      height: '130px',
      objectFit: 'cover',
      marginBottom: '0',
    },
    githubClass: 'btn btn-secondary rounded inter-regular',
    linkedinClass: 'btn btn-primary rounded inter-regular',
    whatsappClass: 'btn btn-success rounded inter-regular',
    githubIcon:
      'https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000',
    linkedinIcon:
      'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
    whatsappIcon:
      'https://img.icons8.com/?size=100&id=30448&format=png&color=000000',
      additionalInfo: {
        education: [
	  { degree: 'Tecnico en Desarrollo de Software', institution: 'IFTS29', year: '2023-En Curso' },
	  { degree: 'Tecnico en Desarrollo Web', institution: 'UNER', year: '2024-En Curso' }
        ],
        skills: ['Java', 'Desarrollo Web', 'MySQL', 'OCI', 'Python'],
        hobbies: ['Musica', 'Novelas', 'kdramas'],
        languages: [
          { language: 'Spanish', level: 'Nativo' },
          { language: 'English', level: 'Advanced' },
        ],
        certifications: [
          { name: 'Certified Back-end', issuer: 'Oracle Next Education', year: '2023' }
        ]
      }
  },
  // Datos y estilos de Maxi
  {
    id: 5,
    name: 'Maximiliano Pereyra',
    nameClass: 'bad-script-regular',
    description:
      'Enfocado en crear proyectos webs intuitivos y eficientes. Me gusta aportar soluciones creativas y funcionales.',
    imageUrl: perfilMaxi,
    github: 'https://github.com/maxip98',
    linkedin: 'https://www.linkedin.com/in/maximiliano-emanuel-pereyra/',
    whatsapp: 'https://wa.me/543436101943?text=Maxi',
    cardClass: 'bg-light text-dark border border-dark-subtle bg-gradient',
    imgClass: 'card-img-center p-5 w-50 h-50',
    imgStyle: {
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    githubClass: 'btn btn-secondary rounded amiko-regular',
    linkedinClass: 'btn btn-primary rounded amiko-regular',
    whatsappClass: 'btn btn-success rounded amiko-regular',
    githubIcon:
      'https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000',
    linkedinIcon:
      'https://img.icons8.com/?size=100&id=13930&format=png&color=000000',
    whatsappIcon:
      'https://img.icons8.com/?size=100&id=30448&format=png&color=000000',
      additionalInfo: {
        education: [
	  { degree: 'Tecnico en Desarrollo de Software', institution: 'IFTS29', year: '2023-En Curso' },
        ],
        hobbies: ['Leer', 'Andar en bici'],
      }
  },
];
