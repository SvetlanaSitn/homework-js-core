function urlInfo(url){
    const [protocol, txtLine] = url.split('://');
    const urls = txtLine.split('/');
    const domain = urls.shift();
    const path = urls.join('/');

    return `Protocol: ${protocol}, domain: ${domain}, path: ${path}.`;
}

console.log(urlInfo('https://www.nytimes.com/section/health'))