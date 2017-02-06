import { NgpeterPage } from './app.po';

describe('ngpeter App', function() {
  let page: NgpeterPage;

  beforeEach(() => {
    page = new NgpeterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
