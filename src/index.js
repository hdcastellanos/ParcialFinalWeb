import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import SerieList from "./components/SerieList.js";
import {IntlProvider} from "react-intl";
import localeEnMessages from "./locales/en.json";
import localeEsMessages from "./locales/es.json";



function getLocale(){
  const lang = getBrowserLang()
  if (lang === "en"){
    return localeEnMessages
  }
  else{
    return localeEsMessages
  }
}

function getBrowserLang(){
  const lang = navigator.language || navigator.userLanguage
  return lang
}

ReactDOM.render(

  <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
    <SerieList lang={getBrowserLang()}/>
  </IntlProvider>
  ,document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
