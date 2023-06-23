import React from "react";
import { Modal, Button, IModalProps } from "native-base";

export interface IModalInformationProps extends IModalProps {
  title?: string | JSX.Element;
  onConfirm?: () => void;
  onClose?: () => void;
  confirmTitleBtn?: string;
}

function ModalInformation({
  title,
  children,
  onClose,
  onConfirm,
  confirmTitleBtn,
  ...rest
}: IModalInformationProps) {
  return (
    <Modal {...rest}>
      <Modal.Content borderWidth={3} borderColor="gray.400" bg="primary.700">
        <Modal.CloseButton
          _pressed={{ bg: "secondary.700", color: "gray.100" }}
          onPress={onClose}
        />
        <Modal.Header
          borderBottomWidth={0}
          bg="primary.700"
          _text={{
            color: "gray.100",
            fontSize: "md",
            fontFamily: "heading",
          }}
        >
          {title}
        </Modal.Header>

        <Modal.Body
          _text={{
            color: "gray.100",
            fontSize: "md",
            fontFamily: "body",
          }}
        >
          {children}
        </Modal.Body>

        <Modal.Footer
          borderTopWidth={0}
          bg="primary.700"
          justifyContent="center"
        >
          <Button
            minWidth={100}
            bg="secondary.700"
            colorScheme="blue"
            onPress={onConfirm}
            _text={{
              color: "gray.100",
              textTransform: "uppercase",
              fontFamily: "heading",
            }}
          >
            {confirmTitleBtn || "Confirm"}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export default ModalInformation;
