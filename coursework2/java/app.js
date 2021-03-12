openMenu = () => {
  document.getElementById("menu").style.right = '0';
  document.getElementById("cover").style.right = '0';
}

closeMenu = () => {
  document.getElementById("menu").style.right = '-100%';
  document.getElementById("cover").style.right = '-100%';
}

  document.getElementsByClassName("burger").addEventListener("click",openMenu);
  document.getElementById("cover").addEventListener("click",closeMenu);
