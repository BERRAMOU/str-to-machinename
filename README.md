# StrToMachineNmae

Convert an string into a machine name with selected separator: `Foo bar baz faz` → `foo_bar_baz_faz`



## Installation

```bash
$ npm install str-to-machinename
```


## Usage

```js
const strToMachinename = require('str-to-machinename');

strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '_');
//=> 'cest_une_phrase_francaise_avec_des_accente_eacaceiu'

strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '-');
//=> 'cest-une-phrase-francaise-avec-des-accente-eacaceiu'

strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '/');
//=> 'cest/une/phrase/francaise/avec/des/accente/eacaceiu'
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/berramou/str-to-machinename


## License

This npm package is available under the terms of the [MIT License](http://opensource.org/licenses/MIT).

