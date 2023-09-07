import back from '../../assets/video_pag2.mp4';
import insta from '../../assets/instagram.svg';
import face from '../../assets/facebook.svg';
import whats from '../../assets/whatsapp.svg';
import youtube from '../../assets/youtube.svg';
import { useInView } from 'react-intersection-observer';


import './Style.css'

export const Two = () => {
    const [ref, inView] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();

    return (
        <>
            <div className="header" id="header">
                <a href="./01.html">
                    <h1>Home</h1>
                </a>
                <a href="./02.html">
                    <h1>Sobre</h1>
                </a>
                <a href="./03.html">
                    <h1>Carta</h1>
                </a>
                <a href="./04.html">
                    <h1>Blog</h1>
                </a>
                <a href="./05.html">
                    <h1>Eventos</h1>
                </a>
                <a href="./06.html">
                    <h1>Contato</h1>
                </a>
            </div>
            <div className="header-fixed container-fluid">
                <div className="button" id="menu">
                    <i className="fas fa-grip-lines icon-menu" />
                    <i className="fas fa-grip-lines icon-menu " />
                </div>
                <div className="numbers_container">
                    <h1 className="number">02</h1>
                </div>
            </div>
            <div className="sound intro w-clearfix">
                <div className="html_sound w-embed w-script">
                    <div className="Sound">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
            <div  className="container" >
                <div className='div_1' >
                    <div  className="txt_central">
                        <div  ref={ref3} className={`titulo_p2_1 fade-in ${inView3 ? 'show' : ''}`}>Composições Líquidas</div>
                        <div className="txt_p2_1 d-flex">
                            <p  ref={ref} className={`explore-complex-text fade-in ${inView ? 'show' : ''}`}>
                                Explorar a complexidade e expressividade dos elementos de cada
                                ingrediente é o que nos motiva a criar e reproduzir coquetéis. Na
                                leveza ou densidade, transparência ou opacidade, nosso objetivo é
                                criar possibilidades, descobrir e revelar sabores, aromas e
                                texturas. Testando diferentes técnicas e ingredientes, nosso
                                propósito é criar coquetéis que provoquem emoções e desafiem as
                                expectativas. Nosso compromisso é proporcionar mais que um blend de
                                sabores, e sim algo a ser compartilhado.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='div_2'>
                    <div className="video_3">
                        <div className="video_2">
                            <video id="background-video_2" autoPlay loop muted>
                                <source src={back} type="video/mp4" />
                            </video>
                            <div className="txt_central2">
                                <div ref={ref4} className={`titulo_p2_2 fade-in ${inView4 ? 'show' : ''}`}>Uma instalação de luz e um bar</div>
                                <div ref={ref5} className={`txt_p2_2 fade-in ${inView5 ? 'show' : ''}`}>
                                    O CUBQ começou a ser idealizado em 2012, a partir da ideia de
                                    criar um bar itinerante montado dentro de uma estrutura inflável
                                    criada pela diretora de arte Juliana Lima. Sua estréia foi em
                                    junho de 2015 no Museu da Imagem e do Som, e desde então foram
                                    muitos eventos, a maioria voltados a arte e design.
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="logos-container">
                            <a href="http://www.instagram.com/barcubq" className="logo-link">
                                <img src={insta} loading="lazy" alt="" className="logo" />
                            </a>
                            <a href="https://www.facebook.com/cubqbar" className="logo-link">
                                <img src={face} loading="lazy" alt="" className="logo" />
                            </a>
                            <a href="https://wa.me/message/Y3XISQKQTGRXC1" className="logo-link">
                                <img
                                    src={whats}
                                    loading="lazy"
                                    alt=""
                                    className="logo-whatsapp"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCrnJq7dNKO2ll6YpLNd7sFg"
                                className="logo-link"
                            >
                                <img
                                    src={youtube}
                                    loading="lazy"
                                    alt=""
                                    className="logo-youtube"
                                />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );

};