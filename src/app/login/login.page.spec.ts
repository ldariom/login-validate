import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPage
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        IonicModule.forRoot(),
      ],
      
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    
    component.loginForm.controls.email.setValue(null);
    component.loginForm.controls.password.setValue(null);
    component.loginForm.controls.reminder.setValue(false);
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('validate form login with', async() => {

    component.loginForm.controls.email.setValue('john@due.com');
    component.loginForm.controls.password.setValue('12345');
    component.loginForm.controls.reminder.setValue(true);
    expect(component.loginForm.valid).toBeTruthy();
  });

});
