function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function chayngay() {
    setInterval(function () {
        var documentHeight = $(document).height();
        var documentWidth = $(document).width();
        var randomLeft = getRandomArbitrary(0, documentWidth);
        var animationDuration = getRandomArbitrary(4000, 6000);
        var randomOpacity = Math.random() * (1 - 0.2) + 0.2;
        var fontSize = getRandomArbitrary(5, 20);
        var randomLeftEnd = getRandomArbitrary(randomLeft - 100, randomLeft + 100);
        var heartElement = document.createElement("span");

        $(heartElement).addClass("snow-item fa fa-heart").css({
            'position': "absolute",
            'z-index': "auto",
            'color': "#ff0000",
            'display': "block",
            'top': 0,
            'left': randomLeft,
            'opacity': randomOpacity,
            'font-size': fontSize + "px",
            'padding': "12px"
        }).appendTo(".heart-container").animate({
            'top': documentHeight - fontSize,
            'left': randomLeftEnd
        }, {
            duration: animationDuration,
            easing: "linear",
            complete: function () {
                $(this).fadeOut("fast", function () {
                    $(this).remove();
                });
            }
        });
    }, 500);
}

$(document).ready(function () {
    $.ajax().done(function () {
        $("#loading").fadeOut(1000);
    }).fail(function () {
        console.log("error");
    });

    $("#btn-matkhau").click(function () {
        const passwordField = $("#password");
        const errorMessage = $("#error-mess");

        if (passwordField.val() === "") {
            passwordField.focus();
            errorMessage.html("Bé iu quên nhập mật khẩu nè ❤️").css("color", "red");
        } else {
            if (passwordField.val() === "351301") {
                $(".box").fadeOut("fast");
                $(".flower-footer").css("opacity", 1);
                $("#sun").css("opacity", 1);
                setTimeout(function () {
                    $("#bee").css({
                        'opacity': 1,
                        'animation-name': "bee_fly",
                        'animation-duration': "10s",
                        'animation-fill-mode': "forwards"
                    });
                }, 1000);
                setTimeout(function () {
                    $(".letter").show(500, function () {
                        $("#bee").hide("fast");
                    });
                }, 10000);
            } else {
                errorMessage.html("Mật khẩu sai ròi pà.").css("color", "red");
            }
        }
    });

    $("#password").keyup(function () {
        $("#error-mess").html("Mật khẩu phải ghi liền không dấu*").css("color", "#979797");
    });

    $(".letter").click(function () {
        $(".letter").hide("fast", function () {
            $(".box2").addClass("animate__backInUp").show(400);
            chayngay();
        });
    });
});
