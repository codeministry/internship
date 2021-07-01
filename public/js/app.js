var app = new Vue({
    el: '#app',
    data: {
      message: 'Hallo Welt!',
      subheading: 'Und alle Interessent*innen',
      introduction: 'Mit diesem Formular werden sie ein Teil der wilden Füchse Religion',
      text1: 'Lorem Consequat fugiat elit voluptate consequat dolor consectetur magna consequat nisi ut labore',
      text2: 'Lorem Consequat fugiat elit voluptate consequat dolor consectetur magna consequat nisi ut labore',
      text3: 'Lorem Consequat fugiat elit voluptate consequat dolor consectetur magna consequat nisi ut labore',
    }
})

var counter = new Vue({
    el: '#counter',
    data: {
        number: 0
    },
    methods: {
        count: function (event) {
            this.number = this.number + 1;

            var counterModalElement = document.getElementById('counterModal');
            var counterModal = new bootstrap.Modal(counterModalElement, {})
            
            counterModal.toggle()
        }
    }
})