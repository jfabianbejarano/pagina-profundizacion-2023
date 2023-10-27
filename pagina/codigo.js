$(function() {

	// Funcionalidades para ubicar y mostrar los menus flotantes
	$(".menu button, .contenedor-main").on("mouseover", ocultarMenus);
    $("#btnMenuInstitucion").on("mouseover", function(){
		var vPos = $("#btnMenuInstitucion").offset();
		mostrarMenu($("#menu-institucion"), vPos.top, 0);
		$(".linea-boton span").hide();
	});
    $("#btnMenuProgramas").on("mouseover", function(){
		var vPos = $("#btnMenuProgramas").offset();
		mostrarMenu($("#menu-programas"), vPos.top, 0);
		$(".linea-boton span").hide();
	});
    $("#btnMenuEstudiaCN").on("mouseover", function(){
		var vPos = $("#btnMenuEstudiaCN").offset();
		mostrarMenu($("#menu-estudiaconnosotros"), vPos.top, vPos.left);
	});
    $("#btnMenuFinanciera").on("mouseover", function(){
		var vPos = $("#btnMenuFinanciera").offset();
		mostrarMenu($("#menu-zonafinanciera"), vPos.top, vPos.left);
	});

});

var lnAltoMenu = 100;
function mostrarMenu(toMenu, tnTop, tnLeft) {
	toMenu.show().attr("z-index", 2500).offset({top: tnTop+lnAltoMenu, left: tnLeft});
}
function ocultarMenus(){
	$("#menu-institucion,#menu-programas,#menu-estudiaconnosotros,#menu-zonafinanciera").hide();
	$(".linea-boton span").show();
}