import {Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormGroup} from "@angular/forms";
import {PersonConfig} from "./person.config";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TabsModule} from "primeng/tabs";
import {gender, maritalStatus, naturalPerson, status, confirm} from "../../../shared/util/constants";
import {DatePipe} from "@angular/common";
import {ImageUploadService} from "../../../shared/components/inputs/image-upload/image-upload.service";

@Component({
  selector: 'app-person',
  imports: [
    SharedCommonModule,
    TabsModule
  ],
  providers: [
    ToastService,
    DatePipe
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit{

  // configurações
  public formGroup: FormGroup;
  protected configObj: PersonConfig = new PersonConfig();

  // constants
  private _type: string = "COMPANY";
  public _naturalPerson = naturalPerson;
  public _maritalStatus = maritalStatus;
  public _gender = gender;
  public _confirm = confirm;

  // variaveis
  public imageToken = "";
  public urlImage = "";

  constructor(
    private readonly fieldsService: FieldsService,
    public readonly translateService: TranslateService,
    private readonly toastService: ToastService,
    private route: ActivatedRoute,
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig,
    private datePipe: DatePipe,
    private imageService: ImageUploadService
  ) {
    this.formGroup = this.fieldsService.onCreateFormBuiderDynamic(this.configObj.fields);
  }

  ngOnInit(): void {
    const segments = this.route.snapshot.url;
    this.setConfigContext(segments[segments.length - 1]?.path || '')

    if(this.config.data){
      this.formGroup.patchValue(this.config.data);
    }
  }


  private setConfigContext(context: string) {

    switch (context) {
      case 'personCompany':
        this._type = 'COMPANY'
        break;
      case 'personSupplier':
        this._type = 'SUPPLIER'
        break;
      case 'personCustomer':
        this._type = 'CUSTOMER'
        break;
      case 'personAccountant':
        this._type = 'ACCOUNTANT'
        break;
      case 'personSales':
        this._type = 'SALESPERSON'
        break;
      case 'personCarrier':
        this._type = 'CARRIER'
        break;
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onSave() {
    console.log(this.configObj.convertFormGroupToDTO(this.formGroup, this.datePipe))
    if(this.formGroup.valid) {
      console.log(this.configObj.convertFormGroupToDTO(this.formGroup, this.datePipe))
      //this.ref.close(this.configObj.convertFormGroupToDTO(this.formGroup));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: this.translateService.translate("common_message_invalid_fields")});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }

  public onGetTokenImage(image: any): void {
    this.imageToken = image;
  }

  private onGetUrlImage(){
    this.imageService.onRequestDonwload(this.imageToken).subscribe({
      next: (res) => {
        this.urlImage = res["url"];
      },
      error: error => {
        this.toastService.error({summary: "Mensagem", detail: "Falha ao fazer download da imagem"});
      }
    })
  }

}
