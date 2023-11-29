const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('aberto')
    const isOpen = dropDownMenu.classList.contains('aberto')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }

const actionBtn = document.querySelector('.action-btn')
const login = document.querySelector('.login')

    actionBtn.onclick = function () {
      login.classList.toggle('aberto')
    }