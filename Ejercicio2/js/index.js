function iniciar(){
    var SuperCombo = 7.25;
    var ComboPersonal = 5.75;
    var ComboInfantil = 3.50;
    //Productos
    var Ensalada = 1.50;
    var piezaGrande = 1.75;
    var papasFritas = 1.25 ;
    var piezaMediana= 1.50;
    var piezaPequena= 1.25;
    var bebidaGrande= 1.50;
    var bebidaMediana=1.25;
    var bebidaPequena=1.00;
    var cafe=0.50;
    var postre= 1.25;
    //Total
    var total = 0;
    

    if(document.getElementById('combo1').checked){
      total = SuperCombo;
      subtotal.value= total;
      supercombo.value="Super combo: tres piezas de pollo, ensalada, papas fritas y bebida grande de su elecciòn   $7.25 ";
    }
    else if (document.getElementById('combo2').checked) {
      total = ComboPersonal
      subtotal.value= total;
      combomediano.value="Combo Mediano: Dos piezas de pollo, papas fritas y bebida mediana $5.00 ";
    }

    else if (document.getElementById('combo3').checked) {
      total = ComboInfantil;
      subtotal.value= total;
      comboinfantil.value="Combo Infantil: 1 pieza de pollo, papas fritas y una bebida pequeña  $3.00 ";
    }

    if (document.getElementById('Ensalada').checked) {
      total = total + Ensalada;
      subtotal.value= total;
      ensalada.value ="Ensalada    $2 ";
    }

    if (document.getElementById('Pieza_grande').checked) {
      total = total + piezaGrande;
      subtotal.value= total;
      piezagrande.value="Pieza Grande    $1.50 ";
    }

    if (document.getElementById('Papas_fritas').checked) {
      total = total + papasFritas;
      subtotal.value= total;
      papasfritas.value="Papas Fritas    $1.25 ";
    }

    if (document.getElementById('Pieza_mediana').checked) {
      total = total + piezaMediana;
      subtotal.value= total;
      piezamediana.value="Pieza Mediana    $1.25 ";
    }

    if (document.getElementById('Pieza_pequeña').checked) {
      total = total + piezaPequena;
      subtotal.value= total;
      piezapequena.value="Pieza Pequena    $1.10 ";
    }
    if (document.getElementById('Bebida_Grande').checked) {
      total = total + bebidaGrande;
      subtotal.value= total;
      bebidagrande.value="Bebida Grande    $1.00 ";
    }
    if (document.getElementById('Bebida_Mediana').checked) {
      total = total + bebidaMediana;
      subtotal.value= total;
      bebidamediana.value="Bebida Mediana    $0.75 ";
    }
    if (document.getElementById('Bebida_Pequeña').checked) {
      total = total + bebidaPequena;
      subtotal.value= total;
      bebidapequena.value="Bebida Pequeña    $0.25 ";
    }
    if (document.getElementById('Cafe').checked) {
      total = total + cafe;
      subtotal.value= total;
      cafe.value="Café   $0.35 ";
    }
    if (document.getElementById('Postre').checked) {
      total = total + postre;
      subtotal.value= total;
      postre.value="Postre   $2.00 ";
    }


}

function myFunction() {
   window.confirm("Su pedido:\n"+supercombo.value + "\n" + combomediano.value + "\n" + ensalada.value +"\n"+ comboinfantil.value + "\n" +
      papasfritas.value + "\n" +piezagrande.value + "\n" +piezamediana.value + "\n" +piezapequena.value + "\n" +
      bebidagrande.value + "\n" +bebidamediana.value + "\n" +bebidapequena.value + "\n" +cafe.value + "\n" +
      postre.value + "\n");
}
