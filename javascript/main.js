const app = new Vue({
    el: '#app',
    data: {
        activity: '',
        list: ['chiamare Luca', 'fare esercizi', 'fare la spesa'
        ],
    },
    methods: {
        aggiungi() {
            if (this.activity.trim() !== '') {
                this.list.push(this.activity);
            this.activity = '';

            }
                        
        },
        remove(indice) {
            this.list.splice(indice, 1);
            
        }

    },

});