import {Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {CityConfig} from "../city/city.config";
import {CommonRegisterConfig} from "./common-register-config";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-common-register',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './common-register.component.html',
  styleUrl: './common-register.component.scss'
})
export class CommonRegisterComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: CommonRegisterConfig = new CommonRegisterConfig();

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
