import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
// @ts-ignore
import i18n, {languages} from '../i18n';
import { useTranslation } from 'react-i18next';
import { ListItem, Avatar } from 'react-native-elements';

// @ts-ignore
const changeLanguage = (event, id: string) => i18n.changeLanguage(id);

interface Item {
  id: string;
  title: string;
  avatar: any;
}

export default function TabTwoScreen() {  
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      {
        languages.map((item: Item) => (
          // @ts-ignore
          <ListItem key={item.id} bottomDivider>
            <Avatar
              rounded
              source={item.avatar}
            />
            <ListItem.Title style={styles.title} 
              onPress={event => changeLanguage(event, item.id)}>
              {t(item.title)}
            </ListItem.Title>
          </ListItem>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 16,
    width: '100%'
  }
});
