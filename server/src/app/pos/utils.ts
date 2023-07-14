import { sampleSize } from "lodash";
import { IPartOfSpeech, IWord } from "../../types";
import data from "../../constants/data.json";

export function setWordsData() {
  const partsOfSpeech = [
    IPartOfSpeech.NOUN,
    IPartOfSpeech.ADJECTIVE,
    IPartOfSpeech.ADVERB,
    IPartOfSpeech.VERB,
  ];
  // sample function is just returning random element from an array
  const words = sampleSize(data.wordList, 10) as IWord[];

  // Checking if the array has all pos
  const allElementsExists = partsOfSpeech.every((pos) =>
    words.some((i) => i.pos === pos),
  );

  if (!allElementsExists) {
    // Recursive if any of pos does not exist
    return setWordsData();
  }
  return words;
}
