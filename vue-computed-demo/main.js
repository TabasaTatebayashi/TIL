new Vue({
    el: "#app",
    data: {
        lastName: "田中",
        firstName: "太郎"
    },
    computed: {
        fullName: function(){
            return this.lastName + ' ' + this.firstName;
        }
    }
});