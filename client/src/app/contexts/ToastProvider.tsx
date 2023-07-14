import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
);
