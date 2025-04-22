import {FormGroup} from "@angular/forms";

export class AddressConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": false,
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
    },
    {
      "fieldName": "state",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "country",
      "required": false,
      "hidden": false,
      "type": "string"
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      city: formGroup.get('city')?.value,
      typeAddress: formGroup.get('typeAddress')?.value["code"],
      zipCode: formGroup.get('zipCode')?.value,
      address: formGroup.get('address')?.value,
      neighborhood: formGroup.get('neighborhood')?.value,
      complement: formGroup.get('complement')?.value,
      number: formGroup.get('number')?.value,
      status: formGroup.get('status')?.value,
      notes: formGroup.get('notes')?.value,
      latitude: formGroup.get('latitude')?.value,
      longitude: formGroup.get('longitude')?.value,
    }
  }

}
