import {
  Botao,
  BoxCard,
  BoxContent,
  Button,
  Closed,
  Container,
  Content,
  ContentCard,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function ModalPayment() {
  return (
    <Container>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Botao>Compre agora</Botao>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Content>
            <BoxCard>
              <ContentCard>
                <label>
                  <p>select</p>
                  <p>Cartão de Crédito</p>
                </label>

                <form action="">
                  <label>
                    <p>Número do cartão</p>
                    <input type="text" />
                  </label>

                  <label>
                    <p>Data de vencimento</p>
                    <input type="text" />
                  </label>
                </form>
              </ContentCard>
            </BoxCard>
            <BoxContent>
              <Closed>
                <Button>CANCELAR</Button>
              </Closed>
            </BoxContent>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  )
}
