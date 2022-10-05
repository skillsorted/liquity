import React from "react";
import Modal from "react-modal";
import { useColorMode } from "theme-ui";
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "620px",
    width: "580px",
    maxHeight: "94vh",
  },
  overlay: { zIndex: 2 }
};

const modalStyleDark = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "620px",
    width: "580px",
    maxHeight: "94vh",
    background: "#2c2c2c"
  },
  overlay: { zIndex: 2 }
};

type ModalProps = {
  onDismiss: () => void;
  style?: React.CSSProperties;
};

export const ReactModal: React.FC<ModalProps> = ({ children, onDismiss, style }) => {
  const handleDismiss = () => onDismiss();
  const [colorMode] = useColorMode();

  return colorMode === 'dark' ?
    (<Modal
      isOpen={true}
      onRequestClose={handleDismiss}
      style={{ ...modalStyleDark, content: { ...modalStyleDark.content, ...style } }}
    >
      {children}
    </Modal>) : (<Modal
      isOpen={true}
      onRequestClose={handleDismiss}
      style={{ ...modalStyle, content: { ...modalStyle.content, ...style } }}
    >
      {children}
    </Modal>);

};
