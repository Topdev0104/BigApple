import React from "react";
import {
  ContactFormContainer,
  ContactFormWrapper,
  ContactImgWrapper,
  ContactSectionWrapper,
} from "./styles";
import contactImg from "assets/image/earth.png";
import { Button, Container, Input } from "components";

const Contact: React.FC = () => {
  const handleChange = (e: any) => {};
  return (
    <ContactSectionWrapper id="contact">
      <ContactFormWrapper>
        <Container>
          <ContactFormContainer>
            <h2>Contact to BigAppe</h2>
            <p>For all enquiries, please email us using the form below.</p>
            <Input
              mode="email"
              className="contact-input"
              required
              onChange={handleChange}
              placeholder="Email."
            />
            <Input
              mode="textarea"
              onChange={handleChange}
              placeholder="Messages."
            />
            <Button className="fit-content border">Send message</Button>
          </ContactFormContainer>
        </Container>
      </ContactFormWrapper>
      <ContactImgWrapper>
        <img src={contactImg} alt="contactImg" />
      </ContactImgWrapper>
    </ContactSectionWrapper>
  );
};

export default Contact;
