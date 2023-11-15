//b1: khai báo host
const host = 'localhost';

const fs = require('fs');   //file system

//b2: khai báo port
const port = 3000;   // default port của NodeJS

//b3: khai báo http
const http = require('http');

//b4: tạo web server
const server = http.createServer(function(req , res){
    if(req.url == '/' ){
        fs.readFile('main.html',(err, data)=>{
            if(!err){
        res.write(data);
        res.end();
            }
        })
    }else if(req.url == '/cantho'){
        fs.readFile('cantho.html',(err, data)=>{
            if(!err){
        res.write(data);
        res.end();
            }
        })

        
    }else if(req.url == '/daNang'){
        fs.readFile('daNang.html',(err, data)=>{
            if(!err){
        res.write(data);
        res.end();
            }
        })

    }else if(req.url == '/hanoi'){
        fs.readFile('hanoi.html',(err, data)=>{
            if(!err){
        res.write(data);
        res.end();
            }
        })

    }else if(req.url == '/hcm'){
        fs.readFile('hcm.html',(err, data)=>{
            if(!err){
        res.write(data);
        res.end();
            }
        })
    }
    else{
        res.write('<h3>Page was not found</h3>');
        res.end();
    }
                    
                });

//b5: cho webserver listen port
server.listen(port, ()=>{
    console.log('server is running at http://'+host+':'+port)

});


