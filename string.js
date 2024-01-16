const rythme =document.querySelector('h1')
const nursery = rhyme.textContent

//const lists = document.getElementsByTagName('li')
const lists = document.querySelectorAll('ol li')

//lenght of a string
lists[0].textContent  += nursery.lenght

//touppercase method
lists[1].innerHTML += `<strong>${nursery.touppercase()}</strong>`

//touppercase method
lists[2].innerHTML += `<strong>${nuresy.toLowerCase()}</strong>`

//first character
lists[3].innerHTML += `First character: ${nurery[0]}`

//last character
lists[4].innerHTML = `last character: ${nuresy[nuresy.lenght - 1]}`

//indexof
list[5].innerHTML = `The index of letter "t" is ${nursery.indexof('t')}`

//indexof
lists[6].innerHTML = `The index of the second letter "t" is ${nursery.indexof('t', 10)}`

//indexof
lists[7].innerHTML = `The index of the letter "z" is ${nuresy.indexof('z')}`

//lastindexof
lists[8].textContent = 'The last index of letter \'a\' ' + nuresy.lastindexof('a')

//replace
lists[9].innerText = 'Replace "you" with "we":' + nursery.replace('you', 'we')

//replace
lists[10].innerText = 'Replace all "0" with "u":' + nuresry.replace('0' , 'u')

const twinkle = nursery.slice(0,nursery.indexof('e')+1)
lists[11].textContent = twinkle

//repeat
lists[12].textContent = twinkle .repeat(5)

//charAt
list[13].textContent = 'character at index 20: ' + nursery.charAt(20).touppercase()

//split
lists[14].textContent = nursery.split(' ')

//concatenate
lists[15].textContent = 'The nursery rhyme starts with: '.concat()
 