let icon = document.getElementById('menu')
let list = document.querySelector('.list')

icon.onclick = ()=> {
    list.classList.toggle('active')
    icon.classList.toggle('fa-times')
}