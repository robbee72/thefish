function NumToWord(inputNumber, outputEntrance) {
	var str = new String(inputNumber)
	var splitWord = str.split('')
	var rev = splitWord.reverse()
	const ones = [
		'Zero',
		' One',
		' Two',
		' Three',
		' Four',
		' Five',
		' Six',
		' Seven',
		' Eight',
		' Nine'
	] // words for 0-9

	const twos = [
		'Ten',
		' Eleven',
		' Twelve',
		' Thirteen',
		' Fourteen',
		' Fifteen',
		' Sixteen',
		' Seventeen',
		' Eighteen',
		' Nineteen'
	] //words for teens
	const tens = [
		'',
		'Ten',
		' Twenty',
		' Thirty',
		' Forty',
		' Fifty',
		' Sixty',
		' Seventy',
		' Eighty',
		' Ninety'
	] //words for 'tys

	numLength = rev.length // here the reverse is needed. if you type in 3 then 6 the string of the array would return sixty three, so reverse returns thirty six.
	var word = new Array()
	var j = 0
	// the switch-case statement was expanded from open source code. This was the heart of the app. Spent majority of time here.
	for (i = 0; i < numLength; i++) {
		switch (i) {
			case 0:
				if (rev[i] == 0 || rev[i + 1] == 1) {
					word[j] = ''
				} else {
					word[j] = '' + ones[rev[i]]
				}
				word[j] = word[j]
				break
			case 1:
				aboveTens()
				break
			case 2:
				if (rev[i] == 0) {
					word[j] = ''
				} else if (rev[i - 1] == 0 || rev[i - 2] == 0) {
					word[j] = ones[rev[i]] + ' Hundred '
				} else {
					word[j] = ones[rev[i]] + ' Hundred '
				}
				break
			case 3:
				if (rev[i] == 0 || rev[i + 1] == 1) {
					word[j] = ''
				} else {
					word[j] = ones[rev[i]]
				}
				if (rev[i + 1] != 0 || rev[i] > 0) {
					word[j] = word[j] + ' Thousand'
				}
				break
			case 4:
				aboveTens()
				break
			case 5:
				if (rev[i] == 0 || rev[i + 1] == 1) {
					word[j] = ''
				} else {
					word[j] = ones[rev[i]]
				}
				if (rev[i + 1] !== '0' || rev[i] > '0') {
					word[j] = word[j] + ' Million'
				}
				break
			case 6:
				aboveTens()
				break
			case 7:
				if (rev[i] == 0 || rev[i + 1] == 1) {
					word[j] = ''
				} else {
					word[j] = ones[rev[i]]
				}
				if (rev[i + 1] !== '0' || rev[i] > '0') {
					word[j] = word[j] + ' Billion'
				}
				break
			case 8:
				aboveTens()
				break
			case 9:
				if (rev[i] == 0 || rev[i + 1] == 1) {
					word[j] = ''
				} else {
					word[j] = ones[rev[i]]
				}
				if (rev[i + 1] !== '0' || rev[i] > '0') {
					word[j] = word[j] + ' Trillion'
				}
				break
			case 10:
				aboveTens()
				break
			default:
				break
		}
		j++ // Increment ++ still fuzzy on how it exactly works.
	}
	//this function resigns the first value if another value is passed
	function aboveTens() {
		if (rev[i] == 0) {
			word[j] = ''
		} else if (rev[i] == 1) {
			word[j] = twos[rev[i - 1]]
		} else {
			word[j] = tens[rev[i]]
		}
	}

	word.reverse()
	let finalOutput = ''
	for (i = 0; i < numLength; i++) {
		finalOutput = finalOutput + word[i]
	}
	document.getElementById(outputEntrance).innerHTML = finalOutput // displays in browser the integers typed to words. Limited to 10 places.
}

function onlyNumbers(evt) {
	var e = event || evt
	var charCode = e.which || e.keyCode

	if (charCode > 31 && (charCode < 48 || charCode > 57))
		//charCodes limited to just 0-9.
		return false //won't allow charCode other than 0-9
	return true // allows only 0-9
}
