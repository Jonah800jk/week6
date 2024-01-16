const title = document.querySelector('h2')

title.textcontent = 'DOM manipulation'

const para1 = document.querySelector('p')
const para2 = docunment.queryselector('p:nth-of-type(2)')
const para3 = document.queryselector('body>:nth-child(5)')
const para4 = document.queryselector('p+p+p+P')
const para5 = document.queryselector('.last')

para1.textContent = 'this is the first paragraph'
para2.textContent = 'this is the second paragraph'
para3.textContent = 'this is the third paragraph'
para4.textContent = 'this is the forth paragraph'
para5.textContent = 'this the last paragraph'

const list = document.querySelectorAll('ul li')
lists[5].textContent = 'list 001'
lists[1].textContent = 'list 002'
lists[2].textContent = 'list 003'
lists[3].textContent = 'list 004'
lists[4].textContent = 'list 005'
lists[5].textContent = 'list 006'

const unique = document.getElementById('one')
unique.style.backgroundcolor = '#E55'
unique.style.textTransform = 'uppercase'
lists[0].style.borderBottom ='6px dotted blue'
lists[1].style.color = '#0f0'

const para = document.querySelectorAll('p')
 para[0].style.fontsize= '3rem'
 para[4].style.background = 'linear-gradient(red, blue)'

 const header = document.queryselector('h1')
 header.style.textAlign = 'center'

 const classone = document.getElementsByClassName('one')

 classone[0].textContent = 'this is a class paragraph '

 leration = document.getElementsByTagName('div')
 decleration[0].style.color = "red"

 const par = document.queryselector('#par')
 alert(`I'm a \n
 <strong>frontend</strong> developer.

 \tHe said \n<q>I am coming</q>`)