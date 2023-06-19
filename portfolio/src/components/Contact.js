import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row,Col } from "react-bootstrap";
import imgContact from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(formInitialState);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setForm({
      ...form,
      [category]: value,
    });
  }

    const submitForm = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", { // fetch is a promise

            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(form),
        });
        setButtonText("Send");
        let result = await response.json(); // wait for response to come back
        setForm(formInitialState);
        if(result.code === 200){
            setStatus({
                success: true,
                message: "Thanks for your message. I'll be in touch soon!",
            });
        } else {
            setStatus({
                success: false,
                message: "Something went wrong  :(",
            });
        };
    };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
            <Col md={6}>
                <img src={imgContact} alt="Contact us" />
            </Col>
            <Col md={6}>
                <h2>
                    <form onSubmit={submitForm}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={form.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value )}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={form.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value )}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={form.email} placeholder="Email" onChange={(e)=> onFormUpdate('email', e.target.value )}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <textarea row="6" value={form.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value )}/>
                                <button type="submit"> <span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && (
                                    <Col >
                                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                )
                            }
                        </Row>
                    </form>
                </h2>
            </Col>
        </Row>
      </Container>
    </section>
  );
};
