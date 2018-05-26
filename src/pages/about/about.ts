import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public items:Array<any>;
  constructor(
  	public navCtrl: NavController,
  	public http: HttpClient
  	) {

	this.request();
  }

itemSelected(index){
	console.log(index);
}

request(){
let api = "http://localhost:3000/api/terminal";
    this.http.post(api,{}).subscribe(response => {
      this.items =	response['data'].experience_data;
    });
}

}
