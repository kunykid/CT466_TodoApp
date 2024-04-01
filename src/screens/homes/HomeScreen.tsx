import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {globalStyles} from '../../styles/globalStyles';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import {Add, SearchNormal} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import TitleComponent from '../../components/TitleComponent';
import CardComponent from '../../components/CardComponent';
import TextComponent from '../../components/TextComponent';
import TagComponent from '../../components/TagComponent';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Container isScroll>
        <SectionComponent>
          <RowComponent justify="space-between">
            <TitleComponent text="Todo" />
            <SearchNormal
              onPress={() => navigation.navigate('SearchScreen')}
              size="26"
              color={colors.desc}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TitleComponent text="Hôm nay" />
          <RowComponent justify="space-around">
            <TagComponent
              text="0"
              subText="Cần làm"
              tagStyle={{width: 100}}
              textStyle={{color: colors.text}}
              onPress={() => console.log('Can lam')}
            />
            <TagComponent
              text="2"
              subText="Quá hạn"
              tagStyle={{width: 100}}
              onPress={() => console.log('Qua han')}
            />
            <TagComponent
              text="0"
              subText="Ngoài kế hoạch"
              tagStyle={{width: 100}}
              onPress={() => console.log('Ngoai ke hoach')}
            />
          </RowComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 20,
          padding: 20,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.bgCard,
              padding: 10,
              borderRadius: 12,
              paddingVertical: 14,
            },
          ]}>
          <Add size={22} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
