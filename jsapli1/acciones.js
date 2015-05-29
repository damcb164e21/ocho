// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		
  $('#beep').tap(function(){
  navigator.notification.beep(1);
  });//tap´beep

  $('#vibrar').tap(function(){
  navigator.notification.vibrate(1000);
  });//tap vibrar

		$('#izquierda').on ("swipeleft", function(){
			navigator.notification.alert("deslizó a la izquierda",function(){"Aplicacion5","Aceptar"});
});//barrer izquierda}


        $('#derecha').on("swiperight", function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}//switch opt
			},"Aplicacion5","Beep,Vibrar,Cancelar");//confirm
			
		});//barrer derecha
		document.addEventListener("pause",function(){
			escribehistoria('la app se pauso');
		},false);//pausa
		document.addEventListener("resume",function(){
			escribehistoria('la app se reinicio');
		},false);//resume
		document.addEventListener("onLine",function(){
			escribehistoria('la app se conecto a la red');
		},false);//se conecto
		document.addEventListener("offLine",function(){
			escribehistoria('la app se desconecto de la red');
		},false);//se desconecto
		
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}

