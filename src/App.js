import React, { Component } from 'react';
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './language/en';
import tr from './language/tr';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('tr', tr);
counterpart.setLocale('en');

const Link = (props) => {
  return (
    <Translate
      content={props.content}
      component="a"
      href="//google.com"
      target="_blank"
    />
  )
}

class App extends Component {

  state = {
    lang: 'en'
  }

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }

  render() {
    const link = <Link content="link"/>;
    return (
      <div className="App">

        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>

        <Translate content="title" component="h1" className="class"/>

        <Translate content="copy.p1" component="p" unsafe={true}/>

        <Translate content="copy.p2" component="p" with={{ link }}/>

        <Translate component="input" type="text" attributes={{placeholder: 'placeholder'}}/>

      </div>
    );
  }
}

export default App;
