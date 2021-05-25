const puppeteer = require("puppeteer");
const id = "misid46226@isecv.com";
const pw = "123456789";
let tab;

// puppeteer has promisfied functions

// by default headless = true

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    console.log("browser is opened !");
    return browser.pages();
  })
  .then(function (pages) {
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
  })
  .then(function () {
    return tab.type("#input-1", id);
  })
  .then(function () {
    return tab.type("#input-2", pw);
  })
  .then(function () {
    return tab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    ); // login hojata hai click se
  })
  .then(function () {
    return waitAndClick("#base-card-1-link");
  })
  .then(function () {
    return waitAndClick('a[data-attr1="warmup"]');
  })
  .then(function () {
    return tab.waitForSelector(".js-track-click.challenge-list-item", {
      visible: true,
    });
  })
  .then(function () {
    // tab.$() // document.querySelector;
    return tab.$$(".js-track-click.challenge-list-item"); // it will run document.querySelectorAll in the browser and gives you array of all the elements
  })
  .then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = oneATag.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  })
  .then(function(allQuesLinks){
    let oneQuesSolvePromise = solveQuestion(allQuesLinks[0]);
    return oneQuesSolvePromise;   
  })
  .then(function(){

  })
  .catch(function(err){
    console.log(err);
  });


  function solveQuestion(quesLink){

    return new Promise( function(scb , fcb){
      let gotoPromise = tab.goto("https://www.hackerrank.com"+quesLink);
      gotoPromise.then(function(){
       return waitAndClick('div[data-attr2="Editorial"]');
      })
      .then(function(){
        
      })
    });
  }




function waitAndClick(selector) {
  return new Promise(function (scb, fcb) {
    let waitPromise = tab.waitForSelector(selector, { visible: true });
    waitPromise
      .then(function () {
        return tab.click(selector);
      })
      .then(function () {
        scb();
      })
      .catch(function () {
        fcb();
      });
  });
}
