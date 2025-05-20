import {FormGroup} from "@angular/forms";
import {TypeFields} from "../tipe-fields";

export interface TableInlineColumn {
  hidden?: boolean;
  field: string;
  header: string;
  width; string;
  typeField: TypeFields,
  fieldConfig?: {
    route: string;
  }
}

export class TableInlineConfig {
  title: string = "Table name";
  values: any[] = []
  columns: TableInlineColumn[] = []
  formGroup: FormGroup = new FormGroup({});
}
