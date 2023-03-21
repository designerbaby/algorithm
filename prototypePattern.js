// 原型模式
const LoopImages = function(imgArr, container) {
  this.imageArray = imgArr
  this.container = container
}

LoopImages.prototype = {
  createImage: function() {
    console.log('LoopImages createImage function')
  },
  changeImage: function() {
    console.log('LoopImages changeImage function')
  }
}

const SlideLoopImg = function(imgArr, container) {
  LoopImages.call(this, imgArr, container)
}

SlideLoopImg.prototype = new LoopImages()

SlideLoopImg.prototype.changeImage = function() {
  console.log('SlideLoopImg changeImage function')
}

const FadeLoopImg = function(imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container)
  this.arrow = arrow
}

FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype.changeImage = function() {
  console.log('FadeLoopImg changeImage function')
}

const fadeImg = new FadeLoopImg([
	'01.jpg',
	'02.jpg',
	'03.jpg',
	'04.jpg'
],'slide',[
	'left.jpg',
	'right.jpg'
]);

console.log(fadeImg.container);
fadeImg.changeImage();