import { Col, Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import prjImg1 from "../assets/img/Pj1_A.png";
import prjImg2 from "../assets/img/Pj1_B.png";
import prjImg3 from "../assets/img/Pj1_C.png";
import prjImg4 from "../assets/img/Pj2_B_old.png";
import prjImg5 from "../assets/img/Pj2_B.png";
import prjImg6 from "../assets/img/Pj2_C.png";
import prjImg7 from "../assets/img/Pj3_A.png";
import prjImg8 from "../assets/img/Pj3_B.png";
import prjImg9 from "../assets/img/Pj3_C.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import { useRef } from "react";


export const Projects = () => {
  const projects1 = [
    {
      title: "GaterTrader",
      description: "We developed a web application that facilitates the exchange of multimedia files. It allows users to upload, download, and share files. I implemented the backend system using Node.js and Express.js, integrated a database, and deployed the application on AWS.",
      imageUrl: prjImg1,
    },
    {
      title: "Analytical Engine in Healthcare Application",
      description: "I designed and implemented a user-centric tool for data retrieval and augmentation, visualization, and advanced analysis within the HVFQI web application. The tool I implemented allows users to gain real-time insights from complex datasets.",
      imageUrl: prjImg2,
    },
    {
      title: "Infrastructure Contributions",
      description: "I designed and configured an AWS EKS cluster, implementing an Ingress Controller to manage traffic routing between two services: one supporting the game platform and another, the 'llm' service, which interacts with the platform via APIs and provides a user-facing playground interface.",
      imageUrl: prjImg3,
    },
  ];
  const projects2 = [
    {
      title: "EigenFaces",
      description: "Inspired by the famous paper from M. Turk and A. Pentland, I developed (with Matlab) a face-recognition system that extracted discriminative facial features leveraging PCA. The system utilized a nearest-neighbor classification approach with Euclidean distance to measure facial similarity, achieving an accuracy rate of 82%",
      imageUrl: prjImg4,
    },
    {
      title: "Image Segmentation",
      description: "Conducted an in-depth investigation into the parallel implementation of the Mean Shift algorithm for image segmentation. Utilizing OpenMP and CUDA, the project focused on optimizing performance and addressing computational intensity to enhance real-time applicability.",
      imageUrl: prjImg5,
    },
    {
      title: "CVI screener",
      description: " Developed a ML-based screening tool for early detection of cognitive visual impairment (CVI), utilizing a feedforward neural network (FNN) for classification. By employing systematic feature selection, the tool reduced the number of required questions to five while maintaining high predictive accuracy.",
      imageUrl: prjImg6,
    },
  ];
  const projects3 = [
    {
      title: "K8s for HPC",
      description: "Implemented Kubernetes (K8s) integration into the High-Performance Computing (HPC) NERSC system, enhancing resource allocation and container deployment using Podman on suitable nodes, optimizing workflows for large-scale computational tasks.",
      imageUrl: prjImg7,
    },
    {
      title: "FaaS for HPC",
      description: "Contributed to the evaluation and optimization of Function-as-a-Service (FaaS) tools, analyzing performance metrics such as throughput and scalability, and improving computational efficiency for high-performance computing environments.",
      imageUrl: prjImg8,
    },
    {
      title: "Documentation",
      description: "Drafted comprehensive documentation for over 1000 NERSC users through GitLab, detailing the integration of FaaS tools. Presented experimental results to more than 100 colleagues, ensuring clarity and accessibility of technical information for efficient collaboration.",
      imageUrl: prjImg9,
    },
];


  const faqSectionRef = useRef(null);


  return (
    <section className="project" id="projects" ref={faqSectionRef}>
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated": ""}>
            <div className="project-bx">
              <h2 className="projectText">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Machine Learning</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Kubernetes/HPC</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>


                  <Tab.Pane eventKey="link-1">
                  <p>
                  I have contributed to multiple projects requiring web development skills.
                  I developed backend systems using Node.js and Express.js, integrated databases, deployed the application on AWS. Additionally, I created responsive and dynamic web pages using React and TypeScript.
                    </p>
                    <Row>
                      {projects1.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="link-2">
                    <p> I have worked on multiple projects leveraging machine learning techniques. One such project involved implementing a face-recognition system using Principal Component Analysis. Another project focused on optimizing an image segmentation application through parallelization using OpenMP and CUDA. Additionally, I developed a Feedforward Neural Network using PyTorch. </p>
                    <Row>
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="link-3">
                  <p>During my internship at Berkeley Lab, I worked on integrating Kubernetes into the HPC NERSC system to improve adaptability and efficiency. This included implementing a control plane for Slurm resource allocation and deploying containers with Podman on appropriate nodes. I also contributed to optimizing Function-as-a-Service (FaaS) tools, evaluating performance using metrics like throughput and scaling efficiency.</p>
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
