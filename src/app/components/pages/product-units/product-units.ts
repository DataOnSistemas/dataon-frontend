import {FormGroup} from "@angular/forms";

export class ProductUnitsConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": false,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "description",
      "required": true,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "abbreviation",
      "required": true,
      "hidden": false,
      "type": "string"
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      description: formGroup.get('description')?.value,
      abbreviation: formGroup.get('abbreviation')?.value,
    }
  }
}
