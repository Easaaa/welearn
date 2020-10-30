import React from "react";
import { ErrorContainer, Title, Message, Btn } from "./style";

import { MdError } from "react-icons/md";
/* export const useErrorModal = () => {
  const [toggleErrorMsg, setToggleErrorMsg] = React.useState(null)

  return { toggleErrorMsg, setToggleErrorMsg }
}
 */
const ErrorModal = ({ message, title }) => {
  return (
    <ErrorContainer>
      <MdError />
      <Title>{title}, please contact our support or try again.</Title>
      {message ? <Message>{message}</Message> : null}
    </ErrorContainer>
  );
};

export default ErrorModal;
