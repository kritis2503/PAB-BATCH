const puppeteer = require("puppeteer");
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
        cTab.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq")
        let nameClass=".yt-simple-endpoint.style-scope.yt-formatted-string";
        cTab.waitForSelector(nameClass,{visible:true})
        let name=await cTab.evaluate(nameofplaylist,nameClass);
        console.log(name);
        //console.log(pName);

    } catch (err) {
        console.log(err);
    }
})();
 function nameofplaylist(selector){
    // let name=document.querySelector(selector).innerText;
    let name=document.querySelectorAll(".yt-simple-endpoint.style-scope.yt-formatted-string")[0].textContent;
    console.log(name);
    return name;
}