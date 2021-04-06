// import { puppeteer } from 'puppeteer';
const puppeteer = require('puppeteer');

// import puppeteer from "puppeteer";

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  //page is our open page, $x is a puppeteer selector (select a item on the by by xpath - way to navigate the page like jquery, generally one or two "//")
  //const [el] = await page.$x('//*[@id="imgBlkFront"]');
  //el (dest) puling 1st item of array
  //the src of the element
  //const src = el.getProperty("src");
  //const srcTxt = await src.jsonValue();

//cnpj
  const [el2] = await page.$x('//*[@id="content"]/table/tbody/tr[2]/td[2]/a');
//amazon
  //const [el2] = await page.$x('//*[@id="productTitle"]');

  const txt = el2.getProperty("textContent");
  console.log("text: ",txt)
  //const rawTxt =  await txt.jsonValue()
  const rawTxt =  (await txt).jsonValue()


  //console.log({ srcTxt, rawTx });
  console.log(rawTxt);


  //browser.close();
}

//scrapeProduct(
//  "https://www.amazon.com/Hamlets-Mill-Investigating-Knowledge-Transmission/dp/0879232153"
//);

scrapeProduct(
  "http://cnpj.info/10604782000121"
);

{
  /* <tr><td>Nome da empresa</td><td><a href="/Trosa-S-A-Administracao-e-Participacao-Trosa">TROSA S/A ADMINISTRACAO E PARTICIPACAO</a></td></tr> */
}
