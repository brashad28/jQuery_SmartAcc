function fade(){
$('.preLoader').fadeout("slow");
}
setTimeout(fade, 3000);









$(".toggle").click(function(){
    
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");

   });
