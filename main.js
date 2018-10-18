// JQuery Code

$(init);
function init(){
$(".tool").draggable({
    helper: "clone"
});

// drop off tools #
$(".canvas").droppable({
drop: (event, ui) => {
    console.log(ui.position);
  //  console.log(ui.draggable[0].innerHTML);
    var node = {
        position: ui.position,
        html:ui.draggable[0].innerHTML
    };
    // Making sure tools 3 are not duplicate onto main canvas
    if (ui.helper.hasClass('tool')){
        render(node);
        }
     }   
   });
}

function render(node){

var html = "<h3>" + node.html + "</h3>";
var dom = $(html).css({
  position: "absolute",
  top:node.position.top,
  left: (node.position.left -=$(".canvas").position().left)

});
$(".canvas").append(dom.draggable());

}