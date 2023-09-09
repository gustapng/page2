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
            <div className="containerr" >
                <div className='div_1' >
                    <div className="content-one">
                        <div ref={ref3} className={`text-white  fade-in ${inView3 ? 'show' : ''}`}> <h1 className='title-video'>Composição De Ingredientes</h1> </div>
                        <div className="txt_p2_1 d-flex">
                            <p ref={ref5} className={`fade-in composition-para ${inView5 ? 'show' : ''}`}>
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
            </div>

            <div  className="second-container">
                <div style={{height: '1000px'}}  ref={ref4} className={`fade-in ${inView4 ? 'show' : ''}`}>
                    <video style={{ height: '100vh', width: '100%', objectFit: 'cover', margin: '0'}} autoPlay muted loop src={back}></video>
                    <div className="container-text">
                        <h1 className='title-video text-white'>Uma instalação de luz e um bar</h1>
                        <div className="txt_p2_1 d-flex">
                            <p className={`composition-para`}>
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
                <footer className="footer"><div className="logos-container"><a href="" className="logo-link"><img src={insta} loading="lazy" alt="" className="logo" /></a><a href="https://www.facebook.com/cubqbar" className="logo-link"><img src={face} loading="lazy" alt="" className="logo" /></a><a href="https://wa.me/message/Y3XISQKQTGRXC1" className="logo-link"><img src={whats} loading="lazy" alt="" className="logo-whatsapp" /></a><a href="https://www.youtube.com/channel/UCrnJq7dNKO2ll6YpLNd7sFg" className="logo-link"><img src={youtube} loading="lazy" alt="" className="logo-youtube" /></a></div></footer>
            </div>
        </>
    );
};

