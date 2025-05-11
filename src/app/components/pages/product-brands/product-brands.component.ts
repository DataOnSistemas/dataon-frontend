import {Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {ProductStorageLocationsConfig} from "../product-storage-locations/product-storage-locations.config";
import {ProductBrandsConfg} from "./product-brands.confg";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {status} from "../../../shared/util/constants";

@Component({
  selector: 'app-product-brands',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './product-brands.component.html',
  styleUrl: './product-brands.component.scss'
})
export class ProductBrandsComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: ProductBrandsConfg = new ProductBrandsConfg();

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
