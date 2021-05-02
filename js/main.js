var model = require('data/model.json');

// set the default active menu selections
$(`#${model.menu_main.selected}`).toggleClass("is-active", true);


$(function() {
    //controller: take inputs from view and update model
    $("#menu_main").find("a").click(function() {
        $("#menu_main").find("a").toggleClass("is-active", false);
        $(this).toggleClass("is-active");
    });
    $("#interests_tabs").find("li").click(function(){
        $("#interests_tabs").find("li").toggleClass("is-active", false);
        $(this).toggleClass("is-active");
    });
    $(".interests_selector").find("li").click(function(){
        $("#interests_contents").find(".content").hide();
        $($(this).find("a").data("target")).show();
        console.log($(this).find("a").data("target"));
    });
    $("#back_to_top").click(function(){
        $("#menu_main").find("a").toggleClass("is-active", false);
        $("#menu_main_top").toggleClass("is-active", true);
    });

    //controller: on model update, update view
    $("#main_menu_select").change(function(){
        $()
    })
    /*
        on scroll
        update menu selected

        on main menu click
        update the main menu selected
        go to the selected section

        on main menu click, interests click
        update the interests tabs selected
        update the interests contents selected

        on click back to top
        set selected as profile
        go back top top
    */