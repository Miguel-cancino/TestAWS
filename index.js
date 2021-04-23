const AWS = require('aws-sdk');
// var fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIA4VGQPG5IQ6TTRQWE",
    secretAccessKey: "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"
});
var moment = require('moment-timezone');



async function hora () {
    
    var horaFecha = moment.tz("America/Santiago");
    var precio = Math.random()* 1000 ;
    var descripcion = 'description';

   
    // console.log(JSON.stringify({
    //     horaFecha : horaFecha,
    //     precio: precio,
    //     descripcion: descripcion
    // }));
    var data = JSON.stringify({
        horaFecha: horaFecha,
        precio: precio,
        descripcion: descripcion
    });
    var parametrosPutObject={
        Bucket: 'myrealbucket',
        Key: "horaFecha.json",
        Body: data
    }
    
  await  s3.putObject(parametrosPutObject, (err, data)=>{
        if (err) throw err;
        console.log(data);
    });
    
}
hora();



//Lista de Buckets
// s3.listBuckets({}, (err,data) => {

//     if(err) throw err;
//     console.log(data);
// });

// var parametros = {
//     Bucket: "myrealbucket"
// }

// s3.listObjectsV2(parametros, (err, data)=> {
//     if(err) throw err;

//     console.log(data);
// })

//obtencion objeto y grabada en memoria

// var parametrosObject = {
//     Bucket : 'myrealbucket',
//     Key: 'nombre archivo a descargar'
// }
// s3.getObject(parmetrosGetObject,(err, data)=> {
//     if(err) throw err;
//     console.log(data);
//     fs.writeFile("data.png", data.Body, 'binary', (err)=>{
//         if(err) throw err;
//         console.log("imagen grabada");
//     })
// });




