
export const theme = [
  { key: "DARK", value: "Escuro", code: 0 },
  { key: "LIGHT", value: "Claro", code: 1 }
]

export const language = [
  { key: "PORTUGUESE", value: "Português", code: 0  },
  { key: "ENGLISH", value: "Inglês", code: 1 },
  { key: "SPANISH", value: "Espanhol", code: 2 },
]

export const languages: any = {
  PORTUGUESE: "pt-BR",
  ENGLISH: "en-US",
  SPANISH: "es-ES",
}

export const status = [
  { key: "ACTIVE", value: "Ativo", code: 0 },
  { key: "INACTIVE", value: "Inativo", code: 1  }
]

export const confirm = [
  { key: "YES", value: "Sim", code: 0 },
  { key: "NO", value: "Não", code: 1 },
]

export const naturalPerson = [
  { key: "NATURAL", value: "Pessoa física", code: 0 },
  { key: "LEGAL", value: "Pessoa jurídica", code: 1 },
]

export const maritalStatus = [
  { key: "SINGLE", value: "Solteiro(a)", code: 0 },
  { key: "MARRIED", value: "Casado(a)", code: 1 },
  { key: "DIVORCED", value: "Divorciado(a)", code: 2 },
  { key: "WIDOWED", value: "Viuvo(a)", code: 3 },
  { key: "SEPARATED", value: "Separado(a)", code: 4 },
  { key: "CIVIL_UNION", value: "União estável", code: 5 },
]

export const gender = [
  { key: "MALE", value: "Masculino", code: 0 },
  { key: "FEMALE", value: "Feminino", code: 1 }
]

export const taxPayer = [
  { key: "ICMS", value: "ICMS", code: 1 },
  { key: "ISENTO", value: "Isento", code: 2 },
  { key: "NAO_CONTRIBUINTE", value: "Não Contribuinte", code: 9 }
]

export const typeAddress = [
  { key: "MAIN", value: "Principal", code: 0 },
  { key: "DELIVERY", value: "Entrega", code: 1 },
  { key: "BILLING", value: "Cobrança", code: 2 },
  { key: "OUTHER", value: "Outro", code: 3 }
]

export const typeContact = [
  { key: "RESIDENTIAL", value: "Principal", code: 0 },
  { key: "BUSINES", value: "Comercial", code: 1 },
  { key: "MOBILE", value: "Pessoal", code: 2 },
  { key: "OUTHER", value: "Outro", code: 3 }
]

export enum ETypePerson {
  COMPANY = 0,
  SUPPLIER = 1,
  CUSTOMER = 2,
  ACCOUNTANT = 3,
  SALESPERSON = 4,
  CARRIER = 5
}

export let themeDark = false;
