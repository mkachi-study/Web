var app = new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        AddAge: function(value) {
            this.age += value;
        },

        UpdateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        Click: function() {
            alert('Hello');
        }
    },
})