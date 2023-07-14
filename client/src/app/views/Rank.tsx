import api from "@/services/api";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import AppButton from "../components/AppButton";
import { resetQuestions, setRank, useAppContext } from "../contexts/AppContext";

interface RankProps {}

const Rank = ({}: RankProps) => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const onHandleReset = () => {
    dispatch(resetQuestions());
  };

  useEffect(() => {
    if (Math.round((state.answeredQuestion / state.words.length) * 100) !== 100) {
      navigate(ROUTES.PRACTICE);
    }
  }, [state.words.length, state.answeredQuestion]);

  useEffect(() => {
    const fetchData = async () => {
      const finalScore = (state.correctQuestion / state.words.length) * 100;
      const { rank } = await api.getRank(finalScore);
      dispatch(setRank(rank));
    };
    fetchData();
  }, []);

  return (
    <Stack spacing={2} height={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Box textAlign={"center"}>
        <Typography fontWeight={700} fontSize={36}>
          Your rank is
        </Typography>
        <Typography fontWeight={700} fontSize={36}>
          {state.rank} %
        </Typography>
      </Box>
      <AppButton color="info" onClick={onHandleReset}>
        Try again
      </AppButton>
    </Stack>
  );
};

export default Rank;
