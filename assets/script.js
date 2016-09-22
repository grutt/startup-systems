$(function(){
    $('.btn-email').click(function(event){
        event.preventDefault();
        $('.contactMe').slideToggle();
    });

    $('.contactMe').click(function(event){
        event.preventDefault();
        alert('Sorry, the form is not yet working!')
    });

});
