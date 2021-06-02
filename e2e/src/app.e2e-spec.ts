import { AppLoginPage } from './app-login.po';

describe('e2e login page', () => {
  let page: AppLoginPage;

  beforeEach(() => {
    page = new AppLoginPage();
  });

  it('should display .Prueba técnica.', async () => {
    await page.navigateTo();
    expect(await page.getPageTitle()).toContain('Prueba técnica');
  });
});
