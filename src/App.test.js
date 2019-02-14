import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App Component', () => {

  let component
  beforeEach(() => {
    component = shallow(<App />)
  })

  it('should have a header that says "App"', () => {
    expect(component.contains(<h1>test</h1>)).toBe(true)
  })
  

})

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(component, div);
  //   ReactDOM.unmountComponentAtNode(div);
  
