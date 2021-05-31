const id = "pamico3332@nic58.com";
const pw = "12345678";
const puppeteer = require("puppeteer");


async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await addModerators(browser , tab);
};
login();


async function addModerators(browser , tab){
    await tab.waitForSelector('.backbone.block-center' , {visible:true});
    let allATags = await tab.$$('.backbone.block-center');
    let allQuesLinks = [];
    for(let i=0 ; i<allATags.length ; i++){
        let qLink = await tab.evaluate( function(elem){  return elem.getAttribute("href");  }   , allATags[i]);
        qLink = "https://www.hackerrank.com"+qLink;
        allQuesLinks.push(qLink);
    }

    for(let i=0 ; i<allQuesLinks.length ; i++){
        let qLink = allQuesLinks[i];
        let newTab = await browser.newPage();
        await addModeratorToASingleQues(newTab , qLink);
    }

    // next button active hai to click on next
    // addModerators(browser , tab);

    let allLis = await tab.$$('.pagination li');
    let nextBtnLi = allLis[allLis.length-2];
    let isDisabled = await tab.evaluate( function(elem){ return elem.classList.contains("disabled");  } , nextBtnLi );
    // if true ??
    if(isDisabled){
        return;
    }
    // else false ??
    await nextBtnLi.click();
    await tab.waitForTimeout(5000);
    await addModerators(browser , tab);
}


async function addModeratorToASingleQues(newTab , qLink){
       await newTab.goto(qLink);
       await newTab.waitForTimeout(2000);
       await newTab.click('li[data-tab="moderators"]');
       await newTab.waitForSelector('#moderator' , {visible:true});
       await newTab.type("#moderator" , "pep");
       await newTab.click('.btn.moderator-save');
       await newTab.click('.save-challenge.btn.btn-green');
       await newTab.waitForTimeout(2000);
       await newTab.close();
}