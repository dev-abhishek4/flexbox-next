const withSass = require("@zeit/next-sass");
module.exports = withSass({
    // assetPrefix: '/flexbox' // for prod build uncomment this line
    // this will be added before _next so that you can acces it if you are deploying project on a domain folder
});
