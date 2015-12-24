#Swiper焦点图滚动
    Swiper常用于移动端网站的内容触摸滑动。Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，以及PC端网站。Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！
####官方地址
swiper3.0：http://www.swiper.com.cn/
swiper2.0：http://swiper2.swiper.com.cn/

##兼容性

* ie9+

##样例：

###1、使用步骤
* 引入样式文件（idangerous.swiper.css，normalize.css，movies-app.css）

```javascript
<link rel="stylesheet" href="css/idangerous.swiper.css">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/movies-app.css">
```
* 在页面头部引用Jquery库：jquery.min.js；
* 以及Swiper的实现代码：idangerous.swiper-2.0.min.js，movies-app.js。

```javascript
<script src="js/jquery.min.js"></script>
<script src="js/idangerous.swiper-2.0.min.js"></script>
<script src="js/movies-app.js"></script>
```

* 在页面上添加代码

```javascript
<div class="swiper-container">
    <div>
        <a class="arrow-left" href="#"></a>
        <a class="arrow-right" href="#"></a>
    </div>
	<div class="swiper-content">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="inner">
					<a href="img/1.jpg" target="_blank" title="图片1">查看原图</a>
					<img class="movie-pic" src="img/1.jpg" height="150" width="150" alt="">
				</div>
			</div>
			<div class="swiper-slide">
				<div class="inner">
					<a href="img/2.jpg" title="图片2">查看原图</a>
					<img class="movie-pic" src="img/2.jpg" height="150" width="150" alt="">
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="swiper-nav">
		<div class="swiper-wrapper">
			<div class="swiper-slide active-nav">
				<span class="angle"></span>
				<img num="1" src="img/1.jpg" alt="">
			</div>
			<div class="swiper-slide">
				<span class="angle"></span>
				<img num="2" src="img/2.jpg" alt="">
			</div>
		</div>
	</div>
</div>
```
###2、demo
* [Swiper焦点图滚动demo](http://192.168.14.97:8080/acc/plugin/swiper)

##配置和API
###1、配置
```javascript
这里使用的是swiper2.0，配置方式和swiper3.0不一致，这里的具体配置，查看movies-app.js文件
var contentSwiper = new Swiper('.swiper-content',{
    autoplay : 5000,//可选选项，自动滑动
    loop : true,//可选选项，开启循环
})
```
###2、API
* [Swiper2.0的API详细参数地址](http://swiper2.swiper.com.cn/api/index.html)
* [Swiper3.0的API详细参数地址](http://www.swiper.com.cn/api/index.html)








