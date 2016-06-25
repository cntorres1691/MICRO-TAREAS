self.addEventListener('message', function (event) {
 
var fecha= new Date();

while (new Date() - fecha <5000){

}
self.postMessage("Activando el Worker :"+event.data)
 
}, false);