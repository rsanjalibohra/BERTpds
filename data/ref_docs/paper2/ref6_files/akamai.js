(function(){function a(f,h,d){function g(j,k){if(!h[j]){if(!f[j]){var m="function"==typeof require&&require;
if(!k&&m){return m(j,!0)
}if(b){return b(j,!0)
}var e=new Error("Cannot find module '"+j+"'");
throw e.code="MODULE_NOT_FOUND",e
}var l=h[j]={exports:{}};
f[j][0].call(l.exports,function(i){var o=f[j][1][i];
return g(o||i)
},l,l.exports,a,f,h,d)
}return h[j].exports
}for(var b="function"==typeof require&&require,c=0;
c<d.length;
c++){g(d[c])
}return g
}return a
})()({1:[function(b,c,a){var d={setCodes:function(){this.setCountryCode("IN");
this.setRegionCode("DL")
},setCountryCode:function(e){if(e.length===2){window.MathWorksCountryCode=e
}},setRegionCode:function(e){if(e.length>=1&&e.length<=5){window.MathWorksRegionCode=e
}}};
c.exports=d;
d.setCodes()
},{}]},{},[1]);