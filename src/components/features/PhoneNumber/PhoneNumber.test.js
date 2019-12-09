/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const trueDate = Date;

const mockDate = customDate =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }

    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<PhoneNumber />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component PhoneNumber', () => {
  checkDescriptionAtTime('09:00:00', 'Amanda: 678.243.8455');
  checkDescriptionAtTime('14:00:00', 'Tobias: 278.443.6443');
  checkDescriptionAtTime('20:00:00', 'Helena: 167.280.3970');
  checkDescriptionAtTime('01:00:00', 'Office closed');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(
      <PhoneNumber />
    );
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('07:59:58', 2, 'Amanda: 678.243.8455');
  checkDescriptionAfterTime('11:58:58', 62, 'Tobias: 278.443.6443');
  checkDescriptionAfterTime('17:00:00', 3600, 'Helena: 167.280.3970');
  checkDescriptionAfterTime('19:00:00', 10800, 'Office closed');
});
