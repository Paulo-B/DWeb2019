function updateElem (prov,local,tit,musico){
    console.log('vou tentar atualizar o ' + window.location.href +'...')
    var id = window.location.href.split('/')[4]
    console.log(id)
	axios.put('/',{
        uid: id,
        uprov:prov,
        ulocal:local,
        utit:tit,
        umusico:musico
    })
	.then(function(response){
            window.location.assign('/ver/' + id)
    })
	.catch(error=>console.log("ERRO"))
}