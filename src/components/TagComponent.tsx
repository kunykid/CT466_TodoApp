import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  subText?: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle> ;
  onPress?: () => void;
}

const TagComponent = (props: Props) => {
  const {text, color, tagStyle, textStyle, onPress, subText} = props;
  return (
    <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
      style={[
        globalStyles.tag,
        {backgroundColor: color ?? colors.bgCard},
        tagStyle,
      ]}>
      <TextComponent text={text} styles={textStyle}/>
      {subText ? <TextComponent text={subText}/> : undefined}
    </TouchableOpacity>
  );
};

export default TagComponent;
