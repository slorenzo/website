(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,a){"use strict";a.r(t);a(58),a(268);var n=a(0),r=a.n(n),l=a(218),c=a.n(l),o=a(232),s=(a(220),a(219)),i=a(221),m=a(527),u=a(469),f=a(522),d=a(528),g=a(523),E=a(524),p=a(525),h=a(269),y=a.n(h);a(270),a(271);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var x="\n// JS\nfunction hello() {\n  let result = fibonacci(10000);\n  console.log(result);\n  return result;\n}\n",v='\n// Neon\nfn hello(mut cx: FunctionContext) -> JsResult<JsNumber> {\n  let result = cx.number(fibonacci(10000));\n  println!("{}", result);\n  Ok(result)\n}',_=[{name:"Make Array",code:'\n// Create an array and add some values to it\nfn make_an_array(mut cx: FunctionContext) -> JsResult<JsArray> {\n  // Create some values:\n  let n = cx.number(9000);\n  let s = cx.string("hello");\n  let b = cx.boolean(true);\n  // Create a new array:\n  let array: Handle<JsArray> = cx.empty_array();\n  // Push the values into the array:\n  array.set(&mut cx, 0, n)?;\n  array.set(&mut cx, 1, s)?;\n  array.set(&mut cx, 2, b)?;\n  // Return the array:\n  Ok(array)\n}\n'},{name:"Print Function Arguments",code:'\n// Create a function that gets the number of arguments passed to it\nfn get_args_len(mut cx: FunctionContext) -> JsResult<JsNumber> {\n    let args_length = cx.len();\n    println!("{}", args_length);\n    Ok(cx.number(args_length))\n}\n'},{name:"Async Fibonacci",code:"\n// Asynchronously compute fibonacci on another thread\nfn fibonacci_async(mut cx: FunctionContext) -> JsResult<JsUndefined> {\n  let n = cx.argument::<JsNumber>(0)?.value() as usize;\n  let cb = cx.argument::<JsFunction>(1)?;\n\n  let task = FibonacciTask { argument: n };\n  task.schedule(cb);\n\n  Ok(cx.undefined())\n}\n"}],N=function(e){return r.a.createElement("div",{className:"neonProjectLogo"},r.a.createElement("div",{className:"neon-logo"},r.a.createElement("span",{className:"open neon-heading neon-flicker-blink"},e.title),r.a.createElement("span",{className:"hrs neon-subheading"},e.subtitle)))},k=[{title:r.a.createElement(r.a.Fragment,null,"Simple Tooling"),imageUrl:"img/hammer.svg",description:r.a.createElement(r.a.Fragment,null,"No makefiles. No fancy global build requirements. Just Node and Rust")},{title:r.a.createElement(r.a.Fragment,null,"Guaranteed Safety"),description:r.a.createElement(r.a.Fragment,null,"If a neon module compiles, it is guaranteed to be memory safe by the rust compiler"),imageUrl:"img/checkmark.svg"},{title:r.a.createElement(r.a.Fragment,null,"Easy Parallelism"),description:r.a.createElement(r.a.Fragment,null,"Safely run multiple threads without data races"),imageUrl:"img/fork.svg"}],C=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={currentExampleIdx:0,currentCode:_[0].code},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.onButtonClick=function(e){this.setState({currentExampleIdx:e,currentCode:_[e].code})},l.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:y.a.Carousel},_.map((function(t,a){return r.a.createElement(d.a,{color:e.state.currentExampleIdx===a?"primary":"secondary",key:t.name,onClick:function(){return e.onButtonClick(a)}},t.name)}))),r.a.createElement(O,{language:"rust"},this.state.currentCode))},n}(r.a.Component),O=function(e){return r.a.createElement(m.a,b({},e,{customStyle:{background:"#08162E",margin:"30px 0",textAlign:"left",color:"white !important"},style:u.a}),e.children)};O.defaultProps={language:"javascript"};var w=function(e){return e.join(" ")};t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(o.a,{title:t.title+" - "+t.tagline,description:t.tagline},r.a.createElement("header",{className:w([y.a.header,y.a.containerOdd])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement(N,{title:t.title,subtitle:t.tagline}),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:6},r.a.createElement(O,null,x)),r.a.createElement(E.a,{xs:6},r.a.createElement(O,{language:"rust"},v))),r.a.createElement(p.a,{className:y.a.actionButtons},r.a.createElement(f.a,null,r.a.createElement("a",{href:Object(i.a)("docs/getting-started")},r.a.createElement(d.a,{color:"primary"},"Try It Out")),r.a.createElement("a",{href:t.repoUrl},r.a.createElement(d.a,{color:"primary",target:"_blank"},"GitHub")),r.a.createElement("a",{href:"https://neon-bindings.com/api/neon/index.html"},r.a.createElement(d.a,{color:"primary",target:"_blank"},"API"))))))),r.a.createElement("main",null,r.a.createElement("section",{className:w([y.a.featuresContainer,y.a.containerEven])},r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h2",{className:y.a.featureHeader},"Features")),k&&k.length&&r.a.createElement("section",null,r.a.createElement(g.a,null,r.a.createElement(p.a,null,k.map((function(e,t){var a=e.imageUrl,n=e.title,l=e.description;return r.a.createElement("div",{key:y.a.featuresContainer,className:c()("col col--4",y.a.feature)},r.a.createElement("h3",{className:y.a.featureSubHeader},r.a.createElement("span",null,r.a.createElement("img",{className:y.a.featureImage,src:Object(i.a)(a),alt:n})),n),r.a.createElement("p",{className:y.a.featureDescription},l))})))))),r.a.createElement("section",{className:w([y.a.featuresContainer,y.a.containerOdd])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h2",{className:y.a.featureHeader},"Examples")),r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement(C,null)))),r.a.createElement("section",{className:w([y.a.featuresContainer,y.a.containerEven])},r.a.createElement(g.a,null,r.a.createElement(E.a,{xs:"12",className:"text-center"},r.a.createElement("h2",{className:y.a.featureHeader},"Demo")),r.a.createElement(E.a,{xs:"12"},r.a.createElement("iframe",{src:"https://asciinema.org/a/269799/iframe",width:"100%",height:"300px"}))))))}},222:function(e,t,a){e.exports={sponsor:"sponsor_2a7p",logoContainer:"logoContainer_c2nu"}},229:function(e,t,a){"use strict";a(58);var n=a(0),r=a.n(n),l=a(218),c=a.n(l),o=a(220),s=a(219),i=a(221),m=a(222),u=a.n(m);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){var t=e.item,a=Object(i.a)(t.to);return r.a.createElement(o.a,f({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}t.a=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,o=n.links,m=void 0===o?[]:o,f=n.logo,g=void 0===f?{}:f,E=Object(i.a)(g.src);return a?r.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},m&&m.length>0&&r.a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return r.a.createElement("div",{key:e.title,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(d,{item:e}))}))):null)}))),(g||l)&&r.a.createElement("div",{className:["text--center",u.a.logoContainer].join(" ")},g&&g.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:g.alt,src:E})),r.a.createElement("div",{className:u.a.sponsor},r.a.createElement("a",{href:"https://www.netlify.com"},r.a.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg",alt:"netlify sponsor"}))),l))):null}},269:function(e,t,a){e.exports={header:"header_1UBA",heroBanner:"heroBanner_2Ftp",featureDescription:"featureDescription_37Ue",featureHeader:"featureHeader_2vom",featureSubHeader:"featureSubHeader_WGT1",containerOdd:"containerOdd_8IvM",containerEven:"containerEven_1C3z",actionButtons:"actionButtons_nmJ6",featuresContainer:"featuresContainer_-qvw",featureImage:"featureImage_3Xqx",Carousel:"Carousel_1jbA"}},270:function(e,t,a){},271:function(e,t,a){}}]);