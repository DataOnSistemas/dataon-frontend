import {Component, OnInit, Type} from '@angular/core';
import { SharedCommonModule } from '../../shared/common/shared-common.module';
import { DataTable } from '../../shared/components/datatable/datatable';
import {RegisterService} from "../../services/register/register.service";
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../../shared/services/crud/crud.service";
import {config, RegisterRoutes} from "./register";
import {TranslateService} from "../../shared/services/translate/translate.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ToastService} from "../../shared/services/toast/toast.service";
import {RequestData} from "../../shared/components/request-data";
import {LoadingService} from "../../shared/services/loading/loading.service";
import {DatatableComponent} from "../../shared/components/datatable/datatable.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedCommonModule,
    DatatableComponent
  ],
  providers: [
    CrudService,
    DialogService,
    ToastService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit  {

  ref: DynamicDialogRef | undefined;

  datatable: DataTable = new DataTable();
  routeComponent: string | null = "";
  configuration: RegisterRoutes = new RegisterRoutes();
  originalClose: any;

  constructor(
      private readonly activatedRoute: ActivatedRoute,
      private readonly crudService: CrudService,
      private readonly registerService: RegisterService,
      private readonly dialogService: DialogService,
      private readonly toastService: ToastService,
      private readonly translateService: TranslateService,
      private readonly loadingService: LoadingService
  ){}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
        this.routeComponent = params.get('hash');
        var obj = this.registerService.getModel(this.routeComponent || "");
        this.onSetPropertiesDatatable(obj);
      });
  }

  onSetPropertiesDatatable(obj: any): void  {
    this.configuration = config.filter(e => e.view === obj.hash)[0];
    this.datatable.fields = obj.fields;
    this.onLoadAllData(new RequestData());
  }

  onLoadAllData(requestData: RequestData): void {
    this.loadingService.showLoading.next(true);
    requestData = this.includeFilters(requestData);
    this.crudService.onGetAll(this.configuration.route,requestData).subscribe({
      next: (res) => {
        this.datatable.values = res.contents;
        this.datatable.totalRecords = res.total;
        this.datatable.page = res.offset;
        this.datatable.size = res.size;
        this.loadingService.showLoading.next(false);
      },
      error: (err) => {
        this.loadingService.showLoading.next(false);
      }
    });
  }

  onLoadData(id: any): void {
    this.loadingService.showLoading.next(true);
    this.crudService.onGet(this.configuration.route,id).subscribe({
      next: (res) => {
        this.loadingService.showLoading.next(false);
        this.onOpenModal(res);
      },
      error: (err) => {
        this.loadingService.showLoading.next(false);
        this.onToast(0,err.error.message);
      }
    });
  }

  onDelete(id: any): void {
    this.loadingService.showLoading.next(true);
    this.crudService.onDelete(this.configuration.route,id).subscribe({
      next: (res) => {
        this.onLoadAllData(new RequestData());
        this.loadingService.showLoading.next(false);
        this.onToast(1,"");
      },
      error: (err) => {
        this.loadingService.showLoading.next(false);
        this.onToast(0,err.error.message);
      }
    });
  }

  onSave(param: any): void {
    this.loadingService.showLoading.next(true);
    this.crudService.onSave(this.configuration.route,param).subscribe({
      next: (res) => {
        this.datatable.values = res.contents;
        this.onLoadAllData(new RequestData());
        this.loadingService.showLoading.next(false);
        this.originalClose(null);
        this.onToast(1,"");
      },
      error: (err) => {
        this.loadingService.showLoading.next(false);
        this.onToast(0,err.error.message);
      }
    });
  }

  onUpdate(param: any): void {
    this.loadingService.showLoading.next(true);
    this.crudService.onUpdate(this.configuration.route,param.id,param).subscribe({
      next: (res) => {
        this.onLoadAllData(new RequestData());
        this.loadingService.showLoading.next(false);
        this.originalClose(null);
        this.onToast(1,"");
      },
      error: (err) => {
        this.loadingService.showLoading.next(false);
        this.onToast(0,err.error.message);
      }
    });
  }

  onSelectedData(obj: any): void {
    if(obj.data){
      if(obj.action === 0){// delete data
        this.onDelete(obj.data.id);
      } else {
        this.onLoadData(obj.data.id);
      }
    } else{
      this.onOpenModal(obj);
    }
  }

  async onOpenModal(obj: any){
    let component:Type<any>;
    if(this.configuration.loadComponent){
      component = await this.configuration.loadComponent();
    } else {
      component = this.configuration.component;
    }
    this.ref = this.dialogService.open(component,
      {
        header: this.configuration.header,
        width: '80vw',
        modal:true,
        closable: true,
        draggable: true,
        maximizable: false,
        data: obj,
        baseZIndex: 999998,
      });


    this.originalClose = this.ref.close.bind(this.ref);
    this.ref.close = (result: any) => {
      if (result) {
        if(!result.id){
          this.onSave(result);
        } else {
          this.onUpdate(result);
        }
      } else {
        this.originalClose(null);
      }
    };
  }

  onToast(type: number, message: string): void {
    if(type === 0){
      this.toastService.error({summary: "Mensagem", detail: message});
    } else {
      this.toastService.success({summary: "Mensagem", detail: this.translateService.translate("common_message_success")});
    }
  }

  private includeFilters(requestData: RequestData) {
    var filter = this.configuration.defaultFilter;
    requestData.filter = filter + requestData.filter;
    return requestData;
  }
}
