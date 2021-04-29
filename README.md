# StrToMachineNmae

> Convert an string to machine name with selected separator: `Foo bar baz faz` → `foo_bar_baz_faz`

### Cases you may need this for:
* To generate clean url alias for you articles from the title for example
```js
const urlAlias = strToMachinename('My awesome article title', '-');
//=> my-awesome-article-title
```
* or to generate clean username from first name and last name of your user entity. 
```js
const username = strToMachinename('First name ' + 'Last Name', '_');
//=> first_name_last_name
```


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

**Note:** The following punctuations will be removed ***. , # ! $ % ^ & * ; : { } = ` ~ ( ) " '***


## API

### strToMachinename(input, separator)

#### input

Type: `string`

String to convert.

#### separator

Type: `'-' | '_' | '/'`

Separator used for conversion.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/berramou/str-to-machinename


## License

This npm package is available under the terms of the [MIT License](http://opensource.org/licenses/MIT).

