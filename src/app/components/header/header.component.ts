import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  categories: any = [];
  name: string = 'Nome'

  constructor(public router: Router, public api: ApiService, public loadingCtrl: LoadingController) { }

  ngOnInit() {}

  

  

}
