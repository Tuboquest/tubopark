export type DigitsProps = {
  code: number[];
  isWrong?: boolean;
  inactiveColor?: string;
  activeColor?: string;
  errorColor?: string;
};

// DIGITS ========================================
export type DigitProps = {
  value?: number;
  color?: string;
  size?: number;
  icon?: React.ComponentType;
  fromColor: string;
  toColor: string;
  onPress: (value: number | string) => void;
};

// PASSCODE ========================================
export type PassCodeProps = {
  title?: string;
  subtitle?: string;
  onEnd: (code: string) => void;
  withValidation?: boolean;
  shouldMatch?: string;
} & Pick<KeyboardProps, "color" | "fromColor" | "toColor" | "keySize"> &
  Pick<
    ValidateButtonProps,
    "validationText" | "validationBackgroundColor" | "validationColor"
  > &
  Pick<DigitsProps, "activeColor" | "inactiveColor" | "errorColor">;

export type PassCodeHeaderProps = DigitsProps & {
  title?: string;
  color?: string;
  subtitle?: string;
};

// KEYBOARD ========================================
export type KeyboardProps = {
  color?: string;
  keySize?: number;
  fromColor?: string;
  toColor?: string;
  onPress: (value: number | string) => void;
};

// VALIDATE BUTTON ===================================
export type ValidateButtonProps = {
  validationText?: string;
  isVisible: boolean;
  onPress: () => void;
  validationColor?: string;
  validationBackgroundColor?: string;
};
