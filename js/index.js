var count = 0;
$('.heartOuter').hide();
var love = setInterval(function() {
    if(count === 30) {
        $('.heart').remove();
        clearInterval(love);
        $('.heartOuter').show();
        $('.heartOuter').css({position: "relative", margin: "0px auto", width: "200px", height: "200px"});
        $('.heartInner').css({position: "absolute", top: "4%", left: "12.5%", width: "75%", height: "75%", transform: "rotate(-45deg)"});
        $('.heartSquare').css({position: "absolute", top: "25%", left: "0px", width: "75%", height: "75%", background: "red"});
        $('.heartHalfCircle1').css({position: "absolute", top: "-15%", left: "0px", width: "75%", height: "75%", "border-radius": "100% 100% 0 0", background: "red"});
        $('.heartHalfCircle2').css({position: "absolute", top: "25%", left: "40%", width: "75%", height: "75%", "border-radius": "0 100% 100% 0", background: "red"});
        $('p').css({position: "relative", top: "67px", left: "50px", "z-index": "200000"});
    }
    console.log(count);
    count++;
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);
