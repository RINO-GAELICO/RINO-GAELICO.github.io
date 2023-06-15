import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/duccio-computer.png';
import { useEffect,useState } from "react";



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

    

  return (
    <section className="banner" id="home" >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to Duccio's Portfolio</span>
            <h1 > {`This is `}<span className="wrap">{txt}</span></h1>
            <p>Just some more info here</p>
            <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
            </Col>
        </Row>
      </Container>
    </section>
  );
};
