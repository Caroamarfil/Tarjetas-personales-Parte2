import perfilTiago from "../TiagoCard/perfilTiago.jpg"
import perfilCaro from "../CaroCard/perfilCaro.jpg"
import perfilDario from "../DarioCard/DarioPic.jpg"
import perfilMaxi from "../MaxiCard/perfilMaxi.jpg"
import perfilMaria from "../MariaCard/maria.png"
import '../CaroCard/CaroCard.css'
import'../MariaCard/MariaCard.css'
import'../MaxiCard/MaxiCard.css'


export const cardsData = [
  //Datos y estilos de Tiago
  {
    name: "Tiago Ibarrola",
    description: "Me encanta el mundo de la tecnología y siempre estoy buscando nuevos desafíos.",
    imageUrl: perfilTiago,
    github: "https://github.com/tiago-appdev",
    linkedin: "https://www.linkedin.com/in/tiagoibarrola/",
    whatsapp: "5493704232537",
    cardClass: "bg-light text-dark border border-dark-subtle", 
    imgClass: "rounded-circle mx-auto d-block p-3 w-50 h-auto", 
    githubClass: "btn btn-primary rounded",  
    linkedinClass: "btn btn-primary rounded", 
    whatsappClass: "btn btn-primary rounded",
    githubIcon:"https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
    linkedinIcon:"https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
    whatsappIcon:"https://img.icons8.com/?size=100&id=30448&format=png&color=000000",
  },
  //Datos y estilos de Dario
  {
    name: "Dario Skidelsky",
    description: "Desarrollador apasionado por crear experiencias digitales innovadoras e impactantes",
    imageUrl: perfilDario, 
    github: "https://github.com/darioque",
    linkedin: "https://linkedin.com/in/dario-skidelsky",
    email: "mailto:darioque@dsk.ar",
    cardClass: "bg-light text-dark border border-dark-subtle",
    imgClass: "rounded-circle mx-auto d-block p-3 w-50 h-auto",
    imgStyle: { width: "130px", height: "130px", objectFit: "cover", marginBottom: "0" },
    githubClass: "btn btn-primary d-flex align-items-center gap-2",
    linkedinClass: "btn btn-outline-primary d-flex align-items-center gap-2",
    emailClass: "btn btn-outline-primary d-flex align-items-center gap-2",
    header: true,
    headerClass: "bg-primary p-4 rounded-top-4",
    tags: [
      { label: "Java", className: "badge bg-primary bg-opacity-10 text-primary" },
      { label: "Python", className: "badge bg-info bg-opacity-10 text-info" }
    ],
    footer: true,
    footerText: "Disponible para proyectos",
    footerIcon: "bi bi-clock me-1",
    footerColor: "bg-light text-muted small py-3",
    githubIcon: "bi bi-github", 
    linkedinIcon: "bi bi-linkedin",
    emailIcon: "bi bi-envelope"
  },
  //Datos y estilos de Caro
  {
    name: "Carolina Amarfil",
    description: "Disfruto de los desafíos que me presenta la programación y me encanta aprender nuevas cosas todos los días.",
    imageUrl: perfilCaro,
    github: "https://github.com/Caroamarfil",
    linkedin: "https://www.linkedin.com/in/carolina-amarfil-3a8125261/",
    whatsapp: "543518017680",
    cardClass: "bg-light text-dark border border-dark-subtle pink-card",
    whatsappClass: "btn btn-secondary text-light ",
    imgClass: "rounded-circle mx-auto mb-4 border border-3 border-white shadow",
    imgStyle: { width: "150px", height: "150px", objectFit: "cover", marginTop: "2rem" },
    githubClass: "btn btn-secondary text-light",
    linkedinClass: "btn btn-secondary text-light",
    githubIcon: "bi bi-github", 
    linkedinIcon: "bi bi-linkedin",
    whatsappIcon: "bi bi-whatsapp",
  },
  // Datos y estilos de Mary
  {
    name: "Maria Ozuna",
    nameClass:"style-script-regular",
    description: "Soy una desarrolladora de software apasionada por el diseño de interfaces amigables y accesibles.",
    imageUrl: perfilMaria,
    github: "https://github.com/MariaOzuna",
    linkedin: "https://www.linkedin.com/in/maria-ozuna/",
    whatsapp: "https://wa.me/543454347792?text=Estoy%20interesado/a%20en%20trabajar%20contigo",
    cardClass: "bg-light text-dark border border-dark-subtle bg-gradient",
    imgClass: "card-img-center p-5 w-50 h-50",
    imgStyle: { marginLeft: "auto", marginRight: "auto", borderRadius: "50%", objectFit: "cover" },
    githubClass: "btn btn-secondary rounded inter-regular",
    linkedinClass: "btn btn-primary rounded inter-regular",
    whatsappClass: "btn btn-success rounded inter-regular",
    githubIcon: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
    linkedinIcon: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
    whatsappIcon: "https://img.icons8.com/?size=100&id=30448&format=png&color=000000",
  },
  // Datos y estilos de Maxi
  {
    name: "Maximiliano Pereyra",
    nameClass:"bad-script-regular",
    description: "Enfocado en crear proyectos webs intuitivos y eficientes. Me gusta aportar soluciones creativas y funcionales.",
    imageUrl: perfilMaxi,
    github: "https://github.com/maxip98",
    linkedin: "https://www.linkedin.com/in/maximiliano-emanuel-pereyra/",
    whatsapp: "https://wa.me/543436101943?text=Maxi",
    cardClass: "bg-light text-dark border border-dark-subtle bg-gradient",
    imgClass: "card-img-center p-5 w-50 h-50",
    imgStyle: { marginLeft: "auto", marginRight: "auto", borderRadius: "50%", objectFit: "cover" },
    githubClass: "btn btn-secondary rounded amiko-regular",
    linkedinClass: "btn btn-primary rounded amiko-regular",
    whatsappClass: "btn btn-success rounded amiko-regular",
    githubIcon: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
    linkedinIcon: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
    whatsappIcon: "https://img.icons8.com/?size=100&id=30448&format=png&color=000000",
  }
 
];
