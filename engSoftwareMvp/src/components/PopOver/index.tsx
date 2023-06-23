import React from "react";
import { Popover, IPopoverProps, Pressable } from "native-base";

interface IPopOver {
  children: React.ReactNode;
  _content: React.ReactNode;
}

function PopOver({ children, _content, ...rest }: IPopOver) {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleToggle() {
    setIsOpen((oldState) => !oldState);
  }
  return (
    <Popover
      isOpen={isOpen}
      placement="bottom right"
      onClose={() => setIsOpen(false)}
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps} onPress={handleToggle}>
            {children}
          </Pressable>
        );
      }}
      {...rest}
    >
      <Popover.Content>
        <Popover.Body>{_content}</Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
export default PopOver;
