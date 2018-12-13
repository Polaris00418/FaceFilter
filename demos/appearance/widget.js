//ref : https://github.com/blog/273-github-ribbons
document.addEventListener("DOMContentLoaded", function(event) { 
    var githubRibbon=document.createElement('a');
    githubRibbon.setAttribute('href', '');
    var githubRibbonImage=document.createElement('img');
    githubRibbonImage.setAttribute('style', 'position: absolute; top: 0; left: 0; border: 0; z-index: 1000');
    githubRibbonImage.setAttribute('src', ' ');
    githubRibbonImage.setAttribute('alt', 'Demo for Virtual Try on');
    githubRibbonImage.setAttribute('data-canonical-src', '');
    githubRibbon.appendChild(githubRibbonImage);

    document.body.appendChild(githubRibbon);
});