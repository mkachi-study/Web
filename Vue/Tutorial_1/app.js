var app = new Vue({
    el: '#vue-app',
    data: {
        message: 'Hello!',
        naver_link: 'http://www.naver.com',
        name: 'none',
        Tag1: '<a href="http://mkachi.blog.me/">Goto Blog</a>'
    },
    methods: {
        greet: function() {
            return 'TestMessage'
        },

        PrintA: function(a) {
            return 'Test : ' + ' ' + a + ' ' + this.message;
        },
    }
});