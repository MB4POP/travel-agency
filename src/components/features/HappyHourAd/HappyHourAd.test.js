/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'HappyAd',
  promoDescription: 'promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render date', () => {
    const rightTitle = mockProps.title;
    const component = shallow(<HappyHourAd titlw={rightTitle} />);
    expect(component.find(select.title).text()).toEqual(rightTitle);
  });
});
