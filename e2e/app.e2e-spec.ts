import { Ex1Page } from './app.po';

describe('ex1 App', function() {
  let page: Ex1Page;

  beforeEach(() => {
    page = new Ex1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
