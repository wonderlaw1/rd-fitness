import { JoinPipe } from './join.pipe';

fdescribe('JoinPipe', () => {
  it('create an instance', () => {
    const pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform()', () => {
    it('should join array', () => {
      const pipe = new JoinPipe();
      const result = pipe.transform(['1', '2', '3']);

      expect(result).toBe('1, 2, 3');
    });
  });
});
