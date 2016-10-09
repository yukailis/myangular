function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
	//console.log($ocLazyLoadProvider)
	$urlRouterProvider.otherwise("home");

	$stateProvider.state("home",{
						url:"/home",
						templateUrl:"../html/home.html",
						data:{
							name:"ykl"
						},
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})


					.state("aim",{
						url:"/aim",
						templateUrl:"../html/aim.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.hot",{
						url:"/hot",
						templateUrl:"../views/hot.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.five-one",{
						url:"/five-one",
						templateUrl:"../views/five-one.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.around",{
						url:"/around",
						templateUrl:"../views/around.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.jiang",{
						url:"/jiang",
						templateUrl:"../views/jiang.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.guang",{
						url:"/guang",
						templateUrl:"../views/guang.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.all",{
						url:"/all",
						templateUrl:"../views/all.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.japan",{
						url:"/japan",
						templateUrl:"../views/japan.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.dong",{
						url:"/dong",
						templateUrl:"../views/dong.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("aim.hai",{
						url:"/hai",
						templateUrl:"../views/hai.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})



					.state("find",{
						url:"/find",
						templateUrl:"../html/find.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("mine",{
						url:"/mine",
						templateUrl:"../html/mine.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/index.css"]
									}
								])
							}
						}
					})
					.state("food",{
						url:"/food",
						templateUrl:"../html/food.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})
					.state("food_x",{
						url:"/food_x",
						templateUrl:"../html/food_x.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})
					.state("tour",{
						url:"/tour",
						templateUrl:"../html/tour.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})
					.state("around",{
						url:"/around",
						templateUrl:"../html/around.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})

					.state("myside",{
						url:"/myside",
						templateUrl:"../html/myside.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})
					.state("myside.myside_x",{
						url:"/myside_x",
						templateUrl:"../views/myside_x.html",
						resolve:{
							loadPlugin:function($ocLazyLoad){
								return $ocLazyLoad.load([
									{
										files:["/css/home.css"]
									}
								])
							}
						}
					})
}
angular.module("myapp")
		.config(config)