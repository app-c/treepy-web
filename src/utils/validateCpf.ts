export function _validarCPF(cpf: string) {
  // Remove os caracteres "." e "-" do CPF
  cpf = cpf.replace(/[^\d]/g, '')

  // Verifica se o CPF possui 11 dígitos
  if (cpf.length !== 11) {
    return false
  }

  // Calcula o primeiro dígito verificador do CPF
  let soma = 0
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let resto = soma % 11
  const digito1 = resto < 2 ? 0 : 11 - resto

  // Calcula o segundo dígito verificador do CPF
  soma = 0
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i)
  }
  resto = soma % 11
  const digito2 = resto < 2 ? 0 : 11 - resto

  // Verifica se os dígitos verificadores são válidos
  if (
    parseInt(cpf.charAt(9)) !== digito1 ||
    parseInt(cpf.charAt(10)) !== digito2
  ) {
    return false
  }

  return true
}
