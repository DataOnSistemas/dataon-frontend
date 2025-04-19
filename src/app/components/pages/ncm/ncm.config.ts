import {FormGroup} from "@angular/forms";

export class NcmConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": true,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "ncm",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "ex",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "description",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "nationalRate",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "importRate",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "stateRate",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "municipalRate",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "cest",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "segment",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "item",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "fullDescription",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      ncm: formGroup.get('ncm')?.value,
      ex: formGroup.get('ex')?.value,
      description: formGroup.get('description')?.value,
      nationalRate: formGroup.get('nationalRate')?.value,
      importRate: formGroup.get('importRate')?.value,
      stateRate: formGroup.get('stateRate')?.value,
      municipalRate: formGroup.get('municipalRate')?.value,
      cest: formGroup.get('cest')?.value,
      segment: formGroup.get('segment')?.value,
      item: null,
      fullDescription: formGroup.get('fullDescription')?.value,
    }
  }
}
