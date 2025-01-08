import { Row, Container, Col } from "react-bootstrap";
import logoImg from "../assets/img/DuccioRocca-1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {

    return (
        <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <Col sm={6}>
                <img src={logoImg} alt="Logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/duccio-rocca/" target="_blank" rel="noreferrer"> <img src={navIcon1} alt="LinkedIn Logo"/></a>
                    <a href="https://github.com/RINO-GAELICO" target="_blank" rel="noreferrer"> <img src={navIcon2} alt="Githubb Logo"/></a>
                </div>
                <p >CopyRight 2023. All Rights Reserved</p>

            </Col>
        </Row>
        </Container>
        </footer>

    );
}