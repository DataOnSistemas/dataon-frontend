import {Component, HostListener, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {typeTree} from "../../../shared/util/constants";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ToastService} from "../../../services/toast/toast.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CostProfitCenterConfig} from "./cost-profit-center.config";
import {SharedCommonModule} from "../../../shared/common/shared-common.module";

@Component({
  selector: 'app-cost-profit-center',
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './cost-profit-center.component.html',
  styleUrl: './cost-profit-center.component.scss'
})
export class CostProfitCenterComponent implements OnInit {

  public formGroup: FormGroup;
  protected configObj: CostProfitCenterConfig = new CostProfitCenterConfig();

  _treeType = typeTree;
  _parent: any = {}

  constructor(
    private readonly fieldsService: FieldsService,
    public readonly translateService: TranslateService,
    private readonly toastService: ToastService,
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
