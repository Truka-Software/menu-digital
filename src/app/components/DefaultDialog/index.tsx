'use client';

import { MdOutlineClose } from 'react-icons/md';

import * as Dialog from '@radix-ui/react-dialog';

import styles from './styles.module.css';

interface DefaultDialogProps {
  children: JSX.Element[];
  key: string;
}

export default function DefaultDialog({ children, key }: DefaultDialogProps) {
  const [button, dialogBody] = children;

  return (
    <Dialog.Root key={key}>
      <Dialog.Trigger className={styles.defaultDialogTrigger} asChild>
        {button}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.defaultDialogOverlay} />
        <Dialog.Content className={styles.defaultDialogContent}>
          <header className={styles.defaultDialogHeader}>
            <h3 className={styles.defaultDialogTitle}>Criação de produto</h3>
            <Dialog.Close
              className={styles.defaultDialogClose}
              aria-label="Fechar modal"
            >
              <MdOutlineClose size={24} color="DC2626" />
            </Dialog.Close>
          </header>
          {dialogBody}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
