(function(o,t,c,i,h,l,u,g){"use strict";function m(){return h.useProxy(l.storage),React.createElement(i.ErrorBoundary,null,React.createElement(c.ReactNative.ScrollView,null,React.createElement(i.Forms.FormSwitchRow,{label:"Split messages on words instead of newlines",subLabel:"Results in the lowest amount of messages",onValueChange:function(n){return l.storage.splitOnWords=n},value:l.storage.splitOnWords})))}const d=u.findByStoreName("ChannelStore"),a=[],f="IHaveNoIdeaWhatImDoingPlugin",E=u.findByName("RowManager");t.logger.log("Hello, world first"),console.log("Hello, world first");function S(n){return n==="meow"}function w(){try{const n=g.before("dispatch",c.FluxDispatcher,function(s){let[e]=s;if(e.guildId==="748259253512306710"&&(console.log(e),console.log(e.channelId)),e.type==="LOAD_MESSAGES_SUCCESS"&&(e.messages=e.messages.forEach(function(r){d.getChannel(e?.channelId)?.nsfw_&&console.log(r)})),e.type==="MESSAGE_CREATE"||e.type==="MESSAGE_UPDATE"){const r=e.message;S(r?.author?.id)&&(e.channelId="0")}});a.push(n);const v=g.before("generate",E.prototype,function(s){let[e]=s;e.message?.attachments?.length>0,d.getChannel(e?.message?.channelId)?.nsfw_&&console.log(e.message)});return a.push(v),t.logger.log(`${f} loaded.`),null}catch(n){t.logger.log(`[${f} Error]`,n)}}var p={onLoad:function(){return w()},onUnload:function(){console.log("i do indeed be disabled");for(const n of a)n()},settings:m};return o.default=p,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.metro.common,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.patcher);
