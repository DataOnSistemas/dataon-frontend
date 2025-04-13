import {Component, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../../shared/common/shared-common.module";
import {ToastService} from "../../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {CityConfig} from "./city.config";
import {FieldsService} from "../../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-city',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent implements OnInit{

  public formGroup: FormGroup;
  protected configObj: CityConfig = new CityConfig();

  constructor(
    private readonly fieldsService: FieldsService,
    public readonly translatePersonMembers: TranslateService,
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

    }
  }

  onSave() {
    if(this.formGroup.valid) {
      this.ref.close(this.configObj.convertFormGroupToDTO(this.formGroup));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: this.translatePersonMembers.translate("common_message_invalid_fields")});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }


}
