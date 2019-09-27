import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selecting like <app-root></app-root>
  templateUrl: './app.component.html',//markup file
  styleUrls: ['./app.component.less']//stylesheet file
})
export class AppComponent {
  title:string = 'angula';
}
