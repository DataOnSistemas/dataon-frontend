import {Component, HostListener, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ToastService} from "../../../services/toast/toast.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {CfopConfig} from "./cfop.config";
import {confirm, status} from "../../../shared/util/constants";

@Component({
  selector: 'app-cfop',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './cfop.component.html',
  styleUrl: './cfop.component.scss'
})
export class CfopComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: CfopConfig = new CfopConfig();

  protected readonly _status = status;
  protected readonly _confirm = confirm;

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
    if(this.config.data){
      this.config.data.status = status.find(e => e.code === this.config.data.status);
      this.config.data.inventoryMovement = confirm.find(e => e.code === this.config.data.inventoryMovement);
      this.config.data.generatesFinancial = confirm.find(e => e.code === this.config.data.generatesFinancial);
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

