import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): string {
    const title = route.data['title'] || 'Fashoin Cloud';

    // Change the document title.
    document.title = title;

    return title;
  }
}
