import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SharedCommonModule} from "../../shared/common/shared-common.module";
import {ToastService} from "../../services/toast/toast.service";
import {FieldsService} from "../../shared/services/fields/fields.service";
import {TranslateService} from "../../shared/services/translate/translate.service";import {ServiceConfig} from "./service.config";
import {HistoricalComponent} from "../../components/historical/historical.component";


@Component({
  selector: 'app-service',
  imports: [
    SharedCommonModule,
    HistoricalComponent
  ],
  providers: [
    ToastService
  ],
templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: ServiceConfig = new ServiceConfig();
  public procedimentos: any[] = []

  constructor(
    private readonly fieldsService: FieldsService,
    public readonly translateService: TranslateService,
  ) {
    this.formGroup = this.fieldsService.onCreateFormBuiderDynamic(this.configObj.fields);
    this.procedimentos = this.configObj.procedimentos;
  }

  ngOnInit(): void {

  }

}
