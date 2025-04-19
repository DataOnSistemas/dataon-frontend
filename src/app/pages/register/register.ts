import {Type} from "@angular/core";
import {CityComponent} from "../../components/pages/city/city.component";
import {CommonRegisterComponent} from "../../components/pages/common-register/common-register.component";
import {CfopComponent} from "../../components/pages/cfop/cfop.component";
import {CnaeComponent} from "../../components/pages/cnae/cnae.component";
import {NcmComponent} from "../../components/pages/ncm/ncm.component";


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
  },
  {
    header: "Cfop",
    view: "cfop",
    route: "cfop",
    paramExtra: "",
    defaultFilter: "",
    component: CfopComponent
  },
  {
    header: "Regime de tributação",
    view: "taxRegime",
    route: "taxRegime",
    paramExtra: "",
    defaultFilter: "",
    component: CommonRegisterComponent
  },
  {
    header: "Cnae",
    view: "cnae",
    route: "cnae",
    paramExtra: "",
    defaultFilter: "",
    component: CnaeComponent
  },
  {
    header: "Ncm",
    view: "ncm",
    route: "ncm",
    paramExtra: "",
    defaultFilter: "",
    component: NcmComponent
  },
]

export class RegisterRoutes {
  header: string = "";
  view: string = "";
  route: string = "person";
  paramExtra: string = "";
  defaultFilter: string = "";
  component: Type<any> = CityComponent;
}
