import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/duccio-computer.png';
import { useEffect,useState, useRef } from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import { useLocation } from "react-router-dom";



export const Banner = () => {

    const [loop, setLoop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ['my website', 'my Portfolio', '...'];
    const [txt, setTxt] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100); //time between letters
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    });

    const tick = () => {
        let i = loop % toRotate.length;
        let fullTxt = toRotate[i];
        let updateTxt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
        setTxt(updateTxt);

        if(isDeleting){
            setDelta(previous => previous / 2);
        }

        if(!isDeleting && updateTxt === fullTxt){
            setDelta(previous => period);
            setisDeleting(true);
        }else if(isDeleting && updateTxt === ''){
            setDelta(500);
            setisDeleting(false);
            setLoop(previous => previous + 1);
        }
    }


    const [hasScrolled, setHasScrolled] = useState(false);

  const faqSectionRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (faqSectionRef.current && hash === "#" && !hasScrolled) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth",

        inline: "center",

        block: "center",
      });

      setHasScrolled(true);
    }

    return () => {
      setHasScrolled(false);
    };
  }, [faqSectionRef, hash]);

  return (
    <section className="banner" id="home" >
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
            <span className="tagline">Welcome to Duccio's Website</span>
            <h1 > {`This is `}<span className="wrap">{txt}</span></h1>
            <p>I am passionate about solving problems, understanding systems, and building innovative solutions. I value collaboration and continuous learning and hold a Master's in Computer Science from San Francisco State University, with experience in high-performance computing, Kubernetes, and full-stack development.</p>
            <button onClick={()=> {
              const contactSection = document.getElementById('connect');
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }}>Let's Connect<ArrowRightCircle size={25}/></button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>

            </Col>
        </Row>
      </Container>
    </section>
  );
};
