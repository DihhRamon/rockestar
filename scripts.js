function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img que está no CSS
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver no modo light, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não estiver no modo light, manter a imagem orignal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // Pegar a tag da descição
  const alt = document.querySelector("alt")

  // Substituir a descrição da imagem
  if (html.classList.contains("light")) {
    // se tiver no modo light, adicionar a descirção da imagem light
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuro e jaqueta, sem barba e fundo roxo e azul.")
  } else {
    // se não estiver no modo light, manter a imagem orignal
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
  }
}
