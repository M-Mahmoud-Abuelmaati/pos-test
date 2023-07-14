import { Button, ButtonProps } from "@mui/material";

const AppButton = ({
  width = 164,
  height = 48,
  type = "button",
  variant = "contained",
  sx = {},
  onClick,
  children,
  ...props
}: ButtonProps & { width?: number | string | any; height?: number }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      sx={{
        fontWeight: 500,
        p: "6px 14px",
        width,
        height: height,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AppButton;
