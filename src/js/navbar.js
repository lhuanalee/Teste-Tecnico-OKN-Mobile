class NavBar {
  constructor(menu, closeMenu, navList, navItem) {
    this.menu = document.querySelector(menu);
    this.closeMenu = document.querySelector(closeMenu);
    this.navList = document.querySelector(navList);
    this.navItem = document.querySelectorAll(navItem);
    this.activeClass = "active";
    this.openNavBar = this.openNavBar.bind(this);
    this.closeNavBar = this.closeNavBar.bind(this);
  }

  openNavBar() {
    this.navList.classList.add(this.activeClass);
  }

  closeNavBar() {
    this.navList.classList.remove(this.activeClass);
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.openNavBar);
    this.closeMenu.addEventListener("click", this.closeNavBar);
  }

  init() {
    if (this.menu || this.closeMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const navBar = new NavBar(
  ".header__menu",
  ".navigation__image-close",
  ".navigation__list",
  ".navigation__item"
);

navBar.init();
