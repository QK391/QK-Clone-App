$(document).ready(function() {
    $("a").on("click", function(){
        if (this.hash !=="")
        {
          let hash = this.hash
          $("html,body").animate({scrollTop: $(hash).offset().top}, 500)
        }
    })
});



//responsive
$("open.menu").on("click", function() {
   $(".responsive-menu").show("slow")
})

$(".close-responsive-menu").on("click", function() {
    $(".responsive-menu").hide("slow")
})

$(".responsive-menu .item").on("click", function() {
    $(".responsive-menu").hide("slow")
})