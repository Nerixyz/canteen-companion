import {
  ComboBox,
  Dialog,
  Heading,
  Input,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import { useFilter } from 'react-aria';
import KeyboardModalTrigger from './KeyboardTrigger';
import clsx from 'clsx';
import {
  AppReduceAction,
  AppState,
  useApp,
  useAppDispatch,
} from '../context/AppContext';
import { useState } from 'react';

export interface Command {
  name: string;
  action: AppReduceAction;
}

interface ActionsPopupProps {
  commands: Command[];
}

export default function ActionsPopup(props: ActionsPopupProps) {
  const options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' },
  ];
  const { contains } = useFilter({
    sensitivity: 'base',
  });

  const [value, setValue] = useState('');
  const matchedComposers = options.filter(composer =>
    contains(composer.name, value),
  );

  return (
    <KeyboardModalTrigger ctrl keyboardShortcut="k">
      <ModalOverlay
        isDismissable
        className={({ isEntering, isExiting }) =>
          clsx(
            'fixed inset-0 z-10 flex min-h-full items-center justify-center overflow-y-auto',
            'bg-black/25 p-4 text-center backdrop-blur',
            isEntering && 'animate-in fade-in duration-150 ease-out',
            isExiting && 'animate-out fade-out duration-100 ease-in',
          )
        }
      >
        <Modal
          isDismissable
          className={({ isEntering, isExiting }) =>
            clsx(
              'w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl',
              isEntering && 'animate-in zoom-in-95 duration-150 ease-out',
              isExiting && 'animate-out zoom-out-95 duration-100 ease-in',
            )
          }
        >
          <Dialog role="dialog" className="relative outline-none">
            <Heading
              slot="title"
              className="text-xxl my-0 font-semibold leading-6 text-slate-700"
            >
              Command palette
            </Heading>
            <p>Your cool command palette UI here!</p>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </KeyboardModalTrigger>
  );
}
