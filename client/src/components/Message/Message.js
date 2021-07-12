import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  const [visibleAlert, setVisibleAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  });

  return visibleAlert && <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
