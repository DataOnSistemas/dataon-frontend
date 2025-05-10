import {Type} from "@angular/core";
import {CityComponent} from "../../components/pages/city/city.component";
import {CommonRegisterComponent} from "../../components/pages/common-register/common-register.component";
import {CfopComponent} from "../../components/pages/cfop/cfop.component";
import {CnaeComponent} from "../../components/pages/cnae/cnae.component";
import {NcmComponent} from "../../components/pages/ncm/ncm.component";
import {PersonComponent} from "../../components/pages/person/person.component";
import {
  ProductStorageLocationsComponent
} from "../../components/pages/product-storage-locations/product-storage-locations.component";


export const config: RegisterRoutes[] = [
  {
    header: "Cidades",
    view: "city",
    route: "city",
    paramExtra: "",
    defaultFilter: "",
    component: CityComponent,
    loadComponent: () => import('../../components/pages/city/city.component').then(m => m.CityComponent)
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
  {
    header: "Clientes",
    view: "personCustomer",
    route: "person",
    paramExtra: "CUSTOMER",
    defaultFilter: "TypePerson*.typePerson eq CUSTOMER",
    component: PersonComponent
  },
  {
    header: "Empresa",
    view: "personCompany",
    route: "person",
    paramExtra: "COMPANY",
    defaultFilter: "TypePerson*.typePerson eq COMPANY",
    component: PersonComponent
  },
  {
    header: "Fornecedores",
    view: "personSupplier",
    route: "person",
    paramExtra: "SUPPLIER",
    defaultFilter: "TypePerson*.typePerson eq SUPPLIER",
    component: PersonComponent
  },
  {
    header: "Contadores",
    view: "personAccountant",
    route: "person",
    paramExtra: "ACCOUNTANT",
    defaultFilter: "TypePerson*.typePerson eq ACCOUNTANT",
    component: PersonComponent
  },
  {
    header: "Vendedores",
    view: "personSalesPerson",
    route: "person",
    paramExtra: "SALESPERSON",
    defaultFilter: "TypePerson*.typePerson eq SALESPERSON",
    component: PersonComponent
  },
  {
    header: "Transportadoras",
    view: "personCarrier",
    route: "person",
    paramExtra: "CARRIER",
    defaultFilter: "TypePerson*.typePerson eq CARRIER",
    component: PersonComponent
  },
  {
    header: "Locais de armazenamento",
    view: "productsStorageLocations",
    route: "productsStorageLocations",
    paramExtra: "",
    defaultFilter: "",
    component: ProductStorageLocationsComponent,
    loadComponent: () => import('../../components/pages/product-storage-locations/product-storage-locations.component').then(m => m.ProductStorageLocationsComponent)
  },
]

export class RegisterRoutes {
  header: string = "";
  view: string = "";
  route: string = "person";
  paramExtra: string = "";
  defaultFilter: string = "";
  component: Type<any> = CityComponent;
  loadComponent?: () => Promise<Type<any>>;
}
