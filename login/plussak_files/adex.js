if(typeof JSON!=="object")JSON={};(function(){"use strict"
function f(e){return e<10?"0"+e:e}
function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}
function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(e);if(typeof rep==="function")a=rep.call(t,e,a);switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i};if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1)if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i)u.push(quote(r)+(gap?": ":":")+i)}}else for(r in a)if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i)u.push(quote(r)+(gap?": ":":")+i)};i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}};var cx,escapable,gap,indent,meta,rep;if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1)indent+=" "}else if(typeof n==="string")indent=n;rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number"))throw new Error("JSON.stringify");return str("",{"":e})}};if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object")for(n in i)if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else delete i[n]};return reviver.call(e,t,i)};var j;text=String(text);cx.lastIndex=0;if(cx.test(text))text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j};throw new SyntaxError("JSON.parse")}}})();if(typeof String.prototype.trimLeft!=="function")String.prototype.trimLeft=function(){return this.replace(/^\s+/,"")};if(typeof String.prototype.trimRight!=="function")String.prototype.trimRight=function(){return this.replace(/\s+$/,"")};if(typeof Array.prototype.map!=="function")Array.prototype.map=function(callback,thisArg){for(var i=0,n=this.length,a=[];i<n;i++)if(i in this)a[i]=callback.call(thisArg,this[i]);return a};if(!Function.prototype.bind)Function.prototype.bind=function(oThis){if(typeof this!=="function")return;var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP&&oThis?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)))};fNOP.prototype=this.prototype;fBound.prototype=new fNOP();return fBound};var adex=window.adex={config:{protocol:window.location.protocol==='http:'?'http://':'https://',domain:"dmp.theadex.com",cookie_domain:'.theadex.com',base:"",customer:447,tag:1391},v:'008',xhr:null,visit_start:new Date(),cookie_sources:0,cookie_name:"axd",_cs:null,cookie_value:null,trace:null,rdrdata:{},me_top:null,adex_intop:null,xmessage_wait:null,override:null,unload:[],oldunload:window.onunload,deferred:[],initialized:false,browser:{isMSIE:!!(document.all),isMSIE6:false,isMSIE7:false,isMSIE8:false,isMSIE9:false},p_script:{},x_message_origins:[/\Wt4ft\.de$/i,/\Wtheadex\.com$/i],x_message_requests:{location:function(req,msg){return{location:window.location.href,referrer:document.referrer}}},caps:{ls:false,canvas:false,postmessage:false},plugins:{},adexcdata:{},debug:{},setup:function(cb){adex._cs=adex.__c_l();if(adex._notrack_enabled())return;adex.p_script=adex._extract_scriptparam();adex.browser.isMSIE6=adex.browser.isMSIE&&!(window.XMLHttpRequest);adex.browser.isMSIE7=adex.browser.isMSIE&&!adex.browser.isMSIE6&&!(document.querySelector);adex.browser.isMSIE8=adex.browser.isMSIE&&!adex.browser.isMSIE6&&!adex.browser.isMSIE7&&!(document.addEventListener);adex.browser.isMSIE9=adex.browser.isMSIE&&!adex.browser.isMSIE6&&!adex.browser.isMSIE7&&!adex.browser.isMSIE8&&!(window.atob);if(window.adexForceSSL&&window.adexForceSSL==1)adex.config.protocol='https://';window.onunload=function(e){var e=e||window.event;if(adex.oldunload&&(''+adex.oldunload!==''+window.onunload))try{adex.oldunload()}catch(er){};for(var i=0;i<adex.unload.length;i++)adex.unload[i][1].apply(adex.unload[i][0],adex.unload[i][2]);if(e)e.returnValue='';return''};adex.cookie_value=adex._trace_cookie_get();try{adex.caps.ls=!!('localStorage'in window&&window.localStorage!==null)}catch(Exception){adex.caps.ls=false};try{if('HTMLCanvasElement'in window){adex.caps.canvas=true}else{var elem=document.createElement('canvas');adex.caps.canvas=!!(elem.getContext&&elem.getContext('2d'))}}catch(Exception){adex.caps.canvas=false};try{adex.caps.postmessage=!!(window.postMessage)}catch(Exception){adex.caps.postmessage=false};if(window.adex_dumper){adex.debug.onregisterplugin=window.adex_dumper.trackRegisterPlugin;adex.debug.ondataset=window.adex_dumper.trackDataSet;adex.debug.console=window.adex_dumper.console}else{adex.debug.onregisterplugin=function(){};adex.debug.ondataset=function(){};adex.debug.console=function(){}};adex.me_top=!!(self===top);try{adex.adex_intop=!adex.me_top&&'adex'in top.window}catch(Exception){adex.adex_intop=false};if(window._adexc&&!window._adexc.takenover){var storedAdexc=window._adexc;window._adexc={takenover:true,push:function(element){adex.translateAdexc(arguments)}};if(storedAdexc&&storedAdexc.length&&storedAdexc.length>0)adex.translateAdexc(storedAdexc)};window._adexc={takenover:true,push:function(element){adex.translateAdexc([element])}};adex.ae(window,'message',adex.x_message);if(!adex.me_top&&adex.caps.postmessage){adex.xmessage_wait=true;adex.x_message_send(top,{type:'location'})}else adex.xmessage_wait=false;if(!adex._trace_direct_check()){adex._trace_reload(function(){adex._trace_direct_populate();if(cb)cb.apply(adex,[adex]);adex.flushdeferred()})}else{if(cb)cb.apply(adex,[adex]);adex.flushdeferred();adex._trace_direct_populate()};adex.debug.onregisterplugin('_config',{config:window.adex.config});adex.ae(window,'beforeunload',adex.beforedestruct)},_notrack_enabled:function(){if(window.adex&&window.adex._cs&&window.adex._cs.notrack){var i=parseInt(window.adex._cs.notrack);if(i=='NaN')return false;if(i>0)return true};return false},__c_l:function(){var c=document.cookie,v=0,cookies={},d=function(val){try{return decodeURIComponent(val)}catch(e){return decodeURIComponent(escape(val))}};if(document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)){c=RegExp.$1;v=1};if(v===0){c.split(/[,;]/).map(function(cookie){var parts=cookie.split(/=/,2),name=d(parts[0].trimLeft()),value=parts.length>1?d(parts[1].trimRight()):null;cookies[name]=value})}else c.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map(function($0,$1){var name=$0,value=$1.charAt(0)==='"'?$1.substr(1,-1).replace(/\\(.)/g,"$1"):$1;cookies[name]=value});return cookies},translateAdexc:function(adexc){if(adexc.length===3&&adexc[0]&&!adexc[0].length)adexc=[adexc];if(!adexc.length||adexc.length===0)return;for(var i=0;i<adexc.length;i++){var p="usertrack",c=null,d=null;if(adexc[i].length===3){p=adexc[i][0];c=adexc[i][1];d=adexc[i][2];if(p==='xpl'){p='usertrack';c="xpl_"+c;adex.debug.console("Overriding xpl-push "+c)};if(p===173){p='usertrack';c='sdi_'+c};if(p==="ms"){p='usertrack';c='ms_'+c}}else if(adexc[i].length===2){c=adexc[i][0];d=adexc[i][1]}else continue;if(!adex.adexcdata[p])adex.adexcdata[p]=[];adex.adexcdata[p].push([c,d])}},data_usertrack_adexc:function(adexc){for(var i=0;i<adexc.length;i++){var d=adexc[i][1],c=adexc[i][0];switch(c){case"_key":case"_3":if(!this.config.keywords)this.config.keywords=[];if(d.split){this.config.keywords.concat(d)}else this.config.keywords.push(d);break;case"_age":case"_1":if(!this.config.age)this.config.age=[];if(d.split){this.config.age.concat(d)}else this.config.age.push(d);break;case"_seg":case"_4":if(!this.config.segment)this.config.segment=[];if(d.split){this.config.segment.concat(d)}else this.config.segment.push(d);break;case"_gen":case"_2":if(d==1)d='F';if(d==2)d='M';if(d==='M'||d==='F')this.config.gender=d;break;case"_ft":case"_5":this.config.foreigntag=d;break;case"_p":case"_6":this.config.pi=d;break;case"_pg":case"_7":this.config.pig=d;break;case"_rp":case"_8":this.config.rp=d;break;case"_t":this.config.tags=d;break;case"_utg":case"_101":this.config.utg101=d;this.config.utg=d;break;case"_utg00":this.config.utg00=d;break;case"_utg01":this.config.utg01=d;break;case"_cm":adex.sendCM.apply(adexc,[d]);break;case"_lo":if(typeof d==='string'||d instanceof String){adex.override=adex.override||{};adex.override.location=d};break;case"_rf":if(typeof d==='string'||d instanceof String){adex.override=adex.override||{};adex.override.referrer=d};break;case"_kv":case"kv":case"ms_fd":case"sdi__ft":case"xpl__ft":if(d===Object(d)){var _d=this.config.kv||{};for(var k in d)if(d.hasOwnProperty(k))switch(k){case'hostSiteUrl':adex.override=adex.override||{};adex.override['location']=d[k];case'referrer':adex.override=adex.override||{};adex.override[k]=d[k];break;case'title':adex.override=adex.override||{};adex.override.pmt=d[k];_d[k]=d[k];break;case'description':adex.override=adex.override||{};adex.override.pmd=d[k];_d[k]=d[k];break;case'keywords':adex.override=adex.override||{};adex.override.pmk=d[k];_d[k]=d[k];break;default:_d[k]=d[k];break};this.config.kv=_d};break;default:break}}},sendCM:function(data){if(data.length==2){var d={axd_pid:data[0],axd_fuid:data[1],c:adex._trace_get()};adex.xfer_image("%%DMP3rd%%/d/%%CUSTOMER%%/i/2.gif?",d)}},flushdeferred:function(){for(var i in adex.deferred)if(adex.deferred.hasOwnProperty(i))adex.deferred[i].apply();adex.deferred=[];adex.initialized=true},defer:function(cb){if(!adex.initialized){adex.deferred.push(cb)}else cb.apply()},x_message_send:function(target,data){var request=adex.compress(data);if(target.postMessage)target.postMessage(request,'*')},x_message:function(event){if(adex.me_top){var allow=false,i,response=null;for(i=0;i<adex.x_message_origins.length;i+=1)if(adex.x_message_origins[i].test(event.origin)){allow=true;break};if(!allow)return;var request=adex.decompress(event.data);if(adex.x_message_requests.hasOwnProperty(request.type))response=adex.x_message_requests[request.type](request,event);if(response){response.type=request.type+'_response';event.source.postMessage(adex.compress(response),event.origin)}}else if(event.data){var data=adex.decompress(event.data);if(data.type){if(data.type==='location_response')adex.override={location:data.location,referrer:data.referrer};adex.xmessage_wait=false}}},_trace_direct_check:function(){var found=false;if(adex._trace_cookie_get()){adex.cookie_sources=adex.cookie_sources|1;adex.trace=adex._trace_cookie_get();found=true};return found},_trace_get:function(){return adex.trace},_trace_direct_populate:function(){adex._trace_cookie_set(adex.trace);if(adex.caps.ls);},_trace_reload:function(cb){var rand=parseInt(Math.random()*1e4,10);adex.cookie_sources=adex.cookie_sources|8;adex.runscript("%%DMP3rd%%/d/"+rand+"/d/t.js",cb)},_trace_cookie_get:function(){var cv=document.cookie,cs=cv.indexOf(" "+adex.cookie_name+"=");if(cs==-1)cs=cv.indexOf(adex.cookie_name+"=");if(cs==-1){cv=null}else{cs=cv.indexOf("=",cs)+1;var ce=cv.indexOf(";",cs);if(ce===-1)ce=cv.length;cv=unescape(cv.substring(cs,ce))};if(cv==="null")cv=null;return cv},_trace_cookie_set:function(val){var exdate=new Date(),exdays=30;exdate.setDate(exdate.getDate()+exdays);var cv=escape(val)+((exdays===null)?"":"; expires="+exdate.toUTCString());document.cookie=adex.cookie_name+"="+cv+"; path=/"},_rdrdata_get:function(){return window.adex.rdrdata},unserialize:function(data){if(!data)return{};var match,pl=/\+/g,search=/([^&=]+)=?([^&]*)/g,decode=function(s){try{return decodeURIComponent(s.replace(pl," "))}catch(e){return unescape(s.replace(pl," "))}},result={};while(match=search.exec(data))result[decode(match[1])]=decode(match[2]);return result},_extract_scriptparam:function(){var scriptTags=document.getElementsByTagName('script');for(var i=0;i<scriptTags.length;i++)if(scriptTags[i].src&&scriptTags[i].src.indexOf("adex.js")>-1){var script=scriptTags[i];if(script.getAttribute("src")&&script.getAttribute("src").indexOf("?")){var x=document.createElement('a');x.href=script.getAttribute("src");return window.adex.unserialize(x.search.substr(1))};return}},data_usertrack:function($a){if($a.xmessage_wait){var mycontext=this,cb=function(){$a.data_usertrack.apply(mycontext,[$a])};$a.xmessage_wait=false;$a.runin(500,cb);return};this.data.t=1;this.data.protocol=$a.config.protocol;this.data.c=adex._trace_get();this.data.s=(this.config.segment&&this.config.segment.join)?this.config.segment.join(","):null;this.data.k=(this.config.keywords&&this.config.keywords.join)?this.config.keywords.join(","):null;this.data.g=(this.config.gender)?this.config.gender:null;this.data.a=(this.config.age&&this.config.age.join)?this.config.age.join(","):null;this.data.ft=(this.config.foreigntag)?this.config.foreigntag:null;if($a.p_script&&$a.p_script._ft)this.data.ft=$a.p_script._ft;if(this.data.ft);this.data.pi=(this.config.pi)?this.config.pi:null;this.data.pig=(this.config.pig)?this.config.pig:null;this.data.rp=(this.config.rp)?this.config.rp:null;this.data.csource=adex.cookie_sources;this.data.utg=(this.config.utg)?this.config.utg:null;this.data.utg00=(this.config.utg00)?this.config.utg00:null;this.data.utg01=(this.config.utg01)?this.config.utg01:null;this.data.tags=(this.config.tags)?this.config.tags:null;var now=new Date();this.data.tzo=now.getTimezoneOffset();if(this.config.kv)this.data.kv=JSON.stringify(this.config.kv);this.data.sw=(screen.width)?screen.width:'';this.data.sh=(screen.height)?screen.height:'';this.data.sd=(screen.colorDepth)?screen.colorDepth:'';this.data.pd=(screen.pixelDepth)?screen.pixelDepth:'';this.data.saw=(screen.availWidth)?screen.availWidth:'';this.data.sah=(screen.availHeight)?screen.availHeight:'';this.data.sal=(screen.availLeft)?screen.availLeft:'';this.data.sat=(screen.availTop)?screen.availTop:'';if(typeof window.innerWidth!=='undefined'){this.data.vw=window.innerWidth;this.data.vh=window.innerHeight}else if(typeof document.documentElement!=='undefined'&&typeof document.documentElement.clientWidth!=='undefined'&&document.documentElement.clientWidth!==0){this.data.vw=document.documentElement.clientWidth;this.data.vh=document.documentElement.clientHeight}else{this.data.vw=document.getElementsByTagName('body')[0].clientWidth;this.data.vh=document.getElementsByTagName('body')[0].clientHeight};this.data.inframe=(window.self===window.top)?0:1;var p=[];if(navigator.plugins)for(var i=0;i<navigator.plugins.length;i++)if(navigator.plugins[i].name)p.push($a._fixW1252(navigator.plugins[i].name));this.data.p=p.join(";");try{var e=document.getElementsByTagName('meta');if(e&&e.length>0){var _pmo=[];for(var j=0;j<e.length;j++){var mN=e[j].getAttribute('name'),mV=e[j].getAttribute('content');switch(mN){case'description':this.data.pmd=mV;break;case'keywords':this.data.pmk=mV;break;case'author':_pmo.push($a._fixW1252(mV));break;case'publisher':_pmo.push($a._fixW1252(mV));break;case'copyright':_pmo.push($a._fixW1252(mV));break;default:break}};if(_pmo.length>0)this.data.pmo=_pmo.join(";")}}catch(AnE){};try{var tt=document.getElementsByTagName('title'),ogtt=document.getElementsByTagName('meta'),_mpt=[];if(ogtt&&ogtt.length>0)for(var k=0;k<ogtt.length;k++){var mP=ogtt[k].getAttribute('property'),mPC=ogtt[k].getAttribute('content');switch(mP){case'og:title':if(!!mPC&&mPC!=='')_mpt.push(mPC);break;default:break}};if(_mpt&&_mpt.length>0){this.data.pmt=_mpt[0]}else if(!!this.data.pmt);else if(tt&&tt.length>0)this.data.pmt=tt[0].innerHTML}catch(AnE){};if($a.override){for(var k in $a.override)switch(k){case'location':this.data.location=$a.override[k];break;case'referrer':this.data.referrer=$a.override[k];break;case'pmk':case'pmd':case'pmt':this.data[k]=$a.override[k];break};this.data.ovr=1}else{this.data.referrer=(!document.referrer)?"":document.referrer;this.data.location=window.location;this.data.ovr=0};var e=new Image(1,1);e.src=$a._applymacro("%%DMPTrack%%/d/%%CUSTOMER%%/%%TAGID%%/i/1.gif?")+$a.compress(this.data)},xfer_image:function(b,d){var e=new Image(1,1);e.src=adex._applymacro(b)+adex.compress(d)},xfer_xhr:function(b,d){var x=adex._xhr();if(x){x.open('POST',adex._applymacro(b));x.send(d)}},_xhr:function(){if(!adex.xhr){if(typeof XMLHttpRequest!=='undefined')adex.xhr=new XMLHttpRequest();if(!adex.xhr)try{adex.xhr=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{adex.xhr=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){adex.xhr=null}}};return adex.xhr},debounce:function(f,w,i){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null;if(!i)f.apply(context,args)},callNow=i&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,w);if(callNow)f.apply(context,args)}},runevery:function(f,w,runtime){var int=setInterval(f,w);if(runtime)var timeout=setTimeout(function(){clearInterval(int);clearTimeout(timeout)},runtime)},runin:function(milliseconds,cb){var int=setInterval(function(){cb.call();window.clearInterval(int)},milliseconds)},register_plugin:function(plugin,initcb,adexctransonce,adexctransoverride){if(!adex.plugins[plugin]){adex.plugins[plugin]={data:{c:adex._trace_get()},config:{}};if(adex.adexcdata[plugin])if(adexctransonce){adexctransonce.apply(adex.plugins[plugin],[adex.adexcdata[plugin]])}else adexctransonce.plugins[plugin].config=adex.adexcdata[plugin];if(adexctransoverride)adex.adexcdata[plugin]={push:function(){adexctransoverride.apply(adex.plugins[plugin],[arguments])}};adex.plugins[plugin].log=adex.debug.console;initcb.apply(adex.plugins[plugin],[adex]);adex.debug.onregisterplugin(plugin,adex.plugins[plugin])}},register_unload:function(f){adex.unload.push(f)},_replaceArray:function(str,s,r){for(var i=0;i<s.length;i++)str=str.replace(s[i],r[i]);return str},_fixW1252:function(str){return this._replaceArray(str,['\x99','\x80','\x82','\x83','\x84','\x85','\x86','\x87','\x88','\x89','\x8A','\x8B','\x8C','\x8E','\x91','\x92','\x93','\x94','\x95','\x96','\x97','\x98','\x99','\x9A','\x9B','\x9C','\x9E','\x9F'],['\u2122','\u20AC','\u201A','\u0192','\u201E','\u2026','\u2020','\u2021','\u02C6','\u2030','\u0160','\u2039','\u0152','\u017D','\u2018','\u2019','\u201C','\u201D','\u2022','\u2013','\u2014','\u02DC','\u2122','\u0161','\u203A','\u0153','\u017E','\u0178'])},compress:function(d){var k,ret="";for(k in d)if(k!=='tmp'&&d.hasOwnProperty(k)&&d[k]&&(typeof d[k]!=="undefined")&&d[k]!=="")ret+=k+"="+encodeURIComponent(d[k])+"&";return ret.slice(0,-1)},decompress:function(data){var decoded={},pairs=data.split('&'),i,pair;for(i=0;i<pairs.length;i+=1){pair=pairs[i].split('=');try{decoded[pair[0]]=decodeURIComponent(pair[1])}catch(catchError){return{}}};return decoded},_applymacro:function(s){return s.replace('%%DMPTrack%%','%%DMP3rd%%').replace('%%DMP3rd%%',adex.config.protocol+adex.config.domain+adex.config.base).replace('%%DMPStatic%%',adex.config.protocol+"static.theadex.com").replace('%%CUSTOMER%%',adex.config.customer).replace('%%TAGID%%',adex.config.tag).replace('%%COOKIE%%',adex._trace_get())},runscript:function(surl,cb){var script=document.createElement("script"),done=false;script.type="text/javascript";script.async=true;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;if(cb)cb.apply(adex,[]);script.onload=script.onreadystatechange=null}};script.src=adex._applymacro(surl);var sc=document.getElementsByTagName("script")[0];sc.parentNode.insertBefore(script,sc)},ae:function(t,e,l,plugin){if(plugin)l=l.bind(adex.plugins[plugin]);if(t.addEventListener){t.addEventListener(e,l,null)}else if(t.attachEvent){t.attachEvent("on"+e,l)}else t["on"+e]=l},xfer_redirect:function(){try{var iframe=document.createElement('iframe');iframe.setAttribute('id','rdr_'+adex.config.customer+'_'+adex.config.tag);iframe.style.cssText="height: 1px; width: 1px; border: none; position: absolute; top: -100px; left: -100px; z-index: -5;  ";var d=adex._rdrdata_get();d.c=adex._trace_get();iframe.setAttribute('src',adex._applymacro("%%DMP3rd%%/r/%%CUSTOMER%%/%%TAGID%%/?"+adex.compress(d)));var doc=iframe.document;if(!!document&&!!document.body)document.body.appendChild(iframe)}catch(exception){}},beforedestruct:function(){}};(function(){window.adex.setup(function(adex){window.adex.register_plugin("usertrack",function(adex){adex.data_usertrack.apply(this,[adex])},adex.data_usertrack_adexc,adex.data_usertrack_adexc);window.adex.runscript('%%DMP3rd%%/d/447/1391/s/analytic.js')})})()