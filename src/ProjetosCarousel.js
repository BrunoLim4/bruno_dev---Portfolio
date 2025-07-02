import React from 'react';

// Importando componentes e estilos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';

// Importando os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Importando nosso CSS customizado para o carrossel
import './ProjetosCarousel.css';

// Dados dos projetos com caminhos de imagem para a web
const projectsData = [
    {
        id: 1,
        title: 'PedeAê',
        description: 'Cardápio digital completo e prático, ideal para pedidos no momento certo, seja no local ou via delivery...',
        image: '/img/PedeAê.png',
        imageClass: 'pede-ae-image',
        projectUrl: 'https://pedeae.vercel.app/',
    },
    {
        id: 2,
        title: '+Cultura',
        description: 'Uma plataforma prática e intuitiva para criar, divulgar e gerenciar eventos, com foco em design de interface...',
        image: '/img/cultura.png',
        imageClass: 'cultura-image',
        projectUrl: 'https://projeto-mais-cultura.vercel.app/',
    },
    {
        id: 3,
        title: 'Organix',
        description: 'Plataforma voltada à organização pessoal e aumento da produtividade diária, oferecendo gerenciamento...',
        image: '/img/Organix.png',
        imageClass: 'organix-image',
        projectUrl: 'https://organix-rpmq.onrender.com/',
    },
    {
        id: 4,
        title: 'Social Media BSH',
        description: 'Impulsione sua presença online com estratégias criativas, conteúdo de impacto e gestão completa...',
        image: '/img/BSH.png',
        imageClass: 'bsh-image',
        projectUrl: 'https://bshmedia.vercel.app/',
    },
    {
        id: 5,
        title: 'Captação de alunos',
        description: 'Landing page voltada para apresentar uma oportunidade de aprendizado e desenvolvimento pessoal...',
        image: '/img/Luis Meira.png',
        imageClass: 'luis-meira-image',
        projectUrl: 'https://luismeira.vercel.app/',
    },
    {
        id: 6,
        title: 'Contato Rápido - Dev Bruno',
        description: 'Tela de contato integrada ao WhatsApp, projetada para facilitar o primeiro atendimento...',
        image: '/img/bruno_simbolo.png',
        imageClass: 'dev-bruno-image',
        projectUrl: 'https://contatorapido.vercel.app/',
    },
];

const ProjetosCarousel = () => {
    return (
        <div className="carousel-container">
            <Swiper
                // Módulos que estamos usando
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                // Efeito 3D Coverflow
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // Paginação (as bolinhas abaixo)
                pagination={{ clickable: true }}
                // Navegação (setas de avançar/voltar)
                navigation={true}
                className="mySwiper"
            >
                {projectsData.map((project) => (
                    <SwiperSlide key={project.id} className="swiper-slide-custom">
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                            <div className="card">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`card-image ${project.imageClass}`}
                                />
                                <div className="text-container-gradient">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjetosCarousel;