import React from 'react';
import renderer from 'react-test-renderer';
import { render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { LocalWrapper } from '../src';
import en from '../locales/en';
import es from '../locales/es';
import tr from '../locales/tr';

const data = { en ,es ,tr};

const Component = ({data}) => (
    <LocalWrapper
    data={data}
    wrapper={({ lit,setLang }) => (
      <div>
        <h1>{lit('desc')}</h1>
        <button onClick={() => setLang('tr')}></button>
      </div>
    )}
  />
);

const NotFound = ({data}) => (
  <LocalWrapper
  data={data}
  wrapper={({ lit,setLang }) => (
    <div>
      <h1>{lit('notfound')}</h1>
      <button onClick={() => setLang('tr')}></button>
    </div>
  )}
/>
);

describe('<LocalWrapper />', () => {

  it('Check if the translation has been made correctly', () => {
   
    const wrapper = mount(<Component data={data}/>);
   
    expect(wrapper.text()).toEqual('A simple component for translating your react-app.');
  
  });

  it('Checks if the language has been changed and rendered correctly', () => {
    
    const wrapper = mount(<Component data={data} />);
    
    expect(wrapper.text()).toEqual('A simple component for translating your react-app.');

    wrapper.find('button').simulate('click');

    expect(wrapper.text()).toEqual('React uygulamalarınızı çevirmeniz için basit bir komponent');

  });

  it('Check if it renders correctly when a single language set is given',()=> {
    
    const wrapper = render(<Component data={es} setLang={"es"} />);
    expect(wrapper.text()).toEqual('Un componente simple para traducir tu react-app.')

  });


  it('Check if the language defaults to English when no translation is found',() => {
    const wrapper = mount(<NotFound data={data} />);

    expect(wrapper.text()).toEqual('Not found');

    wrapper.find('button').simulate('click');

    expect(wrapper.text()).toEqual('Not found');

  });
});

