;(function(){
	window.Mask = function(){};
	Mask.prototype = {
		init: function(args){
			this.settings = $.extend({}, args);
			this.maskObj = $("<div class='ui-loading'><div class='ui-loading-mask'></div><i></i></div>");
			this.bindEvent();
			this.start();
		},
		
		bindEvent: function(){
			$(document).on('stop', function(){
				this.stop();
			});
		},
		
		stop: function(){
			this.maskObj.remove();
		},
		
		start: function(){
			$('body').append(this.maskObj);
			width = Math.max($('html').width(), $(window).width());
			height = Math.max($('html').height(), $(window).height());
			this.maskObj.find('div').width(width).height(height);
			var loading = this.maskObj.find('i');
			var top = ($(window).height() - loading.height()) / 2;
			var left = ($(window).width() - loading.width()) / 2;
			loading.css({
				top: top,
				left: left
			});
		}
	}
})(jQuery);