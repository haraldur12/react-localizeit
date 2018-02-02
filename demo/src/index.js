import React, { Component } from 'react'
import {render } from 'react-dom';
import { LocalWrapper } from '../../src';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Docs from './components/Docs';

import en from './locales/en';
import es from './locales/es';
import tr from './locales/tr';

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
            <Header setLang={setLang} lit={lit} docs={this.viewDocuments}/>
            {this.state.viewDocs ?
               <Docs lit={lit} /> : 
               <Main lit={lit} docs={this.viewDocuments}/>
            }
            <Footer />
          </div>
        )}
      />
    )
  }
}


render(<App/>, document.querySelector('#demo'))
