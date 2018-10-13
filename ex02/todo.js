

function new_todo(){
	var str = prompt("New todo: ");
	while (str === "")
		str = prompt("Please enter a valid string: ");
	if (str)
		put_new(str);
}


function del(){
	if(confirm("Are you sure you intend to oblitterate this information?"))
		document.getElementById("ft_list").removeChild(this);
}

function put_new(str){
	var elem = document.getElementById("ft_list");
	var item = document.createElement("p");
	item.onclick = del;
	item.appendChild(document.createTextNode(str));
	elem.appendChild(item);
}

