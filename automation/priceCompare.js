const puppeteer = require("puppeteer");
let links = ["https://www.amazon.in", "https://www.flipkart.com/", "https://paytmmall.com"];
let pName = process.argv[2];
let cTab;
(async function fn() {
    try {
        let browser= await puppeteer.launch({
            headless:false ,
            defaultViewport: null,
            args:["--start-maximized"],
        });

        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        let list = await getListingFromAmazon(links[0]);
        console.table(list, pName);
        //console.log(pName);

    } catch (err) {
        console.log(err);
    }
})();
async function getListingFromAmazon(link) {
    await cTab.goto(link);
    await cTab.waitForSelector("#twotabsearchtextbox",{visible:true});
    await cTab.click("#twotabsearchtextbox");
    await cTab.type("#twotabsearchtextbox","iphone 11");
    await cTab.click("#nav-search-submit-button");
    let spanrequired=document.querySelector("span[cel_widget_id='MAIN-SEARCH_RESULTS-1']").innerHTML;
    console.log(spanrequired);
    //let spanHtml=cTab.evalute()
}