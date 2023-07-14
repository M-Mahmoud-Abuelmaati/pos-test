import api from "@/services/api";
import { IPartOfSpeech } from "@/types";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import AppCard from "../components/AppCard";
import AppProgressBar from "../components/AppProgressBar";
import { addAnsweredQuestion, addCorrectQuestion, setWords, useAppContext } from "../contexts/AppContext";

interface PracticeProps {}

const Practice = ({}: PracticeProps) => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const calculateProgressBar = Math.round((state.answeredQuestion / state.words.length) * 100);

  const selectAnswer = (correctAnswer: IPartOfSpeech, answer: IPartOfSpeech) => {
    if (correctAnswer === answer) {
      dispatch(addCorrectQuestion());
      toast.success("Correct Answer", { duration: 1000 });
    } else {
      toast.error("Incorrect Answer", { duration: 1000 });
    }
    setTimeout(() => {
      dispatch(addAnsweredQuestion());
    }, 1000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const words = await api.getWords();
      dispatch(setWords(words));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (calculateProgressBar === 100) {
      navigate(ROUTES.RANK);
    }
  }, [calculateProgressBar]);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} my={"auto"} gap={2}>
      <AppProgressBar level={calculateProgressBar} />
      <Typography fontWeight={700} fontSize={24} textAlign={"center"}>
        Parts of Speech
      </Typography>
      {state.words
        .filter((_, idx) => idx === state.answeredQuestion)
        .map((word) => (
          <AppCard key={word.id} word={word} selectAnswer={selectAnswer} />
        ))}
    </Box>
  );
};

export default Practice;
