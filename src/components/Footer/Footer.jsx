import React from 'react';
import './Footer.css';
import logo from '../../assets/Logocompleto.png';
import chiru from '../../assets/chiru.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    {/* Column 1: Brand & Info */}
                    <div className="footer-col brand-col">
                        <img src={logo} alt="Trumontt Group Logo" className="footer-logo" />
                        <p className="footer-description">
                            Empresa líder en mantenimiento de edificios, construcción, consultoría y gestión inmobiliaria.
                            Brindamos soluciones integrales para potenciar el valor de tus proyectos.
                        </p>
                        <div className="footer-schedule">
                            <strong>Horario de atención:</strong>
                            <span>Lunes a Sábado: 8:00 - 17:30</span>
                        </div>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="footer-col contact-col">
                        <h3 className="footer-title">Contacto</h3>
                        <ul className="contact-list">
                            <li>
                                <span className="icon">📍</span>
                                <span>Av. República de Chile, Nro. 478 Dpto. 603</span>
                            </li>
                            <li>
                                <span className="icon">📞</span>
                                <a href="tel:+51941719858" style={{ color: 'inherit', textDecoration: 'none' }}>+51 941 719 858</a>
                            </li>
                            <li>
                                <span className="icon">✉️</span>
                                <a href="mailto:comercial@trumontt.com" style={{ color: 'inherit', textDecoration: 'none' }}>comercial@trumontt.com</a>
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/51941719858?text=Hola,%20quisiera%20mas%20información"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            Chatear en WhatsApp
                        </a>
                    </div>

                    {/* Column 3: Presence & Social */}
                    <div className="footer-col social-col">
                        <h3 className="footer-title">Nuestra Presencia</h3>
                        <p className="location-text">Lima, Perú</p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/people/Trumontt-Group/100089414198435/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H7V12H10V9.5C10 6.67 11.93 5 14.61 5C15.9 5 17 5.13 17 5.13V7.9H15.65C14.25 7.9 14 8.76 14 9.87V12H17.5L17 15H14V21.8C18.56 20.87 22 16.84 22 12Z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/trumontt-group/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM8 19H5V9H8V19ZM6.5 7.62C5.67 7.62 5 6.94 5 6.12C5 5.3 5.67 4.62 6.5 4.62C7.33 4.62 8 5.3 8 6.12C8 6.94 7.33 7.62 6.5 7.62ZM19 19H16V13.88C16 12.63 15.5 11.75 14.38 11.75C13.5 11.75 13 12.38 12.75 13C12.63 13.19 12.63 13.44 12.63 13.75V19H9.63C9.63 19 9.63 10.25 9.63 9H12.63V10.25C13 9.63 13.88 8.75 15.38 8.75C17.13 8.75 19 9.75 19 12.88V19Z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/51941719858?text=Hola,%20quisiera%20mas%20información" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 13.96C16.5 13.83 15.3 13.25 15.08 13.14C14.86 13.04 14.7 12.98 14.54 13.22C14.38 13.47 13.92 14 13.78 14.17C13.64 14.33 13.5 14.36 13.25 14.23C13 14.1 12.2 13.84 11.24 12.99C10.5 12.33 10 11.5 9.86 11.27C9.74 11.03 9.87 10.9 9.99 10.78C10.1 10.66 10.23 10.48 10.35 10.33C10.48 10.19 10.52 10.08 10.6 9.92C10.68 9.77 10.64 9.63 10.58 9.51C10.52 9.4 10.06 8.27 9.87 7.82C9.68 7.37 9.49 7.43 9.35 7.43C9.22 7.43 9.07 7.43 8.92 7.43C8.77 7.43 8.52 7.48 8.32 7.71C8.12 7.93 7.55 8.46 7.55 9.54C7.55 10.62 8.34 11.67 8.45 11.82C8.57 11.97 10.12 14.33 12.45 15.38C14.16 16.14 14.86 15.99 15.53 15.93C16.27 15.86 17.65 15.13 17.94 14.31C18.23 13.48 18.23 12.78 18.15 12.63C18.06 12.49 17.9 12.41 17.65 12.28H16.75V13.96ZM12 2C6.48 2 2 6.48 2 12C2 13.93 2.54 15.79 3.5 17.38L2.01 22L6.75 20.73C8.28 21.57 10.1 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/trumontt/?fbclid=IwY2xjawPSV9JleHRuA2FlbQIxMQBicmlkETFRY3NsYW9XVE9ZV004aUNuc3J0YwZhcHBfaWQBMAABHufuUOGYUdRvwXcfrS7_GBV-hLmiyEW2Vf8WOUYFHwwtRgvqXr5u0YCIAeai_aem_JKy5rHsy0CH09B-9b-mjKw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2ZM7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5ZM12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7ZM12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@trumontt_group?lang=es" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6 5.82C15.1 5.14 14.1 3.66 14.1 1.96V1H11V14.9C11 16.63 9.63 18 7.9 18C6.17 18 4.8 16.63 4.8 14.9C4.8 13.17 6.17 11.8 7.9 11.8C8.2 11.8 8.5 11.85 8.78 11.95V8.85C8.5 8.78 8.2 8.75 7.9 8.75C4.5 8.75 1.75 11.5 1.75 14.9C1.75 18.3 4.5 21.05 7.9 21.05C11.3 21.05 14.05 18.3 14.05 14.9V7.6C16.1 9.15 18.6 9.68 20.89 9.19V6.15C19.34 6.54 17.75 6.42 16.6 5.82Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub-footer">
                <div className="container">
                    <div className="powered-by">
                        <span>Powered by</span>
                        <a href="https://chiru.app/es/solutions" target="_blank" rel="noopener noreferrer">
                            <img src={chiru} alt="Chiru - Software Solutions" className="chiru-logo" />
                        </a>
                    </div>
                    <p>© 2026 Trumontt Group. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
