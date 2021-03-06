import Solution from '../solution-base';
import { processFile } from '../utils/file-reader';
import { countOccupiedSeats, countOccupiedSeatsSightline } from './ferry';

export default class DayElevenSolution extends Solution {
  private data: string[] = [];

  private async populateData(): Promise<void> {
    if (this.data.length) return;
    await processFile(this.file, line => {
      this.data.push(line);
    });
  }

  public async executeFirstHalf(): Promise<number> {
    await this.populateData();
    return countOccupiedSeats(this.data);
  }

  public async executeSecondHalf(): Promise<number> {
    await this.populateData();
    return countOccupiedSeatsSightline(this.data);
  }
}
