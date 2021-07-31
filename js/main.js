$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 841,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 581,
                settings:{
                    slidesToShow: 1,
                }
            }
            
        ]
    });

});