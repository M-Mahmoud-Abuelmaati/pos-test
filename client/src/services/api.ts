import { POS_API } from "@/constants";
import { IWordType } from "@/types";
import axiosInstance from ".";

const getWords = async (): Promise<IWordType[]> => {
  const response = await axiosInstance.get(POS_API.WORDS);
  return response.data;
};

const getRank = async (score: number): Promise<{ rank: number }> => {
  const response = await axiosInstance.post(POS_API.RANK, { finalScore: score });
  return response.data;
};

export default {
  getWords,
  getRank,
};
