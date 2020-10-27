/* Vue root instance */
var app = new Vue({
    el: '#app',
    data: {
        columns: {
            id: 'ID',
            name: 'Full Name',
            phone: 'Phone',
        },

        rows: [
            {id: 1, name: "Test Name 1", phone: '305-917-1301'},
            {id: 2, name: "Test Name 2", phone: '210-684-8953'},
            {id: 3, name: "Test Name 3", phone: '765-338-0312'}
        ]
    }
});
