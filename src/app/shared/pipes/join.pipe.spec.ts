import { JoinPipe } from './join.pipe';

const mealMock = {
  id: 2,
  name: 'English Breakfast',
  ingredients: [
    'Toast',
    'Egg',
    'Beans'
  ]
};

fdescribe('JoinPipe', () => {

  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should join array', () => {
    expect(pipe.transform(mealMock.ingredients)).toBe('Toast, Egg, Beans');
  });
});
