import { Col, Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import prjImg1 from "../assets/img/project-img1.png";
import prjImg2 from "../assets/img/project-img2.png";
import prjImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {
  const projects1 = [
    {
      title: "Project 1a",
      description: "This is a project",
      imageUrl: prjImg1,
    },
    {
      title: "Project 1b",
      description: "This is a project",
      imageUrl: prjImg2,
    },
    {
      title: "Project 1c",
      description: "This is a project",
      imageUrl: prjImg3,
    },
  ];
  const projects2 = [
    {
      title: "Project 2a",
      description: "This is a project",
      imageUrl: prjImg1,
    },
    {
      title: "Project 2b",
      description: "This is a project",
      imageUrl: prjImg2,
    },
    {
      title: "Project 2c",
      description: "This is a project",
      imageUrl: prjImg3,
    },
  ];
  const projects3 = [
    {
      title: "Project 3a",
      description: "This is a project",
      imageUrl: prjImg1,
    },
    {
      title: "Project 3b",
      description: "This is a project",
      imageUrl: prjImg2,
    },
    {
      title: "Project 3c",
      description: "This is a project",
      imageUrl: prjImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <div className="project-bx">
              <h2 className="projectText">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Project 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Project 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Project 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="link-1">
                    <Row>
                      {projects1.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="link-2">
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="link-3">
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
