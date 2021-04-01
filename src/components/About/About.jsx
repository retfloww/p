import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Über mich" />
        <Row className="about-wrapper">
          {/* <Col md={6} sm={12}> */}
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                {/* <AboutImg alt="profile picture" filename={img} /> */}
              </div>
            </Fade>
          {/* </Col>
          <Col md={6} sm={12}> */}
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hallo! Ich bin Jakub Bilski, 21 Jahre alt, wohne in Köln und würde mich selber als Programmier-Enthusiast bezeichnen.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Seit meiner Kindheit interessiere ich mich für Informatik, und seit meinem 16. Lebensjahr programmiere ich regelmäßig in meiner Freizeit. Mein Horizont ist hierbei aber nicht begrenzt, denn zusätzlich beschäftige ich mich gerne mit IT-Sicherheit.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Mein Fokus im Bereich des Programmierens liegt im Backend. Hierzu nutze ich hauptsächlich die Sprachen C++, C und Javascript. Im Folgenden findet Ihr meine aktuellsten Projekte, die ich im Laufe des letzten Jahres abgeschlossen habe. Viel Spaß beim anschauen!'}
                </p>
              </div>
            </Fade>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
