function ApplicationWindow() {
	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff'
	});

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

	self.add(sex);

	sex.addEventListener('TwChange', function(e) {
		sexData = e.data;
	});

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
