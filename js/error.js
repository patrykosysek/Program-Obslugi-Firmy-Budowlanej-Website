
app = new Vue({
    el: ".main_body",
    data:{
        message: ''
    },
    mounted() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const errorCode = urlParams.get('error');
        if (urlParams.get('error') == 503){
            this.message = 'To chyba coś z naszymi serwerami... Wróć ponownie za kilka minut! (Kod błędu: ' + errorCode + ')';
        }
    }
})