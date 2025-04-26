import {inject} from "@angular/core";
import {TranslateService} from "../../shared/services/translate/translate.service";


export class MenuItens {

    menuItems = [
      {
        route: "service",
        iconClass: 'pi pi-briefcase',
        tooltip: "service",
        name: "service",
        fixed: true,
        submenu: []
      },
      {
        route: "dashboard",
        iconClass: 'pi pi-chart-bar',
        tooltip: "dashboard",
        name: "dashboard",
        submenu: []
      },
      {
        iconClass: 'pi pi-book',
        tooltip: "register",
        name: "register",
        fixed: true,
        submenu: [
          {
            name: 'person',
            submenu: [
              {
                route: "register/personCompany",
                name: "personCompany"
              },
              {
                route: "register/personCustomer",
                name: "personCustomer"
              },
              {
                route: "register/personSupplier",
                name: "personSupplier"
              },
              {
                route: "register/personAccountant",
                name: "personAccountant"
              },
              {
                route: "register/personSalesPerson",
                name: "personSalesPerson"
              },
              {
                route: "register/personCarrier",
                name: "personCarrier"
              }
            ]
          },
          {
            name: "general",
            submenu: [
              {
                route: "register/city",
                name: "city"
              },
              {
                route: "register/jobPosition",
                name: "jobPosition"
              },
              {
                route: "register/levelOfEducation",
                name: "levelOfEducation"
              },
              {
                route: "register/media",
                name: "media"
              },
              {
                route: "register/religion",
                name: "religion"
              },
              {
                route: "register/tagsCustomer",
                name: "tagsCustomer"
              }
            ]
          },
          {
            name: "fiscal",
            submenu: [
              {
                route: "register/cfop",
                name: "cfop"
              },
              {
                route: "register/taxRegime",
                name: "taxRegime"
              },
              {
                route: "register/cnae",
                name: "cnae"
              },
              {
                route: "register/ncm",
                name: "ncm"
              },
            ]
          }

        ]
      },
      {
        iconClass: 'pi pi-cog',
        tooltip: 'Configurações',
        name: 'Configurações',
        submenu: [
          {
            name: 'Configurações do usuário',
            route:'configuration'
          },
          {
            name: 'Configurações do globais',
            submenu: [
              {
                name: 'Traduções',
                route:''
              },
              {
                name: 'Permissionamento',
                route:''
              },
              {
                name: 'Cabeçalho Relatórios',
                route:''
              },
            ]
          },
          {
            name: 'Cadastro de usuários',
            route:'register/revenues'
          },
          {
            name: 'Logout',
            route:'login'
          },
        ]
      },
    ];
}
