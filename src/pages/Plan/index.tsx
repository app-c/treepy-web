import { Form } from '@unform/web'
import { Input } from '../../components/Input'
import * as S from './styles'

export function Plan() {
  return (
    <S.Container>
      <h1>Escolha uma forma de pagamento</h1>

      <Form>
        <S.BoxCard>
          <Input name="name" placeholder="digite seu nome" />
          <Input name="email" placeholder="digite seu email" />

          <Input maxLength={2} mask="number" name="area" placeholder="(xx)" />
          <Input
            maxLength={9}
            mask="number"
            name="phone"
            placeholder="telefone"
          />
          <Input name="locality" placeholder="bairro" />
          <Input name="street" placeholder="rua" />

          <Input mask="number" name="number" placeholder="número" />
          <Input sizeW="8rem" name="complement" placeholder="complemento" />
          <Input name="city" placeholder="cidade" />

          <Input maxLength={2} name="region" placeholder="estado" />
          <Input mask="cep" name="postal_code" placeholder="CEP" />
        </S.BoxCard>
      </Form>

      <S.BoxBoleto>
        <h1>boleto</h1>
      </S.BoxBoleto>

      <S.BoxPix>
        <h1>pix</h1>
      </S.BoxPix>

      <S.BoxAss>
        <h1>assinatura</h1>
      </S.BoxAss>
    </S.Container>
  )
}
