function mudarTamanho(classe){
  let heightBefore = $("."+classe).height()
  let heightAfter

  if (heightBefore != heightAfter){
    $("."+classe).css("height", "150px")
    heightAfter = $("."+classe).height()
  }
  if (heightBefore == heightAfter){
    $("."+classe).css("height", "60px")
  }
}