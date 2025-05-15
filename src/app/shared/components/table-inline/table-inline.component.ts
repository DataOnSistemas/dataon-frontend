import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputText} from "primeng/inputtext";


@Component({
  selector: 'app-table-inline',
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputText,
  ],
  templateUrl: './table-inline.component.html',
  styleUrl: './table-inline.component.scss'
})
export class TableInlineComponent {

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
