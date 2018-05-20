let result = "";
let smallResult = "";
let bigResult = "";

function Query() {
	$("input:text[name='resultBig']").val(bigResult);
	$("input:text[name='resultSmall']").val(smallResult);
}

$("input:button").click(function(){
	result = "";
	smallResult += $(this).val();
	bigResult += $(this).val();
	Query();
});

let operator = null;
$(".operator").click(function(){
	let checkDot = bigResult.split(".");
	if(checkDot.length <3) {	
		operator = $(this).val();
		if (result != "")  smallResult = result;
		smallResult += operator;
		$("input:text[name='resultSmall']").val(smallResult);
		bigResult = "";
	}	else errorMessage();
});


$(".equal").click(function(){
	let checkDot = bigResult.split(".");
	if(checkDot.length <3) {	
		bigResult = eval(smallResult);
			if(Number.isInteger(bigResult)) bigResult; 
			else bigResult = bigResult.toFixed(2);
		result = bigResult;
		smallResult += $(this).val() + bigResult;
		Query();   
		clear();
	} else errorMessage();
});

function errorMessage(){

	$("input:text[name='resultSmall']").val("Are you sure there is a number like this ?").css("font-size", "12px");
	$("input:text[name='resultBig']").val("Error!").css("text-align","center");
	clear(); 	result = "";
}

function clear(){
	smallResult = "";
	bigResult = "";
}

function AC(){
	$("input:text[name='resultSmall']").val("");
	$("input:text[name='resultBig']").val("");
	clear();
}

function DEL() {
	smallResult = smallResult.slice(0, -1);
	bigResult = bigResult.slice(0, -1);
	Query();
}