import { Angulrjs2Page } from './app.po';

describe('angulrjs2 App', function() {
  let page: Angulrjs2Page;

  beforeEach(() => {
    page = new Angulrjs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
