/* Vue root instance */
var app = new Vue({
  
    el: '#app',
    data:{
      columns:{
        id: 'ID',
        name: 'Full Name',
        phone: 'Phone',
      },

      rows: [],

      currentSort:'Full Name',
      currentSortDir:'asc',
      sortElement: 'name',
    },
    
    created: async function() 
    {
      this.rows = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      //console.log(this.rows);
    },

    methods:{
      sort:function(clickedElement) {
        console.log(clickedElement);
        console.log(this.currentSort);
        switch(clickedElement){
          case 'Full Name':
            this.sortElement = 'name';
            break;
          case 'Phone':
            this.sortElement = 'phone';
            break;
          default:
            this.sortElement = 'id';
        }
        if(clickedElement === this.currentSort) {
          console.log('fk');
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        }
        else{
          this.currentSortDir = 'asc';
        }
        this.currentSort = clickedElement;
      }
    },

    computed:{
      sorted:function() {
        return this.rows.sort((a,b) => {
          let modifier = 1;
          if(this.currentSortDir === 'desc') modifier = -1;
          if(a[this.sortElement] < b[this.sortElement]) return -1 * modifier;
          if(a[this.sortElement] > b[this.sortElement]) return 1 * modifier;
          return 0;
        });
      }
    }

  });
