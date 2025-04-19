import {FormGroup} from "@angular/forms";

export class CnaeConfig{
  fields: any[] = [
    {
      "fieldName": "id",
      "required": true,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "code",
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
      "fieldName": "status",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      code: formGroup.get('code')?.value,
      description: formGroup.get('description')?.value,
      status: formGroup.get('status')?.value["code"],

    }
  }
}
