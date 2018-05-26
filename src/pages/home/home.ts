import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private msg2:string;
  constructor(
  	public navCtrl: NavController,
  	public alertCtrl: AlertController
  	) {
	this.msg2="hello ionic"
  }

	tapEvent(event){
		let alert = this.alertCtrl.create({
		     title: '提示',
		     subTitle: '老朋友',
		     buttons: [{
		     	text: '确定',
		          handler: data => {
		            console.log('确定 clicked');
		          }
      },{
      	text: '取消',
      	     handler: data => {
      	       console.log('取消 clicked');
      	     }
      	
      }]
		   });
		   alert.present();
	}

}
