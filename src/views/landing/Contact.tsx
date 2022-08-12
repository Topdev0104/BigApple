import React, { HtmlHTMLAttributes, useState } from "react";
import {
  ContactFormContainer,
  ContactFormWrapper,
  ContactImgWrapper,
  ContactSectionWrapper,
} from "./styles";
import contactImg from "assets/image/earth.png";
import { Button, Container, Input } from "components";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");
  const onSendMessage = async () => {
    toast.success("Successfully sent.", {
      theme: "dark",
    });
    setEmail("");
    setContext("");
  };
  return (
    <ContactSectionWrapper id="contact">
      <ContactFormWrapper>
        <Container>
          <ContactFormContainer>
            <h2>Contact to BigAppe</h2>
            <p>For all enquiries, please email us using the form below.</p>
            <Input
              mode="email"
              value={email}
              className="contact-input"
              required
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email."
            />
            <Input
              mode="textarea"
              value={context}
              placeholder="Messages."
              onChange={(e: any) => setContext(e.target.value)}
            />
            <Button className="fit-content border" onClick={onSendMessage}>
              Send message
            </Button>
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
