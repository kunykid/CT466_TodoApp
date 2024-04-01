import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  KeyboardType,
  KeyboardTypeOptions,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import TextComponent from './TextComponent';
import {TextStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TitleComponent from './TitleComponent';
import RowComponent from './RowComponent';
import {globalStyles} from '../styles/globalStyles';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {colors} from '../constants/colors';

interface Props {
  value: string;
  onChange: (value: string) => void;
  allowClear?: boolean;
  prefix?: ReactNode;
  affix?: ReactNode;
  title?: string;
  helpText?: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  type?: KeyboardTypeOptions;
  password?: boolean;
  showPass?: boolean;
  setShowPass?: boolean;
  multiple?: boolean;
  numberOfLine?: number;
  isPassWord?: boolean;
}

const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    title,
    allowClear,
    prefix,
    affix,
    placeholder,
    inputStyle,
    multiple,
    numberOfLine,
    isPassWord,
  } = props;
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multiple && numberOfLine ? 32 * numberOfLine : 32,
            paddingHorizontal: 10,
            paddingVertical: 14,
            alignItems: 'flex-start',
          },
        ]}>
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: affix ? 8 : 0,
          }}>
          <TextInput
            style={[globalStyles.text, {margin: 0, padding: 0}, inputStyle]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multiple}
            numberOfLines={numberOfLine}
            autoCapitalize="none"
            secureTextEntry={isPassWord ? !showPass : false}
          />
        </View>
        {affix && affix}
        {allowClear && value && (
          <TouchableOpacity onPress={() => onChange('')}>
            <AntDesign name="close" size={20} color="#212121" />
          </TouchableOpacity>
        )}
        {isPassWord && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            {showPass ? (
              <EyeSlash size={20} color={colors.desc} />
            ) : (
              <Eye size={20} color={colors.desc} />
            )}
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
