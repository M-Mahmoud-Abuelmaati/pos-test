import { IWord } from "../../types";
import { setWordsData } from "./utils";
import data from "../../constants/data.json";

class PartsOfSpeechService {
  constructor() {}

  static getWords(): IWord[] {
    const words: IWord[] = setWordsData();
    return words;
  }

  static getRank({ finalScore }: { finalScore: number }): { rank: number } {
    const scoreslist = data.scoresList;
    const scores = scoreslist.reduce(
      (acc, curr) => (curr < finalScore ? (acc += 1) : acc),
      0,
    );
    const rank = Math.round((scores / scoreslist.length) * 100);
    return { rank };
  }
}

export default PartsOfSpeechService;
