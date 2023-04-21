export function _validadeName(nome: string) {
  // Verifica se a string contém pelo menos uma palavra seguida de outra palavra
  const nomeCompletoRegExp = /^(\w+\s{1}\w+)+$/

  return nomeCompletoRegExp.test(nome.trim())
}
