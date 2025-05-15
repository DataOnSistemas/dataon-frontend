import {Component, Input} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import {Button} from "primeng/button";

@Component({
  selector: 'app-dialog',
  imports: [
    DialogModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  @Input() title: string = "";
  @Input() visible: boolean = false;

}
