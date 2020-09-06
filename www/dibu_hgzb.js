var ua = navigator.userAgent;

var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

isAndroid = ua.match(/(Android)\s+([\d.]+)/),

isMobile = isIphone || isAndroid;

//判断

if(isMobile){

document.writeln("<style>");
document.writeln(".margingT {");
document.writeln("margin-bottom: 80px;");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln(".bottommob{");
document.writeln("    -webkit-box-sizing: border-box;");
document.writeln("    height: 100px;");
document.writeln("    position: fixed;");
document.writeln("    bottom: 0;");
document.writeln("    left: 0;");
document.writeln("    z-index: 1000;");
document.writeln("    padding: 0 10px;");
document.writeln("    overflow: hidden;");
document.writeln("    width: 100%;");
document.writeln("    opacity: 0.85;");
document.writeln("    background: linear-gradient(90deg,rgb(158, 84, 239),rgb(70, 69, 72));");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln(".bottom-pic {");
document.writeln("    position: absolute;");
document.writeln("    top: 12px;");
document.writeln("    margin-left: 5px;");
document.writeln("    width: 80px;");
document.writeln("    height: 80px;");
document.writeln("    overflow: hidden;");
document.writeln("    -webkit-border-radius: 10px;");
document.writeln("    border-radius: 10px;");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln(".bottom-pic img {");
document.writeln("width: 100%;");
document.writeln("height: 100%;");
document.writeln("");
document.writeln("}");
document.writeln("");
document.writeln(".bottom-text {");
document.writeln("    margin-left: 97px;");
document.writeln("    line-height: 60px;");
document.writeln("    font-size: 20px;");
document.writeln("    color: #fff;");
document.writeln("    font-weight: 600;");
document.writeln("");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln(".bottom-btn {");
document.writeln("    position: absolute;");
document.writeln("    top: 12px;");
document.writeln("    width: 120px;");
document.writeln("    right: 20px;");
document.writeln("    height: 45px;");
document.writeln("    line-height: 45px;");
document.writeln("    color: #fff;");
document.writeln("    background: linear-gradient(90deg,rgb(239, 84, 205),rgb(242, 185, 13));");
document.writeln("    border-radius: 55px;");
document.writeln("    text-align: center;");
document.writeln("    font-size: 20px;");
document.writeln("    padding: 0 5px;");
document.writeln("    font-weight: bold;");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln(".bottommob a {");
document.writeln("position: absolute;");
document.writeln("top: 0;");
document.writeln("right: 0;");
document.writeln("bottom: 0;");
document.writeln("left: 0;");
document.writeln("}");
document.writeln("");
document.writeln("");
document.writeln(".bottom-wenan{");
document.writeln("    margin-left: 97px;");
document.writeln("    line-height: 25px;");
document.writeln("    font-size: 16px;");
document.writeln("    color: #fff;");
document.writeln("}");
document.writeln("");
document.writeln("</style>");
document.writeln("<div class=\'bottommob\' id=\'bottommob\'>");
document.writeln("<div class=\'bottom-con\'>");
document.writeln("<div class=\'bottom-pic\'>");
document.writeln("<img src=\'https://cdn.jsdelivr.net/gh/fulidhw/cdn/static/nav/GIF/17.gif\' style=\'width:100%; height:100%;\' alt=\'\' />");
document.writeln("</div>");
document.writeln("<div class=\'bottom-text\' id=\'bottomText\'>性吧..直播</div>");
document.writeln("<div class=\'bottom-wenan\' id=\'\'>性感萝莉主播，<span style=\'color:yellow;\'>任</span>你操控！</div>");
document.writeln("<div class=\'bottom-btn\'>立即下载</div>");
document.writeln("</div>");
document.writeln("<a id=\'bottomLink\' href=\'http://looks.pw/xb\' target=\'_blank\'></a>");
document.writeln("</div>");
}
