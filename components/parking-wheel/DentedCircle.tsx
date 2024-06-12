import Svg, { Circle, Path } from "react-native-svg";

const DENTED_CIRCLE_RADIUS = 140;
const CX = 150;
const CY = 150;
const NUMBER_OF_DENTS = 130;
const DENT_DEPTH = 3;

export const DentedCircle = () => {
  const pathData =
    Array.from({ length: NUMBER_OF_DENTS })
      .map((_, index) => {
        const angle = (index / NUMBER_OF_DENTS) * 2 * Math.PI;
        const innerRadius =
          DENTED_CIRCLE_RADIUS - (index % 2 === 0 ? DENT_DEPTH : 0);
        const x = CX + innerRadius * Math.cos(angle);
        const y = CY + innerRadius * Math.sin(angle);
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ") + " Z";

  return (
    <Svg
      height="300"
      width="300"
      style={{
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
      }}
    >
      <Path d={pathData} stroke="#00000000" strokeWidth="2" fill="white" />
      <Circle
        cx="150"
        cy="150"
        r="131"
        stroke="#83A5C7"
        strokeWidth="3"
        fill="white"
      />
    </Svg>
  );
};
