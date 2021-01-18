import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to add and remove book from readinglist', async () => {
    await browser.get('/');
    await browser.wait(
        ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('dotnet');
    await form.submit();

    const btn = await $$('[data-testing="book-item"]').first().$('button');
    await btn.click();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
        ExpectedConditions.textToBePresentInElement(
            $('[data-testing="reading-list-container"]'),
            'My Reading List'
        )
    );

    const readingListItem = await $('[data-testing="reading-list-container"]').$('.reading-list-content').$$('.reading-list-item').first();
    const removeBtn = await readingListItem.$('.mat-focus-indicator.mat-icon-button.mat-button-base.mat-warn');
    removeBtn.click();

});


it('Then: I should be able to add and mark a book as finished in readinglist', async () => {
    await browser.get('/');
    await browser.wait(
        ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('dotnet');
    await form.submit();

    const btn = await $$('[data-testing="book-item"]').first().$('button');
    await btn.click();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
        ExpectedConditions.textToBePresentInElement(
            $('[data-testing="reading-list-container"]'),
            'My Reading List'
        )
    );

    const readingListItem = await $('[data-testing="reading-list-container"]').$('.reading-list-content').$$('.reading-list-item').first();
    const removeBtn = await readingListItem.$('.mat-focus-indicator.mat-icon-button.mat-button-base.mat-primary');
    removeBtn.click();

    const btn1 = await $$('[data-testing="book-item"]').first().$('button');
    ExpectedConditions.textToBePresentInElement(btn1.$('mat-button-wrapper'), 'Finished');

});

});
