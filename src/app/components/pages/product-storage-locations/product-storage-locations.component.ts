import {Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {CfopConfig} from "../cfop/cfop.config";
import {ProductStorageLocationsConfig} from "./product-storage-locations.config";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {confirm, status, typeTree} from "../../../shared/util/constants";

@Component({
  selector: 'app-product-storage-locations',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './product-storage-locations.component.html',
  styleUrl: './product-storage-locations.component.scss'
})
export class ProductStorageLocationsComponent implements OnInit{

  public formGroup: FormGroup;
  protected configObj: ProductStorageLocationsConfig = new ProductStorageLocationsConfig();

  _treeType = typeTree;
  _parent: any = {}



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
    if(this.config.data) {
      this.config.data.type = this._treeType.find(e => e.code === this.config.data.type);
      if(this.config.data.action !== 2) {
        this.formGroup.patchValue(this.config.data);

      }
      if(this.config.data.parent && this.config.data.parent.id) {
        this._parent = this.config.data.parent;
      }
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onSave() {
    if(this.formGroup.valid) {
      this.ref.close(this.configObj.convertFormGroupToDTO(this.formGroup, this._parent));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: this.translateService.translate("common_message_invalid_fields")});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }
}
