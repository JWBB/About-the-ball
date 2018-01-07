	//图片轮播
	var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});
//激活菜单栏上下滑动状态
mui.init({
  	gestureConfig:{
	   tap: true, 
	   doubletap: true, 
	   longtap: true, 
	   swipe: true, 
	   drag: true, 
	   hold:false,
	   release:false
  	}
});
mui('#offCanvasSideScroll').scroll();  
mui('#offCanvasContentScroll').scroll(); 


