var gulp=require("gulp");
var connect=require("gulp-connect");//服务器
var respond=require("gulp-respond");//响应
var fs=require("fs");

gulp.task("connect",function(){
		connect.server({
			root:["src"],
			port:8006,
			middleware:function(){
				return [
					function(req,res){
						var path=req.url.split("?")[0];
						path = path == "/" ? "/index.html" : path;
						url  = "src"+path 
						if(!fs.existsSync(url)){
							url ="bower_components"+path;
						}
						//console.log(url)
						return gulp.src(url)
									.pipe(respond(res)) 
					}
				]
			}
		})
	})