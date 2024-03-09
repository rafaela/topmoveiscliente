import { register } from 'swiper/element/bundle';
import { Component, OnInit, Input } from '@angular/core';
register()

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss'],
})
export class FeaturedItemComponent  implements OnInit {

  @Input() nameProduct: string = "Name Product"
  @Input() valueProduct: any;
  @Input() amountProduct: string = "Amount Product"
  @Input() descriptionProduct: string = "Name Product"
  @Input() fotos: any = []

  constructor() { }

  ngOnInit() {}

}
