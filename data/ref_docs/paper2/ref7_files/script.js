window.socialWarfare=window.socialWarfare||{},function(a,e){"use strict";function t(a){return"string"==typeof a&&a.length>0}if("function"!=typeof e){if("function"!=typeof jQuery)return void console.log("Social Warfare requires jQuery, or $ as an alias of jQuery. Please make sure your theme provides access to jQuery before activating Social Warfare.");var e=jQuery}socialWarfare.paddingTop=parseInt(e("body").css("padding-top")),socialWarfare.paddingBottom=parseInt(e("body").css("padding-bottom")),socialWarfare.initPlugin=function(){if(e("body").css({paddingTop:socialWarfare.paddingTop,paddingBottom:socialWarfare.paddingBottom}),socialWarfare.establishPanels(),socialWarfare.establishBreakpoint(),socialWarfare.panels.staticHorizontal||socialWarfare.panels.floatingSide||socialWarfare.panels.floatingHorizontal){socialWarfare.emphasizeButtons(),socialWarfare.createFloatHorizontalPanel(),socialWarfare.positionFloatSidePanel(),socialWarfare.activateHoverStates(),socialWarfare.handleButtonClicks(),socialWarfare.updateFloatingButtons(),socialWarfare.closeLightboxOverlay(),socialWarfare.preloadPinterestImages(),"object"==typeof swpPinIt&&1==swpPinIt.enabled&&(socialWarfare.createHoverSaveButton(),socialWarfare.triggerImageListeners()),setTimeout(function(){socialWarfare.checkListeners(0,5)},2e3);var i=Date.now();e(a).scroll(function(){i+50-Date.now()<0&&(socialWarfare.updateFloatingButtons(),i=Date.now())})}};var o;socialWarfare.onWindowResize=function(){clearTimeout(o),o=setTimeout(socialWarfare.initPlugin,100)},socialWarfare.establishPanels=function(){return socialWarfare.panels={staticHorizontal:null,floatingSide:null,floatingHorizontal:null},socialWarfare.panels.staticHorizontal=e(".swp_social_panel").not(".swp_social_panelSide"),socialWarfare.panels.floatingSide=e(".swp_social_panelSide"),socialWarfare.panels},socialWarfare.emphasizeButtons=function(){void 0!==socialWarfare.variables.emphasizeIcons&&(socialWarfare.isMobile()||jQuery(".swp_social_panel:not(.swp_social_panelSide)").each(function(a,e){jQuery(e).find(".nc_tweetContainer:not(.total_shares)").each(function(a,e){if(a<socialWarfare.variables.emphasizeIcons){var i=jQuery(e).find(".swp_share").width(),t=jQuery(e).find("i.sw").outerWidth(),o=i+t+35,r=jQuery(e).width(),n=1+(i+35)/r;n<2?jQuery(e).addClass("swp_nohover").css({flex:"2 1 0%"}).find(".iconFiller").width(o):jQuery(e).addClass("swp_nohover").css({flex:n+" 1 0%"}).find(".iconFiller").width(o)}})}))},socialWarfare.activateHoverStates=function(){socialWarfare.trigger("pre_activate_buttons"),e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer").on("mouseenter",function(){if(!e(this).hasClass("swp_nohover")){socialWarfare.resetStaticPanel();var a=e(this).find(".swp_share").outerWidth(),i=e(this).find("i.sw").outerWidth(),t=e(this).width(),o=1+(a+35)/t;e(this).find(".iconFiller").width(a+i+25+"px"),e(this).css("flex",o+" 1 0%")}}),e(".swp_social_panel:not(.swp_social_panelSide)").on("mouseleave",socialWarfare.resetStaticPanel)},socialWarfare.resetStaticPanel=function(){e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover) .iconFiller").removeAttr("style"),e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover)").removeAttr("style")},socialWarfare.handleButtonClicks=function(){e(".nc_tweet, a.swp_CTT").off("click"),e(".nc_tweet, a.swp_CTT").on("click",function(i){if(e(this).parent(".swp_print").length>0)return i.preventDefault(),void a.print();if(!0===e(this).hasClass("pinterest_multi_image_select"))return i.preventDefault(),void socialWarfare.openMultiPinterestOverlay(e(this));if(e(this).parent(".swp_more").length>0)return i.preventDefault(),void socialWarfare.openMoreOptions(e(this));if(e(this).hasClass("noPop"))return i;if(void 0===e(this).data("link")&&!1===e(this).is(".swp-hover-pin-button"))return i;i.preventDefault();var t,o,r,n,s,l,c=e(this).data("link").replace("’","'");t=270,o=500,e(this).is(".swp_pinterest a, .buffer_link a, .flipboard a, .swp-hover-pin-button")&&(t=550,o=775),e(this).hasClass("nc_tweet")?l=e(this).parents(".nc_tweetContainer").data("network"):e(this).hasClass("swp_CTT")&&(l="ctt"),r=a.screenY+(a.innerHeight-t)/2,n=a.screenX+(a.innerWidth-o)/2,s="height="+t+",width="+o+",top="+r+",left="+n,a.open(c,l,s),socialWarfare.trackClick(l)})},socialWarfare.openMultiPinterestOverlay=function(a){if(e(".pinterest-overlay").length>0)return e(".pinterest-overlay").fadeIn(),void e(".swp-lightbox-inner").scrollTop(0);var t="",o=a.data("pins"),r="";o.images.forEach(function(a){var e="https://pinterest.com/pin/create/button/?url="+o.url+"&media="+a+"&description="+encodeURIComponent(o.description),i="";i+='<div class="pin_image_select_wrapper">',i+='<img class="pin_image" src="'+a+'" />',i+='<a class="swp-hover-pin-button" href="'+e+'" data-link="'+e+'">Save</a>',i+="</div>",r+=i}),t+='<div class="swp-lightbox-wrapper pinterest-overlay"><div class="swp-lightbox-inner">',t+='<i class="sw swp_pinterest_icon top_icon"></i>',t+='<div class="swp-lightbox-close"></div>',t+="<h5>Which image would you like to pin?</h5>",t+='<div class="pin_images_wrapper">',t+=r,t+="</div>",t+=socialWarfare.buildPoweredByLink(),t+="</div></div>",e("body").append(t),e(".pinterest-overlay").hide().fadeIn(),socialWarfare.handleButtonClicks();var n=999999,s=0,l=e(".pinterest-overlay .pin_images_wrapper img");l.load(function(){++s===l.length&&l.each(function(){e(this).height()<n&&(n=e(this).height())}).promise().done(function(){l.height(n+"px");var a=Math.ceil(l.length/4);for(i=0;i<a;i++){var t=l.slice(4*i,4*i+4),o=t.length/4,r=e(".pin_images_wrapper").width(),s=0;t.each(function(){s+=e(this).width()});var c=r/s;t.each(function(){var a=e(this).width()*c/r*100*o-1;e(this).parent().width(a+"%"),e(this).height("auto")});var p=t.first().height();t.each(function(){e(this).width(e(this).width()).height(p)})}})})},socialWarfare.buildPoweredByLink=function(){var a="";if(!0===socialWarfare.variables.powered_by_toggle){var e="",i="";!1!==socialWarfare.variables.affiliate_link&&(e='<a href="'+socialWarfare.variables.affiliate_link+'" target="_blank">',i="</a>"),a='<div class="swp_powered_by">'+e+'<span>Powered by</span> <img src="/wp-content/plugins/social-warfare/assets/images/admin-options-page/social-warfare-pro-light.png">'+i+"</div>"}return a},socialWarfare.preloadPinterestImages=function(){if(!(e(".pinterest_multi_image_select").length<1)){e(".pinterest_multi_image_select").data("pins").images.forEach(function(a){(new Image).src=a})}},socialWarfare.openMoreOptions=function(a){if(e(".swp-more-wrapper").length>0)return void e(".swp-more-wrapper").fadeIn();var i=a.parents(".swp_social_panel").data("post-id"),t={action:"swp_buttons_panel",post_id:i,_ajax_nonce:swp_nonce};jQuery.post(swp_ajax_url,t,function(a){e("body").append(a),e(".swp-lightbox-wrapper").hide().fadeIn(),socialWarfare.activateHoverStates(),socialWarfare.handleButtonClicks()})},socialWarfare.closeLightboxOverlay=function(){e("body").on("click",".swp-lightbox-close",function(){e(".swp-lightbox-wrapper").fadeOut()}),e(document).keyup(function(a){"Escape"===a.key&&e(".swp-lightbox-wrapper").fadeOut()})},socialWarfare.createFloatHorizontalPanel=function(){if(socialWarfare.panels.staticHorizontal.length){var a=socialWarfare.panels.staticHorizontal.data("float"),i=socialWarfare.panels.staticHorizontal.data("float-mobile"),t=socialWarfare.panels.staticHorizontal.data("float-color"),o=e('<div class="nc_wrapper swp_floating_horizontal_wrapper" style="background-color:'+t+'"></div>'),r="";e(".nc_wrapper").length&&e(".nc_wrapper").remove(),e(".swp_floating_horizontal_wrapper").length&&e(".swp_floating_horizontal_wrapper").remove(),"top"!=a&&"bottom"!=a&&"top"!=i&&"bottom"!=i||(r=socialWarfare.isMobile()?i:a,o.addClass(r).hide().appendTo("body"),socialWarfare.panels.floatingHorizontal=socialWarfare.panels.staticHorizontal.first().clone(),socialWarfare.panels.floatingHorizontal.addClass("nc_floater").appendTo(o),socialWarfare.updateFloatingHorizontalDimensions(),e(".swp_social_panel .swp_count").css({transition:"padding .1s linear"}))}},socialWarfare.updateFloatingHorizontalDimensions=function(){if(socialWarfare.panels.staticHorizontal.length&&socialWarfare.panels.floatingHorizontal){var a="100%",e=0,i=socialWarfare.panels.staticHorizontal,t=i.parent();t.hasClass("swp-hidden-panel-wrap")&&(t=t.parent()),void 0!==i.offset().left&&(e=i.offset().left),void 0!==i.width()&&(a=i.width()),0==e&&(e=t.offset().left),100!=a&&0!=a||(a=t.width()),socialWarfare.panels.floatingHorizontal.css({width:a,left:e})}},socialWarfare.staticPanelIsVisible=function(){var i=!1,t=e(a).scrollTop();return e(".swp_social_panel").not(".swp_social_panelSide, .nc_floater").each(function(o){var r=e(this).offset();if(void 0!==socialWarfare.floatBeforeContent&&"1"!=socialWarfare.floatBeforeContent){var n=e(".swp-content-locator").parent();0===o&&n.length&&n.offset().top>t+e(a).height()&&(i=!0)}e(this).is(":visible")&&r.top+e(this).height()>t&&r.top<t+e(a).height()&&(i=!0)}),i},socialWarfare.updateFloatingButtons=function(){if(socialWarfare.panels.staticHorizontal.length)var a=socialWarfare.panels.staticHorizontal;else{if(!socialWarfare.panels.floatingSide.length)return;var a=socialWarfare.panels.floatingSide}var i=a.data("float");if(1==socialWarfare.isMobile())var i=a.data("float-mobile");return"none"==i?e(".nc_wrapper, .swp_floating_horizontal_wrapper, .swp_social_panelSide").hide():socialWarfare.isMobile()?(socialWarfare.toggleMobileButtons(),void socialWarfare.toggleFloatingHorizontalPanel()):("right"!=i&&"left"!=i||socialWarfare.toggleFloatingVerticalPanel(),void("bottom"!=i&&"top"!=i||socialWarfare.toggleFloatingHorizontalPanel()))},socialWarfare.toggleMobileButtons=function(){socialWarfare.panels.floatingSide.hide();var a=socialWarfare.staticPanelIsVisible()?"collapse":"visible";e(".nc_wrapper, .swp_floating_horizontal_wrapper").css("visibility",a)},socialWarfare.toggleFloatingVerticalPanel=function(){var a="",e=socialWarfare.panels.floatingSide.data("float"),i=socialWarfare.staticPanelIsVisible(),t="";if(socialWarfare.isMobile())return socialWarfare.panels.floatingSide.hide();socialWarfare.panels.floatingSide&&socialWarfare.panels.floatingSide.length||(i=!0),"slide"==socialWarfare.panels.floatingSide.data("transition")?(a=e,t=i?"-150px":"5px",socialWarfare.panels.floatingSide.css(a,t).show()):i?socialWarfare.panels.floatingSide.css("opacity",1).fadeOut(300).css("opacity",0):socialWarfare.panels.floatingSide.css("opacity",0).fadeIn(300).css("display","flex").css("opacity",1)},socialWarfare.hasReferencePanel=function(){return void 0!==socialWarfare.panels.staticHorizontal&&socialWarfare.panels.staticHorizontal.length>0},socialWarfare.toggleFloatingHorizontalPanel=function(){if(socialWarfare.hasReferencePanel()&&socialWarfare.panels.floatingHorizontal){var a=socialWarfare.panels.floatingHorizontal.first(),i=socialWarfare.isMobile()?e(a).data("float-mobile"):e(a).data("float"),t="bottom"==i?socialWarfare.paddingBottom:socialWarfare.paddingTop,o="padding-"+i;"off"!=i&&(socialWarfare.staticPanelIsVisible()?(e(".nc_wrapper, .swp_floating_horizontal_wrapper").hide(),socialWarfare.isMobile()&&e("#wpadminbar").length&&e("#wpadminbar").css("top",0)):(t+=50,e(".nc_wrapper, .swp_floating_horizontal_wrapper").show(),socialWarfare.isMobile()&&"top"==i&&e("#wpadminbar").length&&e("#wpadminbar").css("top",a.parent().height())),e("body").css(o,t))}},socialWarfare.positionFloatSidePanel=function(){var e,i,t,o=socialWarfare.panels.floatingSide;if(o&&o.length&&!o.hasClass("swp_side_top")&&!o.hasClass("swp_side_bottom")){if(e=o.outerHeight(),i=a.innerHeight,e>i)return o.css("top",0);t=(i-e)/2,o.css("top",t)}},socialWarfare.createHoverSaveButton=function(){if(e(".tve_editor_page").length)return e(".sw-pinit-button").remove(),void e(".sw-pinit").each(function(){var a=e(".sw-pinit").contents();e(this).replaceWith(a)});var a=e(document.createElement("a"));return a.css("display: none"),a.addClass("swp-hover-pin-button"),a.text("Save"),socialWarfare.hoverSaveButton=e(a),a},socialWarfare.triggerImageListeners=function(){e(".swp-content-locator").parent().find("img").off("mouseenter",socialWarfare.renderPinterestSaveButton),e(".swp-content-locator").parent().find("img").on("mouseenter",socialWarfare.renderPinterestSaveButton),setTimeout(socialWarfare.triggerImageListeners,2e3)},socialWarfare.getPinMedia=function(a){if(t(swpPinIt.image_source))return swpPinIt.image_source;if(t(a.attr("src")))return a.attr("src");var i=["src","lazy-src","media"],o="";if(i.some(function(e){if(t(a.data(e)))return o=a.data(e),!0}),""!=o){var r=e("<img>");return r.attr("src",o),r.prop("src")}},socialWarfare.getPinDescription=function(a){return t(a.data("pin-description"))?a.data("pin-description"):t(swpPinIt.image_description)?swpPinIt.image_description:t(a.attr("title"))?a.attr("title"):t(a.attr("alt"))?a.attr("alt"):t(swpPinIt.post_title)?swpPinIt.post_title:void 0},socialWarfare.enablePinterestSaveButtons=function(){jQuery("img").on("mouseenter",function(){var a=socialWarfare.findPinterestBrowserSaveButtons();void 0!==a&&a&&socialWarfare.removePinterestBrowserSaveButtons(a)})},socialWarfare.toggleHoverSaveDisplay=function(a){var i=a.offset().top,t=a.offset().left,o=swpPinIt.button_size||1;switch(swpPinIt.vLocation){case"top":i+=15;break;case"middle":var r=a.height()/2-7.5-12;i+=r;break;case"bottom":i+=a.height()-15-24}switch(swpPinIt.hLocation){case"left":t+=15;break;case"center":var r=a.width()/2-7.5-60;t+=r;break;case"right":t+=a.width()-15-120}socialWarfare.hoverSaveButton.css({top:i,left:t,transform:"scale("+o+")","transform-origin":swpPinIt.vLocation+" "+swpPinIt.hLocation}),a.on("mouseleave",function(a){null!=a.relatedTarget&&"swp-hover-pin-button"==a.relatedTarget.className||e(".swp-hover-pin-button").remove()}),e(document.body).append(socialWarfare.hoverSaveButton)},socialWarfare.renderPinterestSaveButton=function(i){function t(i){var t=(e(a).width()-775)/2,o=(e(a).height()-550)/2,r=",top="+o+",left="+t;a.open(s,"Pinterest","width=775,height=550,status=0,toolbar=0,menubar=0,location=1,scrollbars=1"+r),socialWarfare.trackClick("pin_image"),e(".swp-hover-pin-button").remove()}if(!(i.relatedTarget&&"swp-hover-pin-button"==i.relatedTarget.className||e(".swp-hover-pin-button").length>0)){var o=e(i.target);if(!(void 0!=typeof swpPinIt.disableOnAnchors&&swpPinIt.disableOnAnchors&&o.parents().filter("a").length||o.outerHeight()<swpPinIt.minHeight||o.outerWidth()<swpPinIt.minWidth||o.hasClass("no_pin")||o.hasClass("no-pin"))){socialWarfare.toggleHoverSaveDisplay(o);var r=socialWarfare.getPinDescription(o),n=socialWarfare.getPinMedia(o),s="http://pinterest.com/pin/create/bookmarklet/?media="+encodeURI(n)+"&url="+encodeURI(document.URL)+"&is_video=false&description="+encodeURIComponent(r);e(".swp-hover-pin-button").on("click",t)}}},socialWarfare.findPinterestBrowserSaveButtons=function(){var e,i,t,o,r,n;return e="rgb(189, 8, 28)",i="rgb(230, 0, 35)",t="8675309",o="14px 14px",r=null,document.querySelectorAll("span").forEach(function(s,l){n=a.getComputedStyle(s),n.backgroundColor!=e&&n.backgroundColor!=i||n.backgroundSize==o&&n.zIndex==t&&(r=s)}),r},socialWarfare.removePinterestBrowserSaveButtons=function(e){var i,t,o;i=e.nextSibling,void 0!=i&&"SPAN"==i.nodeName&&(t=a.getComputedStyle(i),o="24px",0===t.width.indexOf(o)&&0===t.height.indexOf(o)&&i.remove()),e.remove()},socialWarfare.fetchFacebookShares=function(){var a="https://graph.facebook.com/v6.0/?fields=og_object{engagement}&id="+swp_post_url,i=swp_post_recovery_url?"https://graph.facebook.com/v6.0/?fields=og_object{engagement}&id="+swp_post_recovery_url:"";console.log("Facebook Share API: "+a),console.log("Facebook Share API (recovery): "+i),e.when(e.get(a),e.get(i)).then(function(a,i){var t,o,r,n;o=socialWarfare.parseFacebookShares(a[0]),r=0,swp_post_recovery_url&&(r=socialWarfare.parseFacebookShares(i[0])),t=o,o!==r&&(t=o+r);var n={action:"swp_facebook_shares_update",post_id:swp_post_id,share_counts:t};e.post(swp_admin_ajax,n,function(a){console.log(a)})})},socialWarfare.parseFacebookShares=function(a){return void 0===a.og_object?(console.log("Facebook Shares: 0"),0):(console.log("Facebook Shares: "+a.og_object.engagement.count),parseInt(a.og_object.engagement.count))},socialWarfare.trigger=function(i){e(a).trigger(e.Event(i))},socialWarfare.trackClick=function(a){!0===swpClickTracking&&("function"==typeof ga&&ga("send","event","social_media","swp_"+a+"_share"),"object"==typeof dataLayer&&dataLayer.push({event:"swp_"+a+"_share"}))},socialWarfare.checkListeners=function(a,i){if(!(a>i)){var t=e(".swp_social_panel");if(t.length>0&&t.find(".swp_pinterest"))return void socialWarfare.handleButtonClicks();setTimeout(function(){socialWarfare.checkListeners(++a,i)},2e3)}},socialWarfare.establishBreakpoint=function(){var a=e(".swp_social_panel");socialWarfare.breakpoint=1100,(a.length&&a.data("min-width")||0==a.data("min-width"))&&(socialWarfare.breakpoint=parseInt(a.data("min-width")))},socialWarfare.isMobile=function(){return e(a).width()<socialWarfare.breakpoint},e(document).ready(function(){socialWarfare.initPlugin(),socialWarfare.panels.floatingSide.hide(),e(a).resize(socialWarfare.onWindowResize),"undefined"!=typeof swpPinIt&&swpPinIt.enabled&&socialWarfare.enablePinterestSaveButtons()}),e(a).on("load",function(){"undefined"!=typeof swpPinIt&&swpPinIt.enabled&&socialWarfare.enablePinterestSaveButtons(),a.clearCheckID=0})}(this,jQuery);