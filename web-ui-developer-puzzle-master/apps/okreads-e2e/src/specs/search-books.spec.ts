import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: Use the search feature', () => {
  it('Then: I should be able to search books by title', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
  });

  xit('Then: I should see search results as I am typing', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
  });

  it('Then: I should be able to add and undo add', async () => {
    await browser.get('/');
    await browser.wait(
        ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('united states');

    const btn = await $$('[data-testing="book-item"]').first().$('button');

    await btn.click();


    const btnUndo = await $('.cdk-overlay-container').$('.cdk-global-overlay-wrapper').
        $('.cdk-overlay-pane').$('.mat-snack-bar-container')
        .$('.mat-simple-snackbar.ng-star-inserted').$('.mat-simple-snackbar-action.ng-star-inserted').
        $('.mat-focus-indicator.mat-button.mat-button-base');
    btnUndo.click();

});

});
