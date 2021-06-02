import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import { NavController } from '@ionic/angular';
import { errorLoginAnimation } from './error-login.animation';

@Component({
  selector: 'app-tabs',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  animations: [errorLoginAnimation],
})
export class LoginPage {

  public loginForm: FormGroup;
  public checkErr = false;

  validationMessages = {
    'email': [
        { type: 'required', message: 'El email es requerido.' },
        { type: 'email', message: 'El email no es valido.' },
      ],
      'password': [
        { type: 'required', message: 'La contraseña es requerida.' },
        { type: 'minlength', message: 'La contraseña al menos debe tener 5 caracteres.' },
      ]
    };

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'submit'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'submit'
      }),
      reminder: new FormControl(false, {
        validators: [],
        updateOn: 'submit'
      })
    });
  }

  public save(loginForm: NgForm) {
    if (loginForm.dirty && loginForm.valid) {
      this.checkErr = false;
      console.log('OK');
    } else {
      this.checkErr = true;
    }
  }

  public onInputClear(e:FormControl) {
    if (!e.valid) { e.reset();}
  }

}
