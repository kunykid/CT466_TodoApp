import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
}

const TitleComponent = (props: Props) => {
  const {text, font, size, color, styles, flex} = props;
  return (
    <TextComponent
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      text={text}
      color={color}
      styles={[styles]}
      flex={0}
    />
  );
};

export default TitleComponent;
