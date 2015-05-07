$(function() {
	var timer;
	var targetUl = $("#list");
	var li = targetUl.find("li");
	var liLen = li.length;
	var initHeight = li.eq(0).outerHeight(true);

	var animation = function() {
		if(liLen <= 0) return;

		var first = targetUl.find("li").eq(0);
		var self = arguments.callee;

		first.animate({
			marginTop: - initHeight + 'px'
		}, 'fast', function() {
			clearTimeout(timer);

			first.appendTo(targetUl).css({
				marginTop: 0
			});

			var timer = setTimeout(self, 3000);
		});
	};

	setTimeout(animation, 2000);
});

$(function() {
	//对于appendTo
	//注意：如果当前jQuery对象匹配的元素是当前页面中的某些元素，那么这些元素将从原位置上消失。简而言之，这相当于一个移动操作，而不是复制操作。
	var demo = $("#demo");
	var first = demo.find("li").eq(0);

	first.appendTo(demo);
});