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
import axios from "axios";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const onSendMessage = async () => {
    if (email === "" || context === "") {
      toast.error("Please fill input.", {
        theme: "dark",
      });
    } else {
      setLoading(true);
      const data = {
        email: email,
        context: context,
      };
      axios
        .post("https://bigapple-backend.vercel.app/mint/mail", data)
        .then((res) => {
          toast.success("Successfully sent.", {
            theme: "dark",
          });
          setLoading(false);
          setEmail("");
          setContext("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ContactSectionWrapper id="contact">
      <ContactFormWrapper>
        <Container>
          <ContactFormContainer>
            <h2>Contact to BigApple</h2>
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
            <Button
              loading={loading}
              className="fit-content border"
              onClick={onSendMessage}
            >
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
