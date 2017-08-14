import { IsgNgxInterviewOnePage } from './app.po';

describe('isg-ngx-interview-one App', () => {
  let page: IsgNgxInterviewOnePage;

  beforeEach(() => {
    page = new IsgNgxInterviewOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to isg!');
  });
});
