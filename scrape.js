const puppeteer = require('puppeteer');

(async () => {
    for(var i=1;i<=10;i++)
    {
        let imdbUrl = "https://www.imdb.com/list/ls048276758/?page="
        imdbUrl+=i
        
        let browser = await puppeteer.launch()
        let page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0);
        await page.goto(imdbUrl);

        let data = await page.evaluate(() => {
            let titles = []

            for(var i=0;i<100;i++)
            titles.push('"'+document.querySelector('div[class="lister-list"]').children[i].children[1].firstElementChild.children[1].innerText+'"')

            return titles
        })

        console.log(data+",")

        await browser.close()
    }
})();

