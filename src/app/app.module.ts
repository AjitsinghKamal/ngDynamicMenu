import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataService } from './data.service';


@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
