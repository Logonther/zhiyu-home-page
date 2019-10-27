import '../css/bootstrap.min.css'
// import './bootstrap.min.js'
// import 'swiper/css/swiper.min.css'
// import 'swiper/js/swiper.min.js'
import 'font-awesome/css/font-awesome.min.css'
import '../less/base.less'
import '../less/index.less'
// import Swiper from 'swiper'

$(function () {
    var bannerSwiper = new Swiper ('.banner .swiper-container', {
        width: window.innerWidth,
        height: window.innerWidth * 685 / 1440,
        speed: 1000,
        loop: true,
        /*autoplay: {
            disableOnInteraction: false,
        },*/
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true
        }
    })
    var solutionSwiper = new Swiper ('.solution .swiper-container', {
        width: window.innerWidth,
        height: window.innerWidth * 532 / 864 >= 532 ? 532 : window.innerWidth * 532 / 864,
        loop: true,
        speed: 1000,
        direction: 'vertical',
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.solution .solution-pagination .swiper-pagination',
            clickable: true,
            bulletClass : 'solution-bullet',
            renderBullet: function (index, className) {
                var text = ''
                switch(index){
                    case 0:text='运营监控';break;
                    case 1:text='自主分账';break;
                    case 2:text='物联网络';break;
                    case 3:text='智能管家';break;
                    case 4:text='系统集成';break;
                }
                return '<span class="' + className + '">' + text + '</span>';
            }
        },
    })
    if($('.how .pic').width()/$('.how .pic').height() > 1.5){
        $('.how img').css({'width':'100%','height':'auto'})
    }else{
        $('.how img').css({'width':'auto','height':'100%'})
    }

    /*鼠标移入移出效果*/
    $('.platform').on('mouseenter',function () {
        $(this).find('.shade').toggleClass('henshin')
    })
    $('.platform').on('mouseleave',function () {
        $(this).find('.shade').toggleClass('henshin')
    })
})
