import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent  implements OnInit {

  @Input() nameProduct: string = "Name Product"
  @Input() littleDescription: string = "Little Description"
  @Input() valueProduct: string = "Value Product"
  @Input() imageProduct: string = "https://ionicframework.com/docs/img/demos/card-media.png"

  constructor(private router: Router) { }

  ngOnInit() {}

}
