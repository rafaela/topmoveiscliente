import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent  implements OnInit {

  popover: any;

  constructor(public api: ApiService, private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {}

  async myAccount(){
    this.popoverController.dismiss();
    let login = localStorage.getItem("cliente");
    if(login == null){
      localStorage.setItem("tela", "cliente")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
    else{
      this.router.navigateByUrl('cliente',  { replaceUrl: true })
    }
    
  }

  logout(){
    let login = localStorage.getItem("cliente");
    if(login != null){
      this.popoverController.dismiss();
      this.api.logout();
      this.router.navigateByUrl('home',  { replaceUrl: true })
    }
    else{
      this.popoverController.dismiss();
      this.router.navigateByUrl('home',  { replaceUrl: true })
    }
    
  }

  async myRequests(){
    this.popoverController.dismiss();
    let login = localStorage.getItem("cliente");
    if(login == null){
      localStorage.setItem("tela", "meuspedidos")
      this.router.navigateByUrl('login',  { replaceUrl: true })
    }
    else{
      this.router.navigateByUrl('meuspedidos',  { replaceUrl: true })
    }
  }

}
