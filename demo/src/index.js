import React, { Component } from 'react'
import {render } from 'react-dom';
import { LocalWrapper } from '../../src';

import en from '../../locales/en';
import es from '../../locales/es';
import tr from '../../locales/tr';

const data = { en ,es ,tr};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDocs : false
    }
    this.viewDocuments = this.viewDocuments.bind(this);
  }
  viewDocuments(){
    this.setState({
      viewDocs : !this.state.viewDocs
    })
  }
  render() {
    return (
      <LocalWrapper
        data={data}
        wrapper={({ lit,setLang }) => (
          <div>
           <button onClick={() => setLang('tr')}>tr</button>
           <button onClick={() => setLang('en')}>en</button>
           <button onClick={() => setLang('es')}>es</button>
           {lit('hello')}
          </div>
        )}
      />
    )
  }
}


render(<App/>, document.querySelector('#demo'))
