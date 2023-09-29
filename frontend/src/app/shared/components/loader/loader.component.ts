import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
})
export class LoaderComponent implements OnInit {
  public isLoading!: Observable<boolean>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.isLoading = this.loadingService.getLoadingState();
  }
}
