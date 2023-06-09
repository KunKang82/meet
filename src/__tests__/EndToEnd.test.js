import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    // jest.setTimeout(30000);
    // const browser = await puppeteer.launch({
      browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
     ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  // test('An event element is collapsed by default', async () => {
  //   const eventDetails = await page.$('.event .event-description');
  //   expect(eventDetails).toBeNull();
  // });

  // test('User can expand an event to see its details', async () => {
  //   await page.click('.event .show_details-button');
  //   const eventDetails = await page.$('.event .event-description');
  //   expect(eventDetails).toBeDefined();
  // });
  
  // test('User can collapse an event to hide its details', async () => {
  //   await page.click('.event .hide_details-button');
  //   const eventDetails = await page.$('.event .event-description');
  //   expect(eventDetails).toBeNull();
  // });
  // test('User can collapse an event to hide its details', async () => {
  //   await page.click('.event .show_details-button'); // Expand the event first
  //   await page.waitForTimeout(500); // Wait for 500 milliseconds (adjust the delay if needed)
  //   await page.click('.event .hide_details-button'); // Collapse the event
  //   const eventDetails = await page.$('.event .event-description');
  //   expect(eventDetails).toBeNull();
  // });
  
});