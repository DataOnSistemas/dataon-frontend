import {FormGroup} from "@angular/forms";

export class ProductBrandsConfg {

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
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      description: formGroup.get('description')?.value,
    }
  }
}
