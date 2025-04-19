import {Component, HostListener, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {status} from "../../../shared/util/constants";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ToastService} from "../../../services/toast/toast.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CnaeConfig} from "./cnae.config";
import {SharedCommonModule} from "../../../shared/common/shared-common.module";

@Component({
  selector: 'app-cnae',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './cnae.component.html',
  styleUrl: './cnae.component.scss'
})
export class CnaeComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: CnaeConfig = new CnaeConfig();

  protected readonly _status = status;

  constructor(
    private readonly fieldsService: FieldsService,
    public readonly translateService: TranslateService,
    private readonly toastService: ToastService,
    private route: ActivatedRoute,
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig,
  ) {
    this.formGroup = this.fieldsService.onCreateFormBuiderDynamic(this.configObj.fields);
  }

  ngOnInit(): void {

    const segments = this.route.snapshot.url;
    if(this.config.data){
      this.config.data.status = status.find(e => e.code === this.config.data.status);
      this.formGroup.patchValue(this.config.data);
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onSave() {
    if(this.formGroup.valid) {
      this.ref.close(this.configObj.convertFormGroupToDTO(this.formGroup));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: this.translateService.translate("common_message_invalid_fields")});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }

}
