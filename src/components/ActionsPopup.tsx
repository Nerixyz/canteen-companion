import clsx from 'clsx';
import {
  Button,
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import { AppReduceAction, useAppDispatch } from '../context/AppContext';
import KeyboardModalTrigger from './KeyboardTrigger';

export interface Command {
  name: string;
  action: AppReduceAction | (() => AppReduceAction);
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
              isEntering && 'duration-150 ease-out animate-in fade-in',
              isExiting && 'duration-100 ease-in animate-out fade-out',
            )
          }
        >
          <Modal
            isDismissable
            className={({ isEntering, isExiting }) =>
              clsx(
                'w-full max-w-md overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl',
                isEntering && 'duration-150 ease-out animate-in zoom-in-95',
                isExiting && 'duration-100 ease-in animate-out zoom-out-95',
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
              <div className="mt-4 grid grid-cols-2 items-center justify-center gap-3">
                {props.commands.map(c => (
                  <Button
                    onPress={() => {
                      dispatch(
                        typeof c.action === 'function' ? c.action() : c.action,
                      );
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
