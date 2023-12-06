import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

interface IconDetail {
  family: string;
  color?: string;
  icons: string[];
}

interface Icon {
  icon: string;
  family: string;
  color: string;
}

interface IconPickerProps {
  headerTitle?: string;
  showIconPicker: boolean;
  onSelect: (icon: Icon) => void;
  toggleIconPicker: () => void;
  iconDetails: IconDetail[];
  content?: React.ReactNode;
  selectedIcon?: Icon;
  selectedIconContainerStyle?: StyleProp<ViewStyle>;
}

declare class IconPicker extends React.Component<IconPickerProps, any> {}

export default IconPicker;
