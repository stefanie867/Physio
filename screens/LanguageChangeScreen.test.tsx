import React from 'react';
import renderer from 'react-test-renderer';

import LanguageChangeScreen from './LanguageChangeScreen';

describe('LanguageChangeScreen tests', () => {
  it('Snapshot test', () => {
    const tree = renderer.create(<LanguageChangeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});