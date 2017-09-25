	var acc = "";
	var getExp = function(button){
		acc += button;
		$('#display').append(button);
	};
$(document).ready(function(){
	$('#1').click(function(){getExp(1);});
	$('#2').click(function(){getExp(2);});	
	$('#3').click(function(){getExp(3);});
	$('#4').click(function(){getExp(4);});
	$('#5').click(function(){getExp(5);});
	$('#6').click(function(){getExp(6);});
	$('#7').click(function(){getExp(7);});
	$('#8').click(function(){getExp(8);});
	$('#9').click(function(){getExp(9);});
	$('#0').click(function(){getExp(0);});
	$('#dot').click(function(){getExp('.');});
	$('#sum').click(function(){getExp('+');});
	$('#sub').click(function(){getExp('-');});
	$('#mul').click(function(){getExp('*');});
	$('#div').click(function(){getExp('/');});
	$('#equal').click(function(){
		var result = eval(acc);
		acc = ''
		console.log(result);
		$('#display').html(result);
		
	})


	$('#ac').click(function(){
		acc = '';
		$('#display').html(acc);
	});

});