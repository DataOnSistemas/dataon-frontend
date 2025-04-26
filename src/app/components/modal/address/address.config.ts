import {FormGroup} from "@angular/forms";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {status, typeAddress} from "../../../shared/util/constants";

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
      "required": true,
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

  convertDtoToFormGroup(formGroup: FormGroup, config: DynamicDialogConfig){

    config.data.status = status.find(e => e.code === config.data.status);
    config.data.typeAddress = typeAddress.find(e => e.code === config.data.typeAddress);

    formGroup.patchValue(config.data);
  }

}
