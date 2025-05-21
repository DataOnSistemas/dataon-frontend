import {FormGroup} from "@angular/forms";
import {TableInlineColumn} from "../../../shared/components/table-inline/table-inline.config";
import {TypeFields} from "../../../shared/components/tipe-fields";

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

  fieldsCommision: any[] = [
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

  onGetColumnsCommision(): any[] {
    return [
      {
        hidden: true,
        field: "id",
        header: "id",
        width: "0%",
        typeField: TypeFields.INPUT_TEXT
      },
      {
        hidden: true,
        field: "cashCommission",
        header: "Endereço",
        width: "10%",
        typeField: TypeFields.INPUT_TEXT
      },
      {
        hidden: true,
        field: "installmentCommissionWithDownPayment",
        header: "Endereço",
        width: "10%",
        typeField: TypeFields.INPUT_NUMBER
      },
      {
        hidden: true,
        field: "installmentCommissionWithoutDownPayment",
        header: "Endereço",
        width: "10%",
        typeField: TypeFields.INPUT_NUMBER
      },
      {
        hidden: true,
        field: "userId",
        header: "Vendedor",
        width: "10%",
        typeField: TypeFields.AUTO_COMPLETE,
        fieldConfig: {
          route: "user"
        }
      },
      {
        hidden: true,
        field: "quoteCommission",
        header: "Vendedor",
        width: "10%",
        typeField: TypeFields.INPUT_NUMBER
      },
      {
        hidden: true,
        field: "type",
        header: "Vendedor",
        width: "10%",
        typeField: TypeFields.DROPDOWN
      },
      {
        hidden: true,
        field: "bonus",
        header: "Vendedor",
        width: "10%",
        typeField: TypeFields.INPUT_NUMBER
      },
      {
        hidden: true,
        field: "bonusType",
        header: "Vendedor",
        width: "10%",
        typeField: TypeFields.INPUT_NUMBER
      }
    ];
  }

}
