import { Request, Response } from "express";
import PartsOfSpeech from "./service";
import httpStatus from "../../constants/httpStatus";

export default {
  words(_req: Request, res: Response) {
    const words = PartsOfSpeech.getWords();
    res.status(httpStatus.OK).json(words);
  },

  rank(req: Request, res: Response) {
    const { body: data } = req;
    const rank = PartsOfSpeech.getRank(data);
    res.status(httpStatus.OK).json(rank);
  },
};
