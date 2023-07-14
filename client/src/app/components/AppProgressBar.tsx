import Box from "@mui/material/Box";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function LinearProgressBar(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Typography variant="body2" color="text.primary">{`${props.value}%`}</Typography>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

interface AppProgressBarProps {
  level: number;
}

const AppProgressBar = ({ level }: AppProgressBarProps) => {
  const [progress, setProgress] = useState(level);

  useEffect(() => {
    setProgress(level);
  }, [level]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressBar value={progress} />
    </Box>
  );
};

export default AppProgressBar;
