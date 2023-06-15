import { Col, Container, Row, TabContent } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a project",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      description: "This is a project",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      description: "This is a project",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Project 4",
      description: "This is a project",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2 className="projectText">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    Project 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    Project 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disalink-3" >
                    Project 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="link-1">
                    <Row>
                        {
                        projects.map( (project, index) => {
                            return (
                                <p>{projects.title}</p>
                            );
                        })
                    }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="link-2">Some text</Tab.Pane>
                    <Tab.Pane eventKey="link-3">Some text</Tab.Pane>
              </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
