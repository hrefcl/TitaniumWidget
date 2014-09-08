
## Titanium Widget

Set of widget for Titanium in developer status


## Usage

Do yo need call to widget in app.js

function Tw() {}

Tw.UI = require('/widget/UI');

```js
function Tw() {}

Tw.UI = require('/widget/UI');

```

### Combobox 

```js

	sex = Tw.UI.createCombobox({
		borderWidth : '1dp',
		borderRadius : '5dp',
		labelSelect : L('select'),
		width : '80%',
		height : '45dp',
		values : [{
			title : L('male'),
			value : 'male'
		}, {
			title : L('female'),
			value : 'famale'
		}],
		selectedValueIndex : 1,
		multiple : false,
	});

	sex.addEventListener('TwChange', function(e) {
		sexData = e.data;
		Ti.API.debug(e.data.title);
		Ti.API.debug(e.data.value);
	});


```

## License
(The MIT License)

Copyright (c) 2014 href.cl < [href@href.cl](mailto:href@href.cl) >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
