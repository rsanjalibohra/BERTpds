(function(){function h(e,g,f){function c(b,a){if(!g[b]){if(!e[b]){var k="function"==typeof require&&require;if(!a&&k)return k(b,!0);if(d)return d(b,!0);a=Error("Cannot find module '"+b+"'");throw a.code="MODULE_NOT_FOUND",a;}a=g[b]={exports:{}};e[b][0].call(a.exports,function(a){return c(e[b][1][a]||a)},a,a.exports,h,e,g,f)}return g[b].exports}for(var d="function"==typeof require&&require,a=0;a<f.length;a++)c(f[a]);return c}return h})()({1:[function(h,e,g){var f={availableWidths:[320,480,620,1200],
availableHeights:[150,320,480,620,1200],init:function(){var c=this;c.resizeImages();var d=0,a=$(".responsiveImage").length;$(".responsiveImage").on("load",function(){d++;d===a&&$(window).trigger("debouncedresize")});$(window).on("debouncedresize resizeAdaptiveImages",function(){c.resizeImages()})},resizeImages:function(){var c=this,d=$("body");$("div[data-adaptivepicture]",d).each(function(){var a=$(this),b=a.data("image");a.data("has-mobile")&&document.documentElement.offsetWidth<a.data("mobile-breakpoint")&&
(b=a.data("mobile-image"));b=b.replace("[width]",c.calculateWidth(a));c.setImage(a,b)})},calculateWidth:function(c){var d=$(c.closest('[class*\x3d" col-"],[class^\x3d"col-"],[class*\x3d"content_container"],[class*\x3d"full_banner_container"]')).width(),a="full";if(d)for(var b=0;b<this.availableWidths.length;b++)if(d<this.availableWidths[b]){a=this.availableWidths[b];break}if(c.attr("data-backgroundImage")&&(c=c.parent().height())){d="full";for(b=0;b<this.availableHeights.length;b++)if(c<this.availableHeights[b]){d=
this.availableHeights[b];break}a+="x"+d}return a},setImage:function(c,d){if(c.attr("data-backgroundImage"))d&&c.parent().css("background-image","url("+d+")");else{var a=$("img",c[0]).first();d?(0===a.size()&&(a=$("\x3cimg /\x3e").attr("alt",c.attr("data-alt")).attr("title",c.attr("data-title")).attr("class",c.attr("data-class")).attr("loading","lazy").addClass("responsiveImage").appendTo(c)),a.attr("src",d)):a.remove()}}};e.exports=f;$(document).ready(function(){f.init()})},{}]},{},[1]);