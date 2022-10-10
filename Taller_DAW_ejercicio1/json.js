var pelis;


pelis={
"peliculauno": "imagenes/pelicula1.jpg ",
"nompeliculauno": "Abracadabra",
"classuno": "Clasificacion(B)  &nbsp &nbsp Duración:96min",
"formatouno": "2D &nbsp|&nbsp Butacas: Premier VIP " ,
"horariouno": "8:00AM  &nbsp 10:00AM &nbsp 12:00PM &nbsp 5:00PM",
"peliculados": "imagenes/pelicula2.jpg",
"nompeliculados": "El Cadáver de la Novia",
"classdos": "Clasificacion(A) &nbsp &nbsp   Duración:77min",
"formatodos": "3D &nbsp|&nbsp Butacas: Tradicionales " ,
"horariodos": "9:00AM  &nbsp 1:00PM ",
"peliculatres": "imagenes/pelicula3.jpg",
"nompeliculatres": "Caroline",
"classtres": "Clasificacion(A)   &nbsp &nbsp Duración:100min",
"formatotres": "2D &nbsp|&nbsp Butacas: Tradicionales " ,
"horariotres": "10:00AM  ",
}


document.getElementById("img").innerHTML = "<div >\n<img hspace=\"450px;\"  vspace=\"25px;\" src=\"" + pelis.peliculauno + "\" height=\"200px\"\" title=\"pelicula1\" />\n</div>\n"+
"<h4 style=\"position: absolute; top:135px; left:650px;\">"+pelis.nompeliculauno+ "</h4>\n"+"<p style=\"position: absolute; top:160px; left:650px;\">\n"+pelis.classuno+"</p>\n"+"<table style=\"display:inline-block;position:absolute; top:200px; left:640px; \" class=\"table table-bordered border-dark container \"\"><tbody>\n<tr>\n <td>\n"+pelis.formatouno+"</td>\n</tr>\n<br><tr>\n<td>\n Horarios:<br>"+pelis.horariouno+"<br>\n<br>\n</td>\n</tr>\n</tbody>\n</table>\n<div>\n<img  hspace=\"450px;\" aling=\"left;\" vspace=\"25px;\" src=\"" + 
pelis.peliculados + "\" height=\"200px\"\" title=\"pelicula2\" />\n</div>\n"+"<h4 style=\"position: absolute; top:400px; left:650px;\">\n"+pelis.nompeliculados+ "</h4>\n"+"<p style=\"position: absolute; top:430px; left:650px;\">\n"+pelis.classdos+"</p>\n"+"<table style=\"display:inline-block;position:absolute; top:460px; left:640px;\" class=\"table table-bordered border-dark container\"\"><tbody>\n<tr>\n <td>\n"+pelis.formatodos+"</td>\n</tr>\n<br><tr>\n<td>\n Horarios:<br>"+pelis.horariodos+"<br>\n<br>\n</td>\n</tr>\n</tbody>\n</table>\n<div>\n<img  hspace=\"450px;\" aling=\"left;\" vspace=\"25px;\" src=\"" +
 pelis.peliculatres + "\" height=\"200px\"\" title=\"pelicula3\" />\n</div>\n"+"<h4 style=\"position: absolute; top:680px; left:650px;\">\n"+pelis.nompeliculatres+ "</h4>\n"+"<p style=\"position: absolute; top:715px; left:650px;\">\n"+pelis.classtres+"</p>\n"+"<table style=\"display:inline-block;position:absolute; top:750px; left:640px;\" class=\"table table-bordered border-dark container\"\"><tbody>\n<tr>\n <td>\n"+pelis.formatotres+"</td>\n</tr>\n<br><tr>\n<td>\n  Horarios:<br>"+pelis.horariotres

