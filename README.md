# React Localizeit

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

See in production [here](http://react-localizeit.surge.sh/).

A simple component for translating your react-app. Once you wrap your views inside the LocalWrapper the translations will be available to rest of your components.

It is tiny package without dependencies. 


### Installation

Make sure that you are using React 16.x


```sh
$ npm install react-localizeit --save
```
### Usage
First of all upon installing the package you have to import inside the file where your parent component is defined. You should be wrapping everything that's going to be rendered inside <LocalWrapper />.

To import it simply pull the LocalWrapper.

`ìmport { LocalWrapper } from 'react-localizeit'`

We have to pass an object of language data to props as data.

We have to pass an object of language data to props as data. If we are using a data set that consists of a few languages we can use the object shorthand.

I prefer to keep my language files inside a folder called locales but you can name it as you like.



```javascript
import en from '/path/locales/en';
import es from '/path/locales/es';
import tr from '/path/locales/tr';
const data = {en , tr , es};
```

```javascript
 const Component = ({data}) => (
              <LocalWrapper
                 data={data}
                 wrapper={({ lit,setLang }) => (
                 // all elements are passed as children of the wrapper.
                    <div>
                      <h1>{lit('desc')}</h1>
                      <button onClick={() => setLang('tr')}></button>
                    </div>
                )}/>
              );
```

# Props

React-localizait comes with the following props

| Name | required | description |
| ------ | ------ | ------ |
| data | true | You should pass your data set.
| setLang | false | For toggling the current language.
| lit | false | Translate a string.
| selectedLanguage | false | Get the current language being used.
| wrapper | true | renders the elements as its children along with the props


# Development
### Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

### Installation

- Running `npm install` in the component's root directory will install everything you need for development.

### Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

### Running Tests

- `npm test` will run the tests once.


### Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.


### Todos
- Create a simple reusable component

License
----

MIT


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/haraldur12/react-localizeit

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-localizeit



