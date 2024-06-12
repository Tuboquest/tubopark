import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { FC, ReactNode } from "react";

type GestureLayoutProps = {
  children: ReactNode;
};

export const GestureLayout: FC<GestureLayoutProps> = ({ children }) => {
  return (
    <GestureHandlerRootView>
      <PanGestureHandler>{children}</PanGestureHandler>
    </GestureHandlerRootView>
  );
};
