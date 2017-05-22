import { Shreeangular4Page } from './app.po';

describe('shreeangular4 App', () => {
  let page: Shreeangular4Page;

  beforeEach(() => {
    page = new Shreeangular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
