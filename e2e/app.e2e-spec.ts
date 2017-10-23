import { WallapopTestPage } from './app.po';

describe('wallapop-test App', () => {
  let page: WallapopTestPage;

  beforeEach(() => {
    page = new WallapopTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
