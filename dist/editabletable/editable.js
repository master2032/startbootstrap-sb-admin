
fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.acc}</td>
				<td>${product.producto}</td>
				<td>${product.marca}</td>
				<td>${product.ctd}</td>
				<td>${product.precio}</td>
				<td>${product.total}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});