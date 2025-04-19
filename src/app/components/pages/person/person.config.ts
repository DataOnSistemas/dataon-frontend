import {FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

export class PersonConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "registrationDate",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "name",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "typePerson",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "typeNaturalPerson",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "personCustomer",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "status",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "image",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "sms",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "email",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "media",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "religion",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "monthlyIncome",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "creditiLimit",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "tagsCustomer",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxPayerType",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "iss",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "simplesNacional",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "obsGeneral",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "creditBalance",
          "required": true,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personClinical",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "susCnes",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "susLocalAgencyCode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "susIssuingAgency",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "type",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "billingAddress",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "reportHeaderText",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "logo",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "status",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "website",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfeEnabled",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceEnabled",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfseEnabled",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "digitalCertificate",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "digitalCertificatePassword",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfeEnvironment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfeSeries",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfeInitialNumber",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfseEnvironment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfseSeries",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfseBatchNumber",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfseRpsNumber",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceEnvironment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceSeries",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceInitialNumber",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceCscToken",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nfceContributorCode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "signature",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personEmail",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "type",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "email",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "notes",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personPhone",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "type",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "phone",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "notes",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personAddress",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "city",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "typeAddress",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "zipCode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "address",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "neighborhood",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "complement",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "number",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "status",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "notes",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "latitude",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "longitude",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personTaxSettings",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxRegimeCode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxSubstituteIe",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "specialTaxRegimeCode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "simpleNationalOpting",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "culturalIncentivizer",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxationMode",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxIncidenceIndicator",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "creditAppropriationMethodIndicator",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "contributionTypeIndicator",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "bookkeepingCriterionIndicator",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "pisCofinsLegalNature",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "pisCofinsMainActivityType",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "regimeType",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "presumedProfitPercentage",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "profileIndicator",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personSupplier",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "status",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "agency",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "checkingAccount",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "digit",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "accountantCrc",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "commissionCash",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "commissionWithEntryInstallment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "commissionWithoutEntryInstallment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "serviceDiscount",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "productDiscount",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "suframaRegistration",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxPayerType",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "issRetention",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "simpleNationalOpting",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personLegal",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "companyName",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "cnpj",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "stateRegistration",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "municipalRegistration",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "cnae",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "taxRegime",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    },
    {
      "fieldName": "personNatural",
      "required": false,
      "hidden": false,
      "type": "object",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "gender",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "birthDate",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "maritalStatus",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "cpf",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "rg",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "birthplaceCity",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "profession",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "birthRegistry",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "educationLevel",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "passportNumber",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "identity",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "nickname",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "ruralProducer",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
    }
  ]



  convertFormGroupToDTO(formGroup: FormGroup, datePipe: DatePipe): any {
     const dto = {
       id: formGroup.get('id')?.value,
       registrationDate: formGroup.get('registrationDate')?.value,
       name: formGroup.get('name')?.value,
       typeNaturalPerson: formGroup.get('typeNaturalPerson')?.value["code"],
       personNatural: formGroup.get('personNatural')?.value,
       personLegal: formGroup.get('personLegal')?.value,
    }
    if(dto.id){
      dto.registrationDate = datePipe.transform(dto.registrationDate, 'yyyy-MM-dd')!;
    }
    dto.personNatural.birthDate = datePipe.transform(dto.personNatural.birthDate, 'yyyy-MM-dd')!;
    return dto;
  }
}
