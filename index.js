const puppeteer = require('puppeteer')

async function scrapeDollar(url) {
    const browser= await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [element] = await page.$x('//*[@id="knowledge-currency__updatable-data-column"]/div[1]/div[2]/span[2]')
    const src = await element.getProperty('src')
    const srcText = await src.jsonValue()

    console.log({srcText})

    browser.close()
}


scrapeDollar('https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D9%84%D8%A7%D8%B1+%D9%85%D9%82%D8%A7%D8%A8%D9%84+%D8%A7%D9%84%D8%B4%D9%8A%D9%83%D9%84&oq=%D8%A7%D9%84%D8%AF%D9%88%D9%84%D8%A7%D8%B1&aqs=chrome.1.69i57j35i39l2j0i131i433i512j0i512l3j0i433i512l2j0i512.7168j0j7&sourceid=chrome&ie=UTF-8')