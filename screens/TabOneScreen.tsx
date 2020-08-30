import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components/Themed';
import { Card, Button, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

import LoganImage from '../assets/images/logan-weaver-u76Gd0hP5w4-unsplash.jpg';

export default function TabOneScreen() {
  const {t} = useTranslation();

  return (
    <Card>
      <Card.Title>
        <Text style={styles.text}>{t('tab.one.title')}</Text>
      </Card.Title>
      <View>
        <Card.Image source={LoganImage} />
        <Text style={styles.text}>{t('tab.one.description')}</Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={styles.button}
          title={t('tab.one.button')}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    marginTop: 10,
    color: '#555555'
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }
});