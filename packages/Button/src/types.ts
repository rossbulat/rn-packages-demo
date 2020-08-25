export interface IButtonProps {
  label: string;
  style?: object;
  onPress: () => void;
  disabled?: boolean;
  fontSize?: number;
  textColor?: string;
  borderColor: string;
  activeOpacity?: number;
  backgroundColor: string;
}
