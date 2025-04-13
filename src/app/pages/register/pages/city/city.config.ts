import {FormGroup} from "@angular/forms";

export class CityConfig {
  fields: any[] = [
    {
      fieldName: 'id',
      required: false,
      hidden: false,
      type: 'string'
    },
    {
      fieldName: 'name',
      required: true,
      hidden: false,
      type: 'string'
    },
    {
      fieldName: 'ibge',
      required: true,
      hidden: false,
      type: 'string'
    },
    {
      fieldName: 'state',
      required: false,
      hidden: false,
      type: 'string'
    }
  ]

  convertFormGroupToDTO(formGroup: FormGroup): any {
    return {
      id: formGroup.get('id')?.value,
      name: formGroup.get('name')?.value,
      state: formGroup.get('state')?.value,
    }
  }
}
