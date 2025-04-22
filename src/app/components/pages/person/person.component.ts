import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../../shared/common/shared-common.module";
import {ToastService} from "../../../services/toast/toast.service";
import {FormArray, FormGroup} from "@angular/forms";
import {PersonConfig} from "./person.config";
import {FieldsService} from "../../../shared/services/fields/fields.service";
import {TranslateService} from "../../../shared/services/translate/translate.service";
import {ActivatedRoute} from "@angular/router";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TabsModule} from "primeng/tabs";
import {confirm, gender, maritalStatus, naturalPerson, status, taxPayer} from "../../../shared/util/constants";
import {DatePipe} from "@angular/common";
import {ImageUploadService} from "../../../shared/components/inputs/image-upload/image-upload.service";
import {TableModule} from 'primeng/table';
import {AddressComponent} from "../../modal/address/address.component";
import {DatatableComponent} from "../../../shared/components/datatable/datatable.component";
import {DataTable} from "../../../shared/components/datatable/datatable";
import {ETypeRegistry} from "../../../shared/util/enums";

@Component({
  selector: 'app-person',
  imports: [
    SharedCommonModule,
    TabsModule,
    TableModule,
    DatatableComponent
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
  protected dialogRef: DynamicDialogRef | undefined;
  protected dataTableAddress: DataTable;
  protected dataTablePhone: DataTable;
  protected dataTableEmail: DataTable;
  // constants
  private _type: string = "COMPANY";
  public _naturalPerson = naturalPerson;
  public _maritalStatus = maritalStatus;
  public _gender = gender;
  public _confirm = confirm;
  public _status = status;
  public _taxPayer = taxPayer;

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
    private imageService: ImageUploadService,
    private readonly dialogService: DialogService,
    private cdr: ChangeDetectorRef
  ) {
    this.formGroup = this.fieldsService.onCreateFormBuiderDynamic(this.configObj.fields);
    this.dataTableAddress = this.configObj.onConfigDatatable(ETypeRegistry.ADDRESS);
    this.dataTablePhone = this.configObj.onConfigDatatable(ETypeRegistry.PHONE);
    this.dataTableEmail = this.configObj.onConfigDatatable(ETypeRegistry.EMAIL);
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

  public openModal(type: ETypeRegistry, obj: any) {
    this.dialogRef = this.dialogService.open(AddressComponent,
    {
      header: "Endereços",
      width: '70vw',
      modal:true,
      closable: true,
      draggable: true,
      maximizable: false,
      data: obj,
      baseZIndex: 999999,
    });

    this.dialogRef.onClose.subscribe((data: any) => {
      if(type === ETypeRegistry.ADDRESS){
        if(data){
          (this.formGroup.get('personAddress') as FormArray).push(data);
          this.dataTableAddress.values.push(this.formGroup.get('personAddress')?.value);
          console.log(this.dataTableAddress.values);
        }
      }
    });
  }


  protected readonly ETypeRegistry = ETypeRegistry;
}
