import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'app';
	menuData: any[];
	constructor(private data: DataService) { }

	ngOnInit() {
		this.menuData = this.data.getData();
		console.log(this.menuData);
	}

}
