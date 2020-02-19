let draw;

SVG.on(document, 'DOMContentLoaded', function() {
    draw = SVG().size(window.innerWidth, window.innerHeight).addTo('body');
    // let rect = draw.rect(100, 100).attr({fill: '#f06'});                                                                                                                    
});


let oldX;
let oldY;
let isDrawing;
let poly;


var myListener = function (event) {
    // document.removeEventListener('mousemove', myListener, false);                                                                                                            
    // do stuff                                                                                                                                                                
    // let rect = draw.circle(10).center(event.pageX, event.pageY).attr({fill: '#f06'});                                                                                        
    if (isDrawing) {
        poly.plot(poly.array().concat([[event.pageX, event.pageY]]));
    }
    oldX = event.pageX;
    oldY = event.pageY;
};

document.addEventListener('mousedown', e => {
    poly = draw.polyline([event.pageX, event.pageY]).attr({stroke: '#000', 'stroke-width': '10', 'fill': 'none'});
    isDrawing = true;
});


document.addEventListener('mouseup', e => {
  isDrawing = false;
});


document.addEventListener('mousemove', myListener, false);
