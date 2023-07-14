import { ReactNode } from "react";

export interface RouteItem {
  path: string;
  component: ReactNode;
}

export enum IPartOfSpeech {
  NOUN = "noun",
  VERB = "verb",
  ADVERB = "adverb",
  ADJECTIVE = "adjective",
}

export type IWordType = {
  id: number;
  word: string;
  pos: IPartOfSpeech;
};
