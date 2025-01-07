import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import imgContact from "../assets/img/contact-img.png";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export const Contact = () => {
    const formInitialState = {
        email: "",
        message: "",
      };
  const [state, handleSubmit] = useForm("mlekqzbk");
  const [buttonText, setButtonText] = useState("Send");
  const [form, setForm] = useState(formInitialState);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onFormUpdate = (category, value) => {
    setForm({
      ...form,
      [category]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setButtonText("Sending...");
    await handleSubmit(event);
    setButtonText("Send");
    setForm(formInitialState);
    if (state.succeeded) {
      event.target.reset(); // Reset the form
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, [state.succeeded]);

  const [hasScrolled, setHasScrolled] = useState(false);

  const faqSectionRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (faqSectionRef.current && hash === "#connect" && !hasScrolled) {
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
    <section className="contact" id="connect" ref={faqSectionRef}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={imgContact} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>
              <form onSubmit={handleFormSubmit}>
                <Row className="justify-content-center">
                  <Col sm={6} className="px-1">
                    <input id="email" type="email" name="email" placeholder="Email"  value={form.email} onChange={(e)=> onFormUpdate('email', e.target.value )}/>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col sm={6} className="px-1">
                    <textarea id="message" name="message" row="6"  placeholder="Message" value={form.message} onChange={(e)=> onFormUpdate('message', e.target.value )}/>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                      <span>{buttonText}</span>
                    </button>
                    {showSuccessMessage && (
                      <Col>
                        <p

                        style={{fontSize: "2rem"}}

                        className="success p-3"
                        >
                          Thanks for your message. I'll be in touch soon!
                        </p>
                      </Col>
                    )}
                  </Col>
                </Row>
              </form>
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
