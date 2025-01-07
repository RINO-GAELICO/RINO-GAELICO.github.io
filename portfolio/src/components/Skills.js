import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python-logo.png";
import javascript from "../assets/img/javascript-logo.png";
import java from "../assets/img/java.png";
import sql from "../assets/img/sql.png";
import colorSharp from "../assets/img/color-sharp.png";
import { useEffect,useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  const faqSectionRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (faqSectionRef.current && hash === "#skills" && !hasScrolled) {
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
  }, [faqSectionRef, hash, hasScrolled]);


  return (
    <section className="skill" id="skills" ref={faqSectionRef}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="skillText">Skills</h2>
              {/* <p>Some other words here</p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item p-3">
                  <img
                    className="img-fluid pythonImg"
                    src={python}
                    alt="ImagePython"
                  />
                  <h5 className="text-center">Python</h5>
                </div>
                <div className="item">
                  <img className="img-fluid" src={javascript} alt="ImageJS" />
                  <h5 className="text-center">Javascript</h5>
                </div>
                <div className="item">
                  <img className="img-fluid java" src={java} alt="ImageJava" />
                  <h5 className="text-center">Java</h5>
                </div>
                <div className="item">
                  <img className="img-fluid" src={sql} alt="ImageSql" />
                  <h5 className="text-center">SQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="ImageColorSharp"
        className="background-image-left"
      />
    </section>
  );
};
