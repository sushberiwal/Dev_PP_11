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
  .then(function(){
    return waitAndClick("#base-card-1-link"); // make this function a promisified function !!
  })
  .then(function(){
    return waitAndClick('a[data-attr1="warmup"]');
  })
  .catch(function(err){
    console.log(err);
  })

  function waitAndClick(selector){
    return new Promise( function(scb , fcb){
      let waitPromise = tab.waitForSelector( selector , { visible: true });
      waitPromise.then(function(){
         return tab.click(selector);
      })
      .then(function(){
        scb();
      })
      .catch(function(){
        fcb();
      })
    });
  }

  