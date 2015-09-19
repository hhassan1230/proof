$("document").ready(function(){
  $('.enemy').hide();
  

  $('.enemy').click(function(e) {
    $(e.currentTarget).hide();
  });
  play();
});
function selectEnemy() {
  var divs = $('.enemy');
  var visibleDivs = []
  var invisibleDivs = []

  $.each(divs, function(index, div) {
    if ($(div).is(":visible")) {
      visibleDivs.push(div);
      console.log("too many enemies");
      // call reroute
    } else {
      invisibleDivs.push(div);
    }
  })

  var num = randomInt(0, invisibleDivs.length);
  var enemy = invisibleDivs[num];
  $(enemy).show("slide", { direction: 'down' });

};

function play() {
  setInterval(function() {
    selectEnemy();
  }, 1000);
};
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function showEnemy(num){
  $("#enemy-" + num).show("slide", { direction: 'down' });
};
function showRandomEnemy() {
  var randomInt = randomInt(min, max);
  showEnemy(randomInt);
}