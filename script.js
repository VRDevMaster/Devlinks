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
    img.setAttribute(
      "alt",
      "Foto de Vinicius, usando terno azul marinho e camisa cinza"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de perfil de Vinicius sorrindo, usando camiseta preta e atras uma fonte de agua com cacho de uva."
    )
  }
}
