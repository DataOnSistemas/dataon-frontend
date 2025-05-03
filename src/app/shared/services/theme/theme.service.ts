import {Injectable, Renderer2, RendererFactory2} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(rendererFactory: RendererFactory2) {

  }

  onConfigurationTheme(theme: string): void {
    const element = document.querySelector('html');
    if(element != null) {
      if(theme === 'DARK'){
        element.classList.toggle('app-dark');
      } else {
        element.classList.remove('app-dark');
      }
    }

  }
}
