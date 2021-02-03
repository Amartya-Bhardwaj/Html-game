$(document).ready(function(){
// alert('First Login!, Then play the game!');
  $('#login').on('mouseenter',function(event){
    // alert('Working correctly');
    var hidden=$('.List');
    var play=$('#press');
    var photu=$('.Photu');
    var text=$('.text');
    var border=$('#border, #border1, #border2, #border3, #border4')
    hidden.show();
    play.show();
    photu.hide();
    text.hide();
    border.show();
    $('#login').on('mouseleave',function(event){
        var hidden=$('.List, #login');
        var rig=$('h6')
        hidden.hide();
        rig.show();
    });
    $('.a').on('click',function(event){
      alert("Pay me :), it's not free!!");
    });
    $('#border1, #border2, #border3, #border4').on('mouseenter',function(event){
      alert('Drink your own coffee!,Hi btw');
      alert('Trying hard to win,aghh!,  Click ok 4 times');

    });
    $('#press').on('click',function(event){
        var tune=$('#tune');
        tune.show();
    });
  });


});
