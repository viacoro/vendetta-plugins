(function(n,o,c,i,h,a,u,d){"use strict";function m(){return h.useProxy(a.storage),React.createElement(i.ErrorBoundary,null,React.createElement(c.ReactNative.ScrollView,null,React.createElement(i.Forms.FormSwitchRow,{label:"Split messages on words instead of newlines",subLabel:"Results in the lowest amount of messages",onValueChange:function(t){return a.storage.splitOnWords=t},value:a.storage.splitOnWords})))}const g=u.findByStoreName("ChannelStore"),s=[],f="IHaveNoIdeaWhatImDoingPlugin",E=u.findByName("RowManager");o.logger.log("Hello, world first"),console.log("Hello, world first");function S(t){return t==="meow"}function w(){try{const t=d.before("dispatch",c.FluxDispatcher,function(l){let[e]=l;if(e.type==="LOAD_MESSAGES_SUCCESS"&&(e.messages=e.messages.forEach(function(r){g.getChannel(e?.channelId)?.nsfw_&&console.log(r)})),e.type==="MESSAGE_CREATE"||e.type==="MESSAGE_UPDATE"){const r=e.message;S(r?.author?.id)&&(e.channelId="0")}});s.push(t);const v=d.before("generate",E.prototype,function(l){let[e]=l;e.message?.attachments?.length>0,g.getChannel(e?.message?.channelId)?.nsfw_&&console.log(e.message)});return s.push(v),o.logger.log(`${f} loaded.`),null}catch(t){o.logger.log(`[${f} Error]`,t)}}var p={onLoad:function(){return w()},onUnload:function(){console.log("i do indeed be disabled");for(const t of s)t()},settings:m};return n.default=p,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta,vendetta.metro.common,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.patcher);
