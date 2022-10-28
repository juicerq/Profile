function mudarTamanho(classe){
  let heightBefore = $("."+classe).height()
  let heightAfter

  if (heightBefore != heightAfter){
    $("."+classe).css("height", "150px")
    $("."+classe + " span").html("Mostrar menos")
    heightAfter = $("."+classe).height()
  }
  if (heightBefore == heightAfter){
    $("."+classe).css("height", "60px")
    $("."+classe + " span").html("Mostrar mais")
  }
}