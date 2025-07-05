import React, { useState, useEffect } from 'react';
import './App.css'; // Importa os estilos CSS
import ProjetosCarousel from './ProjetosCarousel';

// Importando ícones da biblioteca react-icons
import { FaReact, FaJsSquare, FaHtml5, FaCss3, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiReactos } from "react-icons/si"; // Ícone similar para React Native

// Componente para a animação dos ícones de tecnologia
function AnimatedTechStack() {
    const icons = [
        { icon: <FaReact size={48} color="#8a2be2" />, label: 'React' },
        { icon: <SiReactos size={48} color="#b268ff" />, label: 'React Native' },
        { icon: <FaJsSquare size={48} color="#fff" />, label: 'JavaScript' },
        { icon: <FaHtml5 size={48} color="#8a2be2" />, label: 'HTML' },
        { icon: <FaCss3 size={48} color="#b268ff" />, label: 'CSS' },
    ];

    return (
        <div className="tech-icons-row">
            {icons.map((item, i) => (
                <div key={i} className="icon-wrapper" style={{'--shadow-color': item.icon.props.color}}>
                    {item.icon}
                </div>
            ))}
        </div>
    );
}

// Componente do Carrossel (Placeholder)
// A lógica do carrossel precisa ser implementada com uma biblioteca de React como 'react-slick' ou 'swiper'
function Carousel({ images }) {
    // Exemplo de placeholder simples. Troque por um componente de carrossel real.
    return (
        <div className="carousel-placeholder">
            <p>Carrossel de Projetos</p>
            <div className="carousel-images">
                {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} className="carousel-image-item" />
                ))}
            </div>
        </div>
    );
}


export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula o tempo de carregamento da splash screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, []);

    // Placeholder para as imagens do carrossel
    const projectImages = [
        { src: '../public/img/bruno.png', alt: 'Projeto 1' },
        { src: '../public/img/iconeNome.png', alt: 'Projeto 2' },
    ];

    if (loading) {
        return (
            <div className="splash-container">
                <img src="/img/bruno_simbolo.png" className="splash-logo" alt="Logo" />
            </div>
        );
    }

    return (
        <div className="container">
            {/* Cabeçalho */}
            <header className="header">
                <div className="blur-background">
                    <div className="gradient-header">
                        <img src="/img/iconeNome.png" alt="Logo Nome" className="logo" />
                    </div>
                </div>
                <div className="bottom-border" />
            </header>

            <main>
                {/* Seção Hero */}
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="title">
                            Hello <span className="highlight">World</span>!
                        </h1>
                        <p className="subtitle">
                            Sou desenvolvedor web especializado<br /> em criar soluções modernas,<br />responsivas e de alta qualidade.
                        </p>
                        <a href="https://wa.me/5577988500087" target="_blank" rel="noopener noreferrer" className="button-link">
                            <div className="button-gradient">
                                <span className="button-text">Entre em contato</span>
                            </div>
                        </a>
                    </div>
                    <div className="hero-profile-container">
                        <div className="hero-profile">
                            <img src="/img/bruno.png" className="profile-img" alt="Bruno Lima" />
                        </div>
                        <p className="dev-name">Bruno Lima</p>
                        <p className="dev-role">Desenvolvedor de Software</p>
                    </div>
                </section>

                {/* Seção Tecnologias */}
                <section className="tech-section">
                    <h2 className="technologias">TECNOLOGIAS</h2>
                    <AnimatedTechStack />
                </section>

                {/* Seção Projetos */}
                <section className="project-section">
                    <h2 className="section-title">MEUS PROJETOS</h2>
                    <ProjetosCarousel />
                </section>
            </main>

            {/* Rodapé */}
            <footer className="footer-container">
                <div className="footer-gradient-background" />
                <div className="footer-content">
                    <img src="/img/bruno_simbolo.png" alt="Logo Símbolo" className="footer-logo" />
                    <div className="divider" />
                    <div className="social-row">
                        <a href="https://wa.me/5577988500087" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FaWhatsapp size={28} color="white" />
                        </a>
                        <a href="https://github.com/BrunoLim4" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FaGithub size={28} color="white" />
                        </a>
                        <a href="https://www.instagram.com/dev.bruno_?igsh=NjUwN2lpZmgydngy" target="_blank" rel="noopener noreferrer" className="social-button">
                            <FaInstagram size={28} color="white" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}