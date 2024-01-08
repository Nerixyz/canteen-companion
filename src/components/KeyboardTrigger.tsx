import React, { useEffect, useState } from 'react';
import { ModalContext } from 'react-aria-components';

interface KeyboardModalTriggerProps {
  keyboardShortcut: string;
  ctrl?: boolean;
  children: React.ReactNode;
}

export default function KeyboardModalTrigger(props: KeyboardModalTriggerProps) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === props.keyboardShortcut && (e.ctrlKey || !props.ctrl)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [props.keyboardShortcut, props.ctrl]);

  return (
    <ModalContext.Provider value={{ isOpen, onOpenChange: setOpen }}>
      {props.children}
    </ModalContext.Provider>
  );
}
