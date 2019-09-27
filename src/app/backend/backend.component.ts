import { Component } from "@angular/core";

@Component({
    selector: 'app-backend',
    templateUrl: './backend.component.html'
    // template: `<app-backend></app-backend>`
})

export class BackendComponent {
    id: number = 5;
    status: string = "live";

    getStatus(){
        return ` got status: ${this.status}`
    }
}




