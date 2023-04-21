import { Input } from '../../Input'
import * as S from './styles'

export function CadastroStepTwo() {
  return (
    <S.container>
      <Input label="Rua" placeholder="Nome da rua" name="street" />

      <S.grid>
        <S.box>
          <Input
            placeholder="Nº"
            mask="number"
            name="home_number"
            label="Número"
          />
        </S.box>
        <S.box style={{ marginLeft: 10, width: '100%' }}>
          <Input
            label="Bairro"
            placeholder="Nome do seu bairro"
            name="locality"
          />
        </S.box>
      </S.grid>

      <S.grid>
        <S.box>
          <Input label="Cidade" placeholder="Cidade" name="city" />
        </S.box>

        <S.box style={{ marginLeft: 10 }}>
          <Input label="Estado" placeholder="Estado" name="state" />
        </S.box>

        <S.box style={{ width: 65, marginLeft: 10 }}>
          <Input
            placeholder="UF"
            mask="text"
            maxLength={2}
            name="region_code"
            label="UF"
          />
        </S.box>
      </S.grid>

      <Input
        label="CEP"
        placeholder="Informe o seu CEP"
        name="postal_code"
        mask="cep"
      />
    </S.container>
  )
}
