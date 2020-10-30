import React, { useState, useEffect } from "react";

import ErrorModal from "./error";
import SuccessModal from "./success";

export const useResultModal = () => {
  const [resultMsg, setResultMsg] = useState(null);

  useEffect(() => {
    if (resultMsg) {
      setTimeout(() => setResultMsg(null), 5000);
    }
  }, [resultMsg]);

  return { resultMsg, setResultMsg };
};

export const ResultModal = ({ type, title, message }) => {
  if (type === "error") {
    // render error modal
    return <ErrorModal title={title} message={message} />;
  } else {
    // render success modal
    return <SuccessModal title={title} message={message} />;
  }
};
