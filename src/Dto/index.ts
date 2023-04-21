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
  locality: string
  postal_code: string
  city: string
  fk_user_id: string
  id: string
  number_home: string
  state: string
  street: string
  region_code: string
}

export interface IProfile {
  avatar: string
  fk_user_id: string
  id: string
}

export interface PropsUser {
  email: string
  id: string
  phone_area: string
  phone_number: string
  cpf: string
  full_name: string
  end: IEnd
  profile: IProfile
}

export interface PropsParcCard {
  installments: number
  installment_value: number
  interest_free: boolean
  amount: {
    value: number
    currency: 'BRL'
    fees: {
      buyer: {
        interest: {
          total: number
          installments: number
        }
      }
    }
  }
}

export interface IPropsParcelamento {
  payment_methods: {
    credit_card: {
      discover: {
        installment_plans: PropsParcCard[]
      }
      diners: {
        installment_plans: PropsParcCard[]
      }
      valecard: {
        installment_plans: PropsParcCard[]
      }
      banesecard: {
        installment_plans: PropsParcCard[]
      }
      fortbrasil: {
        installment_plans: PropsParcCard[]
      }
      jcb: {
        installment_plans: PropsParcCard[]
      }
      elo: {
        installment_plans: PropsParcCard[]
      }
      mastercard: {
        installment_plans: PropsParcCard[]
      }
      sorocred: {
        installment_plans: PropsParcCard[]
      }
      personalcard: {
        installment_plans: PropsParcCard[]
      }
      mais: {
        installment_plans: PropsParcCard[]
      }
      aura: {
        installment_plans: PropsParcCard[]
      }
      cabal: {
        installment_plans: PropsParcCard[]
      }
      amex: {
        installment_plans: PropsParcCard[]
      }
      upbrasil: {
        installment_plans: PropsParcCard[]
      }
      grandcard: {
        installment_plans: PropsParcCard[]
      }
      visa: {
        installment_plans: PropsParcCard[]
      }
      brasilcard: {
        installment_plans: PropsParcCard[]
      }
      avista: {
        installment_plans: PropsParcCard[]
      }
      cardban: {
        installment_plans: PropsParcCard[]
      }
      hipercard: {
        installment_plans: PropsParcCard[]
      }
      plenocard: {
        installment_plans: PropsParcCard[]
      }
    }
  }

  error_messages: {
    error: string
    description: string
    parameter_name: string
  }[]
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

export interface IResponsePix {
  qrcode_image: string
  expiration_date: string
  text: string
}

export interface IResponseBoleto {
  links: {
    rel: string
    href: string
    media: string
    type: string
  }[]
}
