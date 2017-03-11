$(document).ready(function () {
    // SHOW HIDE EYES
    $("#showEyes").click(function () {
        $("#divEyes").toggle();
    });
    //THUGLIFE
    $("#thuglife").click(function () {
        var audio = new Audio("/static/audio/thuglife.mp3");
        audio.play();
        $("#divEyes").hide();
        $("#glasses").animate({ top: "-100px" }, 50).fadeIn(500).animate({ top: '100px' }, 7500).delay(2000).fadeOut(500);
    });
    //FUNCTION changeImage
    function changeImage(listImg, imgId, buttonNext, buttonBack, startFrom = 0) {
        var idxImg = startFrom;
        $(buttonNext).click(function () {
            if (idxImg < listImg.length - 1) {
                idxImg++;
                $(imgId).prop("src", listImg[idxImg]);
            } else {
                idxImg = 0;
                $(imgId).prop("src", listImg[idxImg]);
            };
        });
        $(buttonBack).click(function () {
            if (idxImg > 0) {
                idxImg--;
                $(imgId).prop("src", listImg[idxImg]);
            } else {
                idxImg = listImg.length - 1;
                $(imgId).prop("src", listImg[idxImg]);
            };
        });
    };
    //END FUNCTION
    //IMAGE LISTS
    var listHead = [];
    listHead[0] = "/static/images/immi.png"
    listHead[1] = "/static/images/laci.png"
    var listBody = [];
    listBody[0] = "/static/images/body1.png";
    listBody[1] = "/static/images/body2.png";
    listBody[2] = "/static/images/body3.png";
    listBody[3] = "/static/images/body4.png";
    var listEyes = [];
    listEyes[0] = "/static/images/eyes1.png";
    listEyes[1] = "/static/images/eyes2.png";
    listEyes[2] = "/static/images/eyes3.png";
    // CALL changeImage FUNCTIONS
    if ($("#imgHead").attr("src") === listHead[0]) {
        var startIdx = 0;
    } else if ($("#imgHead").attr("src") === listHead[1]) {
        var startIdx = 1;
    };
    changeImage(listHead, "#imgHead", "#nextH", "#backH", startIdx);
    changeImage(listEyes, "#imgEyes", "#nextE", "#backE");
    changeImage(listBody, "#imgBody", "#nextB", "#backB");
});