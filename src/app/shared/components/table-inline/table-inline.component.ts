import {Component, Input} from '@angular/core';
import { TableModule } from 'primeng/table';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputText} from "primeng/inputtext";
import {TableInlineConfig} from "./table-inline.config";
import {ButtonModule} from "primeng/button";
import {Ripple} from "primeng/ripple";


@Component({
  selector: 'app-table-inline',
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputText,
    ButtonModule,
    Ripple
  ],
  templateUrl: './table-inline.component.html',
  styleUrl: './table-inline.component.scss'
})
export class TableInlineComponent {

  @Input() public config: TableInlineConfig = new TableInlineConfig();

  public values: any[] = [];

  constructor(private formBuilder: FormBuilder) {

    this.values = [
      {
        id: 1,
        name: "teste",
        teste: "200,00"
      }
    ]
  }
}
