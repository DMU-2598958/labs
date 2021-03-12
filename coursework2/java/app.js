openMenu = () => {
  document.getElementsById("menu").style.right = '0';
  document.getElementsById("cover").style.right = '0';
}

closeMenu = () => {
  document.getElementsById("menu").style.right = '-100%';
  document.getElementsById("cover").style.right = '-100%';
}

  document.getElementsByClassName("burger").addEventListener("click",openMenu);
  document.getElementsById("cover").addEventListener("click",closeMenu);
