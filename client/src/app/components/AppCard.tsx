import { IPartOfSpeech, IWordType } from "@/types";
import { Box, Typography } from "@mui/material";
import AppButton from "./AppButton";
import { useState } from "react";

interface AppCardProps {
  word: IWordType;
  selectAnswer: (correctAnswer: IPartOfSpeech, answer: IPartOfSpeech) => void;
}

const AppCard = ({ word, selectAnswer }: AppCardProps) => {
  const [correctAnswer, setCorrectAnswer] = useState<IPartOfSpeech | null>(null);

  const onHandleClick = (answer: IPartOfSpeech) => {
    if (word.pos === answer) setCorrectAnswer(answer);
    else setCorrectAnswer(answer);
    selectAnswer(word.pos, answer);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      border={1}
      borderRadius={2}
      borderColor={"#CCC"}
      p={2}
      height={150}
      width={"100%"}
      gap={2}
    >
      <Typography fontWeight={600} fontSize={26}>
        {word.word} is...
      </Typography>
      <Box display={"flex"} gap={2}>
        {(Object.keys(IPartOfSpeech) as (keyof typeof IPartOfSpeech)[]).map((pos) => (
          <AppButton
            key={pos}
            onClick={() => correctAnswer === null && onHandleClick(IPartOfSpeech[pos])}
            color={correctAnswer === IPartOfSpeech[pos] ? word.pos === IPartOfSpeech[pos] ? 'success' : 'error' : 'primary'}
          >
            {pos}
          </AppButton>
        ))}
      </Box>
    </Box>
  );
};

export default AppCard;
