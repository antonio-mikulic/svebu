this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={45:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([521,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.primitives},101:function(e,t,c){"use strict";c.d(t,"a",(function(){return _}));var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(2),i=c(76),s=c(595),u=c(4),b=c.n(u),d=c(11),m=c(17),g=c(36),p=c(594),h=c(16);const O=e=>{let{id:t,label:c,popoverContents:r,remove:n,screenReaderLabel:s,className:u=""}=e;const[m,g]=Object(o.useState)(!1),E=Object(d.useInstanceId)(O);if(s=s||c,!c)return null;c=Object(h.decodeEntities)(c);const j=b()("woocommerce-tag",u,{"has-remove":!!n}),f="woocommerce-tag__label-"+E,w=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},s),Object(o.createElement)("span",{"aria-hidden":"true"},c));return Object(o.createElement)("span",{className:j},r?Object(o.createElement)(a.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>g(!0)},w):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:f},w),r&&m&&Object(o.createElement)(a.Popover,{onClose:()=>g(!1)},r),n&&Object(o.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(l.sprintf)(// Translators: %s label.
Object(l.__)("Remove %s","woocommerce"),c),"aria-describedby":f},Object(o.createElement)(i.a,{icon:p.a,size:20,className:"clear-icon"})))};var E=O;c(56);const j=e=>Object(o.createElement)(g.b,e),f=e=>{const{list:t,selected:c,renderItem:r,depth:l=0,onSelect:a,instanceId:i,isSingle:s,search:u,useExpandedPanelId:b}=e,[d]=b;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{var m,g;const p=null!==(m=t.children)&&void 0!==m&&m.length&&!s?t.children.every(e=>{let{id:t}=e;return c.find(e=>e.id===t)}):!!c.find(e=>{let{id:c}=e;return c===t.id}),h=(null===(g=t.children)||void 0===g?void 0:g.length)&&d===t.id;return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,r({item:t,isSelected:p,onSelect:a,isSingle:s,selected:c,search:u,depth:l,useExpandedPanelId:b,controlId:i})),h?Object(o.createElement)(f,n()({},e,{list:t.children,depth:l+1})):null)})):null},w=e=>{let{isLoading:t,isSingle:c,selected:r,messages:n,onChange:i,onRemove:s}=e;if(t||c||!r)return null;const u=r.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,n.selected(u)),u>0?Object(o.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":n.clear},Object(l.__)("Clear all","woocommerce")):null),u>0?Object(o.createElement)("ul",null,r.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(E,{label:e.name,id:e.id,remove:s})))):null)},y=e=>{let{filteredList:t,search:c,onSelect:r,instanceId:n,useExpandedPanelId:a,...u}=e;const{messages:b,renderItem:d,selected:m,isSingle:g}=u,p=d||j;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(i.a,{icon:s.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(l.sprintf)(b.noResults,c):b.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(f,{useExpandedPanelId:a,list:t,selected:m,renderItem:p,onSelect:r,instanceId:n,isSingle:g,search:c}))},_=e=>{const{className:t="",isCompact:c,isHierarchical:r,isLoading:i,isSingle:s,list:u,messages:g=m.a,onChange:p,onSearch:h,selected:O,type:E="text",debouncedSpeak:j}=e,[f,k]=Object(o.useState)(""),x=Object(o.useState)(-1),v=Object(d.useInstanceId)(_),S=Object(o.useMemo)(()=>({...m.a,...g}),[g]),C=Object(o.useMemo)(()=>Object(m.c)(u,f,r),[u,f,r]);Object(o.useEffect)(()=>{j&&j(S.updated)},[j,S]),Object(o.useEffect)(()=>{"function"==typeof h&&h(f)},[f,h]);const A=Object(o.useCallback)(e=>()=>{s&&p([]);const t=O.findIndex(t=>{let{id:c}=t;return c===e});p([...O.slice(0,t),...O.slice(t+1)])},[s,O,p]),P=Object(o.useCallback)(e=>()=>{Array.isArray(e)?p(e):-1===O.findIndex(t=>{let{id:c}=t;return c===e.id})?p(s?[e]:[...O,e]):A(e.id)()},[s,A,p,O]),N=Object(o.useCallback)(e=>{const[t]=O.filter(t=>!e.find(e=>t.id===e.id));A(t.id)()},[A,O]);return Object(o.createElement)("div",{className:b()("woocommerce-search-list",t,{"is-compact":c,"is-loading":i,"is-token":"token"===E})},"text"===E&&Object(o.createElement)(w,n()({},e,{onRemove:A,messages:S})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},"text"===E?Object(o.createElement)(a.TextControl,{label:S.search,type:"search",value:f,onChange:e=>k(e)}):Object(o.createElement)(a.FormTokenField,{disabled:i,label:S.search,onChange:N,onInputChange:e=>k(e),suggestions:[],__experimentalValidateInput:()=>!1,value:i?[Object(l.__)("Loading…","woocommerce")]:O.map(e=>({...e,value:e.name})),__experimentalShowHowTo:!1})),i?Object(o.createElement)("div",{className:"woocommerce-search-list__list"},Object(o.createElement)(a.Spinner,null)):Object(o.createElement)(y,n()({},e,{search:f,filteredList:C,messages:S,onSelect:P,instanceId:v,useExpandedPanelId:x})))};Object(a.withSpokenMessages)(_)},11:function(e,t){e.exports=window.wp.compose},116:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=e=>{let{value:t,setAttributes:c}=e;return Object(r.createElement)(o.SelectControl,{label:Object(n.__)("Order products by","woocommerce"),value:t,options:[{label:Object(n.__)("Newness - newest first","woocommerce"),value:"date"},{label:Object(n.__)("Price - low to high","woocommerce"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woocommerce"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woocommerce"),value:"rating"},{label:Object(n.__)("Sales - most first","woocommerce"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woocommerce"),value:"title"},{label:Object(n.__)("Menu Order","woocommerce"),value:"menu_order"}],onChange:e=>c({orderby:e})})}},14:function(e,t){e.exports=window.wp.apiFetch},141:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return a}));var r=c(21);const n=e=>Object(r.c)(e,"count")&&Object(r.c)(e,"description")&&Object(r.c)(e,"id")&&Object(r.c)(e,"name")&&Object(r.c)(e,"parent")&&Object(r.c)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,o=e=>Array.isArray(e)&&e.every(n),l=e=>Object(r.c)(e,"attribute")&&Object(r.c)(e,"operator")&&Object(r.c)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),a=e=>Array.isArray(e)&&e.every(l)},146:function(e,t,c){"use strict";var r=c(6),n=c.n(r),o=c(0),l=c(4),a=c.n(l),i=c(1),s=c(36),u=c(101),b=c(2),d=c(11),m=c(22),g=c(29),p=c(35),h=c(71),O=c(155);c(233),t.a=Object(d.withInstanceId)(e=>{let{onChange:t,onOperatorChange:c,instanceId:r,isCompact:l=!1,messages:d={},operator:E="any",selected:j,type:f="text"}=e;const{errorLoadingAttributes:w,isLoadingAttributes:y,productsAttributes:_}=function(e){const[t,c]=Object(o.useState)(null),[r,n]=Object(o.useState)(!1),[l,a]=Object(o.useState)([]),i=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{if(!r&&!i.current)return async function(){n(!0);try{const e=await Object(m.b)(),t=[];for(const c of e){const e=await Object(m.i)(c.id);t.push({...c,parent:0,terms:e.map(e=>({...e,attr_slug:c.taxonomy,parent:c.id}))})}a(t),i.current=!0}catch(e){e instanceof Error&&c(await Object(g.a)(e))}finally{n(!1)}}(),()=>{i.current=!0}},[r,!0]),{errorLoadingAttributes:t,isLoadingAttributes:r,productsAttributes:l}}(),k=_.reduce((e,t)=>{const{terms:c,...r}=t;return[...e,Object(O.a)(r),...c.map(O.a)]},[]);return d={clear:Object(i.__)("Clear all product attributes","woocommerce"),noItems:Object(i.__)("Your store doesn't have any product attributes.","woocommerce"),search:Object(i.__)("Search for product attributes","woocommerce"),selected:e=>Object(i.sprintf)(
/* translators: %d is the count of attributes selected. */
Object(i._n)("%d attribute selected","%d attributes selected",e,"woocommerce"),e),updated:Object(i.__)("Product attribute search results updated.","woocommerce"),...d},w?Object(o.createElement)(p.a,{error:w}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(u.a,{className:"woocommerce-product-attributes",isCompact:l,isHierarchical:!0,isLoading:y,isSingle:!1,list:k,messages:d,onChange:t,renderItem:e=>{const{item:t,search:c,depth:l=0}=e,u=["woocommerce-product-attributes__item","woocommerce-search-list__item",{"is-searching":c.length>0,"is-skip-level":0===l&&0!==t.parent}];if(!t.breadcrumbs.length)return Object(o.createElement)(h.a,n()({},e,{className:a()(u),item:t,isLoading:y,disabled:0===t.count,name:"attributes-"+r,countLabel:Object(i.sprintf)(
/* translators: %d is the count of terms. */
Object(i._n)("%d term","%d terms",t.count,"woocommerce"),t.count),"aria-label":Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of terms for the item. */
Object(i._n)("%1$s, has %2$d term","%1$s, has %2$d terms",t.count,"woocommerce"),t.name,t.count)}));const b=`${t.breadcrumbs[0]}: ${t.name}`;return Object(o.createElement)(s.a,n()({},e,{name:"terms-"+r,className:a()(...u,"has-count"),countLabel:Object(i.sprintf)(
/* translators: %d is the count of products. */
Object(i._n)("%d product","%d products",t.count,"woocommerce"),t.count),"aria-label":Object(i.sprintf)(
/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woocommerce"),b,t.count)}))},selected:j.map(e=>{let{id:t}=e;return k.find(e=>e.id===t)}).filter(Boolean),type:f}),!!c&&Object(o.createElement)("div",{hidden:j.length<2},Object(o.createElement)(b.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(i.__)("Display products matching","woocommerce"),help:Object(i.__)("Pick at least two attributes to use this setting.","woocommerce"),value:E,onChange:c,options:[{label:Object(i.__)("Any selected attributes","woocommerce"),value:"any"},{label:Object(i.__)("All selected attributes","woocommerce"),value:"all"}]})))})},15:function(e,t){e.exports=window.wp.url},155:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return s})),c.d(t,"d",(function(){return u}));var r=c(3),n=c(141),o=c(7);const l=Object(r.getSetting)("attributes",[]).reduce((e,t)=>{const c=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return c&&c.id&&e.push(c),e},[]),a=e=>{const{count:t,id:c,name:r,parent:o}=e;return{count:t,id:c,name:r,parent:o,breadcrumbs:[],children:[],value:Object(n.b)(e)?e.attr_slug:""}},i=e=>{if(e)return l.find(t=>t.id===e)},s=e=>{if(e)return l.find(t=>t.taxonomy===e)},u=(e,t,c,r)=>{const n=Object(o.select)("core/block-editor"),l=Object(o.dispatch)("core/block-editor"),a=n.getBlockParents(e);let i="";a.forEach(e=>{const t=n.getBlock(e).innerBlocks.find(e=>e.name===r);t&&(i=t.clientId)}),l.updateBlockAttributes(i,{[t]:c})}},16:function(e,t){e.exports=window.wp.htmlEntities},165:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},17:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(1),o=c(58);const l={clear:Object(n.__)("Clear all selected items","woocommerce"),noItems:Object(n.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woocommerce"),search:Object(n.__)("Search for items","woocommerce"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(n.__)("Search results updated.","woocommerce")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=e.reduce((e,t)=>{const c=t.parent||0;return e[c]||(e[c]=[]),e[c].push(t),e},{}),r=Object(o.a)(t,"id"),n=["0"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=l(r[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=c[e.id];return n.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}}),i=a(c[0]||[]);return Object.entries(c).forEach(e=>{let[t,c]=e;n.includes(t)||i.push(...a(c||[]))}),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!r.test(e.name)&&e).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},18:function(e,t,c){"use strict";c.d(t,"p",(function(){return o})),c.d(t,"n",(function(){return l})),c.d(t,"m",(function(){return a})),c.d(t,"o",(function(){return i})),c.d(t,"k",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"h",(function(){return b})),c.d(t,"l",(function(){return d})),c.d(t,"c",(function(){return m})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return p})),c.d(t,"a",(function(){return E})),c.d(t,"b",(function(){return j})),c.d(t,"i",(function(){return f})),c.d(t,"j",(function(){return w})),c.d(t,"f",(function(){return y}));var r,n=c(3);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,b=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),d=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),m=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),g=n.STORE_PAGES.cart.permalink,p=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("localPickupEnabled",!1)),h=Object(n.getSetting)("countries",{}),O=Object(n.getSetting)("countryData",{}),E=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,h[e]||""])),j=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowBilling).map(e=>[e,O[e].states||[]])),f=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,h[e]||""])),w=Object.fromEntries(Object.keys(O).filter(e=>!0===O[e].allowShipping).map(e=>[e,O[e].states||[]])),y=Object.fromEntries(Object.keys(O).map(e=>[e,O[e].locale||[]]))},2:function(e,t){e.exports=window.wp.components},21:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return l}));var r=c(42);const n=e=>!Object(r.a)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return n(e)&&t in e}const l=e=>0===Object.keys(e).length},22:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return b})),c.d(t,"i",(function(){return d})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return O}));var r=c(15),n=c(14),o=c.n(n),l=c(3),a=c(18);const i=(e,t)=>{const c=new Map;return e.filter(e=>{const r=t(e);return!c.has(r)&&(c.set(r,e),!0)})},s=e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const l=(e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const o=a.p.productCount>100,l={per_page:o?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},i=[Object(r.addQueryArgs)("/wc/store/v1/products",{...l,...n})];return o&&t.length&&i.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),i})({selected:t,search:c,queryArgs:n});return Promise.all(l.map(e=>o()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id).map(e=>({...e,parent:0}))}).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),b=()=>o()({path:"wc/store/v1/products/attributes"}),d=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:c}=e;const n=(e=>{let{selected:t=[],search:c}=e;const n=Object(l.getSetting)("limitTags",!1),o=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:c})];return n&&t.length&&o.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:c});return Promise.all(n.map(e=>o()({path:e}))).then(e=>{const t=e.flat();return i(t,e=>e.id)})},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),p=e=>o()({path:"wc/store/v1/products/categories/"+e}),h=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),O=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},233:function(e,t){},29:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t){e.exports=window.wp.escapeHtml},334:function(e){e.exports=JSON.parse('{"name":"woocommerce/products-by-attribute","title":"Products by Attribute","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products with selected attributes.","supports":{"align":["wide","full"],"html":false},"attributes":{"attributes":{"type":"array","default":[]},"attrOperator":{"type":"string","enum":["all","any"],"default":"any"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},35:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(31);t.a=e=>{let{error:t}=e;return Object(r.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woocommerce")})(t))}},36:function(e,t,c){"use strict";c.d(t,"a",(function(){return g}));var r=c(6),n=c.n(r),o=c(0),l=c(4),a=c.n(l),i=c(2);function s(e,t,c){const r=new Set(t.map(e=>e[c]));return e.filter(e=>!r.has(e[c]))}var u=c(16),b=c(17);const d=e=>{let{label:t}=e;return Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t)},m=e=>{const{item:t,search:c}=e,r=t.breadcrumbs&&t.breadcrumbs.length;return Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},r?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(b.b)(t.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(b.d)(Object(u.decodeEntities)(t.name),c)))},g=e=>{var t,c;let{countLabel:r,className:l,depth:u=0,controlId:g="",item:p,isSelected:h,isSingle:O,onSelect:E,search:j="",selected:f,useExpandedPanelId:w,...y}=e;const[_,k]=w,x=null!=r&&void 0!==p.count&&null!==p.count,v=!(null===(t=p.breadcrumbs)||void 0===t||!t.length),S=!(null===(c=p.children)||void 0===c||!c.length),C=_===p.id,A=a()(["woocommerce-search-list__item","depth-"+u,l],{"has-breadcrumbs":v,"has-children":S,"has-count":x,"is-expanded":C,"is-radio-button":O}),P=y.name||"search-list-item-"+g,N=`${P}-${p.id}`,I=Object(o.useCallback)(()=>{k(C?-1:Number(p.id))},[C,p.id,k]);return S?Object(o.createElement)("div",{className:A,onClick:I,onKeyDown:e=>"Enter"===e.key||" "===e.key?I():null,role:"treeitem",tabIndex:0},O?Object(o.createElement)(o.Fragment,null,Object(o.createElement)("input",n()({type:"radio",id:N,name:P,value:p.value,onChange:E(p),onClick:e=>e.stopPropagation(),checked:h,className:"woocommerce-search-list__item-input"},y)),Object(o.createElement)(m,{item:p,search:j}),x?Object(o.createElement)(d,{label:r||p.count}):null):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.CheckboxControl,n()({className:"woocommerce-search-list__item-input",checked:h},!h&&p.children.some(e=>f.find(t=>t.id===e.id))?{indeterminate:!0}:{},{label:Object(b.d)(p.name,j),onChange:()=>{h?E(s(f,p.children,"id"))():E(function(e,t,c){const r=s(t,e,"id");return[...e,...r]}(f,p.children))()},onClick:e=>e.stopPropagation()})),x?Object(o.createElement)(d,{label:r||p.count}):null)):Object(o.createElement)("label",{htmlFor:N,className:A},O?Object(o.createElement)("input",n()({type:"radio",id:N,name:P,value:p.value,onChange:E(p),checked:h,className:"woocommerce-search-list__item-input"},y)):Object(o.createElement)("input",n()({type:"checkbox",id:N,name:P,value:p.value,onChange:E(p),checked:h,className:"woocommerce-search-list__item-input"},y)),Object(o.createElement)(m,{item:p,search:j}),x?Object(o.createElement)(d,{label:r||p.count}):null)};t.b=g},365:function(e,t){},42:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=e=>null===e},5:function(e,t){e.exports=window.wp.blockEditor},521:function(e,t,c){e.exports=c(557)},557:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(76),o=c(608),l=c(8),a=c(3),i=(c(365),c(334)),s=c(6),u=c.n(s),b=c(5),d=c(2),m=c(1),g=c(72),p=c(73),h=c(146),O=c(116),E=c(96);const j=e=>{const{setAttributes:t}=e,{attributes:c,attrOperator:n,columns:o,contentVisibility:l,orderby:i,rows:s,alignButtons:u,stockStatus:j}=e.attributes;return Object(r.createElement)(b.InspectorControls,{key:"inspector"},Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Layout","woocommerce"),initialOpen:!0},Object(r.createElement)(g.a,{columns:o,rows:s,alignButtons:u,setAttributes:t,minColumns:Object(a.getSetting)("min_columns",1),maxColumns:Object(a.getSetting)("max_columns",6),minRows:Object(a.getSetting)("min_rows",1),maxRows:Object(a.getSetting)("max_rows",6)})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Content","woocommerce"),initialOpen:!0},Object(r.createElement)(p.a,{settings:l,onChange:e=>t({contentVisibility:e})})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Filter by Product Attribute","woocommerce"),initialOpen:!1},Object(r.createElement)(h.a,{selected:c,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const c=e.map(e=>{let{id:t,attr_slug:c}=e;return{id:t,attr_slug:c}});t({attributes:c})},operator:n,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})},isCompact:!0})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Order By","woocommerce"),initialOpen:!1},Object(r.createElement)(O.a,{setAttributes:t,value:i})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Filter by stock status","woocommerce"),initialOpen:!1},Object(r.createElement)(E.a,{setAttributes:t,value:j})))},f=e=>{const{attributes:t,setAttributes:c,setIsEditing:l,isEditing:a,debouncedSpeak:i}=e;return Object(r.createElement)(d.Placeholder,{icon:Object(r.createElement)(n.a,{icon:o.a}),label:Object(m.__)("Products by Attribute","woocommerce"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(m.__)("Display a grid of products from your selected attributes.","woocommerce"),Object(r.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(r.createElement)(h.a,{selected:t.attributes,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.map(e=>{let{id:t,value:c}=e;return{id:t,attr_slug:c}});c({attributes:t})},operator:t.attrOperator,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return c({attrOperator:e})}}),Object(r.createElement)(d.Button,{isPrimary:!0,onClick:()=>{l(!a),i(Object(m.__)("Showing Products by Attribute block preview.","woocommerce"))}},Object(m.__)("Done","woocommerce"))))};var w=c(63),y=c.n(w),_=c(165);const k=e=>{const{attributes:t,name:c}=e;return t.isPreview?_.a:Object(r.createElement)(y.a,{block:c,attributes:t})},x=Object(d.withSpokenMessages)(e=>{const t=Object(b.useBlockProps)(),{attributes:{attributes:c}}=e,[n,o]=Object(r.useState)(!c.length);return Object(r.createElement)("div",t,Object(r.createElement)(b.BlockControls,null,Object(r.createElement)(d.ToolbarGroup,{controls:[{icon:"edit",title:Object(m.__)("Edit selected attribute","woocommerce"),onClick:()=>o(!n),isActive:n}]})),Object(r.createElement)(j,e),n?Object(r.createElement)(f,u()({isEditing:n,setIsEditing:o},e)):Object(r.createElement)(d.Disabled,null,Object(r.createElement)(k,e)))});Object(l.registerBlockType)(i,{icon:{src:Object(r.createElement)(n.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:Object(a.getSetting)("default_columns",3)},rows:{type:"number",default:Object(a.getSetting)("default_rows",3)},stockStatus:{type:"array",default:Object.keys(Object(a.getSetting)("stockStatusOptions",[]))}},edit:x,save:()=>null})},56:function(e,t){},58:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=(e,t)=>e.reduce((e,c)=>(e[String(t?c[t]:c)]=c,e),{})},63:function(e,t){e.exports=window.wp.serverSideRender},7:function(e,t){e.exports=window.wp.data},71:function(e,t,c){"use strict";var r=c(6),n=c.n(r),o=c(0),l=c(2),a=c(36),i=c(4),s=c.n(i);t.a=e=>{let{className:t,item:c,isSelected:r,isLoading:i,onSelect:u,disabled:b,...d}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.a,n()({},d,{key:c.id,className:t,isSelected:r,item:c,onSelect:u,disabled:b})),r&&i&&Object(o.createElement)("div",{key:"loading",className:s()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(o.createElement)(l.Spinner,null)))}},72:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);const l=(e,t,c)=>c?Math.min(e,t)===e?t:Math.max(e,c)===e?c:e:Math.max(e,t)===t?e:t;t.a=e=>{let{columns:t,rows:c,setAttributes:a,alignButtons:i,minColumns:s=1,maxColumns:u=6,minRows:b=1,maxRows:d=6}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Columns","woocommerce"),value:t,onChange:e=>{const t=l(e,s,u);a({columns:Number.isNaN(t)?"":t})},min:s,max:u}),Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Rows","woocommerce"),value:c,onChange:e=>{const t=l(e,b,d);a({rows:Number.isNaN(t)?"":t})},min:b,max:d}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woocommerce"),help:i?Object(n.__)("Align the last block to the bottom.","woocommerce"):Object(n.__)("The last inner block will follow other content.","woocommerce"),checked:i,onChange:()=>a({alignButtons:!i})}))}},73:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=e=>{let{onChange:t,settings:c}=e;const{image:l,button:a,price:i,rating:s,title:u}=c,b=!1!==l;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woocommerce"),checked:b,onChange:()=>t({...c,image:!b})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woocommerce"),checked:u,onChange:()=>t({...c,title:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woocommerce"),checked:i,onChange:()=>t({...c,price:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woocommerce"),checked:s,onChange:()=>t({...c,rating:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woocommerce"),checked:a,onChange:()=>t({...c,button:!a})}))}},8:function(e,t){e.exports=window.wp.blocks},96:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3),l=c(2);const a=Object(o.getSetting)("hideOutOfStockItems",!1),i=Object(o.getSetting)("stockStatusOptions",{});t.a=e=>{let{value:t,setAttributes:c}=e;const{outofstock:o,...s}=i,u=a?s:i,b=Object.entries(u).map(e=>{let[t,c]=e;return{value:t,label:c}}).filter(e=>!!e.label),[d,m]=Object(r.useState)(t);Object(r.useEffect)(()=>{c({stockStatus:["",...d]})},[d,c]);const g=Object(r.useCallback)(e=>{const t=d.includes(e),c=d.filter(t=>t!==e);t||(c.push(e),c.sort()),m(c)},[d]);return Object(r.createElement)(r.Fragment,null,b.map(e=>{const t=d.includes(e.value)?
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" visible.',"woocommerce"):
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" hidden.',"woocommerce");return Object(r.createElement)(l.ToggleControl,{label:e.label,key:e.value,help:Object(n.sprintf)(t,e.label),checked:d.includes(e.value),onChange:()=>g(e.value)})}))}}});