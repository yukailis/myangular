function createDom($rootScope){
	return {
		restrict:"C",
		link:function(scope,element){
			element.find("li").on("click",function(){
				$(this).addClass("li_col").siblings().removeClass("li_col")
			})
		}
	}
}

function changeMove($rootScope){
	return{
		restrict:"C",
		link:function(scope,element){
			element.find("li").on("click",function(){
				var len=element.find("li").width();
				var index=$(this).index();
				element.siblings("p").css({
					"left":index*len,
					"-webkit-transition":"left 1s"
				})
			})
			
		}
	}
}
angular.module("myapp")
		.directive("createDom",createDom)//2.注册自定义指令
		.directive("changeMove",changeMove)
