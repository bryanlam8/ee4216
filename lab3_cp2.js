/* Vue root instance */
var app = new Vue({
  
    el: '#app',
    data:{
      columns:{
        id: 'ID',
        name: 'Full Name',
        phone: 'Phone',
      },

      rows: []
    },
    
    created: async function() 
    {
      // fetch json data async
      this.rows = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      //console.log(this.rows);
      /*
      fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
        if (response.ok){
          return response.json();
        }
        throw new Error('Network Response is not ok')
      })
        .then(myJson => {
        this.rows = myJson
      })
        .catch(function(error){
        console.log('There is sth wrong with ur fetch operation. ', error.message);
      });
      */
    },

  });
  
  
  
