MétodosDescripción

.then(resolve)            
.catch(reject)            
.then(resolve,reject)    
.finally(end)          

fetch("/url").then(function(response) {
  });

  fetch("127.0.0.1:5000").then(function(response) {
  });

  fetch("/url")
  .then(function(response) {
  })
  .catch(function(error) {
  });

  fetch("/url")
  .then(response => {
    return response.text(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {});