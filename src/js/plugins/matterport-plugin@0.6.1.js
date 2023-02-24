var n,r,Cr=Math.pow,Qt=(e,t,i)=>new Promise((a,s)=>{var o=e=>{try{u(i.next(e))}catch(t){s(t)}},l=e=>{try{u(i.throw(e))}catch(t){s(t)}},u=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,l);u((i=i.apply(e,t)).next())}),yr="147",uo=0,Pr=1,fo=2,Ha=1,po=2,hi=3,$n=0,we=1,an=2,on=0,Yn=1,Rr=2,Lr=3,Ir=4,mo=5,Wn=100,go=101,xo=102,Dr=103,Nr=104,_o=200,vo=201,yo=202,Mo=203,Ga=204,Wa=205,bo=206,wo=207,So=208,To=209,Ao=210,Eo=0,Co=1,Po=2,Hs=3,Ro=4,Lo=5,Io=6,Do=7,qa=0,No=1,Fo=2,Xe=0,zo=1,Oo=2,Uo=3,Bo=4,ko=5,Xa=300,Kn=301,jn=302,Gs=303,Ws=304,ns=306,qs=1e3,Pe=1001,Xs=1002,he=1003,Fr=1004,zr=1005,be=1006,Vo=1007,is=1008,bn=1009,Ho=1010,Go=1011,Ya=1012,Wo=1013,_n=1014,vn=1015,fi=1016,qo=1017,Xo=1018,Zn=1020,Yo=1021,Zo=1022,Re=1023,Jo=1024,$o=1025,yn=1026,Qn=1027,Ko=1028,jo=1029,Qo=1030,tl=1031,el=1033,cs=33776,hs=33777,us=33778,ds=33779,Or=35840,Ur=35841,Br=35842,kr=35843,nl=36196,Vr=37492,Hr=37496,Gr=37808,Wr=37809,qr=37810,Xr=37811,Yr=37812,Zr=37813,Jr=37814,$r=37815,Kr=37816,jr=37817,Qr=37818,ta=37819,ea=37820,na=37821,ia=36492,Hi=2300,Gi=2301,fs=2302,sa=2400,ra=2401,aa=2402,wn=3e3,Bt=3001,il=3200,sl=3201,rl=0,al=1,De="srgb",pi="srgb-linear",ps=7680,ol=519,oa=35044,la="300 es",Ys=1035,ln=class{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners[e];if(void 0!==i){let a=i.indexOf(t);-1!==a&&i.splice(a,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}},ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,ca=180/Math.PI;function _i(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,a=4294967295*Math.random()|0;return(ee[255&e]+ee[e>>8&255]+ee[e>>16&255]+ee[e>>24&255]+"-"+ee[255&t]+ee[t>>8&255]+"-"+ee[t>>16&15|64]+ee[t>>24&255]+"-"+ee[63&i|128]+ee[i>>8&255]+"-"+ee[i>>16&255]+ee[i>>24&255]+ee[255&a]+ee[a>>8&255]+ee[a>>16&255]+ee[a>>24&255]).toLowerCase()}function xe(e,t,i){return Math.max(t,Math.min(i,e))}function ll(e,t){return(e%t+t)%t}function gs(e,t,i){return(1-i)*e+i*t}function ha(e){return(e&e-1)==0&&0!==e}function Zs(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function vi(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function pe(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}var Nt=class{constructor(e=0,t=0){Nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class{constructor(){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,a,s,o,l,u,h){let c=this.elements;return c[0]=e,c[1]=a,c[2]=l,c[3]=t,c[4]=s,c[5]=u,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,o=i[0],l=i[3],u=i[6],h=i[1],c=i[4],d=i[7],p=i[2],f=i[5],m=i[8],g=a[0],$=a[3],v=a[6],x=a[1],y=a[4],b=a[7],S=a[2],_=a[5],M=a[8];return s[0]=o*g+l*x+u*S,s[3]=o*$+l*y+u*_,s[6]=o*v+l*b+u*M,s[1]=h*g+c*x+d*S,s[4]=h*$+c*y+d*_,s[7]=h*v+c*b+d*M,s[2]=p*g+f*x+m*S,s[5]=p*$+f*y+m*_,s[8]=p*v+f*b+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],c=e[8];return t*o*c-t*l*h-i*s*c+i*l*u+a*s*h-a*o*u}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=c*o-l*h,p=l*u-c*s,f=h*s-o*u,m=t*d+i*p+a*f;if(0===m)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=d*g,e[1]=(a*h-c*i)*g,e[2]=(l*i-a*o)*g,e[3]=p*g,e[4]=(c*t-a*u)*g,e[5]=(a*s-l*t)*g,e[6]=f*g,e[7]=(i*u-h*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,l){let u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*o+h*l)+o+e,-a*h,a*u,-a*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xs=new le;function Za(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Wi(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Mn(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function Vi(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}var _s={[De]:{[pi]:Mn},[pi]:{[De]:Vi}},ae={legacyMode:!0,get workingColorSpace(){return pi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(this.legacyMode||t===i||!t||!i)return e;if(_s[t]&&void 0!==_s[t][i]){let a=_s[t][i];return e.r=a(e.r),e.g=a(e.g),e.b=a(e.b),e}throw Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}},Ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={r:0,g:0,b:0},Ae={h:0,s:0,l:0},yi={h:0,s:0,l:0};function vs(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}function Mi(e,t){return t.r=e.r,t.g=e.g,t.b=e.b,t}var zt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ae.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=ae.workingColorSpace){return this.r=e,this.g=t,this.b=i,ae.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=ae.workingColorSpace){if(e=ll(e,1),t=xe(t,0,1),i=xe(i,0,1),0===t)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vs(o,s,e+1/3),this.g=vs(o,s,e),this.b=vs(o,s,e-1/3)}return ae.toWorkingColorSpace(this,a),this}setStyle(e,t=De){function i(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=a[1],l=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ae.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ae.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){let u=parseFloat(s[1])/360,h=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(u,h,c,t)}}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let d=a[1],p=d.length;if(3===p)return this.r=parseInt(d.charAt(0)+d.charAt(0),16)/255,this.g=parseInt(d.charAt(1)+d.charAt(1),16)/255,this.b=parseInt(d.charAt(2)+d.charAt(2),16)/255,ae.toWorkingColorSpace(this,t),this;if(6===p)return this.r=parseInt(d.charAt(0)+d.charAt(1),16)/255,this.g=parseInt(d.charAt(2)+d.charAt(3),16)/255,this.b=parseInt(d.charAt(4)+d.charAt(5),16)/255,ae.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=De){let i=Ja[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return ae.fromWorkingColorSpace(Mi(this,Wt),e),xe(255*Wt.r,0,255)<<16^xe(255*Wt.g,0,255)<<8^xe(255*Wt.b,0,255)<<0}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ae.workingColorSpace){ae.fromWorkingColorSpace(Mi(this,Wt),t);let i=Wt.r,a=Wt.g,s=Wt.b,o=Math.max(i,a,s),l=Math.min(i,a,s),u,h,c=(l+o)/2;if(l===o)u=0,h=0;else{let d=o-l;switch(h=c<=.5?d/(o+l):d/(2-o-l),o){case i:u=(a-s)/d+(a<s?6:0);break;case a:u=(s-i)/d+2;break;case s:u=(i-a)/d+4}u/=6}return e.h=u,e.s=h,e.l=c,e}getRGB(e,t=ae.workingColorSpace){return ae.fromWorkingColorSpace(Mi(this,Wt),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=De){return ae.fromWorkingColorSpace(Mi(this,Wt),e),e!==De?`color(${e} ${Wt.r} ${Wt.g} ${Wt.b})`:`rgb(${255*Wt.r|0},${255*Wt.g|0},${255*Wt.b|0})`}offsetHSL(e,t,i){return this.getHSL(Ae),Ae.h+=e,Ae.s+=t,Ae.l+=i,this.setHSL(Ae.h,Ae.s,Ae.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ae),e.getHSL(yi);let i=gs(Ae.h,yi.h,t),a=gs(Ae.s,yi.s,t),s=gs(Ae.l,yi.l,t);return this.setHSL(i,a,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};zt.NAMES=Ja;var Rn,qi=class{static getDataURL(e){if(/^data:/i.test(e.src)||"undefined"==typeof HTMLCanvasElement)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{void 0===Rn&&(Rn=Wi("canvas")),Rn.width=e.width,Rn.height=e.height;let i=Rn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let t=Wi("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=255*Mn(s[o]/255);return i.putImageData(a,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let l=e.data.slice(0);for(let u=0;u<l.length;u++)l instanceof Uint8Array||l instanceof Uint8ClampedArray?l[u]=Math.floor(255*Mn(l[u]/255)):l[u]=Mn(l[u]);return{data:l,width:e.width,height:e.height}}}},Xi=class{constructor(e=null){this.isSource=!0,this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(null!==a){let s;if(Array.isArray(a)){s=[];for(let o=0,l=a.length;o<l;o++)a[o].isDataTexture?s.push(ys(a[o].image)):s.push(ys(a[o]))}else s=ys(a);i.url=s}return t||(e.images[this.uuid]=i),i}};function ys(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?qi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cl=0,ce=class extends ln{constructor(e=ce.DEFAULT_IMAGE,t=ce.DEFAULT_MAPPING,i=Pe,a=Pe,s=be,o=is,l=Re,u=bn,h=ce.DEFAULT_ANISOTROPY,c=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=_i(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Pe:e.x=e.x<0?0:1;break;case Xs:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Pe:e.y=e.y<0?0:1;break;case Xs:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}};ce.DEFAULT_IMAGE=null,ce.DEFAULT_MAPPING=Xa,ce.DEFAULT_ANISOTROPY=1;var qt=class{constructor(e=0,t=0,i=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s,o=e.elements,l=o[0],u=o[4],h=o[8],c=o[1],d=o[5],p=o[9],f=o[2],m=o[6],g=o[10];if(.01>Math.abs(u-c)&&.01>Math.abs(h-f)&&.01>Math.abs(p-m)){if(.1>Math.abs(u+c)&&.1>Math.abs(h+f)&&.1>Math.abs(p+m)&&.1>Math.abs(l+d+g-3))return this.set(1,0,0,0),this;t=Math.PI;let $=(l+1)/2,v=(d+1)/2,x=(g+1)/2,y=(u+c)/4,b=(h+f)/4,S=(p+m)/4;return $>v&&$>x?$<.01?(i=0,a=.707106781,s=.707106781):(a=y/(i=Math.sqrt($)),s=b/i):v>x?v<.01?(i=.707106781,a=0,s=.707106781):(i=y/(a=Math.sqrt(v)),s=S/a):x<.01?(i=.707106781,a=.707106781,s=0):(i=b/(s=Math.sqrt(x)),a=S/s),this.set(i,a,s,t),this}let _=Math.sqrt((m-p)*(m-p)+(h-f)*(h-f)+(c-u)*(c-u));return .001>Math.abs(_)&&(_=1),this.x=(m-p)/_,this.y=(h-f)/_,this.z=(c-u)/_,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ze=class extends ln{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);let a={width:e,height:t,depth:1};this.texture=new ce(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:be,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends ce{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=he,this.minFilter=he,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Js=class extends ce{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=he,this.minFilter=he,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ze=class{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,l){let u=i[a+0],h=i[a+1],c=i[a+2],d=i[a+3],p=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(0===l){e[t+0]=u,e[t+1]=h,e[t+2]=c,e[t+3]=d;return}if(1===l){e[t+0]=p,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(d!==g||u!==p||h!==f||c!==m){let $=1-l,v=u*p+h*f+c*m+d*g,x=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){let b=Math.sqrt(y),S=Math.atan2(b,v*x);$=Math.sin($*S)/b,l=Math.sin(l*S)/b}let _=l*x;if(u=u*$+p*_,h=h*$+f*_,c=c*$+m*_,d=d*$+g*_,$===1-l){let M=1/Math.sqrt(u*u+h*h+c*c+d*d);u*=M,h*=M,c*=M,d*=M}}e[t]=u,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,s,o){let l=i[a],u=i[a+1],h=i[a+2],c=i[a+3],d=s[o],p=s[o+1],f=s[o+2],m=s[o+3];return e[t]=l*m+c*d+u*f-h*p,e[t+1]=u*m+c*p+h*d-l*f,e[t+2]=h*m+c*f+l*p-u*d,e[t+3]=c*m-l*d-u*p-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,a=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(i/2),c=l(a/2),d=l(s/2),p=u(i/2),f=u(a/2),m=u(s/2);switch(o){case"XYZ":this._x=p*c*d+h*f*m,this._y=h*f*d-p*c*m,this._z=h*c*m+p*f*d,this._w=h*c*d-p*f*m;break;case"YXZ":this._x=p*c*d+h*f*m,this._y=h*f*d-p*c*m,this._z=h*c*m-p*f*d,this._w=h*c*d+p*f*m;break;case"ZXY":this._x=p*c*d-h*f*m,this._y=h*f*d+p*c*m,this._z=h*c*m+p*f*d,this._w=h*c*d-p*f*m;break;case"ZYX":this._x=p*c*d-h*f*m,this._y=h*f*d+p*c*m,this._z=h*c*m-p*f*d,this._w=h*c*d+p*f*m;break;case"YZX":this._x=p*c*d+h*f*m,this._y=h*f*d+p*c*m,this._z=h*c*m-p*f*d,this._w=h*c*d-p*f*m;break;case"XZY":this._x=p*c*d-h*f*m,this._y=h*f*d-p*c*m,this._z=h*c*m+p*f*d,this._w=h*c*d+p*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],l=t[5],u=t[9],h=t[2],c=t[6],d=t[10],p=i+l+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(c-u)*f,this._y=(s-h)*f,this._z=(o-a)*f}else if(i>l&&i>d){let m=2*Math.sqrt(1+i-l-d);this._w=(c-u)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(s+h)/m}else if(l>d){let g=2*Math.sqrt(1+l-i-d);this._w=(s-h)/g,this._x=(a+o)/g,this._y=.25*g,this._z=(u+c)/g}else{let $=2*Math.sqrt(1+d-i-l);this._w=(o-a)/$,this._x=(s+h)/$,this._y=(u+c)/$,this._z=.25*$}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);return 0===i||this.slerp(e,Math.min(1,t/i)),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,a=e._y,s=e._z,o=e._w,l=t._x,u=t._y,h=t._z,c=t._w;return this._x=i*c+o*l+a*h-s*u,this._y=a*c+o*u+s*l-i*h,this._z=s*c+o*h+i*u-a*l,this._w=o*c-i*l-a*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,a=this._y,s=this._z,o=this._w,l=o*e._w+i*e._x+a*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;let u=1-l*l;if(u<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*a+t*this._y,this._z=h*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(u),d=Math.atan2(c,l),p=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=a*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ua.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,l=e.z,u=e.w,h=u*t+o*a-l*i,c=u*i+l*t-s*a,d=u*a+s*i-o*t,p=-s*t-o*i-l*a;return this.x=h*u+-(p*s)+-(c*l)- -(d*o),this.y=c*u+-(p*o)+-(d*s)- -(h*l),this.z=d*u+-(p*l)+-(h*o)- -(c*s),this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,a=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=a*u-s*l,this.y=s*o-i*u,this.z=i*l-a*o,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(xe(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-Cr(e,2));return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ms=new D,ua=new ze,Sn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,a=1/0,s=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.length;u<h;u+=3){let c=e[u],d=e[u+1],p=e[u+2];c<t&&(t=c),d<i&&(i=d),p<a&&(a=p),c>s&&(s=c),d>o&&(o=d),p>l&&(l=p)}return this.min.set(t,i,a),this.max.set(s,o,l),this}setFromBufferAttribute(e){let t=1/0,i=1/0,a=1/0,s=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.count;u<h;u++){let c=e.getX(u),d=e.getY(u),p=e.getZ(u);c<t&&(t=c),d<i&&(i=d),p<a&&(a=p),c>s&&(s=c),d>o&&(o=d),p>l&&(l=p)}return this.min.set(t,i,a),this.max.set(s,o,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(void 0!==i){if(t&&null!=i.attributes&&void 0!==i.attributes.position){let a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)fn.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else null===i.boundingBox&&i.computeBoundingBox(),bs.copy(i.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs)}let l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),bi.subVectors(this.max,ai),Ln.subVectors(e.a,ai),In.subVectors(e.b,ai),Dn.subVectors(e.c,ai),Ke.subVectors(In,Ln),je.subVectors(Dn,In),pn.subVectors(Ln,Dn);let t=[0,-Ke.z,Ke.y,0,-je.z,je.y,0,-pn.z,pn.y,Ke.z,0,-Ke.x,je.z,0,-je.x,pn.z,0,-pn.x,-Ke.y,Ke.x,0,-je.y,je.x,0,-pn.y,pn.x,0];return!!(ws(t,Ln,In,Dn,bi)&&ws(t=[1,0,0,0,1,0,0,0,1],Ln,In,Dn,bi))&&(wi.crossVectors(Ke,je),ws(t=[wi.x,wi.y,wi.z],Ln,In,Dn,bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(fn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ke)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ke=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,bs=new Sn,Ln=new D,In=new D,Dn=new D,Ke=new D,je=new D,pn=new D,ai=new D,bi=new D,wi=new D,mn=new D;function ws(e,t,i,a,s){for(let o=0,l=e.length-3;o<=l;o+=3){mn.fromArray(e,o);let u=s.x*Math.abs(mn.x)+s.y*Math.abs(mn.y)+s.z*Math.abs(mn.z),h=t.dot(mn),c=i.dot(mn),d=a.dot(mn);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>u)return!1}return!0}var hl=new Sn,oi=new D,Ss=new D,mi=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):hl.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);let t=oi.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(oi,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Ss)),this.expandByPoint(oi.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ve=new D,Ts=new D,Si=new D,Qe=new D,As=new D,Ti=new D,Es=new D,$s=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ve)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ve.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ve.copy(this.direction).multiplyScalar(t).add(this.origin),Ve.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ts.copy(e).add(t).multiplyScalar(.5),Si.copy(t).sub(e).normalize(),Qe.copy(this.origin).sub(Ts);let s=.5*e.distanceTo(t),o=-this.direction.dot(Si),l=Qe.dot(this.direction),u=-Qe.dot(Si),h=Qe.lengthSq(),c=Math.abs(1-o*o),d,p,f,m;if(c>0){if(d=o*u-l,p=o*l-u,m=s*c,d>=0){if(p>=-m){if(p<=m){let g=1/c;d*=g,p*=g,f=d*(d+o*p+2*l)+p*(o*d+p+2*u)+h}else f=-(d=Math.max(0,-(o*(p=s)+l)))*d+p*(p+2*u)+h}else f=-(d=Math.max(0,-(o*(p=-s)+l)))*d+p*(p+2*u)+h}else p<=-m?(p=(d=Math.max(0,-(-o*s+l)))>0?-s:Math.min(Math.max(-s,-u),s),f=-d*d+p*(p+2*u)+h):p<=m?(d=0,f=(p=Math.min(Math.max(-s,-u),s))*(p+2*u)+h):(p=(d=Math.max(0,-(o*s+l)))>0?s:Math.min(Math.max(-s,-u),s),f=-d*d+p*(p+2*u)+h)}else p=o>0?-s:s,f=-(d=Math.max(0,-(o*p+l)))*d+p*(p+2*u)+h;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),a&&a.copy(Si).multiplyScalar(p).add(Ts),f}intersectSphere(e,t){Ve.subVectors(e.center,this.origin);let i=Ve.dot(this.direction),a=Ve.dot(Ve)-i*i,s=e.radius*e.radius;if(a>s)return null;let o=Math.sqrt(s-a),l=i-o,u=i+o;return l<0&&u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,l,u,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(i=(e.min.x-p.x)*h,a=(e.max.x-p.x)*h):(i=(e.max.x-p.x)*h,a=(e.min.x-p.x)*h),c>=0?(s=(e.min.y-p.y)*c,o=(e.max.y-p.y)*c):(s=(e.max.y-p.y)*c,o=(e.min.y-p.y)*c),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),d>=0?(l=(e.min.z-p.z)*d,u=(e.max.z-p.z)*d):(l=(e.max.z-p.z)*d,u=(e.min.z-p.z)*d),i>u||l>a)||((l>i||i!=i)&&(i=l),(u<a||a!=a)&&(a=u),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return null!==this.intersectBox(e,Ve)}intersectTriangle(e,t,i,a,s){As.subVectors(t,e),Ti.subVectors(i,e),Es.crossVectors(As,Ti);let o=this.direction.dot(Es),l;if(o>0){if(a)return null;l=1}else{if(!(o<0))return null;l=-1,o=-o}Qe.subVectors(this.origin,e);let u=l*this.direction.dot(Ti.crossVectors(Qe,Ti));if(u<0)return null;let h=l*this.direction.dot(As.cross(Qe));if(h<0||u+h>o)return null;let c=-l*Qe.dot(Es);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class{constructor(){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,a,s,o,l,u,h,c,d,p,f,m,g,$){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=a,v[1]=s,v[5]=o,v[9]=l,v[13]=u,v[2]=h,v[6]=c,v[10]=d,v[14]=p,v[3]=f,v[7]=m,v[11]=g,v[15]=$,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,a=1/Nn.setFromMatrixColumn(e,0).length(),s=1/Nn.setFromMatrixColumn(e,1).length(),o=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),u=Math.cos(a),h=Math.sin(a),c=Math.cos(s),d=Math.sin(s);if("XYZ"===e.order){let p=o*c,f=o*d,m=l*c,g=l*d;t[0]=u*c,t[4]=-u*d,t[8]=h,t[1]=f+m*h,t[5]=p-g*h,t[9]=-l*u,t[2]=g-p*h,t[6]=m+f*h,t[10]=o*u}else if("YXZ"===e.order){let $=u*c,v=u*d,x=h*c,y=h*d;t[0]=$+y*l,t[4]=x*l-v,t[8]=o*h,t[1]=o*d,t[5]=o*c,t[9]=-l,t[2]=v*l-x,t[6]=y+$*l,t[10]=o*u}else if("ZXY"===e.order){let b=u*c,S=u*d,_=h*c,M=h*d;t[0]=b-M*l,t[4]=-o*d,t[8]=_+S*l,t[1]=S+_*l,t[5]=o*c,t[9]=M-b*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if("ZYX"===e.order){let w=o*c,T=o*d,E=l*c,C=l*d;t[0]=u*c,t[4]=E*h-T,t[8]=w*h+C,t[1]=u*d,t[5]=C*h+w,t[9]=T*h-E,t[2]=-h,t[6]=l*u,t[10]=o*u}else if("YZX"===e.order){let A=o*u,L=o*h,P=l*u,R=l*h;t[0]=u*c,t[4]=R-A*d,t[8]=P*d+L,t[1]=d,t[5]=o*c,t[9]=-l*c,t[2]=-h*c,t[6]=L*d+P,t[10]=A-R*d}else if("XZY"===e.order){let I=o*u,N=o*h,z=l*u,U=l*h;t[0]=u*c,t[4]=-d,t[8]=h*c,t[1]=I*d+U,t[5]=o*c,t[9]=N*d-z,t[2]=z*d-N,t[6]=l*c,t[10]=U*d+I}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ul,e,dl)}lookAt(e,t,i){let a=this.elements;return me.subVectors(e,t),0===me.lengthSq()&&(me.z=1),me.normalize(),tn.crossVectors(i,me),0===tn.lengthSq()&&(1===Math.abs(i.z)?me.x+=1e-4:me.z+=1e-4,me.normalize(),tn.crossVectors(i,me)),tn.normalize(),Ai.crossVectors(me,tn),a[0]=tn.x,a[4]=Ai.x,a[8]=me.x,a[1]=tn.y,a[5]=Ai.y,a[9]=me.y,a[2]=tn.z,a[6]=Ai.z,a[10]=me.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,a=t.elements,s=this.elements,o=i[0],l=i[4],u=i[8],h=i[12],c=i[1],d=i[5],p=i[9],f=i[13],m=i[2],g=i[6],$=i[10],v=i[14],x=i[3],y=i[7],b=i[11],S=i[15],_=a[0],M=a[4],w=a[8],T=a[12],E=a[1],C=a[5],A=a[9],L=a[13],P=a[2],R=a[6],I=a[10],N=a[14],z=a[3],U=a[7],O=a[11],F=a[15];return s[0]=o*_+l*E+u*P+h*z,s[4]=o*M+l*C+u*R+h*U,s[8]=o*w+l*A+u*I+h*O,s[12]=o*T+l*L+u*N+h*F,s[1]=c*_+d*E+p*P+f*z,s[5]=c*M+d*C+p*R+f*U,s[9]=c*w+d*A+p*I+f*O,s[13]=c*T+d*L+p*N+f*F,s[2]=m*_+g*E+$*P+v*z,s[6]=m*M+g*C+$*R+v*U,s[10]=m*w+g*A+$*I+v*O,s[14]=m*T+g*L+$*N+v*F,s[3]=x*_+y*E+b*P+S*z,s[7]=x*M+y*C+b*R+S*U,s[11]=x*w+y*A+b*I+S*O,s[15]=x*T+y*L+b*N+S*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],l=e[5],u=e[9],h=e[13],c=e[2],d=e[6],p=e[10],f=e[14],m=e[3],g=e[7],$;return m*(+s*u*d-a*h*d-s*l*p+i*h*p+a*l*f-i*u*f)+g*(+t*u*f-t*h*p+s*o*p-a*o*f+a*h*c-s*u*c)+e[11]*(+t*h*d-t*l*f-s*o*d+i*o*f+s*l*c-i*h*c)+e[15]*(-a*l*c-t*u*d+t*l*p+a*o*d-i*o*p+i*u*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=e[9],p=e[10],f=e[11],m=e[12],g=e[13],$=e[14],v=e[15],x=d*$*h-g*p*h+g*u*f-l*$*f-d*u*v+l*p*v,y=m*p*h-c*$*h-m*u*f+o*$*f+c*u*v-o*p*v,b=c*g*h-m*d*h+m*l*f-o*g*f-c*l*v+o*d*v,S=m*d*u-c*g*u-m*l*p+o*g*p+c*l*$-o*d*$,_=t*x+i*y+a*b+s*S;if(0===_)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=x*M,e[1]=(g*p*s-d*$*s-g*a*f+i*$*f+d*a*v-i*p*v)*M,e[2]=(l*$*s-g*u*s+g*a*h-i*$*h-l*a*v+i*u*v)*M,e[3]=(d*u*s-l*p*s-d*a*h+i*p*h+l*a*f-i*u*f)*M,e[4]=y*M,e[5]=(c*$*s-m*p*s+m*a*f-t*$*f-c*a*v+t*p*v)*M,e[6]=(m*u*s-o*$*s-m*a*h+t*$*h+o*a*v-t*u*v)*M,e[7]=(o*p*s-c*u*s+c*a*h-t*p*h-o*a*f+t*u*f)*M,e[8]=b*M,e[9]=(m*d*s-c*g*s-m*i*f+t*g*f+c*i*v-t*d*v)*M,e[10]=(o*g*s-m*l*s+m*i*h-t*g*h-o*i*v+t*l*v)*M,e[11]=(c*l*s-o*d*s-c*i*h+t*d*h+o*i*f-t*l*f)*M,e[12]=S*M,e[13]=(c*g*a-m*d*a+m*i*p-t*g*p-c*i*$+t*d*$)*M,e[14]=(m*l*a-o*g*a-m*i*u+t*g*u+o*i*$-t*l*$)*M,e[15]=(o*d*a-c*l*a+c*i*u-t*d*u-o*i*p+t*l*p)*M,this}scale(e){let t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i;return Math.sqrt(Math.max(t,e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,l=e.y,u=e.z,h=s*o,c=s*l;return this.set(h*o+i,h*l-a*u,h*u+a*l,0,h*l+a*u,c*l+i,c*u-a*o,0,h*u-a*l,c*u+a*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){let a=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,h=s+s,c=o+o,d=l+l,p=s*h,f=s*c,m=s*d,g=o*c,$=o*d,v=l*d,x=u*h,y=u*c,b=u*d,S=i.x,_=i.y,M=i.z;return a[0]=(1-(g+v))*S,a[1]=(f+b)*S,a[2]=(m-y)*S,a[3]=0,a[4]=(f-b)*_,a[5]=(1-(p+v))*_,a[6]=($+x)*_,a[7]=0,a[8]=(m+y)*M,a[9]=($-x)*M,a[10]=(1-(p+g))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){let a=this.elements,s=Nn.set(a[0],a[1],a[2]).length(),o=Nn.set(a[4],a[5],a[6]).length(),l=Nn.set(a[8],a[9],a[10]).length();0>this.determinant()&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Ee.copy(this);let u=1/s,h=1/o,c=1/l;return Ee.elements[0]*=u,Ee.elements[1]*=u,Ee.elements[2]*=u,Ee.elements[4]*=h,Ee.elements[5]*=h,Ee.elements[6]*=h,Ee.elements[8]*=c,Ee.elements[9]*=c,Ee.elements[10]*=c,t.setFromRotationMatrix(Ee),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,a,s,o){let l=this.elements;return l[0]=2*s/(t-e),l[4]=0,l[8]=(t+e)/(t-e),l[12]=0,l[1]=0,l[5]=2*s/(i-a),l[9]=(i+a)/(i-a),l[13]=0,l[2]=0,l[6]=0,l[10]=-(o+s)/(o-s),l[14]=-2*o*s/(o-s),l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,o){let l=this.elements,u=1/(t-e),h=1/(i-a),c=1/(o-s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-((t+e)*u),l[1]=0,l[5]=2*h,l[9]=0,l[13]=-((i+a)*h),l[2]=0,l[6]=0,l[10]=-2*c,l[14]=-((o+s)*c),l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Nn=new D,Ee=new Xt,ul=new D(0,0,0),dl=new D(1,1,1),tn=new D,Ai=new D,me=new D,da=new Xt,fa=new ze,Tn=class{constructor(e=0,t=0,i=0,a=Tn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let a=e.elements,s=a[0],o=a[4],l=a[8],u=a[1],h=a[5],c=a[9],d=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(xe(l,-1,1)),.9999999>Math.abs(l)?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(c,-1,1)),.9999999>Math.abs(c)?(this._y=Math.atan2(l,f),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(p,-1,1)),.9999999>Math.abs(p)?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),.9999999>Math.abs(d)?(this._x=Math.atan2(p,f),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(xe(u,-1,1)),.9999999>Math.abs(u)?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Tn.DefaultOrder="XYZ",Tn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},fl=0,pa=new D,Fn=new ze,He=new Xt,Ei=new D,li=new D,pl=new D,ml=new ze,ma=new D(1,0,0),ga=new D(0,1,0),xa=new D(0,0,1),gl={type:"added"},_a={type:"removed"},ue=class extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DefaultUp.clone();let e=new D,t=new Tn,i=new ze,a=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new le}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ue.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ue.DefaultMatrixWorldAutoUpdate,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(He.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ei.copy(e):Ei.set(e,t,i);let a=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(li,Ei,this.up):He.lookAt(Ei,li,this.up),this.quaternion.setFromRotationMatrix(He),a&&(He.extractRotation(a.matrixWorld),Fn.setFromRotationMatrix(He),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let i=this.children.indexOf(e);return -1!==i&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_a)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(_a)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),He.multiply(e.parent.matrixWorld)),e.applyMatrix4(He),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){let s=this.children[i].getObjectByProperty(e,t);if(void 0!==s)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,pl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,ml,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,a=t.length;i<a;i++){let s=t[i];(!0===s.matrixWorldAutoUpdate||!0===e)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let a=this.children;for(let s=0,o=a.length;s<o;s++){let l=a[s];!0===l.matrixWorldAutoUpdate&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let a={};function s(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(a.uuid=this.uuid,a.type=this.type,""!==this.name&&(a.name=this.name),!0===this.castShadow&&(a.castShadow=!0),!0===this.receiveShadow&&(a.receiveShadow=!0),!1===this.visible&&(a.visible=!1),!1===this.frustumCulled&&(a.frustumCulled=!1),0!==this.renderOrder&&(a.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(a.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(void 0!==o&&void 0!==o.shapes){let l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),void 0!==this.material){if(Array.isArray(this.material)){let d=[];for(let p=0,f=this.material.length;p<f;p++)d.push(s(e.materials,this.material[p]));a.material=d}else a.material=s(e.materials,this.material)}if(this.children.length>0){a.children=[];for(let m=0;m<this.children.length;m++)a.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let g=0;g<this.animations.length;g++){let $=this.animations[g];a.animations.push(s(e.animations,$))}}if(t){let v=T(e.geometries),x=T(e.materials),y=T(e.textures),b=T(e.images),S=T(e.shapes),_=T(e.skeletons),M=T(e.animations),w=T(e.nodes);v.length>0&&(i.geometries=v),x.length>0&&(i.materials=x),y.length>0&&(i.textures=y),b.length>0&&(i.images=b),S.length>0&&(i.shapes=S),_.length>0&&(i.skeletons=_),M.length>0&&(i.animations=M),w.length>0&&(i.nodes=w)}return i.object=a,i;function T(e){let t=[];for(let i in e){let a=e[i];delete a.metadata,t.push(a)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let i=0;i<e.children.length;i++){let a=e.children[i];this.add(a.clone())}return this}};ue.DefaultUp=new D(0,1,0),ue.DefaultMatrixAutoUpdate=!0,ue.DefaultMatrixWorldAutoUpdate=!0;var Ce=new D,Ge=new D,Cs=new D,We=new D,zn=new D,On=new D,va=new D,Ps=new D,Rs=new D,Ls=new D,Le=class{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ce.subVectors(e,t),a.cross(Ce);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Ce.subVectors(a,t),Ge.subVectors(i,t),Cs.subVectors(e,t);let o=Ce.dot(Ce),l=Ce.dot(Ge),u=Ce.dot(Cs),h=Ge.dot(Ge),c=Ge.dot(Cs),d=o*h-l*l;if(0===d)return s.set(-2,-1,-1);let p=1/d,f=(h*u-l*c)*p,m=(o*c-l*u)*p;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,We),We.x>=0&&We.y>=0&&We.x+We.y<=1}static getUV(e,t,i,a,s,o,l,u){return this.getBarycoord(e,t,i,a,We),u.set(0,0),u.addScaledVector(s,We.x),u.addScaledVector(o,We.y),u.addScaledVector(l,We.z),u}static isFrontFacing(e,t,i,a){return Ce.subVectors(i,t),Ge.subVectors(e,t),0>Ce.cross(Ge).dot(a)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ce.subVectors(this.c,this.b),Ge.subVectors(this.a,this.b),.5*Ce.cross(Ge).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Le.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Le.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return Le.getUV(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return Le.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Le.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,a=this.b,s=this.c,o,l;zn.subVectors(a,i),On.subVectors(s,i),Ps.subVectors(e,i);let u=zn.dot(Ps),h=On.dot(Ps);if(u<=0&&h<=0)return t.copy(i);Rs.subVectors(e,a);let c=zn.dot(Rs),d=On.dot(Rs);if(c>=0&&d<=c)return t.copy(a);let p=u*d-c*h;if(p<=0&&u>=0&&c<=0)return o=u/(u-c),t.copy(i).addScaledVector(zn,o);Ls.subVectors(e,s);let f=zn.dot(Ls),m=On.dot(Ls);if(m>=0&&f<=m)return t.copy(s);let g=f*h-u*m;if(g<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(i).addScaledVector(On,l);let $=c*m-f*d;if($<=0&&d-c>=0&&f-m>=0)return va.subVectors(s,a),l=(d-c)/(d-c+(f-m)),t.copy(a).addScaledVector(va,l);let v=1/($+g+p);return o=g*v,l=p*v,t.copy(i).addScaledVector(zn,o).addScaledVector(On,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xl=0,ti=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Yn,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let a=this[t];if(void 0===a){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function a(e){let t=[];for(let i in e){let a=e[i];delete a.metadata,t.push(a)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),t){let s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let a=t.length;i=Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}},Ji=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ht=new D,Ci=new Nt,Se=class{constructor(e,t,i){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=!0===i,this.usage=oa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)Ci.fromBufferAttribute(this,t),Ci.applyMatrix3(e),this.setXY(t,Ci.x,Ci.y);else if(3===this.itemSize)for(let a=0,s=this.count;a<s;a++)Ht.fromBufferAttribute(this,a),Ht.applyMatrix3(e),this.setXYZ(a,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=pe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=pe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=pe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),a=pe(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=pe(t,this.array),i=pe(i,this.array),a=pe(a,this.array),s=pe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},$i=class extends Se{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Ki=class extends Se{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ye=class extends Se{constructor(e,t,i){super(new Float32Array(e),t,i)}},_l=0,Me=new Xt,Is=new ue,Un=new D,ge=new Sn,ci=new Sn,jt=new D,Je=class extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Za(e)?Ki:$i)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let a=new le().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return void 0!==s&&(s.transformDirection(e),s.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return Me.makeRotationFromQuaternion(e),this.applyMatrix4(Me),this}rotateX(e){return Me.makeRotationX(e),this.applyMatrix4(Me),this}rotateY(e){return Me.makeRotationY(e),this.applyMatrix4(Me),this}rotateZ(e){return Me.makeRotationZ(e),this.applyMatrix4(Me),this}translate(e,t,i){return Me.makeTranslation(e,t,i),this.applyMatrix4(Me),this}scale(e,t,i){return Me.makeScale(e,t,i),this.applyMatrix4(Me),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){let t=[];for(let i=0,a=e.length;i<a;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let s=t[i];ge.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,ge.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,ge.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(ge.min),this.boundingBox.expandByPoint(ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ge.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(ge.min,ci.min),ge.expandByPoint(jt),jt.addVectors(ge.max,ci.max),ge.expandByPoint(jt)):(ge.expandByPoint(ci.min),ge.expandByPoint(ci.max))}ge.getCenter(i);let l=0;for(let u=0,h=e.count;u<h;u++)jt.fromBufferAttribute(e,u),l=Math.max(l,i.distanceToSquared(jt));if(t)for(let c=0,d=t.length;c<d;c++){let p=t[c],f=this.morphTargetsRelative;for(let m=0,g=p.count;m<g;m++)jt.fromBufferAttribute(p,m),f&&(Un.fromBufferAttribute(e,m),jt.add(Un)),l=Math.max(l,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,a=t.position.array,s=t.normal.array,o=t.uv.array,l=a.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new Se(new Float32Array(4*l),4));let u=this.getAttribute("tangent").array,h=[],c=[];for(let d=0;d<l;d++)h[d]=new D,c[d]=new D;let p=new D,f=new D,m=new D,g=new Nt,$=new Nt,v=new Nt,x=new D,y=new D;function b(e,t,i){p.fromArray(a,3*e),f.fromArray(a,3*t),m.fromArray(a,3*i),g.fromArray(o,2*e),$.fromArray(o,2*t),v.fromArray(o,2*i),f.sub(p),m.sub(p),$.sub(g),v.sub(g);let s=1/($.x*v.y-v.x*$.y);isFinite(s)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(m,-$.y).multiplyScalar(s),y.copy(m).multiplyScalar($.x).addScaledVector(f,-v.x).multiplyScalar(s),h[e].add(x),h[t].add(x),h[i].add(x),c[e].add(y),c[t].add(y),c[i].add(y))}let S=this.groups;0===S.length&&(S=[{start:0,count:i.length}]);for(let _=0,M=S.length;_<M;++_){let w=S[_],T=w.start,E=w.count;for(let C=T,A=T+E;C<A;C+=3)b(i[C+0],i[C+1],i[C+2])}let L=new D,P=new D,R=new D,I=new D;function N(e){R.fromArray(s,3*e),I.copy(R);let t=h[e];L.copy(t),L.sub(R.multiplyScalar(R.dot(t))).normalize(),P.crossVectors(I,t);let i=0>P.dot(c[e])?-1:1;u[4*e]=L.x,u[4*e+1]=L.y,u[4*e+2]=L.z,u[4*e+3]=i}for(let z=0,U=S.length;z<U;++z){let O=S[z],F=O.start,B=O.count;for(let V=F,H=F+B;V<H;V+=3)N(i[V+0]),N(i[V+1]),N(i[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new Se(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let a=0,s=i.count;a<s;a++)i.setXYZ(a,0,0,0);let o=new D,l=new D,u=new D,h=new D,c=new D,d=new D,p=new D,f=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){let $=e.getX(m+0),v=e.getX(m+1),x=e.getX(m+2);o.fromBufferAttribute(t,$),l.fromBufferAttribute(t,v),u.fromBufferAttribute(t,x),p.subVectors(u,l),f.subVectors(o,l),p.cross(f),h.fromBufferAttribute(i,$),c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,x),h.add(p),c.add(p),d.add(p),i.setXYZ($,h.x,h.y,h.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let y=0,b=t.count;y<b;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),p.subVectors(u,l),f.subVectors(o,l),p.cross(f),i.setXYZ(y+0,p.x,p.y,p.z),i.setXYZ(y+1,p.x,p.y,p.z),i.setXYZ(y+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(e,t){let i=e.array,a=e.itemSize,s=e.normalized,o=new i.constructor(t.length*a),l=0,u=0;for(let h=0,c=t.length;h<c;h++){l=e.isInterleavedBufferAttribute?t[h]*e.data.stride+e.offset:t[h]*a;for(let d=0;d<a;d++)o[u++]=i[l++]}return new Se(o,a,s)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Je,i=this.index.array,a=this.attributes;for(let s in a){let o=e(a[s],i);t.setAttribute(s,o)}let l=this.morphAttributes;for(let u in l){let h=[],c=l[u];for(let d=0,p=c.length;d<p;d++){let f=e(c[d],i);h.push(f)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;let m=this.groups;for(let g=0,$=m.length;g<$;g++){let v=m[g];t.addGroup(v.start,v.count,v.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let a=this.index;null!==a&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let s=this.attributes;for(let o in s){let l=s[o];e.data.attributes[o]=l.toJSON(e.data)}let u={},h=!1;for(let c in this.morphAttributes){let d=this.morphAttributes[c],p=[];for(let f=0,m=d.length;f<m;f++){let g=d[f];p.push(g.toJSON(e.data))}p.length>0&&(u[c]=p,h=!0)}h&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);let $=this.groups;$.length>0&&(e.data.groups=JSON.parse(JSON.stringify($)));let v=this.boundingSphere;return null!==v&&(e.data.boundingSphere={center:v.center.toArray(),radius:v.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone(t));let a=e.attributes;for(let s in a){let o=a[s];this.setAttribute(s,o.clone(t))}let l=e.morphAttributes;for(let u in l){let h=[],c=l[u];for(let d=0,p=c.length;d<p;d++)h.push(c[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let f=e.groups;for(let m=0,g=f.length;m<g;m++){let $=f[m];this.addGroup($.start,$.count,$.materialIndex)}let v=e.boundingBox;null!==v&&(this.boundingBox=v.clone());let x=e.boundingSphere;return null!==x&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,void 0!==e.parameters&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},ya=new Xt,Bn=new $s,Ds=new mi,en=new D,nn=new D,sn=new D,Ns=new D,Fs=new D,zs=new D,Pi=new D,Ri=new D,Li=new D,Ii=new Nt,Di=new Nt,Ni=new Nt,Os=new D,Fi=new D,Fe=class extends ue{constructor(e=new Je,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}raycast(e,t){let i=this.geometry,a=this.material,s=this.matrixWorld;if(void 0===a||(null===i.boundingSphere&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),!1===e.ray.intersectsSphere(Ds))||(ya.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(ya),null!==i.boundingBox&&!1===Bn.intersectsBox(i.boundingBox)))return;let o,l=i.index,u=i.attributes.position,h=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,p=i.attributes.uv2,f=i.groups,m=i.drawRange;if(null!==l){if(Array.isArray(a))for(let g=0,$=f.length;g<$;g++){let v=f[g],x=a[v.materialIndex],y=Math.max(v.start,m.start),b=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=y,_=b;S<_;S+=3){let M=l.getX(S),w;(o=zi(this,x,e,Bn,u,h,c,d,p,M,l.getX(S+1),l.getX(S+2)))&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{let T=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let C=T,A=E;C<A;C+=3){let L=l.getX(C),P;(o=zi(this,a,e,Bn,u,h,c,d,p,L,l.getX(C+1),l.getX(C+2)))&&(o.faceIndex=Math.floor(C/3),t.push(o))}}}else if(void 0!==u){if(Array.isArray(a))for(let R=0,I=f.length;R<I;R++){let N=f[R],z=a[N.materialIndex],U=Math.max(N.start,m.start),O=Math.min(u.count,Math.min(N.start+N.count,m.start+m.count));for(let F=U,B=O;F<B;F+=3){let V=F,H;(o=zi(this,z,e,Bn,u,h,c,d,p,V,F+1,F+2))&&(o.faceIndex=Math.floor(F/3),o.face.materialIndex=N.materialIndex,t.push(o))}}else{let G=Math.max(0,m.start),k=Math.min(u.count,m.start+m.count);for(let W=G,j=k;W<j;W+=3){let q=W,X;(o=zi(this,a,e,Bn,u,h,c,d,p,q,W+1,W+2))&&(o.faceIndex=Math.floor(W/3),t.push(o))}}}}};function vl(e,t,i,a,s,o,l,u){let h;if(null===(h=t.side===we?a.intersectTriangle(l,o,s,!0,u):a.intersectTriangle(s,o,l,t.side!==an,u)))return null;Fi.copy(u),Fi.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Fi);return c<i.near||c>i.far?null:{distance:c,point:Fi.clone(),object:e}}function zi(e,t,i,a,s,o,l,u,h,c,d,p){en.fromBufferAttribute(s,c),nn.fromBufferAttribute(s,d),sn.fromBufferAttribute(s,p);let f=e.morphTargetInfluences;if(o&&f){Pi.set(0,0,0),Ri.set(0,0,0),Li.set(0,0,0);for(let m=0,g=o.length;m<g;m++){let $=f[m],v=o[m];0!==$&&(Ns.fromBufferAttribute(v,c),Fs.fromBufferAttribute(v,d),zs.fromBufferAttribute(v,p),l?(Pi.addScaledVector(Ns,$),Ri.addScaledVector(Fs,$),Li.addScaledVector(zs,$)):(Pi.addScaledVector(Ns.sub(en),$),Ri.addScaledVector(Fs.sub(nn),$),Li.addScaledVector(zs.sub(sn),$)))}en.add(Pi),nn.add(Ri),sn.add(Li)}e.isSkinnedMesh&&(e.boneTransform(c,en),e.boneTransform(d,nn),e.boneTransform(p,sn));let x=vl(e,t,i,a,en,nn,sn,Os);if(x){u&&(Ii.fromBufferAttribute(u,c),Di.fromBufferAttribute(u,d),Ni.fromBufferAttribute(u,p),x.uv=Le.getUV(Os,en,nn,sn,Ii,Di,Ni,new Nt)),h&&(Ii.fromBufferAttribute(h,c),Di.fromBufferAttribute(h,d),Ni.fromBufferAttribute(h,p),x.uv2=Le.getUV(Os,en,nn,sn,Ii,Di,Ni,new Nt));let y={a:c,b:d,c:p,normal:new D,materialIndex:0};Le.getNormal(en,nn,sn,y.normal),x.face=y}return x}var An=class extends Je{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};let l=this;a=Math.floor(a),s=Math.floor(s);let u=[],h=[],c=[],d=[],p=0,f=0;function m(e,t,i,a,s,o,m,g,$,v,x){let y=o/$,b=m/v,S=o/2,_=m/2,M=g/2,w=$+1,T=v+1,E=0,C=0,A=new D;for(let L=0;L<T;L++){let P=L*b-_;for(let R=0;R<w;R++){let I=R*y-S;A[e]=I*a,A[t]=P*s,A[i]=M,h.push(A.x,A.y,A.z),A[e]=0,A[t]=0,A[i]=g>0?1:-1,c.push(A.x,A.y,A.z),d.push(R/$),d.push(1-L/v),E+=1}}for(let N=0;N<v;N++)for(let z=0;z<$;z++){let U=p+z+w*N,O=p+z+w*(N+1),F=p+(z+1)+w*(N+1),B=p+(z+1)+w*N;u.push(U,O,B),u.push(O,F,B),C+=6}l.addGroup(f,C,x),f+=C,p+=E}m("z","y","x",-1,-1,i,t,e,o=Math.floor(o),s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,a,o,2),m("x","z","y",1,-1,e,i,-t,a,o,3),m("x","y","z",1,-1,e,t,i,a,s,4),m("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(d,2))}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ei(e){let t={};for(let i in e)for(let a in t[i]={},e[i]){let s=e[i][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[i][a]=s.clone():Array.isArray(s)?t[i][a]=s.slice():t[i][a]=s}return t}function oe(e){let t={};for(let i=0;i<e.length;i++){let a=ei(e[i]);for(let s in a)t[s]=a[s]}return t}function yl(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function $a(e){return null===e.getRenderTarget()&&e.outputEncoding===Bt?De:pi}var Ml={clone:ei,merge:oe},bl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bl,this.fragmentShader=wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=yl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let s={};for(let o in this.extensions)!0===this.extensions[o]&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}},ji=class extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_e=class extends ji{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ca*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ms*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ca*Math.atan(Math.tan(.5*ms*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ms*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a,o=this.view;if(null!==this.view&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/u,a*=o.width/l,i*=o.height/u}let h=this.filmOffset;0!==h&&(s+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kn=-90,Vn=1,Ks=class extends ue{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let a=new _e(kn,Vn,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);let s=new _e(kn,Vn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let o=new _e(kn,Vn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let l=new _e(kn,Vn,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);let u=new _e(kn,Vn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);let h=new _e(kn,Vn,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){null===this.parent&&this.updateMatrixWorld();let i=this.renderTarget,[a,s,o,l,u,h]=this.children,c=e.getRenderTarget(),d=e.toneMapping,p=e.xr.enabled;e.toneMapping=Xe,e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,l),e.setRenderTarget(i,4),e.render(t,u),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Qi=class extends ce{constructor(e,t,i,a,s,o,l,u,h,c){super(e=void 0!==e?e:[],t=void 0!==t?t:Kn,i,a,s,o,l,u,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},js=class extends Ze{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Qi(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:be}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new An(5,5,5),s=new $e({name:"CubemapFromEquirect",uniforms:ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:we,blending:on});s.uniforms.tEquirect.value=t;let o=new Fe(a,s),l=t.minFilter;return t.minFilter===is&&(t.minFilter=be),new Ks(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}},Us=new D,Sl=new D,Tl=new le,qe=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let a=Us.subVectors(i,t).cross(Sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(Us),a=this.normal.dot(i);if(0===a)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tl.getNormalMatrix(e),a=this.coplanarPoint(Us).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new mi,Oi=new D,ts=class{constructor(e=new qe,t=new qe,i=new qe,a=new qe,s=new qe,o=new qe){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(a),l[4].copy(s),l[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],l=i[3],u=i[4],h=i[5],c=i[6],d=i[7],p=i[8],f=i[9],m=i[10],g=i[11],$=i[12],v=i[13],x=i[14],y=i[15];return t[0].setComponents(l-a,d-u,g-p,y-$).normalize(),t[1].setComponents(l+a,d+u,g+p,y+$).normalize(),t[2].setComponents(l+s,d+h,g+f,y+v).normalize(),t[3].setComponents(l-s,d-h,g-f,y-v).normalize(),t[4].setComponents(l-o,d-c,g-m,y-x).normalize(),t[5].setComponents(l+o,d+c,g+m,y+x).normalize(),this}intersectsObject(e){let t=e.geometry;return null===t.boundingSphere&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){let t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let a=t[i];if(Oi.x=a.normal.x>0?e.max.x:e.min.x,Oi.y=a.normal.y>0?e.max.y:e.min.y,Oi.z=a.normal.z>0?e.max.z:e.min.z,0>a.distanceToPoint(Oi))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ka(){let e=null,t=!1,i=null,a=null;function s(t,o){i(t,o),a=e.requestAnimationFrame(s)}return{start:function(){!0!==t&&null!==i&&(a=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function Al(e,t){let i=t.isWebGL2,a=new WeakMap;return{get:function e(t){return t.isInterleavedBufferAttribute&&(t=t.data),a.get(t)},remove:function t(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=a.get(i);s&&(e.deleteBuffer(s.buffer),a.delete(i))},update:function t(s,o){var l,u,h;if(s.isGLBufferAttribute){let c=a.get(s);(!c||c.version<s.version)&&a.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);let d=a.get(s),p,f;void 0===d?a.set(s,function t(a,s){let o=a.array,l=a.usage,u=e.createBuffer();e.bindBuffer(s,u),e.bufferData(s,o,l),a.onUploadCallback();let h;if(o instanceof Float32Array)h=5126;else if(o instanceof Uint16Array){if(a.isFloat16BufferAttribute){if(i)h=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")}else h=5123}else if(o instanceof Int16Array)h=5122;else if(o instanceof Uint32Array)h=5125;else if(o instanceof Int32Array)h=5124;else if(o instanceof Int8Array)h=5120;else if(o instanceof Uint8Array)h=5121;else if(o instanceof Uint8ClampedArray)h=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:h,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version}}(s,o)):d.version<s.version&&(l=d.buffer,u=s,h=o,p=u.array,f=u.updateRange,e.bindBuffer(h,l),-1===f.count?e.bufferSubData(h,0,p):(i?e.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):e.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback(),d.version=s.version)}}}var gi=class extends Je{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};let s=e/2,o=t/2,l=Math.floor(i),u=Math.floor(a),h=l+1,c=u+1,d=e/l,p=t/u,f=[],m=[],g=[],$=[];for(let v=0;v<c;v++){let x=v*p-o;for(let y=0;y<h;y++){let b=y*d-s;m.push(b,-x,0),g.push(0,0,1),$.push(y/l),$.push(1-v/u)}}for(let S=0;S<u;S++)for(let _=0;_<l;_++){let M=_+h*S,w=_+h*(S+1),T=_+1+h*(S+1),E=_+1+h*S;f.push(M,w,E),f.push(w,T,E)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye($,2))}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}},El=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ll=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Il=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dl="vec3 transformed = vec3( position );",Nl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ol=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$l=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ql="gl_FragColor = linearToOutputTexel( gl_FragColor );",tc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ec=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ic=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ac=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_c=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ac=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ec=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ic=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Xc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$c=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,jc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ih=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ah=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,oh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ch=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_h=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Th=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ah=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ih=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$h=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,iu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mt={alphamap_fragment:El,alphamap_pars_fragment:Cl,alphatest_fragment:Pl,alphatest_pars_fragment:Rl,aomap_fragment:Ll,aomap_pars_fragment:Il,begin_vertex:Dl,beginnormal_vertex:Nl,bsdfs:Fl,iridescence_fragment:zl,bumpmap_pars_fragment:Ol,clipping_planes_fragment:Ul,clipping_planes_pars_fragment:Bl,clipping_planes_pars_vertex:kl,clipping_planes_vertex:Vl,color_fragment:Hl,color_pars_fragment:Gl,color_pars_vertex:Wl,color_vertex:ql,common:Xl,cube_uv_reflection_fragment:Yl,defaultnormal_vertex:Zl,displacementmap_pars_vertex:Jl,displacementmap_vertex:$l,emissivemap_fragment:Kl,emissivemap_pars_fragment:jl,encodings_fragment:Ql,encodings_pars_fragment:tc,envmap_fragment:ec,envmap_common_pars_fragment:nc,envmap_pars_fragment:ic,envmap_pars_vertex:sc,envmap_physical_pars_fragment:gc,envmap_vertex:rc,fog_vertex:ac,fog_pars_vertex:oc,fog_fragment:lc,fog_pars_fragment:cc,gradientmap_pars_fragment:hc,lightmap_fragment:uc,lightmap_pars_fragment:dc,lights_lambert_fragment:fc,lights_lambert_pars_fragment:pc,lights_pars_begin:mc,lights_toon_fragment:xc,lights_toon_pars_fragment:_c,lights_phong_fragment:vc,lights_phong_pars_fragment:yc,lights_physical_fragment:Mc,lights_physical_pars_fragment:bc,lights_fragment_begin:wc,lights_fragment_maps:Sc,lights_fragment_end:Tc,logdepthbuf_fragment:Ac,logdepthbuf_pars_fragment:Ec,logdepthbuf_pars_vertex:Cc,logdepthbuf_vertex:Pc,map_fragment:Rc,map_pars_fragment:Lc,map_particle_fragment:Ic,map_particle_pars_fragment:Dc,metalnessmap_fragment:Nc,metalnessmap_pars_fragment:Fc,morphcolor_vertex:zc,morphnormal_vertex:Oc,morphtarget_pars_vertex:Uc,morphtarget_vertex:Bc,normal_fragment_begin:kc,normal_fragment_maps:Vc,normal_pars_fragment:Hc,normal_pars_vertex:Gc,normal_vertex:Wc,normalmap_pars_fragment:qc,clearcoat_normal_fragment_begin:Xc,clearcoat_normal_fragment_maps:Yc,clearcoat_pars_fragment:Zc,iridescence_pars_fragment:Jc,output_fragment:$c,packing:Kc,premultiplied_alpha_fragment:jc,project_vertex:Qc,dithering_fragment:th,dithering_pars_fragment:eh,roughnessmap_fragment:nh,roughnessmap_pars_fragment:ih,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:rh,shadowmap_vertex:ah,shadowmask_pars_fragment:oh,skinbase_vertex:lh,skinning_pars_vertex:ch,skinning_vertex:hh,skinnormal_vertex:uh,specularmap_fragment:dh,specularmap_pars_fragment:fh,tonemapping_fragment:ph,tonemapping_pars_fragment:mh,transmission_fragment:gh,transmission_pars_fragment:xh,uv_pars_fragment:_h,uv_pars_vertex:vh,uv_vertex:yh,uv2_pars_fragment:Mh,uv2_pars_vertex:bh,uv2_vertex:wh,worldpos_vertex:Sh,background_vert:Th,background_frag:Ah,backgroundCube_vert:Eh,backgroundCube_frag:Ch,cube_vert:Ph,cube_frag:Rh,depth_vert:Lh,depth_frag:Ih,distanceRGBA_vert:Dh,distanceRGBA_frag:Nh,equirect_vert:Fh,equirect_frag:zh,linedashed_vert:Oh,linedashed_frag:Uh,meshbasic_vert:Bh,meshbasic_frag:kh,meshlambert_vert:Vh,meshlambert_frag:Hh,meshmatcap_vert:Gh,meshmatcap_frag:Wh,meshnormal_vert:qh,meshnormal_frag:Xh,meshphong_vert:Yh,meshphong_frag:Zh,meshphysical_vert:Jh,meshphysical_frag:$h,meshtoon_vert:Kh,meshtoon_frag:jh,points_vert:Qh,points_frag:tu,shadow_vert:eu,shadow_frag:nu,sprite_vert:iu,sprite_frag:su},et={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new le},uv2Transform:{value:new le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}}},Ne={basic:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:oe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:oe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:oe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new zt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:oe([et.points,et.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:oe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:oe([et.common,et.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:oe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:oe([et.sprite,et.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:oe([et.common,et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:oe([et.lights,et.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ne.physical={uniforms:oe([Ne.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Ui={r:0,b:0,g:0};function ru(e,t,i,a,s,o,l){let u=new zt(0),h=!0===o?0:1,c,d,p=null,f=0,m=null;function g(t,i){t.getRGB(Ui,$a(e)),a.buffers.color.setClear(Ui.r,Ui.g,Ui.b,i,l)}return{getClearColor:function(){return u},setClearColor:function(e,t=1){u.set(e),g(u,h=t)},getClearAlpha:function(){return h},setClearAlpha:function(e){g(u,h=e)},render:function a(o,l){let $=!1,v=!0===l.isScene?l.background:null;v&&v.isTexture&&(v=(l.backgroundBlurriness>0?i:t).get(v));let x=e.xr,y=x.getSession&&x.getSession();y&&"additive"===y.environmentBlendMode&&(v=null),null===v?g(u,h):v&&v.isColor&&(g(v,1),$=!0),(e.autoClear||$)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ns)?(void 0===d&&((d=new Fe(new An(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ei(Ne.backgroundCube.uniforms),vertexShader:Ne.backgroundCube.vertexShader,fragmentShader:Ne.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&!1===v.isRenderTargetTexture?-1:1,d.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,(p!==v||f!==v.version||m!==e.toneMapping)&&(d.material.needsUpdate=!0,p=v,f=v.version,m=e.toneMapping),d.layers.enableAll(),o.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(void 0===c&&((c=new Fe(new gi(2,2),new $e({name:"BackgroundMaterial",uniforms:ei(Ne.background.uniforms),vertexShader:Ne.background.vertexShader,fragmentShader:Ne.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,!0===v.matrixAutoUpdate&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||f!==v.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,p=v,f=v.version,m=e.toneMapping),c.layers.enableAll(),o.unshift(c,c.geometry,c.material,0,0,null))}}}function au(e,t,i,a){let s=e.getParameter(34921),o=a.isWebGL2?null:t.get("OES_vertex_array_object"),l=a.isWebGL2||null!==o,u={},h=m(null),c=h,d=!1;function p(t){return a.isWebGL2?e.bindVertexArray(t):o.bindVertexArrayOES(t)}function f(t){return a.isWebGL2?e.deleteVertexArray(t):o.deleteVertexArrayOES(t)}function m(e){let t=[],i=[],a=[];for(let o=0;o<s;o++)t[o]=0,i[o]=0,a[o]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:a,object:e,attributes:{},index:null}}function g(){let e=c.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function $(e){v(e,0)}function v(i,s){let o=c.newAttributes,l=c.enabledAttributes,u=c.attributeDivisors;o[i]=1,0===l[i]&&(e.enableVertexAttribArray(i),l[i]=1),u[i]!==s&&((a.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,s),u[i]=s)}function x(){let t=c.newAttributes,i=c.enabledAttributes;for(let a=0,s=i.length;a<s;a++)i[a]!==t[a]&&(e.disableVertexAttribArray(a),i[a]=0)}function y(t,i,s,o,l,u){!0===a.isWebGL2&&(5124===s||5125===s)?e.vertexAttribIPointer(t,i,s,l,u):e.vertexAttribPointer(t,i,s,o,l,u)}function b(){S(),d=!0,c!==h&&p((c=h).object)}function S(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:function s(h,f,b,S,_){let M=!1;if(l){var w,T,E;let C,A,L,P,R=(w=S,T=b,E=f,C=!0===E.wireframe,A=u[w.id],void 0===A&&(A={},u[w.id]=A),L=A[T.id],void 0===L&&(L={},A[T.id]=L),P=L[C],void 0===P&&(P=m(a.isWebGL2?e.createVertexArray():o.createVertexArrayOES()),L[C]=P),P);c!==R&&p((c=R).object),(M=function e(t,i,a,s){let o=c.attributes,l=i.attributes,u=0,h=a.getAttributes();for(let d in h)if(h[d].location>=0){let p=o[d],f=l[d];if(void 0===f&&("instanceMatrix"===d&&t.instanceMatrix&&(f=t.instanceMatrix),"instanceColor"===d&&t.instanceColor&&(f=t.instanceColor)),void 0===p||p.attribute!==f||f&&p.data!==f.data)return!0;u++}return c.attributesNum!==u||c.index!==s}(h,S,b,_))&&function e(t,i,a,s){let o={},l=i.attributes,u=0,h=a.getAttributes();for(let d in h)if(h[d].location>=0){let p=l[d];void 0===p&&("instanceMatrix"===d&&t.instanceMatrix&&(p=t.instanceMatrix),"instanceColor"===d&&t.instanceColor&&(p=t.instanceColor));let f={};f.attribute=p,p&&p.data&&(f.data=p.data),o[d]=f,u++}c.attributes=o,c.attributesNum=u,c.index=s}(h,S,b,_)}else{let I=!0===f.wireframe;(c.geometry!==S.id||c.program!==b.id||c.wireframe!==I)&&(c.geometry=S.id,c.program=b.id,c.wireframe=I,M=!0)}null!==_&&i.update(_,34963),(M||d)&&(d=!1,function s(o,l,u,h){if(!1===a.isWebGL2&&(o.isInstancedMesh||h.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;g();let c=h.attributes,d=u.getAttributes(),p=l.defaultAttributeValues;for(let f in d){let m=d[f];if(m.location>=0){let b=c[f];if(void 0===b&&("instanceMatrix"===f&&o.instanceMatrix&&(b=o.instanceMatrix),"instanceColor"===f&&o.instanceColor&&(b=o.instanceColor)),void 0!==b){let S=b.normalized,_=b.itemSize,M=i.get(b);if(void 0===M)continue;let w=M.buffer,T=M.type,E=M.bytesPerElement;if(b.isInterleavedBufferAttribute){let C=b.data,A=C.stride,L=b.offset;if(C.isInstancedInterleavedBuffer){for(let P=0;P<m.locationSize;P++)v(m.location+P,C.meshPerAttribute);!0!==o.isInstancedMesh&&void 0===h._maxInstanceCount&&(h._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let R=0;R<m.locationSize;R++)$(m.location+R);e.bindBuffer(34962,w);for(let I=0;I<m.locationSize;I++)y(m.location+I,_/m.locationSize,T,S,A*E,(L+_/m.locationSize*I)*E)}else{if(b.isInstancedBufferAttribute){for(let N=0;N<m.locationSize;N++)v(m.location+N,b.meshPerAttribute);!0!==o.isInstancedMesh&&void 0===h._maxInstanceCount&&(h._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let z=0;z<m.locationSize;z++)$(m.location+z);e.bindBuffer(34962,w);for(let U=0;U<m.locationSize;U++)y(m.location+U,_/m.locationSize,T,S,_*E,_/m.locationSize*U*E)}}else if(void 0!==p){let O=p[f];if(void 0!==O)switch(O.length){case 2:e.vertexAttrib2fv(m.location,O);break;case 3:e.vertexAttrib3fv(m.location,O);break;case 4:e.vertexAttrib4fv(m.location,O);break;default:e.vertexAttrib1fv(m.location,O)}}}}x()}(h,f,b,S),null!==_&&e.bindBuffer(34963,i.get(_).buffer))},reset:b,resetDefaultState:S,dispose:function e(){for(let t in b(),u){let i=u[t];for(let a in i){let s=i[a];for(let o in s)f(s[o].object),delete s[o];delete i[a]}delete u[t]}},releaseStatesOfGeometry:function e(t){if(void 0===u[t.id])return;let i=u[t.id];for(let a in i){let s=i[a];for(let o in s)f(s[o].object),delete s[o];delete i[a]}delete u[t.id]},releaseStatesOfProgram:function e(t){for(let i in u){let a=u[i];if(void 0===a[t.id])continue;let s=a[t.id];for(let o in s)f(s[o].object),delete s[o];delete a[t.id]}},initAttributes:g,enableAttribute:$,disableUnusedAttributes:x}}function ou(e,t,i,a){let s=a.isWebGL2,o;function l(e){o=e}this.setMode=l,this.render=function t(a,s){e.drawArrays(o,a,s),i.update(s,o,1)},this.renderInstances=function a(l,u,h){if(0===h)return;let c,d;if(s)c=e,d="drawArraysInstanced";else if(c=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",null===c){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](o,l,u,h),i.update(u,o,h)}}function lu(e,t,i){let a;function s(t){if("highp"===t){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o="undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&e instanceof WebGL2ComputeRenderingContext,l=void 0!==i.precision?i.precision:"highp",u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=o||t.has("WEBGL_draw_buffers"),c=!0===i.logarithmicDepthBuffer,d=e.getParameter(34930),p=e.getParameter(35660),f=e.getParameter(3379),m=e.getParameter(34076),g=e.getParameter(34921),$=e.getParameter(36347),v=e.getParameter(36348),x=e.getParameter(36349),y=p>0,b=o||t.has("OES_texture_float"),S=o?e.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:function i(){if(void 0!==a)return a;if(!0===t.has("EXT_texture_filter_anisotropic")){let s=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a},getMaxPrecision:s,precision:l,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:$,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:y&&b,maxSamples:S}}function cu(e){let t=this,i=null,a=0,s=!1,o=!1,l=new qe,u=new le,h={value:null,needsUpdate:!1};function c(){h.value!==i&&(h.value=i,h.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function d(e,i,a,s){let o=null!==e?e.length:0,c=null;if(0!==o){if(c=h.value,!0!==s||null===c){let d=a+4*o,p=i.matrixWorldInverse;u.getNormalMatrix(p),(null===c||c.length<d)&&(c=new Float32Array(d));for(let f=0,m=a;f!==o;++f,m+=4)l.copy(e[f]).applyMatrix4(p,u),l.normal.toArray(c,m),c[m+3]=l.constant}h.value=c,h.needsUpdate=!0}return t.numPlanes=o,t.numIntersection=0,c}this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,o){let l=0!==e.length||t||0!==a||s;return s=t,i=d(e,o,0),a=e.length,l},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,c()},this.setState=function(t,l,u){let p=t.clippingPlanes,f=t.clipIntersection,m=t.clipShadows,g=e.get(t);if(s&&null!==p&&0!==p.length&&(!o||m)){let $=o?0:a,v=4*$,x=g.clippingState||null;h.value=x,x=d(p,l,v,u);for(let y=0;y!==v;++y)x[y]=i[y];g.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=$}else o?d(null):c()}}function hu(e){let t=new WeakMap;function i(e,t){return t===Gs?e.mapping=Kn:t===Ws&&(e.mapping=jn),e}function a(e){let i=e.target;i.removeEventListener("dispose",a);let s=t.get(i);void 0!==s&&(t.delete(i),s.dispose())}return{get:function s(o){if(o&&o.isTexture&&!1===o.isRenderTargetTexture){let l=o.mapping;if(l===Gs||l===Ws){if(t.has(o))return i(t.get(o).texture,o.mapping);{let u=o.image;if(!u||!(u.height>0))return null;{let h=new js(u.height/2);return h.fromEquirectangularTexture(e,o),t.set(o,h),o.addEventListener("dispose",a),i(h.texture,o.mapping)}}}}return o},dispose:function e(){t=new WeakMap}}}var Qs=class extends ji{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-e,o=i+e,l=a+t,u=a-t;if(null!==this.view&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=c*this.view.offsetY,u=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}},qn=4,Ma=[.125,.215,.35,.446,.526,.582],xn=20,Bs=new Qs,ba=new zt,ks=null,gn=(1+Math.sqrt(5))/2,Gn=1/gn,wa=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,gn,Gn),new D(0,gn,-Gn),new D(Gn,0,gn),new D(-Gn,0,gn),new D(gn,Gn,0),new D(-gn,Gn,0)],es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){ks=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Aa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ks),e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===jn?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:be,minFilter:be,generateMipmaps:!1,type:fi,format:Re,encoding:wn,depthBuffer:!1},a=Sa(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Sa(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uu(s)),this._blurMaterial=du(s,e,t)}return a}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,i,a){let s=new _e(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,c=u.toneMapping;u.getClearColor(ba),u.toneMapping=Xe,u.autoClear=!1;let d=new Ji({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),p=new Fe(new An,d),f=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,f=!0):(d.color.copy(ba),f=!0);for(let g=0;g<6;g++){let $=g%3;0===$?(s.up.set(0,o[g],0),s.lookAt(l[g],0,0)):1===$?(s.up.set(0,0,o[g]),s.lookAt(0,l[g],0)):(s.up.set(0,o[g],0),s.lookAt(0,0,l[g]));let v=this._cubeSize;Bi(a,$*v,g>2?v:0,v,v),u.setRenderTarget(a),f&&u.render(p,s),u.render(e,s)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=c,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,a=e.mapping===Kn||e.mapping===jn;a?(null===this._cubemapMaterial&&(this._cubemapMaterial=Aa()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Ta());let s=a?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let l=this._cubeSize;Bi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=wa[(a-1)%wa.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,a,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,l){let u=this._renderer,h=this._blurMaterial;"latitudinal"!==o&&"longitudinal"!==o&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Fe(this._lodPlanes[a],h),d=h.uniforms,p=this._sizeLods[i]-1,f=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xn-1),m=s/f,g=isFinite(s)?1+Math.floor(3*m):xn;g>xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xn}`);let $=[],v=0;for(let x=0;x<xn;++x){let y=x/m,b=Math.exp(-y*y/2);$.push(b),0===x?v+=b:x<g&&(v+=2*b)}for(let S=0;S<$.length;S++)$[S]=$[S]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=$,d.latitudinal.value="latitudinal"===o,l&&(d.poleAxis.value=l);let{_lodMax:_}=this;d.dTheta.value=f,d.mipInt.value=_-i;let M=this._sizeLods[a],w=4*(this._cubeSize-M);Bi(t,3*M*(a>_-qn?a-_+qn:0),w,3*M,2*M),u.setRenderTarget(t),u.render(c,Bs)}};function uu(e){let t=[],i=[],a=[],s=e,o=e-qn+1+Ma.length;for(let l=0;l<o;l++){let u=Math.pow(2,s);i.push(u);let h=1/u;l>e-qn?h=Ma[l-e+qn-1]:0===l&&(h=0),a.push(h);let c=1/(u-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=new Float32Array(108),g=new Float32Array(72),$=new Float32Array(36);for(let v=0;v<6;v++){let x=v%3*2/3-1,y=v>2?0:-1,b=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];m.set(b,18*v),g.set(f,12*v);let S=[v,v,v,v,v,v];$.set(S,6*v)}let _=new Je;_.setAttribute("position",new Se(m,3)),_.setAttribute("uv",new Se(g,2)),_.setAttribute("faceIndex",new Se($,1)),t.push(_),s>qn&&s--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function Sa(e,t,i){let a=new Ze(e,t,i);return a.texture.mapping=ns,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bi(e,t,i,a,s){e.viewport.set(t,i,a,s),e.scissor.set(t,i,a,s)}function du(e,t,i){let a=new Float32Array(xn),s=new D(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ta(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Aa(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fu(e){let t=new WeakMap,i=null;function a(e){let i=e.target;i.removeEventListener("dispose",a);let s=t.get(i);void 0!==s&&(t.delete(i),s.dispose())}return{get:function s(o){if(o&&o.isTexture){let l=o.mapping,u=l===Gs||l===Ws,h=l===Kn||l===jn;if(u||h){if(o.isRenderTargetTexture&&!0===o.needsPMREMUpdate){o.needsPMREMUpdate=!1;let c=t.get(o);return null===i&&(i=new es(e)),c=u?i.fromEquirectangular(o,c):i.fromCubemap(o,c),t.set(o,c),c.texture}if(t.has(o))return t.get(o).texture;{let d=o.image;if(!(u&&d&&d.height>0||h&&d&&function e(t){let i=0;for(let a=0;a<6;a++)void 0!==t[a]&&i++;return 6===i}(d)))return null;{null===i&&(i=new es(e));let p=u?i.fromEquirectangular(o):i.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",a),p.texture}}}}return o},dispose:function e(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function pu(e){let t={};function i(i){if(void 0!==t[i])return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function mu(e,t,i,a){let s={},o=new WeakMap;function l(e){let u=e.target;for(let h in null!==u.index&&t.remove(u.index),u.attributes)t.remove(u.attributes[h]);u.removeEventListener("dispose",l),delete s[u.id];let c=o.get(u);c&&(t.remove(c),o.delete(u)),a.releaseStatesOfGeometry(u),!0===u.isInstancedBufferGeometry&&delete u._maxInstanceCount,i.memory.geometries--}function u(e){let i=[],a=e.index,s=e.attributes.position,l=0;if(null!==a){let u=a.array;l=a.version;for(let h=0,c=u.length;h<c;h+=3){let d=u[h+0],p=u[h+1],f=u[h+2];i.push(d,p,p,f,f,d)}}else{let m=s.array;l=s.version;for(let g=0,$=m.length/3-1;g<$;g+=3){let v=g+0,x=g+1,y=g+2;i.push(v,x,x,y,y,v)}}let b=new(Za(i)?Ki:$i)(i,1);b.version=l;let S=o.get(e);S&&t.remove(S),o.set(e,b)}return{get:function e(t,a){return!0===s[a.id]||(a.addEventListener("dispose",l),s[a.id]=!0,i.memory.geometries++),a},update:function e(i){let a=i.attributes;for(let s in a)t.update(a[s],34962);let o=i.morphAttributes;for(let l in o){let u=o[l];for(let h=0,c=u.length;h<c;h++)t.update(u[h],34962)}},getWireframeAttribute:function e(t){let i=o.get(t);if(i){let a=t.index;null!==a&&i.version<a.version&&u(t)}else u(t);return o.get(t)}}}function gu(e,t,i,a){let s=a.isWebGL2,o;function l(e){o=e}let u,h;this.setMode=l,this.setIndex=function e(t){u=t.type,h=t.bytesPerElement},this.render=function t(a,s){e.drawElements(o,s,u,a*h),i.update(s,o,1)},this.renderInstances=function a(l,c,d){if(0===d)return;let p,f;if(s)p=e,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",null===p){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](o,c,u,l*h,d),i.update(c,o,d)}}function xu(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function e(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function e(i,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(i/3);break;case 1:t.lines+=s*(i/2);break;case 3:t.lines+=s*(i-1);break;case 2:t.lines+=s*i;break;case 0:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a)}}}}function _u(e,t){return e[0]-t[0]}function vu(e,t){return Math.abs(t[1])-Math.abs(e[1])}function yu(e,t,i){let a={},s=new Float32Array(8),o=new WeakMap,l=new qt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];return{update:function h(c,d,p,f){let m=c.morphTargetInfluences;if(!0===t.isWebGL2){let g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,$=void 0!==g?g.length:0,v=o.get(d);if(void 0===v||v.count!==$){let x=function(){L.dispose(),o.delete(d),d.removeEventListener("dispose",x)};void 0!==v&&v.texture.dispose();let y=void 0!==d.morphAttributes.position,b=void 0!==d.morphAttributes.normal,S=void 0!==d.morphAttributes.color,_=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],w=d.morphAttributes.color||[],T=0;!0===y&&(T=1),!0===b&&(T=2),!0===S&&(T=3);let E=d.attributes.position.count*T,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let A=new Float32Array(E*C*4*$),L=new Yi(A,E,C,$);L.type=vn,L.needsUpdate=!0;let P=4*T;for(let R=0;R<$;R++){let I=_[R],N=M[R],z=w[R],U=E*C*4*R;for(let O=0;O<I.count;O++){let F=O*P;!0===y&&(l.fromBufferAttribute(I,O),A[U+F+0]=l.x,A[U+F+1]=l.y,A[U+F+2]=l.z,A[U+F+3]=0),!0===b&&(l.fromBufferAttribute(N,O),A[U+F+4]=l.x,A[U+F+5]=l.y,A[U+F+6]=l.z,A[U+F+7]=0),!0===S&&(l.fromBufferAttribute(z,O),A[U+F+8]=l.x,A[U+F+9]=l.y,A[U+F+10]=l.z,A[U+F+11]=4===z.itemSize?l.w:1)}}v={count:$,texture:L,size:new Nt(E,C)},o.set(d,v),d.addEventListener("dispose",x)}let B=0;for(let V=0;V<m.length;V++)B+=m[V];let H=d.morphTargetsRelative?1:1-B;f.getUniforms().setValue(e,"morphTargetBaseInfluence",H),f.getUniforms().setValue(e,"morphTargetInfluences",m),f.getUniforms().setValue(e,"morphTargetsTexture",v.texture,i),f.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}else{let G=void 0===m?0:m.length,k=a[d.id];if(void 0===k||k.length!==G){k=[];for(let W=0;W<G;W++)k[W]=[W,0];a[d.id]=k}for(let j=0;j<G;j++){let q=k[j];q[0]=j,q[1]=m[j]}k.sort(vu);for(let X=0;X<8;X++)X<G&&k[X][1]?(u[X][0]=k[X][0],u[X][1]=k[X][1]):(u[X][0]=Number.MAX_SAFE_INTEGER,u[X][1]=0);u.sort(_u);let Y=d.morphAttributes.position,Z=d.morphAttributes.normal,K=0;for(let Q=0;Q<8;Q++){let J=u[Q],ep=J[0],em=J[1];ep!==Number.MAX_SAFE_INTEGER&&em?(Y&&d.getAttribute("morphTarget"+Q)!==Y[ep]&&d.setAttribute("morphTarget"+Q,Y[ep]),Z&&d.getAttribute("morphNormal"+Q)!==Z[ep]&&d.setAttribute("morphNormal"+Q,Z[ep]),s[Q]=em,K+=em):(Y&&!0===d.hasAttribute("morphTarget"+Q)&&d.deleteAttribute("morphTarget"+Q),Z&&!0===d.hasAttribute("morphNormal"+Q)&&d.deleteAttribute("morphNormal"+Q),s[Q]=0)}let eg=d.morphTargetsRelative?1:1-K;f.getUniforms().setValue(e,"morphTargetBaseInfluence",eg),f.getUniforms().setValue(e,"morphTargetInfluences",s)}}}}function Mu(e,t,i,a){let s=new WeakMap;function o(e){let t=e.target;t.removeEventListener("dispose",o),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function e(l){let u=a.render.frame,h=l.geometry,c=t.get(l,h);return s.get(c)!==u&&(t.update(c),s.set(c,u)),l.isInstancedMesh&&(!1===l.hasEventListener("dispose",o)&&l.addEventListener("dispose",o),i.update(l.instanceMatrix,34962),null!==l.instanceColor&&i.update(l.instanceColor,34962)),c},dispose:function e(){s=new WeakMap}}}var ja=new ce,Qa=new Yi,to=new Js,eo=new Qi,Ea=[],Ca=[],Pa=new Float32Array(16),Ra=new Float32Array(9),La=new Float32Array(4);function ii(e,t,i){let a=e[0];if(a<=0||a>0)return e;let s=t*i,o=Ea[s];if(void 0===o&&(o=new Float32Array(s),Ea[s]=o),0!==t){a.toArray(o,0);for(let l=1,u=0;l!==t;++l)u+=i,e[l].toArray(o,u)}return o}function Yt(e,t){if(e.length!==t.length)return!1;for(let i=0,a=e.length;i<a;i++)if(e[i]!==t[i])return!1;return!0}function Zt(e,t){for(let i=0,a=t.length;i<a;i++)e[i]=t[i]}function ss(e,t){let i=Ca[t];void 0===i&&(i=new Int32Array(t),Ca[t]=i);for(let a=0;a!==t;++a)i[a]=e.allocateTextureUnit();return i}function bu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function wu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2fv(this.addr,t),Zt(i,t)}}function Su(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yt(i,t))return;e.uniform3fv(this.addr,t),Zt(i,t)}}function Tu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4fv(this.addr,t),Zt(i,t)}}function Au(e,t){let i=this.cache,a=t.elements;if(void 0===a){if(Yt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Zt(i,t)}else{if(Yt(i,a))return;La.set(a),e.uniformMatrix2fv(this.addr,!1,La),Zt(i,a)}}function Eu(e,t){let i=this.cache,a=t.elements;if(void 0===a){if(Yt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Zt(i,t)}else{if(Yt(i,a))return;Ra.set(a),e.uniformMatrix3fv(this.addr,!1,Ra),Zt(i,a)}}function Cu(e,t){let i=this.cache,a=t.elements;if(void 0===a){if(Yt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Zt(i,t)}else{if(Yt(i,a))return;Pa.set(a),e.uniformMatrix4fv(this.addr,!1,Pa),Zt(i,a)}}function Pu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Ru(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2iv(this.addr,t),Zt(i,t)}}function Lu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yt(i,t))return;e.uniform3iv(this.addr,t),Zt(i,t)}}function Iu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4iv(this.addr,t),Zt(i,t)}}function Du(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Nu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2uiv(this.addr,t),Zt(i,t)}}function Fu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yt(i,t))return;e.uniform3uiv(this.addr,t),Zt(i,t)}}function zu(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4uiv(this.addr,t),Zt(i,t)}}function Ou(e,t,i){let a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),i.setTexture2D(t||ja,s)}function Uu(e,t,i){let a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),i.setTexture3D(t||to,s)}function Bu(e,t,i){let a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),i.setTextureCube(t||eo,s)}function ku(e,t,i){let a=this.cache,s=i.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),i.setTexture2DArray(t||Qa,s)}function Vu(e){switch(e){case 5126:return bu;case 35664:return wu;case 35665:return Su;case 35666:return Tu;case 35674:return Au;case 35675:return Eu;case 35676:return Cu;case 5124:case 35670:return Pu;case 35667:case 35671:return Ru;case 35668:case 35672:return Lu;case 35669:case 35673:return Iu;case 5125:return Du;case 36294:return Nu;case 36295:return Fu;case 36296:return zu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ou;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return Bu;case 36289:case 36303:case 36311:case 36292:return ku}}function Hu(e,t){e.uniform1fv(this.addr,t)}function Gu(e,t){let i=ii(t,this.size,2);e.uniform2fv(this.addr,i)}function Wu(e,t){let i=ii(t,this.size,3);e.uniform3fv(this.addr,i)}function qu(e,t){let i=ii(t,this.size,4);e.uniform4fv(this.addr,i)}function Xu(e,t){let i=ii(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Yu(e,t){let i=ii(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Zu(e,t){let i=ii(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Ju(e,t){e.uniform1iv(this.addr,t)}function $u(e,t){e.uniform2iv(this.addr,t)}function Ku(e,t){e.uniform3iv(this.addr,t)}function ju(e,t){e.uniform4iv(this.addr,t)}function Qu(e,t){e.uniform1uiv(this.addr,t)}function td(e,t){e.uniform2uiv(this.addr,t)}function ed(e,t){e.uniform3uiv(this.addr,t)}function nd(e,t){e.uniform4uiv(this.addr,t)}function id(e,t,i){let a=this.cache,s=t.length,o=ss(i,s);Yt(a,o)||(e.uniform1iv(this.addr,o),Zt(a,o));for(let l=0;l!==s;++l)i.setTexture2D(t[l]||ja,o[l])}function sd(e,t,i){let a=this.cache,s=t.length,o=ss(i,s);Yt(a,o)||(e.uniform1iv(this.addr,o),Zt(a,o));for(let l=0;l!==s;++l)i.setTexture3D(t[l]||to,o[l])}function rd(e,t,i){let a=this.cache,s=t.length,o=ss(i,s);Yt(a,o)||(e.uniform1iv(this.addr,o),Zt(a,o));for(let l=0;l!==s;++l)i.setTextureCube(t[l]||eo,o[l])}function ad(e,t,i){let a=this.cache,s=t.length,o=ss(i,s);Yt(a,o)||(e.uniform1iv(this.addr,o),Zt(a,o));for(let l=0;l!==s;++l)i.setTexture2DArray(t[l]||Qa,o[l])}function od(e){switch(e){case 5126:return Hu;case 35664:return Gu;case 35665:return Wu;case 35666:return qu;case 35674:return Xu;case 35675:return Yu;case 35676:return Zu;case 5124:case 35670:return Ju;case 35667:case 35671:return $u;case 35668:case 35672:return Ku;case 35669:case 35673:return ju;case 5125:return Qu;case 36294:return td;case 36295:return ed;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return rd;case 36289:case 36303:case 36311:case 36292:return ad}}var tr=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Vu(t.type)}},er=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=od(t.type)}},nr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let a=this.seq;for(let s=0,o=a.length;s!==o;++s){let l=a[s];l.setValue(e,t[l.id],i)}}},Vs=/(\w+)(\])?(\[|\.)?/g;function Ia(e,t){e.seq.push(t),e.map[t.id]=t}function ld(e,t,i){let a=e.name,s=a.length;for(Vs.lastIndex=0;;){let o=Vs.exec(a),l=Vs.lastIndex,u=o[1],h="]"===o[2],c=o[3];if(h&&(u|=0),void 0===c||"["===c&&l+2===s){Ia(i,void 0===c?new tr(u,e,t):new er(u,e,t));break}{let d=i.map[u];void 0===d&&Ia(i,d=new nr(u)),i=d}}}var Jn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let a=0;a<i;++a){let s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);ld(s,o,this)}}setValue(e,t,i,a){let s=this.map[t];void 0!==s&&s.setValue(e,i,a)}setOptional(e,t,i){let a=t[i];void 0!==a&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){let l=t[s],u=i[l.id];!1!==u.needsUpdate&&l.setValue(e,u.value,a)}}static seqWithValue(e,t){let i=[];for(let a=0,s=e.length;a!==s;++a){let o=e[a];o.id in t&&i.push(o)}return i}};function Da(e,t,i){let a=e.createShader(t);return e.shaderSource(a,i),e.compileShader(a),a}var cd=0;function hd(e,t){let i=e.split(`
`),a=[],s=Math.max(t-6,0),o=Math.min(t+6,i.length);for(let l=s;l<o;l++){let u=l+1;a.push(`${u===t?">":" "} ${u}: ${i[l]}`)}return a.join(`
`)}function ud(e){switch(e){case wn:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Na(e,t,i){let a=e.getShaderParameter(t,35713),s=e.getShaderInfoLog(t).trim();if(a&&""===s)return"";let o=/ERROR: 0:(\d+)/.exec(s);if(!o)return s;{let l=parseInt(o[1]);return i.toUpperCase()+`

`+s+`

`+hd(e.getShaderSource(t),l)}}function dd(e,t){let i=ud(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function fd(e,t){let i;switch(t){case zo:i="Linear";break;case Oo:i="Reinhard";break;case Uo:i="OptimizedCineon";break;case Bo:i="ACESFilmic";break;case ko:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function pd(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function md(e){let t=[];for(let i in e){let a=e[i];!1!==a&&t.push("#define "+i+" "+a)}return t.join(`
`)}function gd(e,t){let i={},a=e.getProgramParameter(t,35721);for(let s=0;s<a;s++){let o=e.getActiveAttrib(t,s),l=o.name,u=1;35674===o.type&&(u=2),35675===o.type&&(u=3),35676===o.type&&(u=4),i[l]={type:o.type,location:e.getAttribLocation(t,l),locationSize:u}}return i}function ui(e){return""!==e}function Fa(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function za(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ir(e){return e.replace(xd,_d)}function _d(e,t){let i=Mt[t];if(void 0===i)throw Error("Can not resolve #include <"+t+">");return ir(i)}var vd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oa(e){return e.replace(vd,yd)}function yd(e,t,i,a){let s="";for(let o=parseInt(t);o<parseInt(i);o++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ua(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function Md(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ha?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===po?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function bd(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Kn:case jn:t="ENVMAP_TYPE_CUBE";break;case ns:t="ENVMAP_TYPE_CUBE_UV"}return t}function wd(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===jn&&(t="ENVMAP_MODE_REFRACTION"),t}function Sd(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case No:t="ENVMAP_BLENDING_MIX";break;case Fo:t="ENVMAP_BLENDING_ADD"}return t}function Td(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}function Ad(e,t,i,a){let s=e.getContext(),o=i.defines,l=i.vertexShader,u=i.fragmentShader,h=Md(i),c=bd(i),d=wd(i),p=Sd(i),f=Td(i),m=i.isWebGL2?"":pd(i),g=md(o),$=s.createProgram(),v,x,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?((v=[g].filter(ui).join(`
`)).length>0&&(v+=`
`),(x=[m,g].filter(ui).join(`
`)).length>0&&(x+=`
`)):(v=[Ua(i),"#define SHADER_NAME "+i.shaderName,g,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),x=[m,Ua(i),"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",i.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+h:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xe?"#define TONE_MAPPING":"",i.toneMapping!==Xe?Mt.tonemapping_pars_fragment:"",i.toneMapping!==Xe?fd("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,dd("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ui).join(`
`)),l=Fa(l=ir(l),i),l=za(l,i),u=Fa(u=ir(u),i),u=za(u,i),l=Oa(l),u=Oa(u),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(y=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",i.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=y+v+l,S=y+x+u,_=Da(s,35633,b),M=Da(s,35632,S);if(s.attachShader($,_),s.attachShader($,M),void 0!==i.index0AttributeName?s.bindAttribLocation($,0,i.index0AttributeName):!0===i.morphTargets&&s.bindAttribLocation($,0,"position"),s.linkProgram($),e.debug.checkShaderErrors){let w=s.getProgramInfoLog($).trim(),T=s.getShaderInfoLog(_).trim(),E=s.getShaderInfoLog(M).trim(),C=!0,A=!0;if(!1===s.getProgramParameter($,35714)){C=!1;let L=Na(s,_,"vertex"),P=Na(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter($,35715)+`

Program Info Log: `+w+`
`+L+`
`+P)}else""!==w?console.warn("THREE.WebGLProgram: Program Info Log:",w):(""===T||""===E)&&(A=!1);A&&(this.diagnostics={runnable:C,programLog:w,vertexShader:{log:T,prefix:v},fragmentShader:{log:E,prefix:x}})}s.deleteShader(_),s.deleteShader(M);let R;this.getUniforms=function(){return void 0===R&&(R=new Jn(s,$)),R};let I;return this.getAttributes=function(){return void 0===I&&(I=gd(s,$)),I},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram($),this.program=void 0},this.name=i.shaderName,this.id=cd++,this.cacheKey=t,this.usedTimes=1,this.program=$,this.vertexShader=_,this.fragmentShader=M,this}var Ed=0,sr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return!1===o.has(a)&&(o.add(a),a.usedTimes++),!1===o.has(s)&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,0===i.usedTimes&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new rr(e),t.set(e,i)),i}},rr=class{constructor(e){this.id=Ed++,this.code=e,this.usedTimes=0}};function Cd(e,t,i,a,s,o,l){let u=new Zi,h=new sr,c=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function o(u,c,$,v,x){let y=v.fog,b=x.geometry,S=u.isMeshStandardMaterial?v.environment:null,_=(u.isMeshStandardMaterial?i:t).get(u.envMap||S),M=_&&_.mapping===ns?_.image.height:null,w=g[u.type];null!==u.precision&&(m=s.getMaxPrecision(u.precision))!==u.precision&&console.warn("THREE.WebGLProgram.getParameters:",u.precision,"not supported, using",m,"instead.");let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=void 0!==T?T.length:0,C=0;void 0!==b.morphAttributes.position&&(C=1),void 0!==b.morphAttributes.normal&&(C=2),void 0!==b.morphAttributes.color&&(C=3);let A,L,P,R;if(w){let I=Ne[w];A=I.vertexShader,L=I.fragmentShader}else A=u.vertexShader,L=u.fragmentShader,h.update(u),P=h.getVertexShaderID(u),R=h.getFragmentShaderID(u);let N=e.getRenderTarget(),z=u.alphaTest>0,U=u.clearcoat>0,O=u.iridescence>0;return{isWebGL2:d,shaderID:w,shaderName:u.type,vertexShader:A,fragmentShader:L,defines:u.defines,customVertexShaderID:P,customFragmentShaderID:R,isRawShaderMaterial:!0===u.isRawShaderMaterial,glslVersion:u.glslVersion,precision:m,instancing:!0===x.isInstancedMesh,instancingColor:!0===x.isInstancedMesh&&null!==x.instanceColor,supportsVertexTextures:f,outputEncoding:null===N?e.outputEncoding:!0===N.isXRRenderTarget?N.texture.encoding:wn,map:!!u.map,matcap:!!u.matcap,envMap:!!_,envMapMode:_&&_.mapping,envMapCubeUVHeight:M,lightMap:!!u.lightMap,aoMap:!!u.aoMap,emissiveMap:!!u.emissiveMap,bumpMap:!!u.bumpMap,normalMap:!!u.normalMap,objectSpaceNormalMap:u.normalMapType===al,tangentSpaceNormalMap:u.normalMapType===rl,decodeVideoTexture:!!u.map&&!0===u.map.isVideoTexture&&u.map.encoding===Bt,clearcoat:U,clearcoatMap:U&&!!u.clearcoatMap,clearcoatRoughnessMap:U&&!!u.clearcoatRoughnessMap,clearcoatNormalMap:U&&!!u.clearcoatNormalMap,iridescence:O,iridescenceMap:O&&!!u.iridescenceMap,iridescenceThicknessMap:O&&!!u.iridescenceThicknessMap,displacementMap:!!u.displacementMap,roughnessMap:!!u.roughnessMap,metalnessMap:!!u.metalnessMap,specularMap:!!u.specularMap,specularIntensityMap:!!u.specularIntensityMap,specularColorMap:!!u.specularColorMap,opaque:!1===u.transparent&&u.blending===Yn,alphaMap:!!u.alphaMap,alphaTest:z,gradientMap:!!u.gradientMap,sheen:u.sheen>0,sheenColorMap:!!u.sheenColorMap,sheenRoughnessMap:!!u.sheenRoughnessMap,transmission:u.transmission>0,transmissionMap:!!u.transmissionMap,thicknessMap:!!u.thicknessMap,combine:u.combine,vertexTangents:!!u.normalMap&&!!b.attributes.tangent,vertexColors:u.vertexColors,vertexAlphas:!0===u.vertexColors&&!!b.attributes.color&&4===b.attributes.color.itemSize,vertexUvs:!!u.map||!!u.bumpMap||!!u.normalMap||!!u.specularMap||!!u.alphaMap||!!u.emissiveMap||!!u.roughnessMap||!!u.metalnessMap||!!u.clearcoatMap||!!u.clearcoatRoughnessMap||!!u.clearcoatNormalMap||!!u.iridescenceMap||!!u.iridescenceThicknessMap||!!u.displacementMap||!!u.transmissionMap||!!u.thicknessMap||!!u.specularIntensityMap||!!u.specularColorMap||!!u.sheenColorMap||!!u.sheenRoughnessMap,uvsVertexOnly:!(u.map||u.bumpMap||u.normalMap||u.specularMap||u.alphaMap||u.emissiveMap||u.roughnessMap||u.metalnessMap||u.clearcoatNormalMap||u.iridescenceMap||u.iridescenceThicknessMap||u.transmission>0||u.transmissionMap||u.thicknessMap||u.specularIntensityMap||u.specularColorMap||u.sheen>0||u.sheenColorMap||u.sheenRoughnessMap)&&!!u.displacementMap,fog:!!y,useFog:!0===u.fog,fogExp2:y&&y.isFogExp2,flatShading:!!u.flatShading,sizeAttenuation:u.sizeAttenuation,logarithmicDepthBuffer:p,skinning:!0===x.isSkinnedMesh,morphTargets:void 0!==b.morphAttributes.position,morphNormals:void 0!==b.morphAttributes.normal,morphColors:void 0!==b.morphAttributes.color,morphTargetsCount:E,morphTextureStride:C,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numSpotLightMaps:c.spotLightMap.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numDirLightShadows:c.directionalShadowMap.length,numPointLightShadows:c.pointShadowMap.length,numSpotLightShadows:c.spotShadowMap.length,numSpotLightShadowsWithMaps:c.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:u.dithering,shadowMapEnabled:e.shadowMap.enabled&&$.length>0,shadowMapType:e.shadowMap.type,toneMapping:u.toneMapped?e.toneMapping:Xe,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:u.premultipliedAlpha,doubleSided:u.side===an,flipSided:u.side===we,useDepthPacking:!!u.depthPacking,depthPacking:u.depthPacking||0,index0AttributeName:u.index0AttributeName,extensionDerivatives:u.extensions&&u.extensions.derivatives,extensionFragDepth:u.extensions&&u.extensions.fragDepth,extensionDrawBuffers:u.extensions&&u.extensions.drawBuffers,extensionShaderTextureLOD:u.extensions&&u.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||a.has("EXT_shader_texture_lod"),customProgramCacheKey:u.customProgramCacheKey()}},getProgramCacheKey:function t(i){var a,s,o,l;let h=[];if(i.shaderID?h.push(i.shaderID):(h.push(i.customVertexShaderID),h.push(i.customFragmentShaderID)),void 0!==i.defines)for(let c in i.defines)h.push(c),h.push(i.defines[c]);return!1===i.isRawShaderMaterial&&(a=h,s=i,a.push(s.precision),a.push(s.outputEncoding),a.push(s.envMapMode),a.push(s.envMapCubeUVHeight),a.push(s.combine),a.push(s.vertexUvs),a.push(s.fogExp2),a.push(s.sizeAttenuation),a.push(s.morphTargetsCount),a.push(s.morphAttributeCount),a.push(s.numDirLights),a.push(s.numPointLights),a.push(s.numSpotLights),a.push(s.numSpotLightMaps),a.push(s.numHemiLights),a.push(s.numRectAreaLights),a.push(s.numDirLightShadows),a.push(s.numPointLightShadows),a.push(s.numSpotLightShadows),a.push(s.numSpotLightShadowsWithMaps),a.push(s.shadowMapType),a.push(s.toneMapping),a.push(s.numClippingPlanes),a.push(s.numClipIntersection),a.push(s.depthPacking),o=h,l=i,u.disableAll(),l.isWebGL2&&u.enable(0),l.supportsVertexTextures&&u.enable(1),l.instancing&&u.enable(2),l.instancingColor&&u.enable(3),l.map&&u.enable(4),l.matcap&&u.enable(5),l.envMap&&u.enable(6),l.lightMap&&u.enable(7),l.aoMap&&u.enable(8),l.emissiveMap&&u.enable(9),l.bumpMap&&u.enable(10),l.normalMap&&u.enable(11),l.objectSpaceNormalMap&&u.enable(12),l.tangentSpaceNormalMap&&u.enable(13),l.clearcoat&&u.enable(14),l.clearcoatMap&&u.enable(15),l.clearcoatRoughnessMap&&u.enable(16),l.clearcoatNormalMap&&u.enable(17),l.iridescence&&u.enable(18),l.iridescenceMap&&u.enable(19),l.iridescenceThicknessMap&&u.enable(20),l.displacementMap&&u.enable(21),l.specularMap&&u.enable(22),l.roughnessMap&&u.enable(23),l.metalnessMap&&u.enable(24),l.gradientMap&&u.enable(25),l.alphaMap&&u.enable(26),l.alphaTest&&u.enable(27),l.vertexColors&&u.enable(28),l.vertexAlphas&&u.enable(29),l.vertexUvs&&u.enable(30),l.vertexTangents&&u.enable(31),l.uvsVertexOnly&&u.enable(32),o.push(u.mask),u.disableAll(),l.fog&&u.enable(0),l.useFog&&u.enable(1),l.flatShading&&u.enable(2),l.logarithmicDepthBuffer&&u.enable(3),l.skinning&&u.enable(4),l.morphTargets&&u.enable(5),l.morphNormals&&u.enable(6),l.morphColors&&u.enable(7),l.premultipliedAlpha&&u.enable(8),l.shadowMapEnabled&&u.enable(9),l.physicallyCorrectLights&&u.enable(10),l.doubleSided&&u.enable(11),l.flipSided&&u.enable(12),l.useDepthPacking&&u.enable(13),l.dithering&&u.enable(14),l.specularIntensityMap&&u.enable(15),l.specularColorMap&&u.enable(16),l.transmission&&u.enable(17),l.transmissionMap&&u.enable(18),l.thicknessMap&&u.enable(19),l.sheen&&u.enable(20),l.sheenColorMap&&u.enable(21),l.sheenRoughnessMap&&u.enable(22),l.decodeVideoTexture&&u.enable(23),l.opaque&&u.enable(24),o.push(u.mask),h.push(e.outputEncoding)),h.push(i.customProgramCacheKey),h.join()},getUniforms:function e(t){let i=g[t.type],a;if(i){let s=Ne[i];a=Ml.clone(s.uniforms)}else a=t.uniforms;return a},acquireProgram:function t(i,a){let s;for(let l=0,u=c.length;l<u;l++){let h=c[l];if(h.cacheKey===a){s=h,++s.usedTimes;break}}return void 0===s&&(s=new Ad(e,a,i,o),c.push(s)),s},releaseProgram:function e(t){0==--t.usedTimes&&(c[c.indexOf(t)]=c[c.length-1],c.pop(),t.destroy())},releaseShaderCache:function e(t){h.remove(t)},programs:c,dispose:function e(){h.dispose()}}}function Pd(){let e=new WeakMap;return{get:function t(i){let a=e.get(i);return void 0===a&&(a={},e.set(i,a)),a},remove:function t(i){e.delete(i)},update:function t(i,a,s){e.get(i)[a]=s},dispose:function t(){e=new WeakMap}}}function Rd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ba(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ka(){let e=[],t=0,i=[],a=[],s=[];function o(i,a,s,o,l,u){let h=e[t];return void 0===h?(h={id:i.id,object:i,geometry:a,material:s,groupOrder:o,renderOrder:i.renderOrder,z:l,group:u},e[t]=h):(h.id=i.id,h.object=i,h.geometry=a,h.material=s,h.groupOrder=o,h.renderOrder=i.renderOrder,h.z=l,h.group=u),t++,h}return{opaque:i,transmissive:a,transparent:s,init:function e(){t=0,i.length=0,a.length=0,s.length=0},push:function e(t,l,u,h,c,d){let p=o(t,l,u,h,c,d);u.transmission>0?a.push(p):!0===u.transparent?s.push(p):i.push(p)},unshift:function e(t,l,u,h,c,d){let p=o(t,l,u,h,c,d);u.transmission>0?a.unshift(p):!0===u.transparent?s.unshift(p):i.unshift(p)},finish:function i(){for(let a=t,s=e.length;a<s;a++){let o=e[a];if(null===o.id)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}},sort:function e(t,o){i.length>1&&i.sort(t||Rd),a.length>1&&a.sort(o||Ba),s.length>1&&s.sort(o||Ba)}}}function Ld(){let e=new WeakMap;return{get:function t(i,a){let s=e.get(i),o;return void 0===s?(o=new ka,e.set(i,[o])):a>=s.length?(o=new ka,s.push(o)):o=s[a],o},dispose:function t(){e=new WeakMap}}}function Id(){let e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new D,color:new zt};break;case"SpotLight":i={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new D,halfWidth:new D,halfHeight:new D}}return e[t.id]=i,i}}}function Dd(){let e={};return{get:function(t){if(void 0!==e[t.id])return e[t.id];let i;switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var Nd=0;function Fd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function zd(e,t){let i=new Id,a=Dd(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let o=0;o<9;o++)s.probe.push(new D);let l=new D,u=new Xt,h=new Xt;return{setup:function o(l,u){let h=0,c=0,d=0;for(let p=0;p<9;p++)s.probe[p].set(0,0,0);let f=0,m=0,g=0,$=0,v=0,x=0,y=0,b=0,S=0,_=0;l.sort(Fd);let M=!0!==u?Math.PI:1;for(let w=0,T=l.length;w<T;w++){let E=l[w],C=E.color,A=E.intensity,L=E.distance,P=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=C.r*A*M,c+=C.g*A*M,d+=C.b*A*M;else if(E.isLightProbe)for(let R=0;R<9;R++)s.probe[R].addScaledVector(E.sh.coefficients[R],A);else if(E.isDirectionalLight){let I=i.get(E);if(I.color.copy(E.color).multiplyScalar(E.intensity*M),E.castShadow){let N=E.shadow,z=a.get(E);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,s.directionalShadow[f]=z,s.directionalShadowMap[f]=P,s.directionalShadowMatrix[f]=E.shadow.matrix,x++}s.directional[f]=I,f++}else if(E.isSpotLight){let U=i.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(C).multiplyScalar(A*M),U.distance=L,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,s.spot[g]=U;let O=E.shadow;if(E.map&&(s.spotLightMap[S]=E.map,S++,O.updateMatrices(E),E.castShadow&&_++),s.spotLightMatrix[g]=O.matrix,E.castShadow){let F=a.get(E);F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,s.spotShadow[g]=F,s.spotShadowMap[g]=P,b++}g++}else if(E.isRectAreaLight){let B=i.get(E);B.color.copy(C).multiplyScalar(A),B.halfWidth.set(.5*E.width,0,0),B.halfHeight.set(0,.5*E.height,0),s.rectArea[$]=B,$++}else if(E.isPointLight){let V=i.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity*M),V.distance=E.distance,V.decay=E.decay,E.castShadow){let H=E.shadow,G=a.get(E);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,s.pointShadow[m]=G,s.pointShadowMap[m]=P,s.pointShadowMatrix[m]=E.shadow.matrix,y++}s.point[m]=V,m++}else if(E.isHemisphereLight){let k=i.get(E);k.skyColor.copy(E.color).multiplyScalar(A*M),k.groundColor.copy(E.groundColor).multiplyScalar(A*M),s.hemi[v]=k,v++}}$>0&&(t.isWebGL2||!0===e.has("OES_texture_float_linear")?(s.rectAreaLTC1=et.LTC_FLOAT_1,s.rectAreaLTC2=et.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(s.rectAreaLTC1=et.LTC_HALF_1,s.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=c,s.ambient[2]=d;let W=s.hash;(W.directionalLength!==f||W.pointLength!==m||W.spotLength!==g||W.rectAreaLength!==$||W.hemiLength!==v||W.numDirectionalShadows!==x||W.numPointShadows!==y||W.numSpotShadows!==b||W.numSpotMaps!==S)&&(s.directional.length=f,s.spot.length=g,s.rectArea.length=$,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=b+S-_,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=_,W.directionalLength=f,W.pointLength=m,W.spotLength=g,W.rectAreaLength=$,W.hemiLength=v,W.numDirectionalShadows=x,W.numPointShadows=y,W.numSpotShadows=b,W.numSpotMaps=S,s.version=Nd++)},setupView:function e(t,i){let a=0,o=0,c=0,d=0,p=0,f=i.matrixWorldInverse;for(let m=0,g=t.length;m<g;m++){let $=t[m];if($.isDirectionalLight){let v=s.directional[a];v.direction.setFromMatrixPosition($.matrixWorld),l.setFromMatrixPosition($.target.matrixWorld),v.direction.sub(l),v.direction.transformDirection(f),a++}else if($.isSpotLight){let x=s.spot[c];x.position.setFromMatrixPosition($.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition($.matrixWorld),l.setFromMatrixPosition($.target.matrixWorld),x.direction.sub(l),x.direction.transformDirection(f),c++}else if($.isRectAreaLight){let y=s.rectArea[d];y.position.setFromMatrixPosition($.matrixWorld),y.position.applyMatrix4(f),h.identity(),u.copy($.matrixWorld),u.premultiply(f),h.extractRotation(u),y.halfWidth.set(.5*$.width,0,0),y.halfHeight.set(0,.5*$.height,0),y.halfWidth.applyMatrix4(h),y.halfHeight.applyMatrix4(h),d++}else if($.isPointLight){let b=s.point[o];b.position.setFromMatrixPosition($.matrixWorld),b.position.applyMatrix4(f),o++}else if($.isHemisphereLight){let S=s.hemi[p];S.direction.setFromMatrixPosition($.matrixWorld),S.direction.transformDirection(f),p++}}},state:s}}function Va(e,t){let i=new zd(e,t),a=[],s=[];return{init:function e(){a.length=0,s.length=0},state:{lightsArray:a,shadowsArray:s,lights:i},setupLights:function e(t){i.setup(a,t)},setupLightsView:function e(t){i.setupView(a,t)},pushLight:function e(t){a.push(t)},pushShadow:function e(t){s.push(t)}}}function Od(e,t){let i=new WeakMap;return{get:function a(s,o=0){let l=i.get(s),u;return void 0===l?(u=new Va(e,t),i.set(s,[u])):o>=l.length?(u=new Va(e,t),l.push(u)):u=l[o],u},dispose:function e(){i=new WeakMap}}}var ar=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},or=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ud=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kd(e,t,i){let a=new ts,s=new Nt,o=new Nt,l=new qt,u=new ar({depthPacking:sl}),h=new or,c={},d=i.maxTextureSize,p={0:we,1:$n,2:an},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Ud,fragmentShader:Bd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let $=new Fe(g,f),v=this;function x(i,a){let o=t.update($);f.defines.VSM_SAMPLES!==i.blurSamples&&(f.defines.VSM_SAMPLES=i.blurSamples,m.defines.VSM_SAMPLES=i.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new Ze(s.x,s.y)),f.uniforms.shadow_pass.value=i.map.texture,f.uniforms.resolution.value=i.mapSize,f.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(a,null,o,f,$,null),m.uniforms.shadow_pass.value=i.mapPass.texture,m.uniforms.resolution.value=i.mapSize,m.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(a,null,o,m,$,null)}function y(t,i,a,s,o,l){let d=null,f=!0===a.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(d=void 0!==f?f:!0===a.isPointLight?h:u,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){let m=d.uuid,g=i.uuid,$=c[m];void 0===$&&($={},c[m]=$);let v=$[g];void 0===v&&(v=d.clone(),$[g]=v),d=v}return d.visible=i.visible,d.wireframe=i.wireframe,l===hi?d.side=null!==i.shadowSide?i.shadowSide:i.side:d.side=null!==i.shadowSide?i.shadowSide:p[i.side],d.alphaMap=i.alphaMap,d.alphaTest=i.alphaTest,d.map=i.map,d.clipShadows=i.clipShadows,d.clippingPlanes=i.clippingPlanes,d.clipIntersection=i.clipIntersection,d.displacementMap=i.displacementMap,d.displacementScale=i.displacementScale,d.displacementBias=i.displacementBias,d.wireframeLinewidth=i.wireframeLinewidth,d.linewidth=i.linewidth,!0===a.isPointLight&&!0===d.isMeshDistanceMaterial&&(d.referencePosition.setFromMatrixPosition(a.matrixWorld),d.nearDistance=s,d.farDistance=o),d}function b(i,s,o,l,u){if(!1===i.visible)return;if(i.layers.test(s.layers)&&(i.isMesh||i.isLine||i.isPoints)&&(i.castShadow||i.receiveShadow&&u===hi)&&(!i.frustumCulled||a.intersectsObject(i))){i.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,i.matrixWorld);let h=t.update(i),c=i.material;if(Array.isArray(c)){let d=h.groups;for(let p=0,f=d.length;p<f;p++){let m=d[p],g=c[m.materialIndex];if(g&&g.visible){let $=y(i,g,l,o.near,o.far,u);e.renderBufferDirect(o,null,h,$,i,m)}}}else if(c.visible){let v=y(i,c,l,o.near,o.far,u);e.renderBufferDirect(o,null,h,v,i,null)}}let x=i.children;for(let S=0,_=x.length;S<_;S++)b(x[S],s,o,l,u)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha,this.render=function(t,i,u){if(!1===v.enabled||!1===v.autoUpdate&&!1===v.needsUpdate||0===t.length)return;let h=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.state;f.setBlending(on),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);for(let m=0,g=t.length;m<g;m++){let $=t[m],y=$.shadow;if(void 0===y){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(!1===y.autoUpdate&&!1===y.needsUpdate)continue;s.copy(y.mapSize);let S=y.getFrameExtents();if(s.multiply(S),o.copy(y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/S.x),s.x=o.x*S.x,y.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/S.y),s.y=o.y*S.y,y.mapSize.y=o.y)),null===y.map){let _=this.type!==hi?{minFilter:he,magFilter:he}:{};y.map=new Ze(s.x,s.y,_),y.map.texture.name=$.name+".shadowMap",y.camera.updateProjectionMatrix()}e.setRenderTarget(y.map),e.clear();let M=y.getViewportCount();for(let w=0;w<M;w++){let T=y.getViewport(w);l.set(o.x*T.x,o.y*T.y,o.x*T.z,o.y*T.w),f.viewport(l),y.updateMatrices($,w),a=y.getFrustum(),b(i,u,y.camera,$,this.type)}!0!==y.isPointLightShadow&&this.type===hi&&x(y,u),y.needsUpdate=!1}v.needsUpdate=!1,e.setRenderTarget(h,c,p)}}function Vd(e,t,i){let a=i.isWebGL2,s=new function t(){let i=!1,a=new qt,s=null,o=new qt(0,0,0,0);return{setMask:function(t){s===t||i||(e.colorMask(t,t,t,t),s=t)},setLocked:function(e){i=e},setClear:function(t,i,s,l,u){!0===u&&(t*=l,i*=l,s*=l),a.set(t,i,s,l),!1===o.equals(a)&&(e.clearColor(t,i,s,l),o.copy(a))},reset:function(){i=!1,s=null,o.set(-1,0,0,0)}}},o=new function t(){let i=!1,a=null,s=null,o=null;return{setTest:function(e){e?G(2929):k(2929)},setMask:function(t){a===t||i||(e.depthMask(t),a=t)},setFunc:function(t){if(s!==t){switch(t){case Eo:e.depthFunc(512);break;case Co:e.depthFunc(519);break;case Po:e.depthFunc(513);break;case Hs:e.depthFunc(515);break;case Ro:e.depthFunc(514);break;case Lo:e.depthFunc(518);break;case Io:e.depthFunc(516);break;case Do:e.depthFunc(517);break;default:e.depthFunc(515)}s=t}},setLocked:function(e){i=e},setClear:function(t){o!==t&&(e.clearDepth(t),o=t)},reset:function(){i=!1,a=null,s=null,o=null}}},l=new function t(){let i=!1,a=null,s=null,o=null,l=null,u=null,h=null,c=null,d=null;return{setTest:function(e){i||(e?G(2960):k(2960))},setMask:function(t){a===t||i||(e.stencilMask(t),a=t)},setFunc:function(t,i,a){(s!==t||o!==i||l!==a)&&(e.stencilFunc(t,i,a),s=t,o=i,l=a)},setOp:function(t,i,a){(u!==t||h!==i||c!==a)&&(e.stencilOp(t,i,a),u=t,h=i,c=a)},setLocked:function(e){i=e},setClear:function(t){d!==t&&(e.clearStencil(t),d=t)},reset:function(){i=!1,a=null,s=null,o=null,l=null,u=null,h=null,c=null,d=null}}},u=new WeakMap,h=new WeakMap,c={},d={},p=new WeakMap,f=[],m=null,g=!1,$=null,v=null,x=null,y=null,b=null,S=null,_=null,M=!1,w=null,T=null,E=null,C=null,A=null,L=e.getParameter(35661),P=!1,R=0,I=e.getParameter(7938);-1!==I.indexOf("WebGL")?P=(R=parseFloat(/^WebGL (\d)/.exec(I)[1]))>=1:-1!==I.indexOf("OpenGL ES")&&(P=(R=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]))>=2);let N=null,z={},U=e.getParameter(3088),O=e.getParameter(2978),F=new qt().fromArray(U),B=new qt().fromArray(O);function V(t,i,a){let s=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let l=0;l<a;l++)e.texImage2D(i+l,0,6408,1,1,0,6408,5121,s);return o}let H={};function G(t){!0!==c[t]&&(e.enable(t),c[t]=!0)}function k(t){!1!==c[t]&&(e.disable(t),c[t]=!1)}H[3553]=V(3553,3553,1),H[34067]=V(34067,34069,6),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),G(2929),o.setFunc(Hs),Y(!1),Z(Pr),G(2884),X(on);let W={[Wn]:32774,[go]:32778,[xo]:32779};if(a)W[Dr]=32775,W[Nr]=32776;else{let j=t.get("EXT_blend_minmax");null!==j&&(W[Dr]=j.MIN_EXT,W[Nr]=j.MAX_EXT)}let q={[_o]:0,[vo]:1,[yo]:768,[Ga]:770,[Ao]:776,[So]:774,[bo]:772,[Mo]:769,[Wa]:771,[To]:775,[wo]:773};function X(t,i,a,s,o,l,u,h){if(t===on){!0===g&&(k(3042),g=!1);return}if(!1===g&&(G(3042),g=!0),t!==mo){if(t!==$||h!==M){if((v!==Wn||b!==Wn)&&(e.blendEquation(32774),v=Wn,b=Wn),h)switch(t){case Yn:e.blendFuncSeparate(1,771,1,771);break;case Rr:e.blendFunc(1,1);break;case Lr:e.blendFuncSeparate(0,769,0,1);break;case Ir:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case Yn:e.blendFuncSeparate(770,771,1,771);break;case Rr:e.blendFunc(770,1);break;case Lr:e.blendFuncSeparate(0,769,0,1);break;case Ir:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}x=null,y=null,S=null,_=null,$=t,M=h}return}o=o||i,l=l||a,u=u||s,(i!==v||o!==b)&&(e.blendEquationSeparate(W[i],W[o]),v=i,b=o),(a!==x||s!==y||l!==S||u!==_)&&(e.blendFuncSeparate(q[a],q[s],q[l],q[u]),x=a,y=s,S=l,_=u),$=t,M=!1}function Y(t){w!==t&&(t?e.frontFace(2304):e.frontFace(2305),w=t)}function Z(t){t!==uo?(G(2884),t!==T&&(t===Pr?e.cullFace(1029):t===fo?e.cullFace(1028):e.cullFace(1032))):k(2884),T=t}function K(t,i,a){t?(G(32823),(C!==i||A!==a)&&(e.polygonOffset(i,a),C=i,A=a)):k(32823)}return{buffers:{color:s,depth:o,stencil:l},enable:G,disable:k,bindFramebuffer:function t(i,s){return d[i]!==s&&(e.bindFramebuffer(i,s),d[i]=s,a&&(36009===i&&(d[36160]=s),36160===i&&(d[36009]=s)),!0)},drawBuffers:function a(s,o){let l=f,u=!1;if(s){if(void 0===(l=p.get(o))&&(l=[],p.set(o,l)),s.isWebGLMultipleRenderTargets){let h=s.texture;if(l.length!==h.length||36064!==l[0]){for(let c=0,d=h.length;c<d;c++)l[c]=36064+c;l.length=h.length,u=!0}}else 36064!==l[0]&&(l[0]=36064,u=!0)}else 1029!==l[0]&&(l[0]=1029,u=!0);u&&(i.isWebGL2?e.drawBuffers(l):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(l))},useProgram:function t(i){return m!==i&&(e.useProgram(i),m=i,!0)},setBlending:X,setMaterial:function e(t,i){t.side===an?k(2884):G(2884);let a=t.side===we;i&&(a=!a),Y(a),t.blending===Yn&&!1===t.transparent?X(on):X(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),s.setMask(t.colorWrite);let u=t.stencilWrite;l.setTest(u),u&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),K(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?G(32926):k(32926)},setFlipSided:Y,setCullFace:Z,setLineWidth:function t(i){i!==E&&(P&&e.lineWidth(i),E=i)},setPolygonOffset:K,setScissorTest:function e(t){t?G(3089):k(3089)},activeTexture:function t(i){void 0===i&&(i=33984+L-1),N!==i&&(e.activeTexture(i),N=i)},bindTexture:function t(i,a,s){void 0===s&&(s=null===N?33984+L-1:N);let o=z[s];void 0===o&&(o={type:void 0,texture:void 0},z[s]=o),(o.type!==i||o.texture!==a)&&(N!==s&&(e.activeTexture(s),N=s),e.bindTexture(i,a||H[i]),o.type=i,o.texture=a)},unbindTexture:function t(){let i=z[N];void 0!==i&&void 0!==i.type&&(e.bindTexture(i.type,null),i.type=void 0,i.texture=void 0)},compressedTexImage2D:function t(){try{e.compressedTexImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexImage3D:function t(){try{e.compressedTexImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texImage2D:function t(){try{e.texImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texImage3D:function t(){try{e.texImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},updateUBOMapping:function t(i,a){let s=h.get(a);void 0===s&&(s=new WeakMap,h.set(a,s));let o=s.get(i);void 0===o&&(o=e.getUniformBlockIndex(a,i.name),s.set(i,o))},uniformBlockBinding:function t(i,a){let s=h.get(a).get(i);u.get(i)!==s&&(e.uniformBlockBinding(a,s,i.__bindingPointIndex),u.set(i,s))},texStorage2D:function t(){try{e.texStorage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texStorage3D:function t(){try{e.texStorage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texSubImage2D:function t(){try{e.texSubImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},texSubImage3D:function t(){try{e.texSubImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexSubImage2D:function t(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},compressedTexSubImage3D:function t(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(i){console.error("THREE.WebGLState:",i)}},scissor:function t(i){!1===F.equals(i)&&(e.scissor(i.x,i.y,i.z,i.w),F.copy(i))},viewport:function t(i){!1===B.equals(i)&&(e.viewport(i.x,i.y,i.z,i.w),B.copy(i))},reset:function t(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===a&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},N=null,z={},d={},p=new WeakMap,f=[],m=null,g=!1,$=null,v=null,x=null,y=null,b=null,S=null,_=null,M=!1,w=null,T=null,E=null,C=null,A=null,F.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),l.reset()}}}function Hd(e,t,i,a,s,o,l){let u=s.isWebGL2,h=s.maxTextures,c=s.maxCubemapSize,d=s.maxTextureSize,p=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,$,v=new WeakMap,x=!1;try{x="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(y){}function b(e,t){return x?new OffscreenCanvas(e,t):Wi("canvas")}function S(e,t,i,a){let s=1;if((e.width>a||e.height>a)&&(s=a/Math.max(e.width,e.height)),s<1||!0===t){if(!("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e;{let o=t?Zs:Math.floor,l=o(s*e.width),u=o(s*e.height);void 0===$&&($=b(l,u));let h=i?b(l,u):$;return h.width=l,h.height=u,h.getContext("2d").drawImage(e,0,0,l,u),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+l+"x"+u+")."),h}}return e}function _(e){return ha(e.width)&&ha(e.height)}function M(e,t){return e.generateMipmaps&&t&&e.minFilter!==he&&e.minFilter!==be}function w(t){e.generateMipmap(t)}function T(i,a,s,o,l=!1){if(!1===u)return a;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let h=a;return 6403===a&&(5126===s&&(h=33326),5131===s&&(h=33325),5121===s&&(h=33321)),33319===a&&(5126===s&&(h=33328),5131===s&&(h=33327),5121===s&&(h=33323)),6408===a&&(5126===s&&(h=34836),5131===s&&(h=34842),5121===s&&(h=o===Bt&&!1===l?35907:32856),32819===s&&(h=32854),32820===s&&(h=32855)),(33325===h||33326===h||33327===h||33328===h||34842===h||34836===h)&&t.get("EXT_color_buffer_float"),h}function E(e,t,i){return!0===M(e,i)||e.isFramebufferTexture&&e.minFilter!==he&&e.minFilter!==be?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){return e===he||e===Fr||e===zr?9728:9729}function A(e){let t=e.target;t.removeEventListener("dispose",A),function e(t){let i=a.get(t);if(void 0===i.__webglInit)return;let s=t.source,o=v.get(s);if(o){let l=o[i.__cacheKey];l.usedTimes--,0===l.usedTimes&&P(t),0===Object.keys(o).length&&v.delete(s)}a.remove(t)}(t),t.isVideoTexture&&g.delete(t)}function L(t){let i=t.target;i.removeEventListener("dispose",L),function t(i){let s=i.texture,o=a.get(i),u=a.get(s);if(void 0!==u.__webglTexture&&(e.deleteTexture(u.__webglTexture),l.memory.textures--),i.depthTexture&&i.depthTexture.dispose(),i.isWebGLCubeRenderTarget)for(let h=0;h<6;h++)e.deleteFramebuffer(o.__webglFramebuffer[h]),o.__webglDepthbuffer&&e.deleteRenderbuffer(o.__webglDepthbuffer[h]);else{if(e.deleteFramebuffer(o.__webglFramebuffer),o.__webglDepthbuffer&&e.deleteRenderbuffer(o.__webglDepthbuffer),o.__webglMultisampledFramebuffer&&e.deleteFramebuffer(o.__webglMultisampledFramebuffer),o.__webglColorRenderbuffer)for(let c=0;c<o.__webglColorRenderbuffer.length;c++)o.__webglColorRenderbuffer[c]&&e.deleteRenderbuffer(o.__webglColorRenderbuffer[c]);o.__webglDepthRenderbuffer&&e.deleteRenderbuffer(o.__webglDepthRenderbuffer)}if(i.isWebGLMultipleRenderTargets)for(let d=0,p=s.length;d<p;d++){let f=a.get(s[d]);f.__webglTexture&&(e.deleteTexture(f.__webglTexture),l.memory.textures--),a.remove(s[d])}a.remove(s),a.remove(i)}(i)}function P(t){let i=a.get(t);e.deleteTexture(i.__webglTexture);let s=t.source;delete v.get(s)[i.__cacheKey],l.memory.textures--}let R=0;function I(e,t){var s;let o=a.get(e),u;if(e.isVideoTexture&&(s=e,u=l.render.frame,g.get(s)!==u&&(g.set(s,u),s.update())),!1===e.isRenderTargetTexture&&e.version>0&&o.__version!==e.version){let h=e.image;if(null===h)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(!1===h.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(o,e,t);return}}i.bindTexture(3553,o.__webglTexture,33984+t)}let N={[qs]:10497,[Pe]:33071,[Xs]:33648},z={[he]:9728,[Fr]:9984,[zr]:9986,[be]:9729,[Vo]:9985,[is]:9987};function U(i,o,l){if(l?(e.texParameteri(i,10242,N[o.wrapS]),e.texParameteri(i,10243,N[o.wrapT]),(32879===i||35866===i)&&e.texParameteri(i,32882,N[o.wrapR]),e.texParameteri(i,10240,z[o.magFilter]),e.texParameteri(i,10241,z[o.minFilter])):(e.texParameteri(i,10242,33071),e.texParameteri(i,10243,33071),(32879===i||35866===i)&&e.texParameteri(i,32882,33071),(o.wrapS!==Pe||o.wrapT!==Pe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,10240,C(o.magFilter)),e.texParameteri(i,10241,C(o.minFilter)),o.minFilter!==he&&o.minFilter!==be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===t.has("EXT_texture_filter_anisotropic")){let h=t.get("EXT_texture_filter_anisotropic");(o.type!==vn||!1!==t.has("OES_texture_float_linear"))&&(!1!==u||o.type!==fi||!1!==t.has("OES_texture_half_float_linear"))&&(o.anisotropy>1||a.get(o).__currentAnisotropy)&&(e.texParameterf(i,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,s.getMaxAnisotropy())),a.get(o).__currentAnisotropy=o.anisotropy)}}function O(t,i){var a;let s=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",A));let o=i.source,u=v.get(o);void 0===u&&(u={},v.set(o,u));let h,c=(a=i,(h=[]).push(a.wrapS),h.push(a.wrapT),h.push(a.wrapR||0),h.push(a.magFilter),h.push(a.minFilter),h.push(a.anisotropy),h.push(a.internalFormat),h.push(a.format),h.push(a.type),h.push(a.generateMipmaps),h.push(a.premultiplyAlpha),h.push(a.flipY),h.push(a.unpackAlignment),h.push(a.encoding),h.join());if(c!==t.__cacheKey){void 0===u[c]&&(u[c]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,s=!0),u[c].usedTimes++;let d=u[t.__cacheKey];void 0!==d&&(u[t.__cacheKey].usedTimes--,0===d.usedTimes&&P(i)),t.__cacheKey=c,t.__webglTexture=u[c].texture}return s}function F(t,s,l){let h=3553;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(h=35866),s.isData3DTexture&&(h=32879);let c=O(t,s),p=s.source;i.bindTexture(h,t.__webglTexture,33984+l);let f=a.get(p);if(p.version!==f.__version||!0===c){var m;i.activeTexture(33984+l),e.pixelStorei(37440,s.flipY),e.pixelStorei(37441,s.premultiplyAlpha),e.pixelStorei(3317,s.unpackAlignment),e.pixelStorei(37443,0);let g=(m=s,!u&&(m.wrapS!==Pe||m.wrapT!==Pe||m.minFilter!==he&&m.minFilter!==be)&&!1===_(s.image)),$=S(s.image,g,!1,d);$=W(s,$);let v=_($)||u,x=o.convert(s.format,s.encoding),y=o.convert(s.type),b=T(s.internalFormat,x,y,s.encoding,s.isVideoTexture);U(h,s,v);let C,A=s.mipmaps,L=u&&!0!==s.isVideoTexture,P=void 0===f.__version||!0===c,R=E(s,$,v);if(s.isDepthTexture)b=6402,u?b=s.type===vn?36012:s.type===_n?33190:s.type===Zn?35056:33189:s.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),s.format===yn&&6402===b&&s.type!==Ya&&s.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),s.type=_n,y=o.convert(s.type)),s.format===Qn&&6402===b&&(b=34041,s.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),s.type=Zn,y=o.convert(s.type))),P&&(L?i.texStorage2D(3553,1,b,$.width,$.height):i.texImage2D(3553,0,b,$.width,$.height,0,x,y,null));else if(s.isDataTexture){if(A.length>0&&v){L&&P&&i.texStorage2D(3553,R,b,A[0].width,A[0].height);for(let I=0,N=A.length;I<N;I++)C=A[I],L?i.texSubImage2D(3553,I,0,0,C.width,C.height,x,y,C.data):i.texImage2D(3553,I,b,C.width,C.height,0,x,y,C.data);s.generateMipmaps=!1}else L?(P&&i.texStorage2D(3553,R,b,$.width,$.height),i.texSubImage2D(3553,0,0,0,$.width,$.height,x,y,$.data)):i.texImage2D(3553,0,b,$.width,$.height,0,x,y,$.data)}else if(s.isCompressedTexture){if(s.isCompressedArrayTexture){L&&P&&i.texStorage3D(35866,R,b,A[0].width,A[0].height,$.depth);for(let z=0,F=A.length;z<F;z++)C=A[z],s.format!==Re?null!==x?L?i.compressedTexSubImage3D(35866,z,0,0,0,C.width,C.height,$.depth,x,C.data,0,0):i.compressedTexImage3D(35866,z,b,C.width,C.height,$.depth,0,C.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage3D(35866,z,0,0,0,C.width,C.height,$.depth,x,y,C.data):i.texImage3D(35866,z,b,C.width,C.height,$.depth,0,x,y,C.data)}else{L&&P&&i.texStorage2D(3553,R,b,A[0].width,A[0].height);for(let B=0,V=A.length;B<V;B++)C=A[B],s.format!==Re?null!==x?L?i.compressedTexSubImage2D(3553,B,0,0,C.width,C.height,x,C.data):i.compressedTexImage2D(3553,B,b,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage2D(3553,B,0,0,C.width,C.height,x,y,C.data):i.texImage2D(3553,B,b,C.width,C.height,0,x,y,C.data)}}else if(s.isDataArrayTexture)L?(P&&i.texStorage3D(35866,R,b,$.width,$.height,$.depth),i.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,x,y,$.data)):i.texImage3D(35866,0,b,$.width,$.height,$.depth,0,x,y,$.data);else if(s.isData3DTexture)L?(P&&i.texStorage3D(32879,R,b,$.width,$.height,$.depth),i.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,x,y,$.data)):i.texImage3D(32879,0,b,$.width,$.height,$.depth,0,x,y,$.data);else if(s.isFramebufferTexture){if(P){if(L)i.texStorage2D(3553,R,b,$.width,$.height);else{let H=$.width,G=$.height;for(let k=0;k<R;k++)i.texImage2D(3553,k,b,H,G,0,x,y,null),H>>=1,G>>=1}}}else if(A.length>0&&v){L&&P&&i.texStorage2D(3553,R,b,A[0].width,A[0].height);for(let j=0,q=A.length;j<q;j++)C=A[j],L?i.texSubImage2D(3553,j,0,0,x,y,C):i.texImage2D(3553,j,b,x,y,C);s.generateMipmaps=!1}else L?(P&&i.texStorage2D(3553,R,b,$.width,$.height),i.texSubImage2D(3553,0,0,0,x,y,$)):i.texImage2D(3553,0,b,x,y,$);M(s,v)&&w(h),f.__version=p.version,s.onUpdate&&s.onUpdate(s)}t.__version=s.version}function B(t,s,l,u,h){let c=o.convert(l.format,l.encoding),d=o.convert(l.type),p=T(l.internalFormat,c,d,l.encoding);a.get(s).__hasExternalTextures||(32879===h||35866===h?i.texImage3D(h,0,p,s.width,s.height,s.depth,0,c,d,null):i.texImage2D(h,0,p,s.width,s.height,0,c,d,null)),i.bindFramebuffer(36160,t),k(s)?f.framebufferTexture2DMultisampleEXT(36160,u,h,a.get(l).__webglTexture,0,G(s)):(3553===h||h>=34069&&h<=34074)&&e.framebufferTexture2D(36160,u,h,a.get(l).__webglTexture,0),i.bindFramebuffer(36160,null)}function V(t,i,a){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let s=33189;if(a||k(i)){let l=i.depthTexture;l&&l.isDepthTexture&&(l.type===vn?s=36012:l.type===_n&&(s=33190));let u=G(i);k(i)?f.renderbufferStorageMultisampleEXT(36161,u,s,i.width,i.height):e.renderbufferStorageMultisample(36161,u,s,i.width,i.height)}else e.renderbufferStorage(36161,s,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){let h=G(i);a&&!1===k(i)?e.renderbufferStorageMultisample(36161,h,35056,i.width,i.height):k(i)?f.renderbufferStorageMultisampleEXT(36161,h,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let c=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let d=0;d<c.length;d++){let p=c[d],m=o.convert(p.format,p.encoding),g=o.convert(p.type),$=T(p.internalFormat,m,g,p.encoding),v=G(i);a&&!1===k(i)?e.renderbufferStorageMultisample(36161,v,$,i.width,i.height):k(i)?f.renderbufferStorageMultisampleEXT(36161,v,$,i.width,i.height):e.renderbufferStorage(36161,$,i.width,i.height)}}e.bindRenderbuffer(36161,null)}function H(t){let s=a.get(t),o=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!s.__autoAllocateDepthBuffer){if(o)throw Error("target.depthTexture not supported in Cube render targets");!function t(s,o){if(o&&o.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,s),!(o.depthTexture&&o.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");a.get(o.depthTexture).__webglTexture&&o.depthTexture.image.width===o.width&&o.depthTexture.image.height===o.height||(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),I(o.depthTexture,0);let l=a.get(o.depthTexture).__webglTexture,u=G(o);if(o.depthTexture.format===yn)k(o)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,l,0,u):e.framebufferTexture2D(36160,36096,3553,l,0);else if(o.depthTexture.format===Qn)k(o)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,l,0,u):e.framebufferTexture2D(36160,33306,3553,l,0);else throw Error("Unknown depthTexture format")}(s.__webglFramebuffer,t)}else if(o){s.__webglDepthbuffer=[];for(let l=0;l<6;l++)i.bindFramebuffer(36160,s.__webglFramebuffer[l]),s.__webglDepthbuffer[l]=e.createRenderbuffer(),V(s.__webglDepthbuffer[l],t,!1)}else i.bindFramebuffer(36160,s.__webglFramebuffer),s.__webglDepthbuffer=e.createRenderbuffer(),V(s.__webglDepthbuffer,t,!1);i.bindFramebuffer(36160,null)}function G(e){return Math.min(p,e.samples)}function k(e){let i=a.get(e);return u&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function W(e,i){let a=e.encoding,s=e.format,o=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||e.format===Ys||a!==wn&&(a===Bt?!1===u?!0===t.has("EXT_sRGB")&&s===Re?(e.format=Ys,e.minFilter=be,e.generateMipmaps=!1):i=qi.sRGBToLinear(i):(s!==Re||o!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",a)),i}this.allocateTextureUnit=function e(){let t=R;return t>=h&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+h),R+=1,t},this.resetTextureUnits=function e(){R=0},this.setTexture2D=I,this.setTexture2DArray=function e(t,s){let o=a.get(t);if(t.version>0&&o.__version!==t.version){F(o,t,s);return}i.bindTexture(35866,o.__webglTexture,33984+s)},this.setTexture3D=function e(t,s){let o=a.get(t);if(t.version>0&&o.__version!==t.version){F(o,t,s);return}i.bindTexture(32879,o.__webglTexture,33984+s)},this.setTextureCube=function t(s,l){let h=a.get(s);if(s.version>0&&h.__version!==s.version){(function t(s,l,h){if(6!==l.image.length)return;let d=O(s,l),p=l.source;i.bindTexture(34067,s.__webglTexture,33984+h);let f=a.get(p);if(p.version!==f.__version||!0===d){i.activeTexture(33984+h),e.pixelStorei(37440,l.flipY),e.pixelStorei(37441,l.premultiplyAlpha),e.pixelStorei(3317,l.unpackAlignment),e.pixelStorei(37443,0);let m=l.isCompressedTexture||l.image[0].isCompressedTexture,g=l.image[0]&&l.image[0].isDataTexture,$=[];for(let v=0;v<6;v++)m||g?$[v]=g?l.image[v].image:l.image[v]:$[v]=S(l.image[v],!1,!0,c),$[v]=W(l,$[v]);let x=$[0],y=_(x)||u,b=o.convert(l.format,l.encoding),C=o.convert(l.type),A=T(l.internalFormat,b,C,l.encoding),L=u&&!0!==l.isVideoTexture,P=void 0===f.__version||!0===d,R=E(l,x,y);U(34067,l,y);let I;if(m){L&&P&&i.texStorage2D(34067,R,A,x.width,x.height);for(let N=0;N<6;N++){I=$[N].mipmaps;for(let z=0;z<I.length;z++){let F=I[z];l.format!==Re?null!==b?L?i.compressedTexSubImage2D(34069+N,z,0,0,F.width,F.height,b,F.data):i.compressedTexImage2D(34069+N,z,A,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?i.texSubImage2D(34069+N,z,0,0,F.width,F.height,b,C,F.data):i.texImage2D(34069+N,z,A,F.width,F.height,0,b,C,F.data)}}}else{I=l.mipmaps,L&&P&&(I.length>0&&R++,i.texStorage2D(34067,R,A,$[0].width,$[0].height));for(let B=0;B<6;B++)if(g){L?i.texSubImage2D(34069+B,0,0,0,$[B].width,$[B].height,b,C,$[B].data):i.texImage2D(34069+B,0,A,$[B].width,$[B].height,0,b,C,$[B].data);for(let V=0;V<I.length;V++){let H=I[V].image[B].image;L?i.texSubImage2D(34069+B,V+1,0,0,H.width,H.height,b,C,H.data):i.texImage2D(34069+B,V+1,A,H.width,H.height,0,b,C,H.data)}}else{L?i.texSubImage2D(34069+B,0,0,0,b,C,$[B]):i.texImage2D(34069+B,0,A,b,C,$[B]);for(let G=0;G<I.length;G++){let k=I[G];L?i.texSubImage2D(34069+B,G+1,0,0,b,C,k.image[B]):i.texImage2D(34069+B,G+1,A,b,C,k.image[B])}}}M(l,y)&&w(34067),f.__version=p.version,l.onUpdate&&l.onUpdate(l)}s.__version=l.version})(h,s,l);return}i.bindTexture(34067,h.__webglTexture,33984+l)},this.rebindTextures=function e(t,i,s){let o=a.get(t);void 0!==i&&B(o.__webglFramebuffer,t,t.texture,36064,3553),void 0!==s&&H(t)},this.setupRenderTarget=function t(h){let c=h.texture,d=a.get(h),p=a.get(c);h.addEventListener("dispose",L),!0!==h.isWebGLMultipleRenderTargets&&(void 0===p.__webglTexture&&(p.__webglTexture=e.createTexture()),p.__version=c.version,l.memory.textures++);let f=!0===h.isWebGLCubeRenderTarget,m=!0===h.isWebGLMultipleRenderTargets,g=_(h)||u;if(f){d.__webglFramebuffer=[];for(let $=0;$<6;$++)d.__webglFramebuffer[$]=e.createFramebuffer()}else{if(d.__webglFramebuffer=e.createFramebuffer(),m){if(s.drawBuffers){let v=h.texture;for(let x=0,y=v.length;x<y;x++){let b=a.get(v[x]);void 0===b.__webglTexture&&(b.__webglTexture=e.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")}if(u&&h.samples>0&&!1===k(h)){let S=m?c:[c];d.__webglMultisampledFramebuffer=e.createFramebuffer(),d.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,d.__webglMultisampledFramebuffer);for(let E=0;E<S.length;E++){let C=S[E];d.__webglColorRenderbuffer[E]=e.createRenderbuffer(),e.bindRenderbuffer(36161,d.__webglColorRenderbuffer[E]);let A=o.convert(C.format,C.encoding),P=o.convert(C.type),R=T(C.internalFormat,A,P,C.encoding,!0===h.isXRRenderTarget),I=G(h);e.renderbufferStorageMultisample(36161,I,R,h.width,h.height),e.framebufferRenderbuffer(36160,36064+E,36161,d.__webglColorRenderbuffer[E])}e.bindRenderbuffer(36161,null),h.depthBuffer&&(d.__webglDepthRenderbuffer=e.createRenderbuffer(),V(d.__webglDepthRenderbuffer,h,!0)),i.bindFramebuffer(36160,null)}}if(f){i.bindTexture(34067,p.__webglTexture),U(34067,c,g);for(let N=0;N<6;N++)B(d.__webglFramebuffer[N],h,c,36064,34069+N);M(c,g)&&w(34067),i.unbindTexture()}else if(m){let z=h.texture;for(let O=0,F=z.length;O<F;O++){let W=z[O],j=a.get(W);i.bindTexture(3553,j.__webglTexture),U(3553,W,g),B(d.__webglFramebuffer,h,W,36064+O,3553),M(W,g)&&w(3553)}i.unbindTexture()}else{let q=3553;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(u?q=h.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(q,p.__webglTexture),U(q,c,g),B(d.__webglFramebuffer,h,c,36064,q),M(c,g)&&w(q),i.unbindTexture()}h.depthBuffer&&H(h)},this.updateRenderTargetMipmap=function e(t){let s=_(t)||u,o=!0===t.isWebGLMultipleRenderTargets?t.texture:[t.texture];for(let l=0,h=o.length;l<h;l++){let c=o[l];if(M(c,s)){let d=t.isWebGLCubeRenderTarget?34067:3553,p=a.get(c).__webglTexture;i.bindTexture(d,p),w(d),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function t(s){if(u&&s.samples>0&&!1===k(s)){let o=s.isWebGLMultipleRenderTargets?s.texture:[s.texture],l=s.width,h=s.height,c=16384,d=[],p=s.stencilBuffer?33306:36096,f=a.get(s),g=!0===s.isWebGLMultipleRenderTargets;if(g)for(let $=0;$<o.length;$++)i.bindFramebuffer(36160,f.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+$,36161,null),i.bindFramebuffer(36160,f.__webglFramebuffer),e.framebufferTexture2D(36009,36064+$,3553,null,0);i.bindFramebuffer(36008,f.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,f.__webglFramebuffer);for(let v=0;v<o.length;v++){d.push(36064+v),s.depthBuffer&&d.push(p);let x=void 0!==f.__ignoreDepthValues&&f.__ignoreDepthValues;if(!1===x&&(s.depthBuffer&&(c|=256),s.stencilBuffer&&(c|=1024)),g&&e.framebufferRenderbuffer(36008,36064,36161,f.__webglColorRenderbuffer[v]),!0===x&&(e.invalidateFramebuffer(36008,[p]),e.invalidateFramebuffer(36009,[p])),g){let y=a.get(o[v]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,y,0)}e.blitFramebuffer(0,0,l,h,0,0,l,h,c,9728),m&&e.invalidateFramebuffer(36008,d)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),g)for(let b=0;b<o.length;b++){i.bindFramebuffer(36160,f.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+b,36161,f.__webglColorRenderbuffer[b]);let S=a.get(o[b]).__webglTexture;i.bindFramebuffer(36160,f.__webglFramebuffer),e.framebufferTexture2D(36009,36064+b,3553,S,0)}i.bindFramebuffer(36009,f.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=B,this.useMultisampledRTT=k}function Gd(e,t,i){let a=i.isWebGL2;return{convert:function i(s,o=null){let l;if(s===bn)return 5121;if(s===qo)return 32819;if(s===Xo)return 32820;if(s===Ho)return 5120;if(s===Go)return 5122;if(s===Ya)return 5123;if(s===Wo)return 5124;if(s===_n)return 5125;if(s===vn)return 5126;if(s===fi)return a?5131:null!==(l=t.get("OES_texture_half_float"))?l.HALF_FLOAT_OES:null;if(s===Yo)return 6406;if(s===Re)return 6408;if(s===Jo)return 6409;if(s===$o)return 6410;if(s===yn)return 6402;if(s===Qn)return 34041;if(s===Zo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ys)return null!==(l=t.get("EXT_sRGB"))?l.SRGB_ALPHA_EXT:null;if(s===Ko)return 6403;if(s===jo)return 36244;if(s===Qo)return 33319;if(s===tl)return 33320;if(s===el)return 36249;if(s===cs||s===hs||s===us||s===ds){if(o===Bt){if(null===(l=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;if(s===cs)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===us)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ds)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(l=t.get("WEBGL_compressed_texture_s3tc")))return null;if(s===cs)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===us)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ds)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}}if(s===Or||s===Ur||s===Br||s===kr){if(null===(l=t.get("WEBGL_compressed_texture_pvrtc")))return null;if(s===Or)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ur)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Br)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kr)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(s===nl)return null!==(l=t.get("WEBGL_compressed_texture_etc1"))?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vr||s===Hr){if(null===(l=t.get("WEBGL_compressed_texture_etc")))return null;if(s===Vr)return o===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}if(s===Gr||s===Wr||s===qr||s===Xr||s===Yr||s===Zr||s===Jr||s===$r||s===Kr||s===jr||s===Qr||s===ta||s===ea||s===na){if(null===(l=t.get("WEBGL_compressed_texture_astc")))return null;if(s===Gr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$r)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qr)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ta)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ea)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===na)return o===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}if(s===ia){if(null===(l=t.get("EXT_texture_compression_bptc")))return null;if(s===ia)return o===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}return s===Zn?a?34042:null!==(l=t.get("WEBGL_depth_texture"))?l.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[s]?e[s]:null}}}var lr=class extends _e{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xn=class extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wd={type:"move"},di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null,l=this._targetRay,u=this._grip,h=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(h&&e.hand){for(let c of(o=!0,e.hand.values())){let d=t.getJointPose(c,i),p=this._getHandJoint(h,c);null!==d&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=d.radius),p.visible=null!==d}let f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=f.position.distanceTo(m.position);h.inputState.pinching&&g>.025?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=.015&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==u&&e.gripSpace&&null!==(s=t.getPose(e.gripSpace,i))&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1);null!==l&&(null===(a=t.getPose(e.targetRaySpace,i))&&null!==s&&(a=s),null!==a&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return null!==l&&(l.visible=null!==a),null!==u&&(u.visible=null!==s),null!==h&&(h.visible=null!==o),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cr=class extends ce{constructor(e,t,i,a,s,o,l,u,h,c){if((c=void 0!==c?c:yn)!==yn&&c!==Qn)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&c===yn&&(i=_n),void 0===i&&c===Qn&&(i=Zn),super(null,a,s,o,l,u,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==l?l:he,this.minFilter=void 0!==u?u:he,this.flipY=!1,this.generateMipmaps=!1}},hr=class extends ln{constructor(e,t){super();let i=this,a=null,s=1,o=null,l="local-floor",u=null,h=null,c=null,d=null,p=null,f=null,m=t.getContextAttributes(),g=null,$=null,v=[],x=[],y=new Set,b=new Map,S=new _e;S.layers.enable(1),S.viewport=new qt;let _=new _e;_.layers.enable(2),_.viewport=new qt;let M=[S,_],w=new lr;w.layers.enable(1),w.layers.enable(2);let T=null,E=null;function C(e){let t=x.indexOf(e.inputSource);if(-1===t)return;let i=v[t];void 0!==i&&i.dispatchEvent({type:e.type,data:e.inputSource})}function A(){a.removeEventListener("select",C),a.removeEventListener("selectstart",C),a.removeEventListener("selectend",C),a.removeEventListener("squeeze",C),a.removeEventListener("squeezestart",C),a.removeEventListener("squeezeend",C),a.removeEventListener("end",A),a.removeEventListener("inputsourceschange",L);for(let t=0;t<v.length;t++){let s=x[t];null!==s&&(x[t]=null,v[t].disconnect(s))}T=null,E=null,e.setRenderTarget(g),p=null,d=null,c=null,a=null,$=null,O.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function L(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],a=x.indexOf(i);a>=0&&(x[a]=null,v[a].disconnect(i))}for(let s=0;s<e.added.length;s++){let o=e.added[s],l=x.indexOf(o);if(-1===l){for(let u=0;u<v.length;u++)if(u>=x.length){x.push(o),l=u;break}else if(null===x[u]){x[u]=o,l=u;break}if(-1===l)break}let h=v[l];h&&h.connect(o)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return void 0===t&&(t=new di,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return void 0===t&&(t=new di,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return void 0===t&&(t=new di,v[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){s=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){l=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return null!==d?d:p},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return a},this.setSession=function(h){return Qt(this,null,function*(){if(null!==(a=h)){if(g=e.getRenderTarget(),a.addEventListener("select",C),a.addEventListener("selectstart",C),a.addEventListener("selectend",C),a.addEventListener("squeeze",C),a.addEventListener("squeezestart",C),a.addEventListener("squeezeend",C),a.addEventListener("end",A),a.addEventListener("inputsourceschange",L),!0!==m.xrCompatible&&(yield t.makeXRCompatible()),void 0===a.renderState.layers||!1===e.capabilities.isWebGL2){let f={antialias:void 0!==a.renderState.layers||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,f),a.updateRenderState({baseLayer:p}),$=new Ze(p.framebufferWidth,p.framebufferHeight,{format:Re,type:bn,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let v=null,x=null,y=null;m.depth&&(y=m.stencil?35056:33190,v=m.stencil?Qn:yn,x=m.stencil?Zn:_n);let b={colorFormat:32856,depthFormat:y,scaleFactor:s};d=(c=new XRWebGLBinding(a,t)).createProjectionLayer(b),a.updateRenderState({layers:[d]}),$=new Ze(d.textureWidth,d.textureHeight,{format:Re,type:bn,depthTexture:new cr(d.textureWidth,d.textureHeight,x,void 0,void 0,void 0,void 0,void 0,void 0,v),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});e.properties.get($).__ignoreDepthValues=d.ignoreDepthValues}$.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=yield a.requestReferenceSpace(l),O.setContext(a),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})};let P=new D,R=new D;function I(e,t,i){P.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(i.matrixWorld);let a=P.distanceTo(R),s=t.projectionMatrix.elements,o=i.projectionMatrix.elements,l=s[14]/(s[10]-1),u=s[14]/(s[10]+1),h=(s[9]+1)/s[5],c=(s[9]-1)/s[5],d=(s[8]-1)/s[0],p=(o[8]+1)/o[0],f=a/(-d+p),m=-(f*d);t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(m),e.translateZ(f),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=l+f,$=u+f;e.projectionMatrix.makePerspective(l*d-m,l*p+(a-m),h*u/$*g,c*u/$*g,g,$)}function N(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===a)return;w.near=_.near=S.near=e.near,w.far=_.far=S.far=e.far,(T!==w.near||E!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,E=w.far);let t=e.parent,i=w.cameras;N(w,t);for(let s=0;s<i.length;s++)N(i[s],t);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),e.matrix.copy(w.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale);let o=e.children;for(let l=0,u=o.length;l<u;l++)o[l].updateMatrixWorld(!0);2===i.length?I(w,S,_):w.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){return null!==d?d.fixedFoveation:null!==p?p.fixedFoveation:void 0},this.setFoveation=function(e){null!==d&&(d.fixedFoveation=e),null!==p&&void 0!==p.fixedFoveation&&(p.fixedFoveation=e)},this.getPlanes=function(){return y};let z=null;function U(t,a){if(h=a.getViewerPose(u||o),f=a,null!==h){let s=h.views;null!==p&&(e.setRenderTargetFramebuffer($,p.framebuffer),e.setRenderTarget($));let l=!1;s.length!==w.cameras.length&&(w.cameras.length=0,l=!0);for(let m=0;m<s.length;m++){let g=s[m],S=null;if(null!==p)S=p.getViewport(g);else{let _=c.getViewSubImage(d,g);S=_.viewport,0===m&&(e.setRenderTargetTextures($,_.colorTexture,d.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget($))}let T=M[m];void 0===T&&((T=new _e).layers.enable(m),T.viewport=new qt,M[m]=T),T.matrix.fromArray(g.transform.matrix),T.projectionMatrix.fromArray(g.projectionMatrix),T.viewport.set(S.x,S.y,S.width,S.height),0===m&&w.matrix.copy(T.matrix),!0===l&&w.cameras.push(T)}}for(let E=0;E<v.length;E++){let C=x[E],A=v[E];null!==C&&void 0!==A&&A.update(C,a,u||o)}if(z&&z(t,a),a.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:a.detectedPlanes});let L=null;for(let P of y)a.detectedPlanes.has(P)||(null===L&&(L=[]),L.push(P));if(null!==L)for(let R of L)y.delete(R),b.delete(R),i.dispatchEvent({type:"planeremoved",data:R});for(let I of a.detectedPlanes)if(y.has(I)){let N=b.get(I);I.lastChangedTime>N&&(b.set(I,I.lastChangedTime),i.dispatchEvent({type:"planechanged",data:I}))}else y.add(I),b.set(I,a.lastChangedTime),i.dispatchEvent({type:"planeadded",data:I})}f=null}let O=new Ka;O.setAnimationLoop(U),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}};function qd(e,t){function i(i,a){i.opacity.value=a.opacity,a.color&&i.diffuse.value.copy(a.color),a.emissive&&i.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(i.map.value=a.map),a.alphaMap&&(i.alphaMap.value=a.alphaMap),a.bumpMap&&(i.bumpMap.value=a.bumpMap,i.bumpScale.value=a.bumpScale,a.side===we&&(i.bumpScale.value*=-1)),a.displacementMap&&(i.displacementMap.value=a.displacementMap,i.displacementScale.value=a.displacementScale,i.displacementBias.value=a.displacementBias),a.emissiveMap&&(i.emissiveMap.value=a.emissiveMap),a.normalMap&&(i.normalMap.value=a.normalMap,i.normalScale.value.copy(a.normalScale),a.side===we&&i.normalScale.value.negate()),a.specularMap&&(i.specularMap.value=a.specularMap),a.alphaTest>0&&(i.alphaTest.value=a.alphaTest);let s=t.get(a).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,i.reflectivity.value=a.reflectivity,i.ior.value=a.ior,i.refractionRatio.value=a.refractionRatio),a.lightMap){i.lightMap.value=a.lightMap;let o=!0!==e.physicallyCorrectLights?Math.PI:1;i.lightMapIntensity.value=a.lightMapIntensity*o}a.aoMap&&(i.aoMap.value=a.aoMap,i.aoMapIntensity.value=a.aoMapIntensity);let l;a.map?l=a.map:a.specularMap?l=a.specularMap:a.displacementMap?l=a.displacementMap:a.normalMap?l=a.normalMap:a.bumpMap?l=a.bumpMap:a.roughnessMap?l=a.roughnessMap:a.metalnessMap?l=a.metalnessMap:a.alphaMap?l=a.alphaMap:a.emissiveMap?l=a.emissiveMap:a.clearcoatMap?l=a.clearcoatMap:a.clearcoatNormalMap?l=a.clearcoatNormalMap:a.clearcoatRoughnessMap?l=a.clearcoatRoughnessMap:a.iridescenceMap?l=a.iridescenceMap:a.iridescenceThicknessMap?l=a.iridescenceThicknessMap:a.specularIntensityMap?l=a.specularIntensityMap:a.specularColorMap?l=a.specularColorMap:a.transmissionMap?l=a.transmissionMap:a.thicknessMap?l=a.thicknessMap:a.sheenColorMap?l=a.sheenColorMap:a.sheenRoughnessMap&&(l=a.sheenRoughnessMap),void 0!==l&&(l.isWebGLRenderTarget&&(l=l.texture),!0===l.matrixAutoUpdate&&l.updateMatrix(),i.uvTransform.value.copy(l.matrix));let u;a.aoMap?u=a.aoMap:a.lightMap&&(u=a.lightMap),void 0!==u&&(u.isWebGLRenderTarget&&(u=u.texture),!0===u.matrixAutoUpdate&&u.updateMatrix(),i.uv2Transform.value.copy(u.matrix))}return{refreshFogUniforms:function t(i,a){a.color.getRGB(i.fogColor.value,$a(e)),a.isFog?(i.fogNear.value=a.near,i.fogFar.value=a.far):a.isFogExp2&&(i.fogDensity.value=a.density)},refreshMaterialUniforms:function e(a,s,o,l,u){var h,c,d,p,f,m,g,$,v,x,y,b,S,_,M,w,T,E,C,A,L,P,R;let I,N;s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(a,s):s.isMeshToonMaterial?(i(a,s),h=a,(c=s).gradientMap&&(h.gradientMap.value=c.gradientMap)):s.isMeshPhongMaterial?(i(a,s),d=a,p=s,d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)):s.isMeshStandardMaterial?(i(a,s),f=a,m=s,f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),t.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity),s.isMeshPhysicalMaterial&&(g=a,$=s,v=u,g.ior.value=$.ior,$.sheen>0&&(g.sheenColor.value.copy($.sheenColor).multiplyScalar($.sheen),g.sheenRoughness.value=$.sheenRoughness,$.sheenColorMap&&(g.sheenColorMap.value=$.sheenColorMap),$.sheenRoughnessMap&&(g.sheenRoughnessMap.value=$.sheenRoughnessMap)),$.clearcoat>0&&(g.clearcoat.value=$.clearcoat,g.clearcoatRoughness.value=$.clearcoatRoughness,$.clearcoatMap&&(g.clearcoatMap.value=$.clearcoatMap),$.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=$.clearcoatRoughnessMap),$.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy($.clearcoatNormalScale),g.clearcoatNormalMap.value=$.clearcoatNormalMap,$.side===we&&g.clearcoatNormalScale.value.negate())),$.iridescence>0&&(g.iridescence.value=$.iridescence,g.iridescenceIOR.value=$.iridescenceIOR,g.iridescenceThicknessMinimum.value=$.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=$.iridescenceThicknessRange[1],$.iridescenceMap&&(g.iridescenceMap.value=$.iridescenceMap),$.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=$.iridescenceThicknessMap)),$.transmission>0&&(g.transmission.value=$.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),$.transmissionMap&&(g.transmissionMap.value=$.transmissionMap),g.thickness.value=$.thickness,$.thicknessMap&&(g.thicknessMap.value=$.thicknessMap),g.attenuationDistance.value=$.attenuationDistance,g.attenuationColor.value.copy($.attenuationColor)),g.specularIntensity.value=$.specularIntensity,g.specularColor.value.copy($.specularColor),$.specularIntensityMap&&(g.specularIntensityMap.value=$.specularIntensityMap),$.specularColorMap&&(g.specularColorMap.value=$.specularColorMap))):s.isMeshMatcapMaterial?(i(a,s),x=a,(y=s).matcap&&(x.matcap.value=y.matcap)):s.isMeshDepthMaterial?i(a,s):s.isMeshDistanceMaterial?(i(a,s),b=a,S=s,b.referencePosition.value.copy(S.referencePosition),b.nearDistance.value=S.nearDistance,b.farDistance.value=S.farDistance):s.isMeshNormalMaterial?i(a,s):s.isLineBasicMaterial?(_=a,M=s,_.diffuse.value.copy(M.color),_.opacity.value=M.opacity,s.isLineDashedMaterial&&(w=a,T=s,w.dashSize.value=T.dashSize,w.totalSize.value=T.dashSize+T.gapSize,w.scale.value=T.scale)):s.isPointsMaterial?(E=a,C=s,A=o,L=l,E.diffuse.value.copy(C.color),E.opacity.value=C.opacity,E.size.value=C.size*A,E.scale.value=.5*L,C.map&&(E.map.value=C.map),C.alphaMap&&(E.alphaMap.value=C.alphaMap),C.alphaTest>0&&(E.alphaTest.value=C.alphaTest),C.map?I=C.map:C.alphaMap&&(I=C.alphaMap),void 0!==I&&(!0===I.matrixAutoUpdate&&I.updateMatrix(),E.uvTransform.value.copy(I.matrix))):s.isSpriteMaterial?(P=a,R=s,P.diffuse.value.copy(R.color),P.opacity.value=R.opacity,P.rotation.value=R.rotation,R.map&&(P.map.value=R.map),R.alphaMap&&(P.alphaMap.value=R.alphaMap),R.alphaTest>0&&(P.alphaTest.value=R.alphaTest),R.map?N=R.map:R.alphaMap&&(N=R.alphaMap),void 0!==N&&(!0===N.matrixAutoUpdate&&N.updateMatrix(),P.uvTransform.value.copy(N.matrix))):s.isShadowMaterial?(a.color.value.copy(s.color),a.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Xd(e,t,i,a){let s={},o={},l=[],u=i.isWebGL2?e.getParameter(35375):0;function h(e,t,i){let a=e.value;if(void 0===i[t])return"number"==typeof a?i[t]=a:i[t]=a.clone(),!0;if("number"==typeof a){if(i[t]!==a)return i[t]=a,!0}else{let s=i[t];if(!1===s.equals(a))return s.copy(a),!0}return!1}function c(e){let t=e.value,i={boundary:0,storage:0};return"number"==typeof t?(i.boundary=4,i.storage=4):t.isVector2?(i.boundary=8,i.storage=8):t.isVector3||t.isColor?(i.boundary=16,i.storage=12):t.isVector4?(i.boundary=16,i.storage=16):t.isMatrix3?(i.boundary=48,i.storage=48):t.isMatrix4?(i.boundary=64,i.storage=64):t.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",t),i}function d(t){let i=t.target;i.removeEventListener("dispose",d);let a=l.indexOf(i.__bindingPointIndex);l.splice(a,1),e.deleteBuffer(s[i.id]),delete s[i.id],delete o[i.id]}return{bind:function e(t,i){let s=i.program;a.uniformBlockBinding(t,s)},update:function i(p,f){var m;let g=s[p.id],$,v,x,y;void 0===g&&(function e(t){let i=t.uniforms,a=0,s=0;for(let o=0,l=i.length;o<l;o++){let u=i[o],h=c(u);if(u.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),u.__offset=a,o>0){let d=16-(s=a%16);0!==s&&d-h.boundary<0&&(a+=16-s,u.__offset=a)}a+=h.storage}return(s=a%16)>0&&(a+=16-s),t.__size=a,t.__cache={},this}(p),g=(m=p,$=function e(){for(let t=0;t<u;t++)if(-1===l.indexOf(t))return l.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}(),m.__bindingPointIndex=$,v=e.createBuffer(),x=m.__size,y=m.usage,e.bindBuffer(35345,v),e.bufferData(35345,x,y),e.bindBuffer(35345,null),e.bindBufferBase(35345,$,v),v),s[p.id]=g,p.addEventListener("dispose",d));let b=f.program;a.updateUBOMapping(p,b);let S=t.render.frame;o[p.id]!==S&&(function t(i){let a=s[i.id],o=i.uniforms,l=i.__cache;e.bindBuffer(35345,a);for(let u=0,c=o.length;u<c;u++){let d=o[u];if(!0===h(d,u,l)){let p=d.value,f=d.__offset;"number"==typeof p?(d.__data[0]=p,e.bufferSubData(35345,f,d.__data)):(d.value.isMatrix3?(d.__data[0]=d.value.elements[0],d.__data[1]=d.value.elements[1],d.__data[2]=d.value.elements[2],d.__data[3]=d.value.elements[0],d.__data[4]=d.value.elements[3],d.__data[5]=d.value.elements[4],d.__data[6]=d.value.elements[5],d.__data[7]=d.value.elements[0],d.__data[8]=d.value.elements[6],d.__data[9]=d.value.elements[7],d.__data[10]=d.value.elements[8],d.__data[11]=d.value.elements[0]):p.toArray(d.__data),e.bufferSubData(35345,f,d.__data))}}e.bindBuffer(35345,null)}(p),o[p.id]=S)},dispose:function t(){for(let i in s)e.deleteBuffer(s[i]);l=[],s={},o={}}}}function Yd(){let e=Wi("canvas");return e.style.display="block",e}function Zd(e={}){this.isWebGLRenderer=!0;let t=void 0!==e.canvas?e.canvas:Yd(),i=void 0!==e.context?e.context:null,a=void 0===e.depth||e.depth,s=void 0===e.stencil||e.stencil,o=void 0!==e.antialias&&e.antialias,l=void 0===e.premultipliedAlpha||e.premultipliedAlpha,u=void 0!==e.preserveDrawingBuffer&&e.preserveDrawingBuffer,h=void 0!==e.powerPreference?e.powerPreference:"default",c=void 0!==e.failIfMajorPerformanceCaveat&&e.failIfMajorPerformanceCaveat,d;d=null!==i?i.getContextAttributes().alpha:void 0!==e.alpha&&e.alpha;let p=null,f=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wn,this.physicallyCorrectLights=!1,this.toneMapping=Xe,this.toneMappingExposure=1;let $=this,v=!1,x=0,y=0,b=null,S=-1,_=null,M=new qt,w=new qt,T=null,E=t.width,C=t.height,A=1,L=null,P=null,R=new qt(0,0,E,C),I=new qt(0,0,E,C),N=!1,z=new ts,U=!1,O=!1,F=null,B=new Xt,V=new Nt,H=new D,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return null===b?A:1}let W=i;function j(e,i){for(let a=0;a<e.length;a++){let s=e[a],o=t.getContext(s,i);if(null!==o)return o}return null}try{if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yr}`),t.addEventListener("webglcontextlost",eP,!1),t.addEventListener("webglcontextrestored",eR,!1),t.addEventListener("webglcontextcreationerror",eI,!1),null===W){let q=["webgl2","webgl","experimental-webgl"];if(!0===$.isWebGL1Renderer&&q.shift(),W=j(q,{alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c}),null===W)throw j(q)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}void 0===W.getShaderPrecisionFormat&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(X){throw console.error("THREE.WebGLRenderer: "+X.message),X}let Y,Z,K,Q,J,ep,em,eg,e8,e$,ev,ex,ey,eb,eS,e_,eM,ew,eT,e1,eE,e0,eC,eD;function eA(){Y=new pu(W),Z=new lu(W,Y,e),Y.init(Z),e0=new Gd(W,Y,Z),K=new Vd(W,Y,Z),Q=new xu,J=new Pd,ep=new Hd(W,Y,K,J,Z,e0,Q),em=new hu($),eg=new fu($),e8=new Al(W,Z),eC=new au(W,Y,e8,Z),e$=new mu(W,e8,Q,eC),ev=new Mu(W,e$,e8,Q),eT=new yu(W,Z,ep),e_=new cu(J),ex=new Cd($,em,eg,Y,Z,eC,e_),ey=new qd($,J),eb=new Ld,eS=new Od(Y,Z),ew=new ru($,em,eg,K,ev,d,l),eM=new kd($,ev,Z),eD=new Xd(W,Q,Z,K),e1=new ou(W,Y,Q,Z),eE=new gu(W,Y,Q,Z),Q.programs=ex.programs,$.capabilities=Z,$.extensions=Y,$.properties=J,$.renderLists=eb,$.shadowMap=eM,$.state=K,$.info=Q}eA();let eL=new hr($,W);function eP(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function eR(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let e=Q.autoReset,t=eM.enabled,i=eM.autoUpdate,a=eM.needsUpdate,s=eM.type;eA(),Q.autoReset=e,eM.enabled=t,eM.autoUpdate=i,eM.needsUpdate=a,eM.type=s}function eI(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eN(e){var t,i;let a=e.target,s;a.removeEventListener("dispose",eN),i=t=a,void 0!==(s=J.get(i).programs)&&(s.forEach(function(e){ex.releaseProgram(e)}),i.isShaderMaterial&&ex.releaseShaderCache(i)),J.remove(t)}this.xr=eL,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let e=Y.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=Y.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(e){void 0!==e&&(A=e,this.setSize(E,C,!1))},this.getSize=function(e){return e.set(E,C)},this.setSize=function(e,i,a){if(eL.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=e,C=i,t.width=Math.floor(e*A),t.height=Math.floor(i*A),!1!==a&&(t.style.width=e+"px",t.style.height=i+"px"),this.setViewport(0,0,e,i)},this.getDrawingBufferSize=function(e){return e.set(E*A,C*A).floor()},this.setDrawingBufferSize=function(e,i,a){E=e,C=i,A=a,t.width=Math.floor(e*a),t.height=Math.floor(i*a),this.setViewport(0,0,e,i)},this.getCurrentViewport=function(e){return e.copy(M)},this.getViewport=function(e){return e.copy(R)},this.setViewport=function(e,t,i,a){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,i,a),K.viewport(M.copy(R).multiplyScalar(A).floor())},this.getScissor=function(e){return e.copy(I)},this.setScissor=function(e,t,i,a){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,i,a),K.scissor(w.copy(I).multiplyScalar(A).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(e){K.setScissorTest(N=e)},this.setOpaqueSort=function(e){L=e},this.setTransparentSort=function(e){P=e},this.getClearColor=function(e){return e.copy(ew.getClearColor())},this.setClearColor=function(){ew.setClearColor.apply(ew,arguments)},this.getClearAlpha=function(){return ew.getClearAlpha()},this.setClearAlpha=function(){ew.setClearAlpha.apply(ew,arguments)},this.clear=function(e=!0,t=!0,i=!0){let a=0;e&&(a|=16384),t&&(a|=256),i&&(a|=1024),W.clear(a)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",eP,!1),t.removeEventListener("webglcontextrestored",eR,!1),t.removeEventListener("webglcontextcreationerror",eI,!1),eb.dispose(),eS.dispose(),J.dispose(),em.dispose(),eg.dispose(),ev.dispose(),eC.dispose(),eD.dispose(),ex.dispose(),eL.dispose(),eL.removeEventListener("sessionstart",eU),eL.removeEventListener("sessionend",eO),F&&(F.dispose(),F=null),e2.stop()},this.renderBufferDirect=function(e,t,i,a,s,o){null===t&&(t=G);let l=s.isMesh&&0>s.matrixWorld.determinant(),u=function e(t,i,a,s,o){var l,u;!0!==i.isScene&&(i=G),ep.resetTextureUnits();let h=i.fog,c=s.isMeshStandardMaterial?i.environment:null,d=null===b?$.outputEncoding:!0===b.isXRRenderTarget?b.texture.encoding:wn,p=(s.isMeshStandardMaterial?eg:em).get(s.envMap||c),m=!0===s.vertexColors&&!!a.attributes.color&&4===a.attributes.color.itemSize,g=!!s.normalMap&&!!a.attributes.tangent,v=!!a.morphAttributes.position,x=!!a.morphAttributes.normal,y=!!a.morphAttributes.color,M=s.toneMapped?$.toneMapping:Xe,w=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,T=void 0!==w?w.length:0,E=J.get(s),L=f.state.lights;if(!0===U&&(!0===O||t!==_)){let P=t===_&&s.id===S;e_.setState(s,t,P)}let R=!1;s.version===E.__version?(E.needsLights&&E.lightsStateVersion!==L.state.version||E.outputEncoding!==d||o.isInstancedMesh&&!1===E.instancing||!o.isInstancedMesh&&!0===E.instancing||o.isSkinnedMesh&&!1===E.skinning||!o.isSkinnedMesh&&!0===E.skinning||E.envMap!==p||!0===s.fog&&E.fog!==h||void 0!==E.numClippingPlanes&&(E.numClippingPlanes!==e_.numPlanes||E.numIntersection!==e_.numIntersection)||E.vertexAlphas!==m||E.vertexTangents!==g||E.morphTargets!==v||E.morphNormals!==x||E.morphColors!==y||E.toneMapping!==M||!0===Z.isWebGL2&&E.morphTargetsCount!==T)&&(R=!0):(R=!0,E.__version=s.version);let I=E.currentProgram;!0===R&&(I=eB(s,i,o));let N=!1,z=!1,B=!1,V=I.getUniforms(),k=E.uniforms;if(K.useProgram(I.program)&&(N=!0,z=!0,B=!0),s.id!==S&&(S=s.id,z=!0),N||_!==t){if(V.setValue(W,"projectionMatrix",t.projectionMatrix),Z.logarithmicDepthBuffer&&V.setValue(W,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),_!==t&&(_=t,z=!0,B=!0),s.isShaderMaterial||s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshStandardMaterial||s.envMap){let j=V.map.cameraPosition;void 0!==j&&j.setValue(W,H.setFromMatrixPosition(t.matrixWorld))}(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial)&&V.setValue(W,"isOrthographic",!0===t.isOrthographicCamera),(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial||s.isShadowMaterial||o.isSkinnedMesh)&&V.setValue(W,"viewMatrix",t.matrixWorldInverse)}if(o.isSkinnedMesh){V.setOptional(W,o,"bindMatrix"),V.setOptional(W,o,"bindMatrixInverse");let q=o.skeleton;q&&(Z.floatVertexTextures?(null===q.boneTexture&&q.computeBoneTexture(),V.setValue(W,"boneTexture",q.boneTexture,ep),V.setValue(W,"boneTextureSize",q.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let X=a.morphAttributes;if((void 0!==X.position||void 0!==X.normal||void 0!==X.color&&!0===Z.isWebGL2)&&eT.update(o,a,s,I),(z||E.receiveShadow!==o.receiveShadow)&&(E.receiveShadow=o.receiveShadow,V.setValue(W,"receiveShadow",o.receiveShadow)),s.isMeshGouraudMaterial&&null!==s.envMap&&(k.envMap.value=p,k.flipEnvMap.value=p.isCubeTexture&&!1===p.isRenderTargetTexture?-1:1),z&&(V.setValue(W,"toneMappingExposure",$.toneMappingExposure),E.needsLights&&(l=k,u=B,l.ambientLightColor.needsUpdate=u,l.lightProbe.needsUpdate=u,l.directionalLights.needsUpdate=u,l.directionalLightShadows.needsUpdate=u,l.pointLights.needsUpdate=u,l.pointLightShadows.needsUpdate=u,l.spotLights.needsUpdate=u,l.spotLightShadows.needsUpdate=u,l.rectAreaLights.needsUpdate=u,l.hemisphereLights.needsUpdate=u),h&&!0===s.fog&&ey.refreshFogUniforms(k,h),ey.refreshMaterialUniforms(k,s,A,C,F),Jn.upload(W,E.uniformsList,k,ep)),s.isShaderMaterial&&!0===s.uniformsNeedUpdate&&(Jn.upload(W,E.uniformsList,k,ep),s.uniformsNeedUpdate=!1),s.isSpriteMaterial&&V.setValue(W,"center",o.center),V.setValue(W,"modelViewMatrix",o.modelViewMatrix),V.setValue(W,"normalMatrix",o.normalMatrix),V.setValue(W,"modelMatrix",o.matrixWorld),s.isShaderMaterial||s.isRawShaderMaterial){let Y=s.uniformsGroups;for(let Q=0,e8=Y.length;Q<e8;Q++)if(Z.isWebGL2){let e$=Y[Q];eD.update(e$,I),eD.bind(e$,I)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return I}(e,t,i,a,s);K.setMaterial(a,l);let h=i.index,c=1;!0===a.wireframe&&(h=e$.getWireframeAttribute(i),c=2);let d=i.drawRange,p=i.attributes.position,m=d.start*c,g=(d.start+d.count)*c;null!==o&&(m=Math.max(m,o.start*c),g=Math.min(g,(o.start+o.count)*c)),null!==h?(m=Math.max(m,0),g=Math.min(g,h.count)):null!=p&&(m=Math.max(m,0),g=Math.min(g,p.count));let v=g-m;if(v<0||v===1/0)return;eC.setup(s,a,u,i,h);let x,y=e1;if(null!==h&&(x=e8.get(h),(y=eE).setIndex(x)),s.isMesh)!0===a.wireframe?(K.setLineWidth(a.wireframeLinewidth*k()),y.setMode(1)):y.setMode(4);else if(s.isLine){let M=a.linewidth;void 0===M&&(M=1),K.setLineWidth(M*k()),s.isLineSegments?y.setMode(1):s.isLineLoop?y.setMode(2):y.setMode(3)}else s.isPoints?y.setMode(0):s.isSprite&&y.setMode(4);if(s.isInstancedMesh)y.renderInstances(m,v,s.count);else if(i.isInstancedBufferGeometry){let w=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,T=Math.min(i.instanceCount,w);y.renderInstances(m,v,T)}else y.render(m,v)},this.compile=function(e,t){function i(e,t,i){!0===e.transparent&&e.side===an?(e.side=we,e.needsUpdate=!0,eB(e,t,i),e.side=$n,e.needsUpdate=!0,eB(e,t,i),e.side=an):eB(e,t,i)}(f=eS.get(e)).init(),g.push(f),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(f.pushLight(e),e.castShadow&&f.pushShadow(e))}),f.setupLights($.physicallyCorrectLights),e.traverse(function(t){let a=t.material;if(a){if(Array.isArray(a))for(let s=0;s<a.length;s++)i(a[s],e,t);else i(a,e,t)}}),g.pop(),f=null};let ez=null;function eU(){e2.stop()}function eO(){e2.start()}let e2=new Ka;function e3(e,t,i,a){var s,l,u;let h=e.opaque,c=e.transmissive,d=e.transparent,p,m,g;f.setupLightsView(i),c.length>0&&(s=h,l=t,u=i,p=Z.isWebGL2,null===F&&(F=new Ze(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?fi:bn,minFilter:is,samples:p&&!0===o?4:0})),$.getDrawingBufferSize(V),p?F.setSize(V.x,V.y):F.setSize(Zs(V.x),Zs(V.y)),m=$.getRenderTarget(),$.setRenderTarget(F),$.clear(),g=$.toneMapping,$.toneMapping=Xe,eF(s,l,u),$.toneMapping=g,ep.updateMultisampleRenderTarget(F),ep.updateRenderTargetMipmap(F),$.setRenderTarget(m)),a&&K.viewport(M.copy(a)),h.length>0&&eF(h,t,i),c.length>0&&eF(c,t,i),d.length>0&&eF(d,t,i),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function eF(e,t,i){let a=!0===t.isScene?t.overrideMaterial:null;for(let s=0,o=e.length;s<o;s++){let l=e[s],u=l.object,h=l.geometry,c=null===a?l.material:a,d=l.group;u.layers.test(i.layers)&&e4(u,t,i,h,c,d)}}function e4(e,t,i,a,s,o){e.onBeforeRender($,t,i,a,s,o),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),s.onBeforeRender($,t,i,a,e,o),!0===s.transparent&&s.side===an?(s.side=we,s.needsUpdate=!0,$.renderBufferDirect(i,t,a,s,e,o),s.side=$n,s.needsUpdate=!0,$.renderBufferDirect(i,t,a,s,e,o),s.side=an):$.renderBufferDirect(i,t,a,s,e,o),e.onAfterRender($,t,i,a,s,o)}function eB(e,t,i){var a;!0!==t.isScene&&(t=G);let s=J.get(e),o=f.state.lights,l=f.state.shadowsArray,u=o.state.version,h=ex.getParameters(e,o.state,l,t,i),c=ex.getProgramCacheKey(h),d=s.programs;s.environment=e.isMeshStandardMaterial?t.environment:null,s.fog=t.fog,s.envMap=(e.isMeshStandardMaterial?eg:em).get(e.envMap||s.environment),void 0===d&&(e.addEventListener("dispose",eN),d=new Map,s.programs=d);let p=d.get(c);if(void 0!==p){if(s.currentProgram===p&&s.lightsStateVersion===u)return eV(e,h),p}else h.uniforms=ex.getUniforms(e),e.onBuild(i,h,$),e.onBeforeCompile(h,$),p=ex.acquireProgram(h,c),d.set(c,p),s.uniforms=h.uniforms;let m=s.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(m.clippingPlanes=e_.uniform),eV(e,h),s.needsLights=(a=e,a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights),s.lightsStateVersion=u,s.needsLights&&(m.ambientLightColor.value=o.state.ambient,m.lightProbe.value=o.state.probe,m.directionalLights.value=o.state.directional,m.directionalLightShadows.value=o.state.directionalShadow,m.spotLights.value=o.state.spot,m.spotLightShadows.value=o.state.spotShadow,m.rectAreaLights.value=o.state.rectArea,m.ltc_1.value=o.state.rectAreaLTC1,m.ltc_2.value=o.state.rectAreaLTC2,m.pointLights.value=o.state.point,m.pointLightShadows.value=o.state.pointShadow,m.hemisphereLights.value=o.state.hemi,m.directionalShadowMap.value=o.state.directionalShadowMap,m.directionalShadowMatrix.value=o.state.directionalShadowMatrix,m.spotShadowMap.value=o.state.spotShadowMap,m.spotLightMatrix.value=o.state.spotLightMatrix,m.spotLightMap.value=o.state.spotLightMap,m.pointShadowMap.value=o.state.pointShadowMap,m.pointShadowMatrix.value=o.state.pointShadowMatrix);let g=p.getUniforms(),v=Jn.seqWithValue(g.seq,m);return s.currentProgram=p,s.uniformsList=v,p}function eV(e,t){let i=J.get(e);i.outputEncoding=t.outputEncoding,i.instancing=t.instancing,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}e2.setAnimationLoop(function e(t){ez&&ez(t)}),"undefined"!=typeof self&&e2.setContext(self),this.setAnimationLoop=function(e){ez=e,eL.setAnimationLoop(e),null===e?e2.stop():e2.start()},eL.addEventListener("sessionstart",eU),eL.addEventListener("sessionend",eO),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(!0===v)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===eL.enabled&&!0===eL.isPresenting&&(!0===eL.cameraAutoUpdate&&eL.updateCamera(t),t=eL.getCamera()),!0===e.isScene&&e.onBeforeRender($,e,t,b),(f=eS.get(e,g.length)).init(),g.push(f),B.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),z.setFromProjectionMatrix(B),O=this.localClippingEnabled,U=e_.init(this.clippingPlanes,O,t),(p=eb.get(e,m.length)).init(),m.push(p),function e(t,i,a,s){if(!1===t.visible)return;if(t.layers.test(i.layers)){if(t.isGroup)a=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)f.pushLight(t),t.castShadow&&f.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||z.intersectsSprite(t)){s&&H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);let o=ev.update(t),l=t.material;l.visible&&p.push(t,o,l,a,H.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==Q.render.frame&&(t.skeleton.update(),t.skeleton.frame=Q.render.frame),!t.frustumCulled||z.intersectsObject(t))){s&&H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(B);let u=ev.update(t),h=t.material;if(Array.isArray(h)){let c=u.groups;for(let d=0,m=c.length;d<m;d++){let g=c[d],$=h[g.materialIndex];$&&$.visible&&p.push(t,u,$,a,H.z,g)}}else h.visible&&p.push(t,u,h,a,H.z,null)}}let v=t.children;for(let x=0,y=v.length;x<y;x++)e(v[x],i,a,s)}(e,t,0,$.sortObjects),p.finish(),!0===$.sortObjects&&p.sort(L,P),!0===U&&e_.beginShadows();let i=f.state.shadowsArray;if(eM.render(i,e,t),!0===U&&e_.endShadows(),!0===this.info.autoReset&&this.info.reset(),ew.render(p,e),f.setupLights($.physicallyCorrectLights),t.isArrayCamera){let a=t.cameras;for(let s=0,o=a.length;s<o;s++){let l=a[s];e3(p,e,l,l.viewport)}}else e3(p,e,t);null!==b&&(ep.updateMultisampleRenderTarget(b),ep.updateRenderTargetMipmap(b)),!0===e.isScene&&e.onAfterRender($,e,t),eC.resetDefaultState(),S=-1,_=null,g.pop(),f=g.length>0?g[g.length-1]:null,m.pop(),p=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(e,t,i){J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=i;let a=J.get(e);a.__hasExternalTextures=!0,a.__hasExternalTextures&&(a.__autoAllocateDepthBuffer=void 0===i,a.__autoAllocateDepthBuffer||!0===Y.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),a.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=J.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){b=e,x=t,y=i;let a=!0,s=null,o=!1,l=!1;if(e){let u=J.get(e);void 0!==u.__useDefaultFramebuffer?(K.bindFramebuffer(36160,null),a=!1):void 0===u.__webglFramebuffer?ep.setupRenderTarget(e):u.__hasExternalTextures&&ep.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);let h=e.texture;(h.isData3DTexture||h.isDataArrayTexture||h.isCompressedArrayTexture)&&(l=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(s=c[t],o=!0):s=Z.isWebGL2&&e.samples>0&&!1===ep.useMultisampledRTT(e)?J.get(e).__webglMultisampledFramebuffer:c,M.copy(e.viewport),w.copy(e.scissor),T=e.scissorTest}else M.copy(R).multiplyScalar(A).floor(),w.copy(I).multiplyScalar(A).floor(),T=N;if(K.bindFramebuffer(36160,s)&&Z.drawBuffers&&a&&K.drawBuffers(e,s),K.viewport(M),K.scissor(w),K.setScissorTest(T),o){let d=J.get(e.texture);W.framebufferTexture2D(36160,36064,34069+t,d.__webglTexture,i)}else if(l){let p=J.get(e.texture);W.framebufferTextureLayer(36160,36064,p.__webglTexture,i||0,t||0)}S=-1},this.readRenderTargetPixels=function(e,t,i,a,s,o,l){if(!(e&&e.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let u=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==l&&(u=u[l]),u){K.bindFramebuffer(36160,u);try{let h=e.texture,c=h.format,d=h.type;if(c!==Re&&e0.convert(c)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let p=d===fi&&(Y.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Y.has("EXT_color_buffer_float"));if(d!==bn&&e0.convert(d)!==W.getParameter(35738)&&!(d===vn&&(Z.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!p){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}t>=0&&t<=e.width-a&&i>=0&&i<=e.height-s&&W.readPixels(t,i,a,s,e0.convert(c),e0.convert(d),o)}finally{let f=null!==b?J.get(b).__webglFramebuffer:null;K.bindFramebuffer(36160,f)}}},this.copyFramebufferToTexture=function(e,t,i=0){let a=Math.pow(2,-i),s=Math.floor(t.image.width*a),o=Math.floor(t.image.height*a);ep.setTexture2D(t,0),W.copyTexSubImage2D(3553,i,0,0,e.x,e.y,s,o),K.unbindTexture()},this.copyTextureToTexture=function(e,t,i,a=0){let s=t.image.width,o=t.image.height,l=e0.convert(i.format),u=e0.convert(i.type);ep.setTexture2D(i,0),W.pixelStorei(37440,i.flipY),W.pixelStorei(37441,i.premultiplyAlpha),W.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?W.texSubImage2D(3553,a,e.x,e.y,s,o,l,u,t.image.data):t.isCompressedTexture?W.compressedTexSubImage2D(3553,a,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,l,t.mipmaps[0].data):W.texSubImage2D(3553,a,e.x,e.y,l,u,t.image),0===a&&i.generateMipmaps&&W.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,a,s=0){if($.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let o=e.max.x-e.min.x+1,l=e.max.y-e.min.y+1,u=e.max.z-e.min.z+1,h=e0.convert(a.format),c=e0.convert(a.type),d;if(a.isData3DTexture)ep.setTexture3D(a,0),d=32879;else if(a.isDataArrayTexture)ep.setTexture2DArray(a,0),d=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,a.flipY),W.pixelStorei(37441,a.premultiplyAlpha),W.pixelStorei(3317,a.unpackAlignment);let p=W.getParameter(3314),f=W.getParameter(32878),m=W.getParameter(3316),g=W.getParameter(3315),v=W.getParameter(32877),x=i.isCompressedTexture?i.mipmaps[0]:i.image;W.pixelStorei(3314,x.width),W.pixelStorei(32878,x.height),W.pixelStorei(3316,e.min.x),W.pixelStorei(3315,e.min.y),W.pixelStorei(32877,e.min.z),i.isDataTexture||i.isData3DTexture?W.texSubImage3D(d,s,t.x,t.y,t.z,o,l,u,h,c,x.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(d,s,t.x,t.y,t.z,o,l,u,h,x.data)):W.texSubImage3D(d,s,t.x,t.y,t.z,o,l,u,h,c,x),W.pixelStorei(3314,p),W.pixelStorei(32878,f),W.pixelStorei(3316,m),W.pixelStorei(3315,g),W.pixelStorei(32877,v),0===s&&a.generateMipmaps&&W.generateMipmap(d),K.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?ep.setTextureCube(e,0):e.isData3DTexture?ep.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ep.setTexture2DArray(e,0):ep.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){x=0,y=0,b=null,K.reset(),eC.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ur=class extends Zd{};function rn(e,t,i){return no(e)?new e.constructor(e.subarray(t,void 0!==i?i:e.length)):e.slice(t,i)}function ki(e,t,i){return e&&(i||e.constructor!==t)?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}function no(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}ur.prototype.isWebGL1Renderer=!0;var ni=class{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==a?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,a=t[i],s=t[i-1];n:{t:{let o;e:{i:if(!(e<a)){for(let l=i+2;;){if(void 0===a){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=a,e<(a=t[++i]))break t}o=t.length;break e}if(!(e>=s)){let u=t[1];e<u&&(i=2,s=u);for(let h=i-2;;){if(void 0===s)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(a=s,e>=(s=t[--i-1]))break t}o=i,i=0;break e}break n}for(;i<o;){let c=i+o>>>1;e<t[c]?o=c:i=c+1}if(a=t[i],void 0===(s=t[i-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===a)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=e*a;for(let o=0;o!==a;++o)t[o]=i[s+o];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}},dr=class extends ni{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sa,endingEnd:sa}}intervalChanged_(e,t,i){let a=this.parameterPositions,s=e-2,o=e+1,l=a[s],u=a[o];if(void 0===l)switch(this.getSettings_().endingStart){case ra:s=e,l=2*t-i;break;case aa:l=t+a[s=a.length-2]-a[s+1];break;default:s=e,l=i}if(void 0===u)switch(this.getSettings_().endingEnd){case ra:o=e,u=2*i-t;break;case aa:o=1,u=i+a[1]-a[0];break;default:o=e-1,u=t}let h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,c=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,m=(i-t)/(a-t),g=m*m,$=g*m,v=-p*$+2*p*g-p*m,x=(1+p)*$+(-1.5-2*p)*g+(-.5+p)*m+1,y=(-1-f)*$+(1.5+f)*g+.5*m,b=f*$-f*g;for(let S=0;S!==l;++S)s[S]=v*o[c+S]+x*o[h+S]+y*o[u+S]+b*o[d+S];return s}},fr=class extends ni{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,c=(i-t)/(a-t),d=1-c;for(let p=0;p!==l;++p)s[p]=o[h+p]*d+o[u+p]*c;return s}},pr=class extends ni{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}},Ie=class{constructor(e,t,i,a){if(void 0===e)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hi:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(1!==e){let t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){let i=this.times,a=i.length,s=0,o=a-1;for(;s!==a&&i[s]<e;)++s;for(;-1!==o&&i[o]>t;)--o;if(++o,0!==s||o!==a){s>=o&&(s=(o=Math.max(o,1))-1);let l=this.getValueSize();this.times=rn(i,s,o),this.values=rn(this.values,s*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,a=this.values,s=i.length;0===s&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){let u=i[l];if("number"==typeof u&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(null!==o&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(void 0!==a&&no(a))for(let h=0,c=a.length;h!==c;++h){let d=a[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){let e=rn(this.times),t=rn(this.values),i=this.getValueSize(),a=this.getInterpolation()===fs,s=e.length-1,o=1;for(let l=1;l<s;++l){let u=!1,h=e[l];if(h!==e[l+1]&&(1!==l||h!==e[0])){if(a)u=!0;else{let c=l*i,d=c-i,p=c+i;for(let f=0;f!==i;++f){let m=t[c+f];if(m!==t[d+f]||m!==t[p+f]){u=!0;break}}}}if(u){if(l!==o){e[o]=e[l];let g=l*i,$=o*i;for(let v=0;v!==i;++v)t[$+v]=t[g+v]}++o}}if(s>0){e[o]=e[s];for(let x=s*i,y=o*i,b=0;b!==i;++b)t[y+b]=t[x+b];++o}return o!==e.length?(this.times=rn(e,0,o),this.values=rn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=rn(this.times,0),t=rn(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ie.prototype.TimeBufferType=Float32Array,Ie.prototype.ValueBufferType=Float32Array,Ie.prototype.DefaultInterpolation=Gi;var En=class extends Ie{};En.prototype.ValueTypeName="bool",En.prototype.ValueBufferType=Array,En.prototype.DefaultInterpolation=Hi,En.prototype.InterpolantFactoryMethodLinear=void 0,En.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Ie{};mr.prototype.ValueTypeName="color";var gr=class extends Ie{};gr.prototype.ValueTypeName="number";var xr=class extends ni{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){let s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(i-t)/(a-t),h=e*l;for(let c=h+l;h!==c;h+=4)ze.slerpFlat(s,0,o,h-l,o,h,u);return s}},xi=class extends Ie{InterpolantFactoryMethodLinear(e){return new xr(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion",xi.prototype.DefaultInterpolation=Gi,xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends Ie{};Cn.prototype.ValueTypeName="string",Cn.prototype.ValueBufferType=Array,Cn.prototype.DefaultInterpolation=Hi,Cn.prototype.InterpolantFactoryMethodLinear=void 0,Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var _r=class extends Ie{};_r.prototype.ValueTypeName="vector";var br="\\[\\]\\.:\\/",Jd=RegExp("["+br+"]","g"),wr="[^"+br+"]",$d="[^"+br.replace("\\.","")+"]",Kd=/((?:WC+[\/:])*)/.source.replace("WC",wr),jd=/(WCOD+)?/.source.replace("WCOD",$d),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wr),tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wr),ef=RegExp("^"+Kd+jd+Qd+tf+"$"),nf=["material","materials","bones","map"],vr=class{constructor(e,t,i){let a=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];void 0!==a&&a.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class{constructor(e,t,i){this.path=t,this.parsedPath=i||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,i):new It(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jd,"")}static parseTrackName(e){let t=ef.exec(e);if(null===t)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==a&&-1!==a){let s=i.nodeName.substring(a+1);-1!==nf.indexOf(s)&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(null===i.propertyName||0===i.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(void 0!==i)return i}if(e.children){let a=function(e){for(let i=0;i<e.length;i++){let s=e[i];if(s.name===t||s.uuid===t)return s;let o=a(s.children);if(o)return o}return null},s=a(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===o){o=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(void 0===e[i]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(void 0!==o){if(void 0===e[o]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let u=e[a];if(void 0===u){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?c=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(void 0!==s){if("morphTargetInfluences"===a){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}void 0!==e.morphTargetDictionary[s]&&(s=e.morphTargetDictionary[s])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=s}else void 0!==u.fromArray&&void 0!==u.toArray?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=vr,It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray],It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cf=new Float32Array(1);"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);var Pn=((n=Pn||{})[n.x=0]="x",n[n.y=0]="y",n[n.z=0]="z",n),sf=function(){this.onInit=function(){this.THREE=this.context.three,this.curVector=new this.THREE.Vector3(0,0,0),this.destVector=new this.THREE.Vector3(0,0,0),this.curQuaternion=new this.THREE.Quaternion(0,0,0,0),this.destQuaternion=new this.THREE.Quaternion(0,0,0,0),this.vectorToSet=null,this.quatToSet=null,this.vectorCounter=0,this.quatCounter=0,this.speed=1.25},this.onTick=function(e){if(this.vectorToSet){if(this.vectorToSet.equals(this.destVector)&&this.vectorCounter>120)return;this.vectorCounter++,this.curVector.lerp(this.destVector,e/1e3*this.speed),this.vectorToSet.set(this.curVector.x,this.curVector.y,this.curVector.z)}if(this.quatToSet){if(this.quatToSet.equals(this.destQuaternion)&&this.quatCounter>120)return;this.quatCounter++,this.curQuaternion.slerp(this.destQuaternion,e/1e3*this.speed),this.quatToSet.set(this.curQuaternion.x,this.curQuaternion.y,this.curQuaternion.z,this.curQuaternion.w)}},this.animateVector=function(e,t){this.vectorCounter=0,this.destVector=t,this.vectorToSet=e},this.animateQuaternion=function(e,t){this.quatCounter=0,this.destQuaternion=t,this.quatToSet=e},this.onEvent=function(){},this.onInputsUpdated=function(){},this.onDestroy=function(){}},io=()=>new sf,si=((r=si||{})[r["#F4CE00"]=0]="#F4CE00",r[r["#31E0B0"]=1]="#31E0B0",r[r["#FF5E10"]=2]="#FF5E10",r[r["#00ABF7"]=3]="#00ABF7",r[r["#FF00BB"]=4]="#FF00BB",r[r["#9C29FF"]=5]="#9C29FF",r[r["#6FDD00"]=6]="#6FDD00",r[r["#E30000"]=7]="#E30000",r[r["#304AFF"]=8]="#304AFF",r[r["#FF89C4"]=9]="#FF89C4",r[r["#D597FF"]=10]="#D597FF",r[r["#C6EC5C"]=11]="#C6EC5C",r[r["#FFA115"]=12]="#FFA115",r[r["#75DEFE"]=13]="#75DEFE",r[r["#FAA291"]=14]="#FAA291",r[r["#BB813F"]=15]="#BB813F",r[r["#878291"]=16]="#878291",r),so=["#000000","#000000","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#000000","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#000000","#000000","#000000","#FFFFFF","#FFFFFF"],rf=function(){this.onInit=function(){this.THREE=this.context.three},this.onTick=function(e){},this.onEvent=function(){},this.onInputsUpdated=function(){},this.onDestroy=function(){},this.createName=(e,t,i,a)=>Qt(this,null,function*(){let s=si[i],o=so[i],l=new FontFace("OpenSans-SemiBold","url(https://superviz2homologmediaserver.s3.amazonaws.com/static/fonts/OpenSans-SemiBold.woff)");yield l.load(),document.fonts.add(l);let u=this.createText(t,o,s);u.position.set(0,a,0),e.add(u)}),this.createText=(e,t,i)=>{let a=document.createElement("canvas"),s=a.getContext("2d"),o=100*s.measureText(e).width*1.1;a.width=o,a.height=1e3,s.font="1000px OpenSans-SemiBold",s.textBaseline="middle",s.fillStyle=t,s.fillText(e,0,500);let l=new this.THREE.Texture(a);l.needsUpdate=!0;let u=new this.THREE.SpriteMaterial({map:l,useScreenCoordinates:!1}),h=new this.THREE.Sprite(u);h.raycast=()=>null;let c=new this.THREE.Object3D;c.textHeight=.08,c.textWidth=o/1e3*c.textHeight,h.scale.set(o/1e3*.08,.08,1);let d=document.createElement("canvas");d.width=o,d.height=1e3;let p=d.getContext("2d");p.fillStyle=i,p.fillRect(0,0,d.width,d.height);let f=new this.THREE.Texture(d);f.needsUpdate=!0;let m=new this.THREE.SpriteMaterial({opacity:1,useScreenCoordinates:!1,color:new this.THREE.Color(i),transparent:!1,map:f}),g=new this.THREE.Sprite(m);return g.position.set(0,0,0),g.scale.set(d.width/d.height*.08+.03,.1,1),c.add(h),c.add(g),c}},ro=()=>new rf,af=function(){this.inputs={origin:{x:0,y:0,z:0}},this.onInit=function(){this.THREE=this.context.three,this.destPos=new this.THREE.Vector3(0,0,0),this.curPos=new this.THREE.Vector3(0,0,0),this.startPos=new this.THREE.Vector3(0,0,0),this.counter=0,this.index=-1,this.lastIndex=-1,this.lastDestPos=new this.THREE.Vector3(1e3,1e3,1e3),this.lastStartPos=new this.THREE.Vector3(1e3,1e3,1e3),this.speed=.95,this.tempStartPos=new this.THREE.Vector3(0,0,0),this.quat=new this.THREE.Quaternion(0,0,0,0)},this.onTick=function(e){if(this.createdMaterial&&!(this.counter>60&&this.lastDestPos.equals(this.destPos)&&.2>this.lastStartPos.distanceTo(this.startPos))){if(this.counter++,this.lastIndex!==this.index){let t=si[this.index];this.material&&(this.material.color.set(t),this.lastIndex=this.index)}this.curPos.lerp(this.destPos,e/1e3*this.speed),this.lastDestPos.x=this.destPos.x,this.lastDestPos.y=this.destPos.y,this.lastDestPos.z=this.destPos.z,this.lastStartPos.x=this.startPos.x,this.lastStartPos.y=this.startPos.y,this.lastStartPos.z=this.startPos.z,this._updateMesh(this.startPos,this.curPos),this.outputs.objectRoot.visible=this.isOn&&this.shouldRenderAvatars}},this.onDestroy=function(){this.material&&this.material.dispose()},this.createMaterial=e=>{this.createdMaterial=!0;let t=this.createTextureCanvas(),i=new this.THREE.Texture(t);i.needsUpdate=!0;let a=0;-1!==e&&(a=e);let s=si[a];this.material=new this.THREE.MeshBasicMaterial({map:i,blending:this.THREE.AdditiveBlending,color:s,side:this.THREE.DoubleSide,depthWrite:!0,transparent:!0})},this._updateMesh=(e,t)=>{this.tempStartPos.copy(this.inputs.origin),this.tempStartPos.applyQuaternion(this.quat),this.tempStartPos.add(e);let i=new this.THREE.LineCurve3(this.tempStartPos,t);this.outputs.objectRoot&&this.outputs.objectRoot.geometry&&this.outputs.objectRoot.geometry.dispose();let a=new this.THREE.TubeGeometry(i,1,.003,4,!1);this.material&&(this.outputs.objectRoot=new this.THREE.Mesh(a,this.material))},this._doUpdateGeometry=(e,t,i,a,s={x:0,y:0,z:0},o={x:0,y:0,z:0})=>{this.index=i,this.createdMaterial||this.createMaterial(i),this.destPos.x=o.x,this.destPos.y=o.y,this.destPos.z=o.z,this.startPos.x=s.x,this.startPos.y=s.y,this.startPos.z=s.z,this.quat.set(a.x,a.y,a.z,a.w),this.counter=0,this.isOn=e,this.shouldRenderAvatars=t},this.updateGeometry=(e,t,i,a,s,o)=>{this._doUpdateGeometry(i,a,s,o,e,t)},this.createTextureCanvas=()=>{let e=document.createElement("canvas"),t=e.getContext("2d");e.width=1,e.height=64;let i=t.createLinearGradient(0,0,e.width,e.height);return i.addColorStop(0,"rgba(  0,  0,  0,0.1)"),i.addColorStop(.1,"rgba(160,160,160,0.3)"),i.addColorStop(.5,"rgba(255,255,255,0.5)"),i.addColorStop(.9,"rgba(160,160,160,0.3)"),i.addColorStop(1,"rgba(  0,  0,  0,0.1)"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height),e},this.onEvent=function(e,t){},this.onInputsUpdated=function(e){}},ao=()=>new af,of=500,Sr=class{constructor(e){this.localSlot=-1,this.initialized=!1,this.currentCirclePosition=Pn,this.currentLocalPosition=Pn,this.currentLocalRotation=Pn,this.currentLocalLaserDest=Pn,this.circlePositions=[],this.avatars={},this.lasers={},this.laserUpdateIntervals={},this.sweeps={},this.tempQuaternion=new ze(0,0,0,0),this.isSweeping=!1,this.addInputComponent=()=>Qt(this,null,function*(){let[e]=yield this.matterportSdk.Scene.createObjects(1),t=e.addNode();this.mpInputComponent=t.addComponent("mp.input",{eventsEnabled:!1,userNavigationEnabled:!0}),t.start()}),this.addSceneLight=()=>Qt(this,null,function*(){this.directionalLight=yield this.createDirectionLight(),this.ambientLight=yield this.createAmbientLight()}),this.createDirectionLight=()=>Qt(this,null,function*(){let[e]=yield this.matterportSdk.Scene.createObjects(1),t=e.addNode(),i=t.addComponent("mp.directionalLight",{enabled:!0,color:{r:1,g:1,b:1},intensity:1,position:{x:.2,y:1,z:0},target:{x:.5,y:0,z:0},debug:!1});return this.THREE=i.context.three,t.start(),t}),this.createAmbientLight=()=>Qt(this,null,function*(){let[e]=yield this.matterportSdk.Scene.createObjects(1),t=e.addNode();return t.addComponent("mp.ambientLight",{enabled:!0,color:{r:1,g:1,b:1},intensity:1}),t.start(),t}),this.adjustMyPositionToCircle=e=>{var t;if(!this.realtime||(this.localSlot=this.realtime.getParticipantSlot(this.localParticipantId),!this.THREE||-1===this.localSlot))return e;let i=new this.THREE.Vector3(null==e?void 0:e.x,null==e?void 0:e.y,null==e?void 0:e.z);return this.circlePositions[this.localSlot]?(null!=(t=this.currentCirclePosition)&&t.isVector3||(this.currentCirclePosition=new this.THREE.Vector3(this.circlePositions[this.localSlot].x,e.y,this.circlePositions[this.localSlot].z)),this.currentCirclePosition.set(this.circlePositions[this.localSlot].x,e.y,this.circlePositions[this.localSlot].z),i.add(this.currentCirclePosition.multiplyScalar(.13)),{x:i.x,y:e.y,z:i.z}):e},this.onParticipantUpdated=e=>{if(!this.initialized)return;let t=e.clientId;if(this.avatars[t]){let i=this.avatars[t],a=this.lasers[t],{position:s,rotation:o,sweep:l}=e.data;this.sweeps[t]=l;let u=e.data.laser;s&&o&&this.updateAvatar(i,s,o),a&&(this.laserUpdateIntervals[t]&&clearInterval(this.laserUpdateIntervals[t]),this.laserUpdateIntervals[t]=setInterval(()=>{this.updateLaser(t,i,a,u)},30))}},this.matterportSdk=e,this.matterportSdk.Scene.register("lerper",io),this.matterportSdk.Scene.register("name",ro),this.matterportSdk.Scene.register("laser",ao),this.addInputComponent(),this.addSceneLight(),this.createCircleOfPositions(),this._onLocalCameraMoveObserver=this._onLocalCameraMoveObserver.bind(this),this._onLocalMouseMoveObserver=this._onLocalMouseMoveObserver.bind(this),this._subscribeToMatterportEvents()}createAvatar(e){return Qt(this,null,function*(){if(this.initialized)return this.realtime.subscribeToParticipantUpdate(e.id,this.onParticipantUpdated),this._createAvatar(e)})}destroyAvatar(e){return Qt(this,null,function*(){this.avatars[e.id]&&(this.avatars[e.id].stop(),delete this.avatars[e.id]),this.realtime.unsubscribeToParticipantUpdate(e.id,this.onParticipantUpdated)})}createLaser(e){return Qt(this,null,function*(){this.initialized&&this._createLaser(e)})}destroyLaser(e){return Qt(this,null,function*(){this.lasers[e.id]&&(this.lasers[e.id].stop(),delete this.lasers[e.id])})}createMouse(e){}destroyMouse(e){}goToParticipant(e){var t,i,a;let s=this.sweeps[e];if(s){let o=(null==(a=null==(i=null==(t=this.avatars[e])?void 0:t.obj3D)?void 0:i.userData)?void 0:a.coordinates.rotation)||{x:0,y:0};this.moveToSweep(s,o)}}init(e,t){this.localParticipantId=t.id,this.realtime=e,this.initialized=!0}destroy(){this.initialized=!1,this.ambientLight.stop(),this.directionalLight.stop(),Object.keys(this.lasers).forEach(e=>{this.lasers[e].stop(),delete this.lasers[e]}),Object.keys(this.avatars).forEach(e=>{this.avatars[e].stop(),delete this.avatars[e]}),Object.keys(this.laserUpdateIntervals).forEach(e=>{clearInterval(this.laserUpdateIntervals[e])}),this.laserUpdateIntervals={},this.avatars={},this.lasers={},this.sweeps={}}_createAvatar(e){return Qt(this,null,function*(){var t,i,a,s;let o=1,l=0;null!=(t=e.avatarConfig)&&t.scale&&(o=e.avatarConfig.scale),null!=(i=e.avatarConfig)&&i.height&&(l=e.avatarConfig.height);let[u]=yield this.matterportSdk.Scene.createObjects(1),h=u.addNode(),c=Pn;h.obj3D.rotation.set(c.x,c.y,c.z),h.obj3D.name="avatar",h.obj3D.userData={uuid:e.id,name:e.name,height:l};let d=null!=(s=null==(a=e.avatar)?void 0:a.model)?s:"https://dev.storage.superviz.com/readyplayerme/0.glb",p={x:o,y:o,z:o};return h.lerper=h.addComponent("lerper"),h.avatarName=h.addComponent("name"),this.avatars[e.id]=h,new Promise(e=>{h.addComponent("mp.gltfLoader",{url:d,localScale:p,onLoaded:()=>{this.matterportSdk.Camera.getPose().then(e=>{this._onLocalCameraMoveObserver({position:e.position,rotation:e.rotation,sweep:e.sweep})}),e(h)}}),h.start()})})}createName(e,t){return Qt(this,null,function*(){return this._createName(e,t)})}_createName(e,t){return Qt(this,null,function*(){var i,a,s,o;let l=1;null!=(i=e.avatarConfig)&&i.scale&&(l=e.avatarConfig.scale);let u=new this.THREE.Box3().setFromObject(t.obj3D),h=new this.THREE.Vector3(0,0,0);u.getSize(h);let c=t.avatarName,d=this.realtime.getParticipantSlot(e.id),p=!(null!=(a=e.avatar)&&a.model)||(null==(o=null==(s=e.avatar)?void 0:s.model)?void 0:o.includes("readyplayerme"))?.9*l:h.y+.2;c.createName(t.obj3D,e.name,d,p)})}_createLaser(e){return Qt(this,null,function*(){var t;let i=new D(0,0,0);null!=(t=e.avatarConfig)&&t.laserOrigin&&(i=new D(e.avatarConfig.laserOrigin.x,e.avatarConfig.laserOrigin.y,e.avatarConfig.laserOrigin.z));let[a]=yield this.matterportSdk.Scene.createObjects(1),s=a.addNode();s.laserPointer=s.addComponent("laser",{origin:i}),s.start(),s.obj3D.userData={uuid:e.id},this.lasers[e.id]=s})}_subscribeToMatterportEvents(){this.matterportSdk.Camera.pose.subscribe(this._onLocalCameraMoveObserver),this.matterportSdk.Pointer.intersection.subscribe(this._onLocalMouseMoveObserver)}_onLocalCameraMoveObserver({position:e,rotation:t,sweep:i}){this.currentLocalPosition=this.adjustMyPositionToCircle(e),this.currentLocalRotation=t,this.currentSweepId=i,this.realtime&&this.realtime.updateMyProperties({position:this.currentLocalPosition,rotation:this.currentLocalRotation,laser:this.currentLocalLaserDest,sweep:this.currentSweepId})}_onLocalMouseMoveObserver(e){this.currentLocalLaserDest=e.position,this.realtime&&this.realtime.updateMyProperties({position:this.currentLocalPosition,rotation:this.currentLocalRotation,laser:this.currentLocalLaserDest})}createCircleOfPositions(){let e=4.8,t=0;e<2&&(e=2);for(let i=0;i<16;i++){let a=(t=22.5*i)*(Math.PI/180),s=e*Math.cos(a),o=e*Math.sin(a);if(0!==i){let l={x:s,y:0,z:o};i%2==0?this.circlePositions.push(l):this.circlePositions.unshift(l)}}}moveToSweep(e,t){this.isSweeping||(this.mpInputComponent&&(this.mpInputComponent.inputs.userNavigationEnabled=!1),this.isSweeping=!0,this.matterportSdk.Sweep.moveTo(e,{transitionTime:of,transition:this.matterportSdk.Sweep.Transition.FLY,rotation:t||this.currentLocalRotation}).finally(()=>{this.isSweeping=!1,this.mpInputComponent&&(this.mpInputComponent.inputs.userNavigationEnabled=!0)}))}updateAvatar(e,t,i){var a,s,o;if(!this.initialized)return;e.obj3D.userData.coordinates={rotation:i,position:t};let l=new this.THREE.Vector3(1,0,0),u=new this.THREE.Vector3(0,1,0),h=new this.THREE.Quaternion().setFromAxisAngle(l,this.THREE.MathUtils.degToRad(-i.x)),c=new this.THREE.Quaternion().setFromAxisAngle(u,this.THREE.MathUtils.degToRad(null==i?void 0:i.y)+Math.PI),{lerper:d}=e;d.animateQuaternion(e.obj3D.quaternion,c.multiply(h));let p=parseFloat(null!=(o=null==(s=null==(a=null==e?void 0:e.obj3D)?void 0:a.userData)?void 0:s.height)?o:0)-.62,f=new this.THREE.Vector3(this.currentCirclePosition.x,0,this.currentCirclePosition.z),m=new this.THREE.Vector3(null==t?void 0:t.x,0,null==t?void 0:t.z).sub(f);m.y=t.y+p,d.animateVector(e.obj3D.position,m)}updateLaser(e,t,i,a){if(!t||!i||!a||!this.initialized)return;let s=i.laserPointer,{x:o,y:l,z:u}=t.obj3D.position;if(t.obj3D.getWorldQuaternion(this.tempQuaternion),s){let h=this.realtime.getParticipantSlot(e);s.updateGeometry({x:o,y:l+.35,z:u},a,!0,!0,h,this.tempQuaternion)}}};window&&(window.MatterportPlugin=Sr);export{Sr as MatterportPlugin}; /**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ 