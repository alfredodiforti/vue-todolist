const app = new Vue({
    el: '#app',
    data: {
        activity: '',
        list: ['chiamare luca', 'fare esercizi', 'fare la spesa'
        ],
    },
    methods: {
        aggiungi() {
            this.list.push(this.activity);            
        },
        remove(indice) {
            this.list.splice(indice, 1);
            
        }

    },

});