import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Card } from '../card'
import { Botao, BoxContent, Button, Closed, Content, Overlay } from './styles'

interface Props {
  amount: number
  tree: number
}
export function ModalPayment({ amount, tree }: Props) {
  const [steep, setSteep] = useState(1)

  console.log(amount)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Botao>Compre agora</Botao>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <BoxContent>
            {steep === 2 && <Card tree={tree} amount={amount} />}

            <Closed>
              <Button onClick={() => setSteep(1)}>CANCELAR</Button>
            </Closed>
          </BoxContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
