export interface PersonCardProps {
  nome: string
  email: string
  phones: [
    {
      conutry: string
      area: string
      number: string
      type: string
    },
  ]
}

export interface Shipping {
  locality: string
  street: string
  number: string
  complement: string
  city: string
  region: string
  country: string
  postal_code: string
}

interface ICard {
  number: string
  exp_month: string
  exp_year: string
  security_code: string
  holder: {
    name: string
  }
}

export interface PropsCard {
  reference_id: string
  customer: PersonCardProps
  items: {
    reference_id: string
    name: string
    address: Shipping
  }
  charges: [
    {
      reference_id: string
      description: string
      amount: {
        value: number
        currency: 'BRL'
      }
      payment_method: {
        type: 'CREDIT_CARD'
        installments: number
        capture: true
        card: ICard
      }
    },
  ]
}

export interface IEnd {
  bairro: string
  cep: string
  city: string
  fk_user_id: string
  id: string
  number_home: string
  state: string
  street: string
}

export interface IProfile {
  avatar: string
  fk_user_id: string
  id: string
}

export interface PropsUser {
  email: string
  id: string
  midle_name: string
  name: string
  end: IEnd
  profile: IProfile
}

export interface PropsParcCard {
  quantity: number
  installmentAmount: number
  totalAmount: number
  interestFree: boolean
}

export interface IPropsParcelamento {
  installments: {
    discover: PropsParcCard[]
    diners: PropsParcCard[]
    valecard: PropsParcCard[]
    banesecard: PropsParcCard[]
    fortbrasil: PropsParcCard[]
    jcb: PropsParcCard[]
    elo: PropsParcCard[]
    mastercard: PropsParcCard[]
    sorocred: PropsParcCard[]
    personalcard: PropsParcCard[]
    mais: PropsParcCard[]
    aura: PropsParcCard[]
    cabal: PropsParcCard[]
    amex: PropsParcCard[]
    upbrasil: PropsParcCard[]
    grandcard: PropsParcCard[]
    visa: PropsParcCard[]
    brasilcard: PropsParcCard[]
    avista: PropsParcCard[]
    cardban: PropsParcCard[]
    hipercard: PropsParcCard[]
    plenocard: PropsParcCard[]
  }
  error: false
}

export interface IPropsBrand {
  bin: {
    cardLevel?: string
    cvvSize: number
    expirable: string
    validationAlgorithm: string
    bank?: string
    bin: number
    brand: {
      name: string
    }
    length?: number
    country: {
      isoCodeThreeDigits: string
      isoCode: string
      name: string
      id: number
    }
    statusMessage: string
    reasonMessage?: string
  }
}
