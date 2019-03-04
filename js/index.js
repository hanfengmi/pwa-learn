if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('service worker registed!');
    })
}

var book = {
    init:function(){
        this.didMount();
        this.clickLoad();
    },
    didMount:function(){
        $('.books-box').html('123123')
    },
    clickLoad:function(){
        $('.click-load').on('click',()=>{
            $('.books-box').html('点击啦啊')
            var res = fetch('https://api.douban.com/v2/movie/top250',{
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'text/plain'
                },
                mode: 'no-cors'
            })
            .then(function(response) {
                console.log(response)
                return response.json();
            }).then(function(e) {
                console.log(e,"Oops, error");
            });

            // $.ajax({
            //     url:'https://api.douban.com/v2/movie/top250',
            //     type:'GET',
            //     dataType: "jsonp",
            //     jsonp: "callback",
            //     jsonpCallback: "flightHandler",
            //     success:function(data){
            //         console.log(data)
            //     }
            // })
        })
    }
}

book.init();