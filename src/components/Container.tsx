import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import InputComponent from './InputComponent';

interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
  isScroll?: boolean;
}

const Container = (props: Props) => {
  const {title, back, right, children, isScroll} = props;
  const navigation: any = useNavigation();
  return (
    <View style={[globalStyles.container]}>
      <RowComponent
        styles={{
          paddingTop: back ? 10 : 0,
          paddingBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 size={24} color={colors.text} />
          </TouchableOpacity>
        )}
        <View style={{flex: 1}}>
          {title && (
            <TextComponent
              flex={0}
              font={fontFamilies.bold}
              size={16}
              text={title}
              styles={{textAlign: 'left', marginLeft: back ? 24 : 0}}
            />
          )}
        </View>
      </RowComponent>
      {isScroll ? (
        <ScrollView style={[globalStyles.container]}>{children}</ScrollView>
      ) : (
        <View style={{flex: 1}}>{children}</View>
      )}
    </View>
  );
};

export default Container;
