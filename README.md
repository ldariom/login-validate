## Ionic login validate:

| package | version |
| ------ | ------ |
| @angular | 12.0.1 |
| @angular/animations | 12.0.2 |
| ng-animate | 1.0.0 |
| @angular/forms | 12.0.1 |
| jasmine | 3.7.1 |
| karma | 6.3.2 |
| protractor | 7.0.0 |

## Description
Validation with FormBuilder, clicking on the button sends to validate the form.
Scss styles using ionic classes and variables to a greater extent
- Animation
-- Trigger is fired if the form does not receive true validation (ng-animate library shake animation)
- Test setup:
-- protactor.config on win 10 with webdriver-manager
- Unit tests
-- Validation of empty form
-- Form validation with test data (example : john@due.com, 123)
- Test e2e
-- Check in the LoginPage component the name of the page "Technical test"
