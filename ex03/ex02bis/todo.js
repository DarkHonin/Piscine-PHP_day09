$(document).ready(function(){
	$("#new").click(new_todo);	
});

function new_todo(){
	var str = prompt("New todo: ");
	while (str === "")
		str = prompt("Please enter a valid string: ");
	if (str)
		put_new(str);
}


function del(){
	if(confirm("Are you sure you intend to oblitterate this information?"))
		$(this).remove();
}

function put_new(str){
	var elem = $("#ft_list");
	var item = document.createElement("p");
	item.onclick = del;
	item.append(str);
	elem.append(item);
}

