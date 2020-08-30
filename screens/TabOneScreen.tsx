import * as React from 'react';
import { View } from 'react-native';

import { Text } from '../components/Themed';
import { Card, Button, Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

export default function TabOneScreen() {
  const {t} = useTranslation();

  return (
    <Card
      title={<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#555555'}}>{t('hello')}</Text>
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
};