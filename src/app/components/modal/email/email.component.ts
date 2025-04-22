import {Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {AddressConfig} from "../address/address.config";
import {EmailConfig} from "./email.config";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {status, typeAddress, typeContact} from "../../../shared/util/constants";

@Component({
  selector: 'app-email',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent  implements OnInit{

  public formGroup: FormGroup;
  protected configObj: EmailConfig = new EmailConfig();
  protected readonly _typeContact = typeContact;

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
      this.formGroup.patchValue(this.config.data);
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onSave() {
    if(this.formGroup.valid) {
      this.ref.close(this.formGroup);
    }else {
      this.toastService.warn({summary: "Mensagem", detail: this.translateService.translate("common_message_invalid_fields")});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }

}
