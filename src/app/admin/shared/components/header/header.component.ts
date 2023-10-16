import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs';
import { NavigationEnd,Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public breadcrumbsUrl: any;
  public breadcrumbsUrlLenght!: number
  private subscriptions: Subscription[] = [];
  public nameProvider: string = 'CLINICA DE LA MUJER';
  constructor(private router: Router) {
  };
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.breadcrumbsUrl = this.splitBreadcrumbsUrl(this.router.url);
      this.breadcrumbsUrlLenght = this.breadcrumbsUrl;
      console.log("this.breadcrumbsUrlLenght", this.breadcrumbsUrlLenght)
      const sub01 = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        const { url } = res as NavigationEnd;
        this.breadcrumbsUrl = this.splitBreadcrumbsUrl(url);
      });
    }


    logout(): void {
      // const token = this.sharedService.getStorage('token');
      // metodo para ir al holding
      window.location.href = 'https://www.google.com';
    }
    public splitBreadcrumbsUrl(s: string): any {
      let d = s.split('/');
      let w = d.slice(1, 9);
      return w;
    }

}
