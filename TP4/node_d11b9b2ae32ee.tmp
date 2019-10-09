var http = require('http')
var url = require('url')
var fs = require('fs')
var count;
var xsl = 0;
const dir = './dataset'

fs.readdir(dir,(err,files) =>{
    count = files.length;
});

http.createServer(function process_server(req,res) 
{
    var parte = req.url.split('/');
    var numero = parte[parte.length - 1];
    console.log('Begin ' +req.method + '----------' + req.url )
    if(/^[1-9][0-9]*/.test(numero))
    {   
        
        if(parseInt(numero) < count)
        {
            xsl=1;
            console.log('LoL ' +req.method + '----------' + req.url + numero )
            fs.readFile('dataset/arq' + numero + '.xml',function(err,data){
             res.writeHead(200,{'Content-type' : 'text/xml; charset=utf-8'});
             res.write(data); 
             res.end();
            });
        }
        else
        {
            console.log('Not ' +req.method + '----------' + req.url );
            res.writeHead(404,{'Content-type' : 'text/html; charset=utf-8'})
            res.write("<h1>ERROR 404 NOT FOUND<h1>")
            res.end();

        }
    }
    else if(/^arq2html.xsl/.test(numero) && xsl == 1)
    {
        xsl = 0;
        console.log('XSL ' +req.method + '----------' + req.url )
        fs.readFile('dataset/arq2html.xsl',function(err,data){
            res.writeHead(200,{'Content-type' : 'text/xml; charset=utf-8'});
            res.write(data); 
            res.end();
        });
    }
    else
        {
            console.log('Not Found ' +req.method + '----------' + req.url );
            res.writeHead(404,{'Content-type' : 'text/html; charset=utf-8'})
            res.write("<h1>ERROR 404 NOT FOUND<h1>")
            res.end();

        }
}).listen(7777);

console.log("Iniciando servidor ...");


