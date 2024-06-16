import { Text, TouchableOpacity, View } from "react-native";
import { FC, useEffect, useState } from "react";
import {
  PassCodeHeaderProps,
  PassCodeProps,
} from "@/components/passcode/types";
import { Digits } from "@/components/passcode/Digits";
import { Keyboard } from "@/components/passcode/Keyboard";
import {
  DEFAULT_CODE_ACTIVE_COLOR,
  DEFAULT_CODE_INACTIVE_COLOR,
  DEFAULT_COLOR,
  DEFAULT_DIGIT_COLOR,
  DEFAULT_DIGIT_COLOR_FROM,
  DEFAULT_DIGIT_COLOR_TO,
  DEFAULT_DIGIT_ERROR,
  DEFAULT_DIGIT_SIZE,
  DEFAULT_TITLE,
  DEFAULT_VALIDATION_BACKGROUND_COLOR,
  DEFAULT_VALIDATION_COLOR,
  DEFAULT_VALIDATION_TEXT,
} from "./constants";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ValidateButton } from "@/components/passcode/ValidateButton";

export const PassCode: FC<PassCodeProps> = (props) => {
  const [code, setCode] = useState<number[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const handlePress = (value: number | string) => {
    if (value === "delete" && !isWrong) {
      setCode(code.slice(0, -1));
    } else if (value === "clear" && !isWrong) {
      setCode([]);
    } else {
      if (typeof value !== "string" && code?.length < 4)
        setCode([...code, value]);
    }
  };

  useEffect(() => {
    if (!props?.withValidation && code?.length === 4) {
      if (props?.shouldMatch) {
        const isMatching = code.join("") === props?.shouldMatch;
        if (isMatching) {
          props?.onEnd(code.join(""));
        } else {
          setCode([]);
          setIsWrong(true);
        }
      } else {
        props?.onEnd(code.join(""));
      }
    }
    if (props?.shouldMatch && code?.length === 1) {
      setIsWrong(false);
    }
  }, [code]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PassCodeHeader
        code={code}
        title={props?.title}
        subtitle={props?.subtitle}
        isWrong={isWrong}
        inactiveColor={props?.inactiveColor ?? DEFAULT_CODE_INACTIVE_COLOR}
        activeColor={props?.activeColor ?? DEFAULT_CODE_ACTIVE_COLOR}
        errorColor={props?.errorColor ?? DEFAULT_DIGIT_ERROR}
        color={props?.color ?? DEFAULT_COLOR}
      />
      <Keyboard
        onPress={handlePress}
        fromColor={props?.fromColor ?? DEFAULT_DIGIT_COLOR_FROM}
        toColor={props?.toColor ?? DEFAULT_DIGIT_COLOR_TO}
        keySize={props?.keySize ?? DEFAULT_DIGIT_SIZE}
        color={props?.color ?? DEFAULT_DIGIT_COLOR}
      />
      {props?.withValidation && (
        <ValidateButton
          isVisible={code?.length === 4}
          onPress={() => {
            if (!props?.shouldMatch) {
              props?.onEnd(code.join(""));
            } else {
              const isMatching = code.join("") === props?.shouldMatch;
              if (isMatching) {
                props?.onEnd(code.join(""));
              } else {
                setCode([]);
                setIsWrong(true);
              }
            }
          }}
          validationText={props?.validationText ?? DEFAULT_VALIDATION_TEXT}
          validationColor={props?.validationColor ?? DEFAULT_VALIDATION_COLOR}
          validationBackgroundColor={
            props?.validationBackgroundColor ??
            DEFAULT_VALIDATION_BACKGROUND_COLOR
          }
        />
      )}
    </View>
  );
};

const PassCodeHeader: FC<PassCodeHeaderProps> = ({
  title,
  subtitle,
  code,
  color,
  isWrong,
  activeColor,
  inactiveColor,
  errorColor,
}) => {
  return (
    <View
      style={{
        height: "36%",
        justifyContent: "center",
        paddingTop: 20,
        alignItems: "center",
        paddingHorizontal: 40,
        gap: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router?.back()}
        style={{ position: "absolute", top: 10, left: 25 }}
      >
        <Ionicons name="arrow-back" size={24} color={color ?? DEFAULT_COLOR} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 32,
            color: color ?? DEFAULT_COLOR,
          }}
        >
          {title ?? DEFAULT_TITLE}
        </Text>
        {subtitle && (
          <Text
            style={{
              color: color ?? DEFAULT_COLOR,
              textAlign: "center",
              marginTop: 12,
              fontWeight: "thin",
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>
      <Digits
        code={code}
        isWrong={isWrong}
        inactiveColor={inactiveColor}
        activeColor={activeColor}
        errorColor={errorColor}
      />
    </View>
  );
};
