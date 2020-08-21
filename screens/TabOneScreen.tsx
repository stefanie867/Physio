import * as React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import { Text } from '../components/Themed';
import { Card, Button, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import i18n from '../i18n';
import i18next from 'i18next';

const changeLanguage = () => {
  i18next.language === 'de' ? i18n.changeLanguage('en') : i18n.changeLanguage('de');
};

export default function TabOneScreen() {
  const {t} = useTranslation();
  const isEnabled = i18next.language === 'de';

  return (
    <Card
      title={<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#555555'}}>{t('hello')}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeLanguage}
          value={isEnabled}
        />
      </View>}
      image={require('../assets/images/logan-weaver-u76Gd0hP5w4-unsplash.jpg')}>
      <Text style={{marginBottom: 10, color: '#555555'}}>
        {t('details')}
      </Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title={t('button')} />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
