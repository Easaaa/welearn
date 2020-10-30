import React from "react";
import { MdDone } from "react-icons/md";
import { SuccessContainer, Title, Message, Btn } from "./style";

const SuccessModal = ({ title, message }) => (
  <SuccessContainer>
    <MdDone />
    <Title>{title}</Title>
    {message ? <Message>{message}</Message> : null}
  </SuccessContainer>
);

export default SuccessModal;
