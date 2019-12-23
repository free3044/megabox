// 스크립트
$(function(){
    $('.section.banner').css('margin-top',$('.header').height())
    
    $('#tgl_btn').on('click',function(){
        fnEffect();
        if($('#line01').attr('class')){
            if($(window).width()>=768){
            $('#info').css({'width':'30%','right':'0'});
        }else{
            $('#info').css({'width':'50%','right':'0'});
        }
        }
        else{
            fnClose();
        }
    })
    $(window).on('resize',function(){
        var hrWidth=$('.banner_story hr');
        var h3Width=$('.banner_story h3').width();
        hrWidth.css('width',h3Width.width());
        fnClose();
    });

    function fnClose(){
        $('#info').css({'width':'0','right':'-41px'});
    };

    function fnEffect(){
        $('#line01').toggleClass('btn01');
        $('#line02').toggleClass('btn02');
        $('#line03').toggleClass('btn03');
    }

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    var swiper = new Swiper('.swiper-container2', {            
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 4,
        breakpoints: {
        // when window width is >= 360px
        360: {
        slidesPerView: 1.5,
        spaceBetween: 15
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 2.5,
        spaceBetween: 24
        },
        // when window width is >= 1280px
        1280: {
        slidesPerView: 4,
        spaceBetween: 24
        }
        }
    });
    var swiper = new Swiper('.swiper-container3', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
    });

    var moviePos=$('#movie .sec_bottom>div');
    moviePos.hide();
    moviePos.eq(0).show();

    var notice=$('.notice_tit>li');
    var noticeTxt=$('.notice_txt');
    notice.eq(0).addClass('notice_active');
    noticeTxt.hide();
    noticeTxt.eq(0).show();
    notice.css('cursor','pointer');

    notice.on('click',function(){
        var indexNum=$(this).index();
        noticeTxt.hide();
        noticeTxt.eq(indexNum).show();
        notice.removeClass();
        $(this).addClass('notice_active');
    })
    
    var target=$('#movie_tit>li');
    target.on('click',function(){
        var i=$(this).index();
        moviePos.hide();
        moviePos.eq(i).show();

        target.removeClass();
        $(this).addClass('active');
            var swiper = new Swiper('.swiper-container2', {
            breakpoints: {
            // when window width is >= 360px
            360: {
            slidesPerView: 1.5,
            spaceBetween: 15
            },
            // when window width is >= 768px
            768: {
            slidesPerView: 2.5,
            spaceBetween: 24
            },
            // when window width is >= 1280px
            1280: {
            slidesPerView: 4,
            spaceBetween: 24
            }
        }
    });
    })
        // login modal
        $('.container').hide();
        $('.modal_open_btn').on('click',function(){
            // $('#wrap').hide();
            $('.container').show();
            fnClose();
            fnEffect();
            return false;
        }) 
        $('#modal_close_btn').on('click',function(){
            $('.container').hide();
            // $('#wrap').show();
            return false;
        })
})