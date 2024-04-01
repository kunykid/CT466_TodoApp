import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import TitleComponent from '../../components/TitleComponent';
import RowComponent from '../../components/RowComponent';
import {CloudAdd, CloudConnection, Logout, User} from 'iconsax-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../constants/colors';
import SectionComponent from '../../components/SectionComponent';
import auth from '@react-native-firebase/auth';
import TextComponent from '../../components/TextComponent';
import SpaceComponent from '../../components/SpaceComponent';

const WorkSpace = ({navigation}: any) => {
  const user = auth().currentUser;
  return (
    <Container isScroll>
      <SectionComponent>
        <TitleComponent text="Tài khoản" />
        <SpaceComponent height={20} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CloudAdd size={40} color="blue" />
          <TextComponent text={`${user?.email}`} />
        </View>
        <SpaceComponent height={40} />
        <RowComponent onPress={() => auth().signOut()}>
          <Logout size={30} color={colors.desc} />
          <SpaceComponent width={20} />
          <TextComponent text="Đăng xuất" />
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default WorkSpace;
