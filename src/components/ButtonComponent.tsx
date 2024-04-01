import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  text: string;
  onPress: () => void;
  color?: string;
  isLoading?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {text, onPress, color, isLoading} = props;
  return (
    <TouchableOpacity
    onPress={onPress}
    disabled={isLoading}
      style={{
        backgroundColor: color ? color : isLoading ? colors.bgCard : colors.activeTab,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderRadius: 14,
      }}>
        {isLoading ? <ActivityIndicator /> : <TextComponent
        text={text}
        flex={0}
        styles={{textTransform: 'uppercase'}}
        font={fontFamilies.semiBold}
        size={16}
      />}
      
    </TouchableOpacity>
  );
};

export default ButtonComponent;
