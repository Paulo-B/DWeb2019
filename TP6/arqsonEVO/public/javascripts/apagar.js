function apagaItem (ident){
	console.log('Apagar ' + ident)
	
	axios.delete('/'+ident)
		.then(response=> window.location.assign('/'))
		.catch(error=>console.log(error))
}