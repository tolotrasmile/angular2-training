import { AngularTrainPage } from './app.po';

describe('angular-train App', function() {
  let page: AngularTrainPage;

  beforeEach(() => {
    page = new AngularTrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
