# melon-listview

[![Build Status](https://travis-ci.org/react-melon/melon-listview.svg?branch=master)](https://travis-ci.org/react-melon/melon-listview)
[![Coverage Status](https://coveralls.io/repos/github/react-melon/melon-listview/badge.svg?branch=master)](https://coveralls.io/github/react-melon/melon-listview?branch=master)

## Usage

```js
import React from 'react';
import ListView from 'melon-listview';
import ReactDOM from 'react-dom';

import './index.styl';

ReactDOM.render(
    <ListView />,
    document.getElementById('app')
);
```

## Setup

### webpack

1. please check out [this](https://github.com/react-melon/melon#如何在-webpack-中使用-melon) first.

2. `npm install -S melon-listview`

### bower

1. `bower install -S melon-listview`
2. config your `requirejs` / `esl`

    ```js
    require.config({
        paths: {
            'melon-listview': 'bower_components/melon-listview/lib/ListView'
        }
    });
    ```

## API Document

check [this](https://doc.esdoc.org/github.com/react-melon/melon-listview/) out

## Run the example

```sh
git clone git@github.com:react-melon/melon-listview.git
cd melon-listview
npm install
npm start
open http://localhost:8080/example
```
