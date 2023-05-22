import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-pizza-option',
  templateUrl: './pizza-option.component.html',
  styleUrls: ['./pizza-option.component.scss'],
})
export class PizzaOptionComponent {
  pizzas = [
    {
      thumb: 'sd-thumb.jpg',
      name: 'Мясная Делюкс',
      composition:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      src: '../../assets/pictures/meat_deluxe.png',
    },
    {
      thumb: 'sd-thumb.jpg',
      name: 'Морская Премиум',
      composition: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      src: '../../assets/pictures/sea_premium.png',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/bacon-sosis.png',
      name: 'Бекон и Сосиски',
      composition: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/chicken-deluxe.png',
      name: 'Куриная Делюкс',
      composition:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/barbekue-premium.png',
      name: 'Барбекю Премиум',
      composition:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/duble-pepperoni.png',
      name: 'Пепперони Дабл',
      composition: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/chease.png',
      name: 'Сырная',
      composition: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
    {
      thumb: 'sd-thumb.jpg',
      src: '../../assets/pictures/chicken-trio.png',
      name: 'Куриное трио',
      composition:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
  ];

  constructor(private _lightbox: Lightbox) {}

  open(index: number): void {
    this._lightbox.open(this.pizzas, index, { centerVertically: true });
  }
}
