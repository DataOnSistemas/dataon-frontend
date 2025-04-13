import {Type} from "@angular/core";
import {CityComponent} from "./pages/city/city.component";


export const config: RegisterRoutes[] = [
  {
    header: "Cidades",
    view: "city",
    route: "city",
    paramExtra: "",
    defaultFilter: "",
    component: CityComponent
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
