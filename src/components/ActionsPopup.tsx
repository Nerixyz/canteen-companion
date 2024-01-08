import {
  Button,
  ComboBox,
  Dialog,
  Heading,
  Input,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import KeyboardModalTrigger from './KeyboardTrigger';
import clsx from 'clsx';
import { AppReduceAction, useAppDispatch } from '../context/AppContext';

export interface Command {
  name: string;
  action: AppReduceAction;
}

interface ActionsPopupProps {
  commands: Command[];
}

export default function ActionsPopup(props: ActionsPopupProps) {
  const dispatch = useAppDispatch();
  return (
    <KeyboardModalTrigger ctrl keyboardShortcut="k">
      {({ close }) => (
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
              <div className="mt-4 grid grid-flow-col items-center justify-center gap-3">
                {props.commands.map(c => (
                  <Button
                    onPress={() => {
                      dispatch(c.action);
                      close();
                    }}
                    className={clsx(
                      'bg-blue-100 px-4 py-2 hover:bg-blue-200',
                      'shadow-md',
                    )}
                    key={c.name}
                  >
                    {c.name}
                  </Button>
                ))}
              </div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      )}
    </KeyboardModalTrigger>
  );
}
