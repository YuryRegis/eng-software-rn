import React from "react";
import { Modal, Button, IModalProps } from "native-base";

export interface IModalConfirmationProps extends IModalProps {
  title?: string | JSX.Element;
  onConfirm?: () => void;
  onCancel?: () => void;
  cancelTitleBtn?: string;
  confirmTitleBtn?: string;
}

function ModalConfirmation({
  title,
  children,
  onCancel,
  onConfirm,
  cancelTitleBtn,
  confirmTitleBtn,
  ...rest
}: IModalConfirmationProps) {
  return (
    <Modal {...rest}>
      <Modal.Content borderWidth={3} borderColor="gray.400" bg="primary.700">
        <Modal.CloseButton
          _pressed={{ bg: "secondary.700", color: "gray.100" }}
          onPress={onCancel}
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
          justifyContent="space-evenly"
        >
          <Button
            minWidth={100}
            variant="outline"
            onPress={onCancel}
            borderColor="secondary.700"
            _text={{
              color: "gray.100",
              textTransform: "uppercase",
              fontFamily: "heading",
            }}
          >
            {cancelTitleBtn || "Cancel"}
          </Button>
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

export default ModalConfirmation;
