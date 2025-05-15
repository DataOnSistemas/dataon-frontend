import {FormGroup} from "@angular/forms";

export class ProductGroupSubgroupConfig{

  fields: any[] = [
    {
      "fieldName": "id",
      "required": true,
      "hidden": false,
      "type": "string",
      "fields": []
    },
    {
      "fieldName": "description",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "specificCode",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "parentTreeViewCode",
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
      "fieldName": "fullDescription",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "loyaltyPercentage",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "profitMargin",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "costCenterManagementId",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "commissionCeilingPercentage",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "children",
      "required": false,
      "hidden": false,
      "type": "string"
    },
    {
      "fieldName": "productGroupSubgroupCommision",
      "required": false,
      "hidden": false,
      "type": "array",
      "fields": [
        {
          "fieldName": "id",
          "required": true,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "cashCommission",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "installmentCommissionWithDownPayment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "installmentCommissionWithoutDownPayment",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "userId",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "quoteCommission",
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
          "fieldName": "bonus",
          "required": false,
          "hidden": false,
          "type": "string"
        },
        {
          "fieldName": "bonusType",
          "required": false,
          "hidden": false,
          "type": "string"
        }
      ]
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
