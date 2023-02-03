export enum tooltipPositionEnum {
  Up,
  Down
}

export interface ITooltip {
  content: string;
  position: tooltipPositionEnum;
  children?: JSX.Element;
  disabled: boolean
}