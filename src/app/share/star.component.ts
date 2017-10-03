import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['/star.component.css']
})

export class StarComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = 86/5*this.rating;
    }
   @Input() rating: number;
    starWidth:number;
}