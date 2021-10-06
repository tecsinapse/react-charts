import { FontWeight } from "./font";

export type AlignmentBaseline =
  | "baseline"
  | "text-bottom"
  | "alphabetic"
  | "ideographic"
  | "middle"
  | "central"
  | "mathematical"
  | "text-top"
  | "bottom"
  | "center"
  | "top"
  | "text-before-edge"
  | "text-after-edge"
  | "before-edge"
  | "after-edge"
  | "hanging";

export type SvgTextType = {
  textAnchor?: "start" | "middle" | "end";
  alignmentBaseline?: AlignmentBaseline;
  fontSize?: number;
  fontWeight?: FontWeight;
  // fontFamily: string;
  fill?: string;
  y?: number;
};
