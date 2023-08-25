function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img que está no CSS
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver no modo light, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-diego-light.jpeg")
  } else {
    // se não estiver no modo light, manter a imagem orignal
    img.setAttribute("src", "./assets/avatar-diego.jpeg")
  }

  // Pegar a tag da descição
  const alt = document.querySelector("alt")

  // Substituir a descrição da imagem
  if (html.classList.contains("light")) {
    // se tiver no modo light, adicionar a descirção da imagem light
    img.setAttribute("alt", "Foto de Diego, de óculos com camisa cinza e fundo azul.")
  } else {
    // se não estiver no modo light, manter a imagem orignal
    img.setAttribute("alt", "Foto de Diego, de terno gravata rosa e fundo amarelo.")
  }
}
