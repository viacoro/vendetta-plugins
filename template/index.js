(function(e,o,n,r,t){"use strict";const{FormText:s}=n.Forms;function d(){return React.createElement(s,null,"Hello, world!")}const i=r.findByProps("writeFile");o.logger.log("Hello, world first"),console.log("Hello, world first");var g={onLoad:function(){o.logger.log("Hello, world second"),console.log("is new version"),console.log("Hello, world second"),t.before("downloadMediaAsset",i,function(l){console.log("is new version"),o.logger.log("Downloading media asset: "+l[0]),console.log("Downloading media asset: "+l[0]),console.log("All args: "+l)})},onUnload:function(){o.logger.log("Goodbye, world."),console.log("Goodbye, world.")},settings:d};return e.default=g,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.ui.components,vendetta.metro,vendetta.patcher);
