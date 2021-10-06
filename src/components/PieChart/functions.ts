import { Platform } from "react-native";
import { FontFamily, FontWeight, SvgTextType } from "../../types";
import { fontColor, getFontFamilyAndWeight } from "../../styles";

export const getCallback = (value: number, fn?: (value: number) => void) => {
  if (!fn) return {};
  return Platform.OS === "web"
    ? { onClick: () => fn?.(value) }
    : { onPress: () => fn?.(value) };
};

export const getFeatured = (featured: boolean) => ({
  arc: { outerRadius: featured ? "100%" : "90%" },
});

export const getTextStyles = (
  styles: SvgTextType | undefined,
  defaultFontWeight: FontWeight,
  chartConfig: { fontFamily: FontFamily } | undefined
) => {
  const {
    textAnchor = "middle",
    alignmentBaseline = "middle",
    fontSize,
    fill = fontColor.dark,
    y,
  } = styles || {};
  return {
    textAnchor,
    alignmentBaseline,
    fontSize,
    fill,
    y,
    ...getFontFamilyAndWeight(
      chartConfig?.fontFamily,
      styles?.fontWeight ?? defaultFontWeight
    ),
  };
};
