import { countActiveCubes, countFourDimensions } from './conway-cubes';

describe('conway cubes', () => {
  describe('countActiveCubes', () => {
    it('functions correctly with test data', () => {
      const startData = ['.#.', '..#', '###'];
      expect(countActiveCubes(startData, 6)).toBe(112);
    });
    it('functions with a single data point', () => {
      const startData = ['#'];
      expect(countActiveCubes(startData, 6)).toBe(0);
    });
  });
  describe('countFourDimensions', () => {
    it('functions correctly with test data', () => {
      const startData = ['.#.', '..#', '###'];
      expect(countFourDimensions(startData, 6)).toBe(848);
    });
    it('functions with a single data point', () => {
      const startData = ['#'];
      expect(countFourDimensions(startData, 6)).toBe(0);
    });
  });
});
