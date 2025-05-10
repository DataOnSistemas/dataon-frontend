import {FormGroup} from "@angular/forms";

export class ProductStorageLocationsConfig {

  fields: any[] = [
    {
      "fieldName": "id",
      "required": false,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "description",
      "required": true,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "specificCode",
      "required": true,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "parentCodeTreeView",
      "required": false,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "type",
      "required": false,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "fullDescription",
      "required": false,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "children",
      "required": false,
      "hidden": false,
      "type": "string",
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup, parent: any): any {
    let dto = {
      id: formGroup.get('id')?.value,
      description: formGroup.get('description')?.value,
      specificCode: formGroup.get('specificCode')?.value,
      type: formGroup.get('type')?.value["code"],
      parentCodeTreeView: null,
      fullDescription: ""
    }
    if(parent.id) {
      dto.parentCodeTreeView = parent;
      dto.fullDescription = parent.fullDescription + "//" + dto.description;
    }

    return dto
  }
}
