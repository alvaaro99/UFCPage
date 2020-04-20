import { WeightRankingPipe } from './weight-ranking.pipe';

describe('WeightPipe', () => {
  it('create an instance', () => {
    const pipe = new WeightRankingPipe();
    expect(pipe).toBeTruthy();
  });
});
