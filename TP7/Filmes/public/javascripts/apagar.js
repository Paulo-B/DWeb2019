function apagaItem (ident){
	console.log('Apagando coisas ' + ident+'...')
	
	axios.delete('/movies/'+ident)
		.then(response=> window.location.assign('/movies'))
		.catch(error=>console.log(error))
}