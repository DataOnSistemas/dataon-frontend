import {} from '@angular/common/http';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MessageService} from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpModule } from './config/http/http.module';
import {ThemeService} from "./shared/services/theme/theme.service";
import {PrimeNG} from "primeng/config";
import {LoadingService} from "./shared/services/loading/loading.service";
import {LoadingComponent} from "./shared/loading/loading.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule,
    ReactiveFormsModule,
    HttpModule,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    MessageService
  ]
})
export class AppComponent implements OnInit{

  showLoading: boolean = false;

  constructor(
    private primeng: PrimeNG,
    private loadingService: LoadingService,
    private readonly chancheDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

  onRegistrySubjectLoading(){
    this.loadingService.showLoading.subscribe({
      next: data => {
        this.showLoading = data;
        this.chancheDetector.detectChanges();
      },
    })
  }
}
