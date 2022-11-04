
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw shows div with id of "choices"', async () => {
    await driver.findElement(By.id('draw')).click()
    let choicesSection = await driver.findElement(By.id('choices'))
    let displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking "add to duo" button shows the div with the id of "player-duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(100)
    await driver.findElement(By.css('.bot-btn')).click()
    let playerDuoSection = await driver.findElement(By.id('player-duo'))
    let displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
})


