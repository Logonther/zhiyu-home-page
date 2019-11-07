import 'fullpage.js/dist/jquery.fullpage.min.css'
import 'fullpage.js/dist/jquery.fullpage.min.js'
import '../css/bootstrap.min.css'
import './bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
import '../less/main.less'
import Swiper from '../../node_modules/swiper/dist/js/swiper.min.js'

$(function () {
    var solutionSwiper = new Swiper ('.solution .swiper-container', {
        speed: 700,
        loop: true,
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.solution-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                let text = ''
                switch(index){
                    case 0:text='运营监控';break;
                    case 1:text='自主分账';break;
                    case 2:text='物联网络';break;
                    case 3:text='智能管家';break;
                    case 4:text='系统集成';break;
                }
                return '<span class="' + className + '">' + text + '</span>';
            },
        }
    })
    $('#fullpage').fullpage({
        sectionsColor: [/*第一屏*/'', /*第二屏*/'', /*第三屏*/'#F4F7F7', /*第四屏*/'',
            /*第五屏*/'#252C41', /*第六屏*/'', /*第七屏*/'#F0F2F5', /*第八屏*/'#148C9D', /*footer*/'#061D38'],
        controlArrows: false,//左右箭头
        slidesNavigation: true,//横向导航
        anchors: [/*第一屏*/'banner',/*第二屏*/'problems',/*第三屏*/'solution',/*第四屏*/'intelligent',
            /*第五屏*/'platforms',/*第六屏*/'cooperation',/*第七屏*/'allocations',/*第八屏*/'we',/*footer*/'footer'],
        menu: '#menu',
        verticalCentered: false,//垂直居中显示
        afterRender: function () {
            let top = 60 * 100 / 840
            $('#toolman-swiper-pagination span').css({'top': top + 'vh'}).removeClass().addClass('swiper-pagination-bullet')
            $('#toolman-swiper-pagination span').eq(0).addClass('swiper-pagination-bullet-active')
            $('#toolman-swiper-pagination span').eq(1).addClass('swiper-pagination-bullet-active-next')
            $('#toolman-swiper-pagination span').eq(2).addClass('swiper-pagination-bullet-active-next-next')
        },
        onLeave:function (index, nextIndex, direction) {
            $('#toolman-swiper-pagination span').css({'color':'white'})
            $('#nav .navbar-collapse a').css({'color':'white'})
            $('#nav .navbar-brand').removeClass('logo-black')
            let top =(90 - nextIndex * 30) * 100 / 840
            $('#toolman-swiper-pagination span').css({'top': top+'vh'}).removeClass().addClass('swiper-pagination-bullet')
            $('#toolman-swiper-pagination span').eq(nextIndex-3).addClass('swiper-pagination-bullet-active-prev-prev')
            $('#toolman-swiper-pagination span').eq(nextIndex-2).addClass('swiper-pagination-bullet-active-prev')
            $('#toolman-swiper-pagination span').eq(nextIndex-1).addClass('swiper-pagination-bullet-active')
            $('#toolman-swiper-pagination span').eq(nextIndex).addClass('swiper-pagination-bullet-active-next')
            $('#toolman-swiper-pagination span').eq(nextIndex+1).addClass('swiper-pagination-bullet-active-next-next')
            if (nextIndex == 3 || nextIndex == 6){
                $('#toolman-swiper-pagination span').css({'color':'#152542'})
                $('#nav .navbar-collapse a').css({'color':'#152542'})
                $('#nav .navbar-brand').addClass('logo-black')
            }else if (nextIndex == 4){
                $('#nav .navbar-brand').addClass('logo-black')
            }
        },
    });
    $('#toolman-swiper-pagination span').on('click',function () {
        $.fn.fullpage.moveTo($(this).index()+1);
    })

    if($('.project .pic').width()/$('.project .pic').height() > 2 / 3){
        $('.project .pic img').css({'width':'100%','height':'auto'})
    }else{
        $('.project .pic img').css({'width':'auto','height':'100%'})
    }
    if($('.solution .swiper-container').width()/$('.solution .swiper-container').height() > 1728 / 970){
        $('.solution .swiper-container img').css({'width':'100%','height':'auto'})
    }else{
        $('.solution .swiper-container img').css({'width':'auto','height':'100%'})
    }
})
