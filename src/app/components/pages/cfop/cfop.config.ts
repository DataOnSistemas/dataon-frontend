import {FormGroup} from "@angular/forms";

export class CfopConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": true,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "cfop",
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
      "fieldName": "application",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "status",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "inventoryMovement",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "generatesFinancial",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "type",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      cfop: formGroup.get('cfop')?.value,
      description: formGroup.get('description')?.value,
      application: formGroup.get('application')?.value,
      status: formGroup.get('status')?.value["code"],
      inventoryMovement: formGroup.get('inventoryMovement')?.value["code"],
      generatesFinancial: formGroup.get('generatesFinancial')?.value["code"],
      type: 0,
    }
  }
}
