
var counter = 0;
$('document').ready(function(){
	init();
});

function init(){
	enable();
}

 
function enable(){
	$('#place-for-stuff').append('<button class="generator">Generate</button>');
	$('#place-for-stuff').on('click','.generator',generate);
	$('#place-for-stuff').on('click','.delete',deleteButton);
	$('#place-for-stuff').on('click','.change',changeButton);

}



function generate(){
console.log('imworking!');
	counter++;
	$('#place-for-stuff').append('<div class="normal"></div>');
	$('#place-for-stuff').children().last();
var $el = $('#place-for-stuff').children().last();
	$el.append('<button class = "change">Change</button>');
	$el.append('<button class = "delete">Delete</button>');
	$el.append('<div class = "counter"></div>');
	
	countertxt();
}

function countertxt(){
	$('.counter').text(counter);
}
function deleteButton(){
	$(this).parent().remove();
}
function changeButton(){
	$(this).parent().toggleClass('normal');
 	$(this).parent().toggleClass('active');
}




