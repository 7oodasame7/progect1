let icon = document.getElementById('menu')
let list = document.querySelector('.list')


window.onload = () => {
    setTimeout(() => {
        document.querySelector('.layout').style.top = '-100%';
        document.body.style.overflow = 'visible'
    }, 3000);
}

icon.onclick = () => {
    list.classList.toggle('active')
    icon.classList.toggle('fa-times')
}

document.onscroll = () => {
    list.classList.remove('active')
    icon.classList.remove('fa-times')
    if (window.scrollY > 300) {
        document.querySelector('.top').style.display = 'block'
    } else {
        document.querySelector('.top').style.display = 'none'
    }
}

document.querySelector('.top').onclick = () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
}