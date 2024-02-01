function toggleMode() {
  const html = document.documentElement

  /* uma forma de trocar dark mode para ligth mode.
  if(html.classList.contains('ligth')){
    html.classList.remove('ligth')
  }else{
    html.classList.add('ligth')
  }
  */
  html.classList.toggle("ligth")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
