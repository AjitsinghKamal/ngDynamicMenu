import { Component, Input} from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	key = null;
	childLevel = 0;
	@Input() layer;
	@Input() sub: number;

	checkLink(obj) {
		if (typeof obj === 'string' || obj instanceof String) {
			this.key = null;
			return false;
		} else {
			this.key = Object.keys(obj)[0];
			this.childLevel = this.sub + 1;
			console.log(this.childLevel);
			return true;
		}
	}
}
