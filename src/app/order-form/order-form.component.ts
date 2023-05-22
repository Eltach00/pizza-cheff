import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  orderForm: FormGroup;
  error: boolean = false;

  constructor(private _snackBar: MatSnackBar) {
    this.orderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      number: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
    });
  }

  onInput(inputValue: string): string | void {
    const dot = inputValue.indexOf('.');
    if (dot !== -1) {
      this.orderForm.controls['name'].setValue(inputValue.split('.').join(''));
    }
    return;
  }

  submit() {
    if (this.orderForm.invalid) {
      this.error = true;
      return;
    }
    this.error = false;
    const order = {
      name: this.orderForm.value.name,
      number: this.orderForm.value.number,
      address: this.orderForm.value.adress,

      date: new Date(),
    };
    console.log(order);
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
