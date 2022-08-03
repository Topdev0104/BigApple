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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <Input
              mode="input"
              className="contact-input"
              onChange={handleChange}
            />
            <Input mode="textarea" onChange={handleChange} />
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
