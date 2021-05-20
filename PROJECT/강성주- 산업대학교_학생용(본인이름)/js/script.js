$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("slow");
    }
);
var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()",3000);

function autoslide(){
    $(slide[sno]).stop().animate({
        left:"100%", opacity:0
    },1000,function(){
        $(this).css({left:"-100%"});
    });
    sno++;
if(sno > eno) sno = 0;
$(slide[sno]).stop().animate({
    left:"0", opacity: 1
},1000);
}

function openPop() {
    $("#pop").show("slow");
}
function closePop() {
    $("#pop").hide("fast");
}