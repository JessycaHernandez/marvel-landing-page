function calcular(heroi) {
  var viuva = document.getElementById("homem_btn");
  var ferro = document.getElementById("homem_btn");
  var hulk = document.getElementById("hulk_btn");
  var stranho = document.getElementById("estranho_btn");

  if (heroi === "viuva") {
    return alert(
      "Ela é maravilhosa, te entendo, mas, infelizmente ela não é a melhor vingadora"
    );
  } else {
    if (heroi === "homem")
      return alert(
        "Era disso que eu estava falando, Sim, ele é o melhor vingador de todos, ganha até do Thor que é bonitão!"
      );
    else {
      if (heroi === "hulk")
        return alert(
          "Hulk esmaga, mas, não salvou o mundo do estalar de dedos do Thanos, né? Então, infelizmente, näo é ele."
        );
      else {
        return alert(
          "Ok, não precisava apelar, sabemos que o Dr. Estranho é descomunal e que ele é muito bom, mas, vamos fazer um combinado, ele fica no primeiro lugar junto com o homem de ferro tá?"
        );
      }
    }
  }
}
