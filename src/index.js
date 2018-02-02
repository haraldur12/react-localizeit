import React from 'react';
import PropTypes from 'prop-types';

class LocalWrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };
  }

  render() {
    console.log(this.props.wrapper);
    return this.props.wrapper({
      setLang: lang => this.setState({lang}),
      selectedLanguage: this.state.lang,
      lit: (word) => {
        if(typeof word === "string"){
          let value;
          if (this.props.data[this.state.lang] && !this.props.data[this.state.lang].hasOwnProperty(word)) {
            value = this.props.data.en[word]
          }
          else if (this.props.data[this.state.lang]) {
            value = this.props.data[this.state.lang][word]
          }
          else {
            value = this.props.data[word]
          }
          return value;
        }   else {
          console.error(
            `Argument ${word} supplied to lit as props is not a string.
             But a ${typeof word}.
             You can only pass strings as to arguments to lit.
            `)
        }      
      }
    });
  }
}

LocalWrapper.propTypes = {
  data : PropTypes.object.isRequired
};

export { LocalWrapper };