(function(){var a=SyntaxHighlighter;a.autoloader=function(){function o(){g&&SyntaxHighlighter.highlight(h)}function n(a){var b=document.createElement("script"),c=!1;b.src=a,b.type="text/javascript",b.language="javascript",b.onload=b.onreadystatechange=function(){!c&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")&&(c=!0,e[a]=!0,o(),b.onload=b.onreadystatechange=null,b.parentNode.removeChild(b))},document.body.appendChild(b)}function k(a){return a.pop?a:a.split(/\s+/)}function j(a,b){for(var c=0;c<a.length;c++)d[a[c]]=b}var b=arguments,c=a.findElements(),d={},e={},f=SyntaxHighlighter.all,g=!1,h=null,i;SyntaxHighlighter.all=function(a){h=a,g=!0};for(i=0;i<b.length;i++){var l=k(b[i]),m=l.pop();j(l,m)}for(i=0;i<c.length;i++){var m=d[c[i].params.brush];if(!m)continue;e[m]=!1,n(m)}}})()