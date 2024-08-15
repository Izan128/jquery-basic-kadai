$(function(){
    $("#target").addClass("heading");

    $("#black").on("click", function(){
        $("#target").removeClass("heading");
    });

    $("#red").on("click", function(){
        $("#target").addClass("heading");
    });
});
