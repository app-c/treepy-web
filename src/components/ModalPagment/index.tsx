import { Botao, BoxContent, Button, Closed, Container, Content } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { Card } from '../card'
import { DataPerson } from '../dataPerson'
import { useState } from 'react'

export function ModalPayment() {
  const [steep, setSteep] = useState(1)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Botao>Compre agora</Botao>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Content>
          <BoxContent>
            {steep === 1 && (
              <DataPerson dataPerson={() => {}} setStep={(h) => setSteep(h)} />
            )}

            {steep === 2 && <Card />}

            <Closed>
              <Button onClick={() => setSteep(1)}>CANCELAR</Button>
            </Closed>
          </BoxContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
