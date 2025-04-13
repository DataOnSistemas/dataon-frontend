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
            name: "general",
            submenu: [
              {
                route: "register/city",
                name: "city"
              }
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
