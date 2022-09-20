const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { By } = require('selenium-webdriver')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test('movieTest', async () => {

    const deletedMessage = await driver.findElement(By.id('message'))
    const displayed = deletedMessage.isDisplayed();

    await driver.findElement(By.xpath('//input')).sendKeys('The Sandlot')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//Span')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//li/Button')).click()
    await driver.sleep(1000)

    expect(displayed).toBeTruthy()

})

