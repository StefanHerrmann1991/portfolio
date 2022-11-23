import { HiddenDirective } from './hidden.directive';

describe('HiddenDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new HiddenDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
