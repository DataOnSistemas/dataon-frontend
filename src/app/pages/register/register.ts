import {Type} from "@angular/core";
import {CityComponent} from "../../components/pages/city/city.component";
import {CommonRegisterComponent} from "../../components/pages/common-register/common-register.component";


export const config: RegisterRoutes[] = [
  {
    header: "Cidades",
    view: "city",
    route: "city",
    paramExtra: "",
    defaultFilter: "",
    component: CityComponent
  },
  {
    header: "Profissoes",
    view: "jobPosition",
    route: "jobPosition",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  },
  {
    header: "Escolaridade",
    view: "levelOfEducation",
    route: "levelOfEducation",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  },
  {
    header: "Religião",
    view: "religion",
    route: "religion",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  },
  {
    header: "Midia",
    view: "media",
    route: "media",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  },
  {
    header: "Midia",
    view: "tagsCustomer",
    route: "tagsCustomer",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  }
]

export class RegisterRoutes {
  header: string = "";
  view: string = "";
  route: string = "person";
  paramExtra: string = "";
  defaultFilter: string = "";
  component: Type<any> = CityComponent;
}
