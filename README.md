#Swiper焦点图滚动
    Swiper常用于移动端网站的内容触摸滑动。Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，以及PC端网站。Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！
####官方地址
swiper3.0：http://www.swiper.com.cn/
swiper2.0：http://swiper2.swiper.com.cn/

##兼容性

* ie9+

##样例：

###1、使用步骤
* 引入样式文件（swiper-thumbs.css）

```javascript
<link rel="stylesheet" href="css/swiper-thumbs.css">
```
* 在页面头部引用Jquery库：jquery.min.js；
* 以及Swiper的实现代码：idangerous.swiper-2.0.min.js，movies-thumbs.js。

```javascript
<script src="js/jquery.min.js"></script>
<script src="js/idangerous.swiper-2.0.min.js"></script>
<script src="js/swiper-thumbs.js"></script>
```

* 在页面上添加代码

```javascript
//默认缩略图是在底部
<div class="swiper-container dirVertical" id="swiper-container1">//要加dirVertical样式名
    <div>
        <a class="arrow-left" href="#"></a>
        <a class="arrow-right" href="#"></a>
    </div>
	<div class="swiper-content">
		...
	</div>
	<div class="swiper-nav">
		...
	</div>
</div>
//缩略图在右侧
<div class="swiper-container" id="swiper-container2">
    <div>
        <a class="arrow-left" href="#"></a>
        <a class="arrow-right" href="#"></a>
    </div>
	<div class="swiper-content">
		...
	</div>
	<div class="swiper-nav">
		...
	</div>
</div>
```
###2、demo
* [Swiper焦点图滚动demo](http://192.168.14.97:8080/acc/plugin/swiper)

##配置和API
###1、配置
```javascript
//direction设置缩略图位置
$("#swiper-container1").swiperThumbs({
    direction : 'vertical',
    navSlidesPerView : 10
});
//navSlidesPerView设置缩略图显示数量
$("#swiper-container2").swiperThumbs({
	direction : 'horizontal',
    navSlidesPerView : 15
});
```
###2、API
* [Swiper2.0的API详细参数地址](http://swiper2.swiper.com.cn/api/index.html)
* [Swiper3.0的API详细参数地址](http://www.swiper.com.cn/api/index.html)








