import styled, { css } from "@emotion/native";
import { Text as RNText, View } from "react-native";
import { spacing } from "../../styles";

const flexBasis = (columns: number) =>
  css({ flexBasis: `${100 / columns - 2}%` });

export const Container = styled(View)<{ columns: number }>(
  ({ columns }) =>
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${spacing.centi};
      ${flexBasis(columns)}
    `
);

export const Text = styled(RNText)<{
  font: {
    fontFamily: string;
    fontWeight: string;
  };
  expand?: boolean;
  flexEnd?: boolean;
}>(({ font, expand = false, flexEnd = false }) => {
  const { fontFamily, fontWeight } = font;
  return css`
    font-size: 14px;
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    ${expand ? "flex: 1" : ""}
    ${flexEnd ? "justify-content: flex-end" : ""}
  `;
});
