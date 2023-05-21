import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-option',
  templateUrl: './pizza-option.component.html',
  styleUrls: ['./pizza-option.component.scss'],
})
export class PizzaOptionComponent {
  pizzas = [
    {
      name: 'Мясная Делюкс',
      composition:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      img_path: '../../assets/pictures/meat_deluxe.png',
    },
    {
      name: 'Морская Премиум',
      composition: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      img_path: '../../assets/pictures/sea_premium.png',
    },
    {
      img_path: '../../assets/pictures/bacon-sosis.png',
      name: 'Бекон и Сосиски',
      composition: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      img_path: '../../assets/pictures/chicken-deluxe.png',
      name: 'Куриная Делюкс',
      composition:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      img_path: '../../assets/pictures/barbekue-premium.png',
      name: 'Барбекю Премиум',
      composition:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      img_path: '../../assets/pictures/duble-pepperoni.png',
      name: 'Пепперони Дабл',
      composition: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      img_path: '../../assets/pictures/chease.png',
      name: 'Сырная',
      composition: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
    {
      img_path: '../../assets/pictures/chicken-trio.png',
      name: 'Куриное трио',
      composition:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
  ];
}
