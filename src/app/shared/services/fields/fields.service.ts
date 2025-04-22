import { Injectable } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  private verifyFieldsValid = new Subject<void>();
  invokeVerifyValid = this.verifyFieldsValid.asObservable();


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient) { }


  verifyIsValid(){
    this.verifyFieldsValid.next();
  }

  public loadForm(entity: string, service: string): Observable<any>{
    return this.getMetadata(service);
  }

  private getMetadata(service: string) : Observable<any> {
    const params = {
      "metadata": "FIELDS"
    }
    return this.http.post<String>("anonymous/rest/"+service+"/metadata", params);
  }

  /*
    Cria um FormBuilder Padrão
  */
  public onCreateFormBuiderDynamic(fields: any[]): FormGroup{
    var form = this.formBuilder.group({});

    fields.forEach(field => {
      if(field.type === 'object'){
        form.addControl(field.fieldName,this.onCreateFormBuiderDynamic(field.fields));
      } else if (field.type === 'array'){
        const formArray = new FormArray([]);

        form.addControl(field.fieldName, formArray);
      }
      else {
        form.addControl(field.fieldName, this.onSetValidatoDynamic(field));
      }

    })
    return form;
  }

  private setItemArray(field: any): FormGroup | FormControl {
    // Se os itens do array forem objetos:
    if (field.itemType === 'object') {
      return this.onCreateFormBuiderDynamic(field.fields);
    } else {
      // Se os itens forem campos simples
      return this.onSetValidatoDynamic(field);
    }
  }

  private onSetValidatoDynamic(fields: any): FormControl{
    let formcontrol = new FormControl(null);
    let validators: any = [];

    if(fields.required && !fields.hidden){
      validators.push(Validators.required);
    }
    if(fields.type === 'email'){
      validators.push(Validators.email);
    }
    formcontrol.setValidators(validators);
    formcontrol.updateValueAndValidity();
    return formcontrol;
  }
}
