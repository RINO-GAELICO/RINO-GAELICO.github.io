import { Col, Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import prjImg1 from "../assets/img/Pj1_A.png";
import prjImg2 from "../assets/img/Pj1_B.png";
import prjImg3 from "../assets/img/PJ_C.png";
import prjImg4 from "../assets/img/Pj2_B.png";
import prjImg5 from "../assets/img/Pj2_A.png";
import prjImg6 from "../assets/img/Pj2_C.png";
import prjImg7 from "../assets/img/Pj3_A.png";
import prjImg8 from "../assets/img/Pj3_B.png";
import prjImg9 from "../assets/img/Pj3_C.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const Projects = () => {
  const projects1 = [
    {
      title: "Frontend",
      description: "I leveraged technologies such as HTML, CSS, JavaScript, Handlebars, and Bootstrap to create dynamic and responsive web pages.",
      imageUrl: prjImg1,
    },
    {
      title: "Node, Express, and MySql",
      description: "On the server side, I designed and developed the backend of the application, including the database to store user information and the multimedia files.",
      imageUrl: prjImg2,
    },
    {
      title: "AWS EC2",
      description: "The application was deployed on AWS EC2, and the domain name is registered on AWS Route 53",
      imageUrl: prjImg3,
    },
  ];
  const projects2 = [
    {
      title: "PCA",
      description: "PCA is a powerful dimensionality reduction technique widely used in computer vision. By employing PCA, I effectively extracted the most discriminative features from facial images.",
      imageUrl: prjImg4,
    },
    {
      title: "Nearest-neighbor classification",
      description: "The face-recognition system incorporated a nearest-neighbor classification approach, utilizing the Euclidean distance metric to measure the similarity between faces.",
      imageUrl: prjImg5,
    },
    {
      title: "Accuracy rate",
      description: " I evaluated the system's performance through accuracy rate. The final result was 82% accuracy rate, which validated the effectiveness and robustness of the system.",
      imageUrl: prjImg6,
    },
  ];
  const projects3 = [
    {
      title: "FAT Table",
      description: "To locate a file or a specific cluster on the storage device, the FAT32 file system uses the FAT32 table. It starts from the root directory and follows a chain of entries in the table, each pointing to the next cluster in the file or directory. This chain of entries forms a linked list that allows the file system to navigate through the clusters and access the data.",
      imageUrl: prjImg7,
    },
    {
      title: "Basic I/O operations",
      description: "It incorporated functionality for performing input/output (I/O) operations, allowing users to read from and write to files stored within the file system.",
      imageUrl: prjImg8,
    },
    {
      title: "File system",
      description: "Throughout the project, I gained a deeper understanding of file system design and implementation. Working with data structures such as directory structures and file control blocks, I ensured proper organization and management of files and directories within the file system.",
      imageUrl: prjImg9,
    },
  ];

  const [hasScrolled, setHasScrolled] = useState(false);

  const faqSectionRef = useRef(null);

  const { hash } = useLocation();

  // useEffect(() => {
  //   if (faqSectionRef.current && hash === "#projects" && !hasScrolled) {
  //     faqSectionRef.current.scrollIntoView({
  //       behavior: "smooth",

  //       inline: "center",

  //       block: "center",
  //     });

  //     setHasScrolled(true);
  //   }

  //   return () => {
  //     setHasScrolled(false);
  //   };
  // }, [faqSectionRef, hash]);
  

  return (
    <section className="project" id="projects" ref={faqSectionRef}>
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft": ""}>
            <div className="project-bx">
              <h2 className="projectText">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Web App</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Eigenfaces PCA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">File System FAT32</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                
                  
                  <Tab.Pane eventKey="link-1">
                  <p>In this project I took the role of Backend Lead. We developed a web application focused on facilitating the exchange of multimedia files. 
                    The application, named GaterTrader, can be accessed at https://gatertrader.com/ and the project repository is available on GitHub at https://github.com/RINO-GAELICO/gaterTrader.
                    </p>
                    <Row>
                      {projects1.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="link-2">
                    <p> For this project I implemented a face-recognition system that uses Principal Component Analysis. The project's repository can be found at https://github.com/RINO-GAELICO/EigenFaces.

The system's performance was assessed through both qualitative and quantitative analyses of the results, resulting in an accuracy rate of 82%.</p>
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="link-3">
                  <p>For this project, our team undertook the development of a file system based on the FAT32 format. The file system was designed using a 32-bit File Allocation Table (FAT) composed of 512-byte blocks, implemented in the C programming language.</p>
                    <Row>
                      {projects3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              
            </div>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
