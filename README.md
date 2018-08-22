# distributor-js
## Getting Started

### Installation

```
npm install distributor-js --save
```

### usage

    var distributor = require('./index');

    var i18n = distributor({
    'cn': {
        hello: '你好',
        ok: '好的'
    },
    'en': {
        hello: 'hello',
        ok: 'ok'
    },
    'jp': {
        hello: 'こんにちは',
        ok: 'オーケー'
    },
    });

    var i18nData = i18n.data;

    console.log('--', i18n.getType(), '--');
    console.log(i18nData.hello);
    console.log(i18nData.ok);
    // -- cn --
    // 你好
    // 好的

    i18n.setType('en')
    console.log('--', i18n.getType(), '--');
    console.log(i18nData.hello);
    console.log(i18nData.ok);
    // -- en --
    // hello
    // ok

    i18n.setType('jp')
    console.log('--', i18n.getType(), '--');
    console.log(i18nData.hello);
    console.log(i18nData.ok);
    // -- jp --
    // こんにちは
    // オーケー

    var theme = distributor({
    'normal': {
        RN: { // react native style
            headerStyle: { backgroundColor: '#fff' }, 
            textStyle: { color: '#000' }, 
        },
        headerStyle: 'background-color: #fff; color: #000', // css style
    },
    'night': {
        RN: { // react native style
            headerStyle: { backgroundColor: '#333' }, 
            textStyle: { color: '#333' }, 
        },
        headerStyle: 'background-color: #333; color: #ccc', // css style
    }
    });

    var themeData = theme.data;

    console.log('--', theme.getType(), '--');
    console.log(themeData.RN);
    console.log(themeData.RN.headerStyle);
    console.log(themeData.headerStyle);
    // -- normal --
    // {headerStyle: {…}, textStyle: {…}}
    // {backgroundColor: "#fff"}
    // background-color: #fff; color: #000

    theme.setType('night')
    console.log('--', theme.getType(), '--');
    console.log(themeData.RN);
    console.log(themeData.RN.headerStyle);
    console.log(themeData.headerStyle);
    // -- night --
    // {headerStyle: {…}, textStyle: {…}}
    // {backgroundColor: "#333"}
    // background-color: #333; color: #ccc

## License

Day.js is licensed under a [MIT  License](./LICENSE).