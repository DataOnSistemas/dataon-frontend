import {FormGroup} from "@angular/forms";

export class CostProfitCenterConfig {

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
    },
    {
      "fieldName": "balance",
      "required": false,
      "hidden": false,
      "type": "string",
    },
    {
      "fieldName": "accountingCode",
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
      balance: formGroup.get('balance')?.value,
      accountingCode: formGroup.get('accountingCode')?.value,
      type: formGroup.get('type')?.value["code"],
      parentTreeViewCode: null,
      fullDescription: ""
    }
    if(parent.id) {
      dto.parentTreeViewCode = parent;
      dto.fullDescription = parent.fullDescription + "//" + dto.description;
    }

    return dto
  }
}
