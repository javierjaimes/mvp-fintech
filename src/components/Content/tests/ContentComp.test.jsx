import React from 'react';
import { mount } from 'enzyme';
import ContentComp from '../';
import { AppContext } from '../../../context/AppContext';

const mockedProps = (mockedList=[]) => {
  return (
    {
      list: mockedList,
      fetched: true
    }
  );
}

const list = []
const setList = jest.fn()

describe('ContentComp', () => {
  it('should render .container', () => {
    const component = mount(
      <AppContext.Provider value={{ list, setList }}>
        <ContentComp props={mockedProps()}/>
      </AppContext.Provider>
    );
    expect(component.find('.container').length).toBe(1);
  });
});