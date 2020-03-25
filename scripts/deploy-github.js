const ghpages = require('gh-pages')
const fs = require('fs');


fs.writeFile('public/CNAME', "meghaduta.org", function(err) {});

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/vatadepalli/vatadepalli.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)