export type IErrorType = {
  httpStatus: number;
  code: string | number;
  msg: string;
};

export enum IPartOfSpeech {
  NOUN = "noun",
  VERB = "verb",
  ADVERB = "adverb",
  ADJECTIVE = "adjective",
}

export type IWord = {
  id: number;
  word: string;
  pos: IPartOfSpeech;
};