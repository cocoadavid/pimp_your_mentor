//PICTURES HEAD
var idxHead = 0;
var listHead = [];
listHead[0] = "/static/images/immi.png"
listHead[1] = "/static/images/laci.png"
$("#nextH").click(function () {
    if (idxHead < listHead.length - 1) {
        idxHead++;
        $("#imgHead").prop("src", listHead[idxHead]);
    } else {
        idxHead = 0;
        $("#imgHead").prop("src", listHead[idxHead]);
    };
});
$("#backH").click(function () {
    if (idxHead > 0) {
        idxHead--;
        $("#imgHead").prop("src", listHead[idxHead]);
    } else {
        idxHead = listHead.length - 1;
        $("#imgHead").prop("src", listHead[idxHead]);
    };
});
//PICTURES BODY
var idxBody = 0;
var listBody = [];
listBody[0] = "/static/images/body1.png"
listBody[1] = "/static/images/body2.png"
listBody[2] = "/static/images/body3.png"
listBody[3] = "/static/images/body4.png"
$("#nextB").click(function () {
    if (idxBody < listBody.length - 1) {
        idxBody++;
        $("#imgBody").prop("src", listBody[idxBody]);
    } else {
        idxBody = 0;
        $("#imgBody").prop("src", listBody[idxBody]);
    };
});
$("#backB").click(function () {
    if (idxBody > 0) {
        idxBody--;
        $("#imgBody").prop("src", listBody[idxBody]);
    } else {
        idxBody = listBody.length - 1;
        $("#imgBody").prop("src", listBody[idxBody]);
    };
});
//PICTURES EYES
var idxEyes = 0;
var listEyes = [];
listEyes[0] = "/static/images/eyes1.png"
listEyes[1] = "/static/images/eyes2.png"
listEyes[2] = "/static/images/eyes3.png"
$("#showEyes").click(function () {
    $("#divEyes").toggle();
});
$("#nextE").click(function () {
    if (idxEyes < listEyes.length - 1) {
        idxEyes++;
        $("#imgEyes").prop("src", listEyes[idxEyes]);
    } else {
        idxEyes = 0;
        $("#imgEyes").prop("src", listEyes[idxEyes]);
    };
});
$("#backE").click(function () {
    if (idxEyes > 0) {
        idxEyes--;
        $("#imgEyes").prop("src", listEyes[idxEyes]);
    } else {
        idxEyes = listEyes.length - 1;
        $("#imgEyes").prop("src", listEyes[idxEyes]);
    };
});
//THUGLIFE
$("#thuglife").click(function () {
    var audio = new Audio("/static/audio/thuglife.mp3");
    audio.play();
    $("#divEyes").hide();
    $("#glasses").fadeIn(500).animate({ left: '378px', top: '40px' }, 7500).delay(2000).fadeOut(500).animate({ top: '-40px' }, 10);
});