import React from 'react';
import { shallow } from 'enzyme';
import Content from '../';
import { AppContext } from '../../../context/AppContext';

const list = []
const setList = jest.fn()

describe('Content', () => {
  const component = shallow(
    <AppContext.Provider value={{ list, setList }}>
      <Content />
    </AppContext.Provider>
  );

  it('should render <contentComp />', () => {
    expect(component).toMatchSnapshot();
  });
});