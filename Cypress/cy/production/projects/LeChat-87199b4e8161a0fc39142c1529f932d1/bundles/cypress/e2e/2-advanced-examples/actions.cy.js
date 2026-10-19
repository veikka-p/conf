/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./cypress/e2e/2-advanced-examples/actions.cy.js ***!
  \*******************************************************/


/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').should('have.value', 'fake@email.com');

    // .type() with special character sequences
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}');
    cy.get('.action-email').type('{del}{selectall}{backspace}');

    // .type() with key modifiers
    cy.get('.action-email').type('{alt}{option}'); //these are equivalent
    cy.get('.action-email').type('{ctrl}{control}'); //these are equivalent
    cy.get('.action-email').type('{meta}{command}{cmd}'); //these are equivalent
    cy.get('.action-email').type('{shift}');

    // Delay each keypress by 0.1 sec
    cy.get('.action-email').type('slow.typing@email.com', {
      delay: 100
    });
    cy.get('.action-email').should('have.value', 'slow.typing@email.com');
    cy.get('.action-disabled')
    // Ignore error checking prior to type
    // like whether the input is visible or disabled
    .type('disabled error checking', {
      force: true
    });
    cy.get('.action-disabled').should('have.value', 'disabled error checking');
  });
  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('.action-focus').focus();
    cy.get('.action-focus').should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;');
  });
  it('.blur() - blur off a DOM element', () => {
    // https://on.cypress.io/blur
    cy.get('.action-blur').type('About to blur');
    cy.get('.action-blur').blur();
    cy.get('.action-blur').should('have.class', 'error').prev().should('have.attr', 'style', 'color: red;');
  });
  it('.clear() - clears an input or textarea element', () => {
    // https://on.cypress.io/clear
    cy.get('.action-clear').type('Clear this text');
    cy.get('.action-clear').should('have.value', 'Clear this text');
    cy.get('.action-clear').clear();
    cy.get('.action-clear').should('have.value', '');
  });
  it('.submit() - submit a form', () => {
    // https://on.cypress.io/submit
    cy.get('.action-form').find('[type="text"]').type('HALFOFF');
    cy.get('.action-form').submit();
    cy.get('.action-form').next().should('contain', 'Your form has been submitted!');
  });
  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.action-btn').click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get('#action-canvas').click();
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topRight');
    cy.get('#action-canvas').click('left');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click('bottomLeft');
    cy.get('#action-canvas').click('bottom');
    cy.get('#action-canvas').click('bottomRight');

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    cy.get('#action-canvas');
    cy.get('#action-canvas').click(80, 75); // click 80px on x coord and 75px on y coord
    cy.get('#action-canvas').click(170, 75);
    cy.get('#action-canvas').click(80, 165);
    cy.get('#action-canvas').click(100, 185);
    cy.get('#action-canvas').click(125, 190);
    cy.get('#action-canvas').click(150, 185);
    cy.get('#action-canvas').click(170, 165);

    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({
      multiple: true
    });

    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({
      force: true
    });
  });
  it('.dblclick() - double click on a DOM element', () => {
    // https://on.cypress.io/dblclick

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.get('.action-div').dblclick();
    cy.get('.action-div').should('not.be.visible');
    cy.get('.action-input-hidden').should('be.visible');
  });
  it('.rightclick() - right click on a DOM element', () => {
    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    cy.get('.rightclick-action-div').rightclick();
    cy.get('.rightclick-action-div').should('not.be.visible');
    cy.get('.rightclick-action-input-hidden').should('be.visible');
  });
  it('.check() - check a checkbox or radio element', () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check();
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked');
    cy.get('.action-radios [type="radio"]').not('[disabled]').check();
    cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked');

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]').check('radio1');
    cy.get('.action-radios [type="radio"]').should('be.checked');

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2']);
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked');

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]').check({
      force: true
    });
    cy.get('.action-checkboxes [disabled]').should('be.checked');
    cy.get('.action-radios [type="radio"]').check('radio3', {
      force: true
    });
    cy.get('.action-radios [type="radio"]').should('be.checked');
  });
  it('.uncheck() - uncheck a checkbox element', () => {
    // https://on.cypress.io/uncheck

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]').not('[disabled]').uncheck();
    cy.get('.action-check [type="checkbox"]').not('[disabled]').should('not.be.checked');

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]').check('checkbox1');
    cy.get('.action-check [type="checkbox"]').uncheck('checkbox1');
    cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3']);
    cy.get('.action-check [type="checkbox"]').uncheck(['checkbox1', 'checkbox3']);
    cy.get('.action-check [type="checkbox"][value="checkbox1"]').should('not.be.checked');
    cy.get('.action-check [type="checkbox"][value="checkbox3"]').should('not.be.checked');

    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]').uncheck({
      force: true
    });
    cy.get('.action-check [disabled]').should('not.be.checked');
  });
  it('.select() - select an option in a <select> element', () => {
    // https://on.cypress.io/select

    // at first, no option should be selected
    cy.get('.action-select').should('have.value', '--Select a fruit--');

    // Select option(s) with matching text content
    cy.get('.action-select').select('apples');
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get('.action-select').should('have.value', 'fr-apples');
    cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas']);
    cy.get('.action-select-multiple')
    // when getting multiple values, invoke "val" method first
    .invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);

    // Select option(s) with matching value
    cy.get('.action-select').select('fr-bananas');
    cy.get('.action-select')
    // can attach an assertion right away to the element
    .should('have.value', 'fr-bananas');
    cy.get('.action-select-multiple').select(['fr-apples', 'fr-oranges', 'fr-bananas']);
    cy.get('.action-select-multiple').invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas']);

    // assert the selected values include oranges
    cy.get('.action-select-multiple').invoke('val').should('include', 'fr-oranges');
  });
  it('.scrollIntoView() - scroll an element into view', () => {
    // https://on.cypress.io/scrollintoview

    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    cy.get('#scroll-horizontal button').should('not.be.visible');

    // scroll the button into view, as if the user had scrolled
    cy.get('#scroll-horizontal button').scrollIntoView();
    cy.get('#scroll-horizontal button').should('be.visible');
    cy.get('#scroll-vertical button').should('not.be.visible');

    // Cypress handles the scroll direction needed
    cy.get('#scroll-vertical button').scrollIntoView();
    cy.get('#scroll-vertical button').should('be.visible');
    cy.get('#scroll-both button').should('not.be.visible');

    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView();
    cy.get('#scroll-both button').should('be.visible');
  });
  it('.trigger() - trigger an event on a DOM element', () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get('.trigger-input-range').invoke('val', 25);
    cy.get('.trigger-input-range').trigger('change');
    cy.get('.trigger-input-range').get('input[type=range]').siblings('p').should('have.text', '25');
  });
  it('cy.scrollTo() - scroll the window or element to a position', () => {
    // https://on.cypress.io/scrollto

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom');
    cy.get('#scrollable-horizontal').scrollTo('right');

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get('#scrollable-vertical').scrollTo(250, 250);

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both').scrollTo('75%', '25%');

    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical').scrollTo('center', {
      easing: 'linear'
    });

    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both').scrollTo('center', {
      duration: 2000
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFO0lBQVMsQ0FBQyxDQUFDOztJQUV2RTtJQUNBNUIsRUFBRSxDQUFDRyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7TUFBRUUsUUFBUSxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQ25FLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vS2Vza3VzdGVsdXQvLi9jeXByZXNzL2UyZS8yLWFkdmFuY2VkLWV4YW1wbGVzL2FjdGlvbnMuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29udGV4dCgnQWN0aW9ucycsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL2FjdGlvbnMnKVxuICB9KVxuXG4gIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9pbnRlcmFjdGluZy13aXRoLWVsZW1lbnRzXG5cbiAgaXQoJy50eXBlKCkgLSB0eXBlIGludG8gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vdHlwZVxuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ2Zha2VAZW1haWwuY29tJylcbiAgICBjeS5nZXQoJy5hY3Rpb24tZW1haWwnKS5zaG91bGQoJ2hhdmUudmFsdWUnLCAnZmFrZUBlbWFpbC5jb20nKVxuXG4gICAgLy8gLnR5cGUoKSB3aXRoIHNwZWNpYWwgY2hhcmFjdGVyIHNlcXVlbmNlc1xuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ3tsZWZ0YXJyb3d9e3JpZ2h0YXJyb3d9e3VwYXJyb3d9e2Rvd25hcnJvd30nKVxuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ3tkZWx9e3NlbGVjdGFsbH17YmFja3NwYWNlfScpXG5cbiAgICAvLyAudHlwZSgpIHdpdGgga2V5IG1vZGlmaWVyc1xuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ3thbHR9e29wdGlvbn0nKSAvL3RoZXNlIGFyZSBlcXVpdmFsZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgne2N0cmx9e2NvbnRyb2x9JykgLy90aGVzZSBhcmUgZXF1aXZhbGVudFxuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ3ttZXRhfXtjb21tYW5kfXtjbWR9JykgLy90aGVzZSBhcmUgZXF1aXZhbGVudFxuICAgIGN5LmdldCgnLmFjdGlvbi1lbWFpbCcpLnR5cGUoJ3tzaGlmdH0nKVxuXG4gICAgLy8gRGVsYXkgZWFjaCBrZXlwcmVzcyBieSAwLjEgc2VjXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykudHlwZSgnc2xvdy50eXBpbmdAZW1haWwuY29tJywgeyBkZWxheTogMTAwIH0pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWVtYWlsJykuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ3Nsb3cudHlwaW5nQGVtYWlsLmNvbScpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tZGlzYWJsZWQnKVxuICAgICAgLy8gSWdub3JlIGVycm9yIGNoZWNraW5nIHByaW9yIHRvIHR5cGVcbiAgICAgIC8vIGxpa2Ugd2hldGhlciB0aGUgaW5wdXQgaXMgdmlzaWJsZSBvciBkaXNhYmxlZFxuICAgICAgLnR5cGUoJ2Rpc2FibGVkIGVycm9yIGNoZWNraW5nJywgeyBmb3JjZTogdHJ1ZSB9KVxuICAgIGN5LmdldCgnLmFjdGlvbi1kaXNhYmxlZCcpLnNob3VsZCgnaGF2ZS52YWx1ZScsICdkaXNhYmxlZCBlcnJvciBjaGVja2luZycpXG4gIH0pXG5cbiAgaXQoJy5mb2N1cygpIC0gZm9jdXMgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vZm9jdXNcbiAgICBjeS5nZXQoJy5hY3Rpb24tZm9jdXMnKS5mb2N1cygpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWZvY3VzJykuc2hvdWxkKCdoYXZlLmNsYXNzJywgJ2ZvY3VzJylcbiAgICAgIC5wcmV2KCkuc2hvdWxkKCdoYXZlLmF0dHInLCAnc3R5bGUnLCAnY29sb3I6IG9yYW5nZTsnKVxuICB9KVxuXG4gIGl0KCcuYmx1cigpIC0gYmx1ciBvZmYgYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vYmx1clxuICAgIGN5LmdldCgnLmFjdGlvbi1ibHVyJykudHlwZSgnQWJvdXQgdG8gYmx1cicpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWJsdXInKS5ibHVyKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tYmx1cicpLnNob3VsZCgnaGF2ZS5jbGFzcycsICdlcnJvcicpXG4gICAgICAucHJldigpLnNob3VsZCgnaGF2ZS5hdHRyJywgJ3N0eWxlJywgJ2NvbG9yOiByZWQ7JylcbiAgfSlcblxuICBpdCgnLmNsZWFyKCkgLSBjbGVhcnMgYW4gaW5wdXQgb3IgdGV4dGFyZWEgZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vY2xlYXJcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2xlYXInKS50eXBlKCdDbGVhciB0aGlzIHRleHQnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jbGVhcicpLnNob3VsZCgnaGF2ZS52YWx1ZScsICdDbGVhciB0aGlzIHRleHQnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jbGVhcicpLmNsZWFyKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2xlYXInKS5zaG91bGQoJ2hhdmUudmFsdWUnLCAnJylcbiAgfSlcblxuICBpdCgnLnN1Ym1pdCgpIC0gc3VibWl0IGEgZm9ybScsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc3VibWl0XG4gICAgY3kuZ2V0KCcuYWN0aW9uLWZvcm0nKVxuICAgICAgLmZpbmQoJ1t0eXBlPVwidGV4dFwiXScpLnR5cGUoJ0hBTEZPRkYnKVxuXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWZvcm0nKS5zdWJtaXQoKVxuICAgIGN5LmdldCgnLmFjdGlvbi1mb3JtJykubmV4dCgpLnNob3VsZCgnY29udGFpbicsICdZb3VyIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkIScpXG4gIH0pXG5cbiAgaXQoJy5jbGljaygpIC0gY2xpY2sgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vY2xpY2tcbiAgICBjeS5nZXQoJy5hY3Rpb24tYnRuJykuY2xpY2soKVxuXG4gICAgLy8gWW91IGNhbiBjbGljayBvbiA5IHNwZWNpZmljIHBvc2l0aW9ucyBvZiBhbiBlbGVtZW50OlxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgdG9wTGVmdCAgICAgICAgdG9wICAgICAgIHRvcFJpZ2h0IHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8IGxlZnQgICAgICAgICAgY2VudGVyICAgICAgICByaWdodCB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCBib3R0b21MZWZ0ICAgYm90dG9tICAgYm90dG9tUmlnaHQgfFxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gY2xpY2tpbmcgaW4gdGhlIGNlbnRlciBvZiB0aGUgZWxlbWVudCBpcyB0aGUgZGVmYXVsdFxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygpXG5cbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ3RvcExlZnQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygndG9wJylcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ3RvcFJpZ2h0JylcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soJ2xlZnQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygncmlnaHQnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygnYm90dG9tTGVmdCcpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKCdib3R0b20nKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygnYm90dG9tUmlnaHQnKVxuXG4gICAgLy8gLmNsaWNrKCkgYWNjZXB0cyBhbiB4IGFuZCB5IGNvb3JkaW5hdGVcbiAgICAvLyB0aGF0IGNvbnRyb2xzIHdoZXJlIHRoZSBjbGljayBvY2N1cnMgOilcblxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljayg4MCwgNzUpIC8vIGNsaWNrIDgwcHggb24geCBjb29yZCBhbmQgNzVweCBvbiB5IGNvb3JkXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDE3MCwgNzUpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDgwLCAxNjUpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDEwMCwgMTg1KVxuICAgIGN5LmdldCgnI2FjdGlvbi1jYW52YXMnKS5jbGljaygxMjUsIDE5MClcbiAgICBjeS5nZXQoJyNhY3Rpb24tY2FudmFzJykuY2xpY2soMTUwLCAxODUpXG4gICAgY3kuZ2V0KCcjYWN0aW9uLWNhbnZhcycpLmNsaWNrKDE3MCwgMTY1KVxuXG4gICAgLy8gY2xpY2sgbXVsdGlwbGUgZWxlbWVudHMgYnkgcGFzc2luZyBtdWx0aXBsZTogdHJ1ZVxuICAgIGN5LmdldCgnLmFjdGlvbi1sYWJlbHM+LmxhYmVsJykuY2xpY2soeyBtdWx0aXBsZTogdHJ1ZSB9KVxuXG4gICAgLy8gSWdub3JlIGVycm9yIGNoZWNraW5nIHByaW9yIHRvIGNsaWNraW5nXG4gICAgY3kuZ2V0KCcuYWN0aW9uLW9wYWNpdHk+LmJ0bicpLmNsaWNrKHsgZm9yY2U6IHRydWUgfSlcbiAgfSlcblxuICBpdCgnLmRibGNsaWNrKCkgLSBkb3VibGUgY2xpY2sgb24gYSBET00gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vZGJsY2xpY2tcblxuICAgIC8vIE91ciBhcHAgaGFzIGEgbGlzdGVuZXIgb24gJ2RibGNsaWNrJyBldmVudCBpbiBvdXIgJ3NjcmlwdHMuanMnXG4gICAgLy8gdGhhdCBoaWRlcyB0aGUgZGl2IGFuZCBzaG93cyBhbiBpbnB1dCBvbiBkb3VibGUgY2xpY2tcbiAgICBjeS5nZXQoJy5hY3Rpb24tZGl2JykuZGJsY2xpY2soKVxuICAgIGN5LmdldCgnLmFjdGlvbi1kaXYnKS5zaG91bGQoJ25vdC5iZS52aXNpYmxlJylcbiAgICBjeS5nZXQoJy5hY3Rpb24taW5wdXQtaGlkZGVuJykuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgfSlcblxuICBpdCgnLnJpZ2h0Y2xpY2soKSAtIHJpZ2h0IGNsaWNrIG9uIGEgRE9NIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3JpZ2h0Y2xpY2tcblxuICAgIC8vIE91ciBhcHAgaGFzIGEgbGlzdGVuZXIgb24gJ2NvbnRleHRtZW51JyBldmVudCBpbiBvdXIgJ3NjcmlwdHMuanMnXG4gICAgLy8gdGhhdCBoaWRlcyB0aGUgZGl2IGFuZCBzaG93cyBhbiBpbnB1dCBvbiByaWdodCBjbGlja1xuICAgIGN5LmdldCgnLnJpZ2h0Y2xpY2stYWN0aW9uLWRpdicpLnJpZ2h0Y2xpY2soKVxuICAgIGN5LmdldCgnLnJpZ2h0Y2xpY2stYWN0aW9uLWRpdicpLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuICAgIGN5LmdldCgnLnJpZ2h0Y2xpY2stYWN0aW9uLWlucHV0LWhpZGRlbicpLnNob3VsZCgnYmUudmlzaWJsZScpXG4gIH0pXG5cbiAgaXQoJy5jaGVjaygpIC0gY2hlY2sgYSBjaGVja2JveCBvciByYWRpbyBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jaGVja1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgLmNoZWNrKCkgd2lsbCBjaGVjayBhbGxcbiAgICAvLyBtYXRjaGluZyBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cyBpbiBzdWNjZXNzaW9uLCBvbmUgYWZ0ZXIgYW5vdGhlclxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVja2JveGVzIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5ub3QoJ1tkaXNhYmxlZF0nKS5jaGVjaygpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrYm94ZXMgW3R5cGU9XCJjaGVja2JveFwiXScpLm5vdCgnW2Rpc2FibGVkXScpLnNob3VsZCgnYmUuY2hlY2tlZCcpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tcmFkaW9zIFt0eXBlPVwicmFkaW9cIl0nKS5ub3QoJ1tkaXNhYmxlZF0nKS5jaGVjaygpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXJhZGlvcyBbdHlwZT1cInJhZGlvXCJdJykubm90KCdbZGlzYWJsZWRdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIC8vIC5jaGVjaygpIGFjY2VwdHMgYSB2YWx1ZSBhcmd1bWVudFxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLmNoZWNrKCdyYWRpbzEnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLnNob3VsZCgnYmUuY2hlY2tlZCcpXG5cbiAgICAvLyAuY2hlY2soKSBhY2NlcHRzIGFuIGFycmF5IG9mIHZhbHVlc1xuICAgIGN5LmdldCgnLmFjdGlvbi1tdWx0aXBsZS1jaGVja2JveGVzIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVjayhbJ2NoZWNrYm94MScsICdjaGVja2JveDInXSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tbXVsdGlwbGUtY2hlY2tib3hlcyBbdHlwZT1cImNoZWNrYm94XCJdJykuc2hvdWxkKCdiZS5jaGVja2VkJylcblxuICAgIC8vIElnbm9yZSBlcnJvciBjaGVja2luZyBwcmlvciB0byBjaGVja2luZ1xuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVja2JveGVzIFtkaXNhYmxlZF0nKS5jaGVjayh7IGZvcmNlOiB0cnVlIH0pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrYm94ZXMgW2Rpc2FibGVkXScpLnNob3VsZCgnYmUuY2hlY2tlZCcpXG5cbiAgICBjeS5nZXQoJy5hY3Rpb24tcmFkaW9zIFt0eXBlPVwicmFkaW9cIl0nKS5jaGVjaygncmFkaW8zJywgeyBmb3JjZTogdHJ1ZSB9KVxuICAgIGN5LmdldCgnLmFjdGlvbi1yYWRpb3MgW3R5cGU9XCJyYWRpb1wiXScpLnNob3VsZCgnYmUuY2hlY2tlZCcpXG4gIH0pXG5cbiAgaXQoJy51bmNoZWNrKCkgLSB1bmNoZWNrIGEgY2hlY2tib3ggZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vdW5jaGVja1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgLnVuY2hlY2soKSB3aWxsIHVuY2hlY2sgYWxsIG1hdGNoaW5nXG4gICAgLy8gY2hlY2tib3ggZWxlbWVudHMgaW4gc3VjY2Vzc2lvbiwgb25lIGFmdGVyIGFub3RoZXJcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAubm90KCdbZGlzYWJsZWRdJylcbiAgICAgIC51bmNoZWNrKClcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAubm90KCdbZGlzYWJsZWRdJylcbiAgICAgIC5zaG91bGQoJ25vdC5iZS5jaGVja2VkJylcblxuICAgIC8vIC51bmNoZWNrKCkgYWNjZXB0cyBhIHZhbHVlIGFyZ3VtZW50XG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgLmNoZWNrKCdjaGVja2JveDEnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdJylcbiAgICAgIC51bmNoZWNrKCdjaGVja2JveDEnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdW3ZhbHVlPVwiY2hlY2tib3gxXCJdJylcbiAgICAgIC5zaG91bGQoJ25vdC5iZS5jaGVja2VkJylcblxuICAgIC8vIC51bmNoZWNrKCkgYWNjZXB0cyBhbiBhcnJheSBvZiB2YWx1ZXNcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW3R5cGU9XCJjaGVja2JveFwiXScpXG4gICAgICAuY2hlY2soWydjaGVja2JveDEnLCAnY2hlY2tib3gzJ10pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgLnVuY2hlY2soWydjaGVja2JveDEnLCAnY2hlY2tib3gzJ10pXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFt0eXBlPVwiY2hlY2tib3hcIl1bdmFsdWU9XCJjaGVja2JveDFcIl0nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLmNoZWNrZWQnKVxuICAgIGN5LmdldCgnLmFjdGlvbi1jaGVjayBbdHlwZT1cImNoZWNrYm94XCJdW3ZhbHVlPVwiY2hlY2tib3gzXCJdJylcbiAgICAgIC5zaG91bGQoJ25vdC5iZS5jaGVja2VkJylcblxuICAgIC8vIElnbm9yZSBlcnJvciBjaGVja2luZyBwcmlvciB0byB1bmNoZWNraW5nXG4gICAgY3kuZ2V0KCcuYWN0aW9uLWNoZWNrIFtkaXNhYmxlZF0nKS51bmNoZWNrKHsgZm9yY2U6IHRydWUgfSlcbiAgICBjeS5nZXQoJy5hY3Rpb24tY2hlY2sgW2Rpc2FibGVkXScpLnNob3VsZCgnbm90LmJlLmNoZWNrZWQnKVxuICB9KVxuXG4gIGl0KCcuc2VsZWN0KCkgLSBzZWxlY3QgYW4gb3B0aW9uIGluIGEgPHNlbGVjdD4gZWxlbWVudCcsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2VsZWN0XG5cbiAgICAvLyBhdCBmaXJzdCwgbm8gb3B0aW9uIHNob3VsZCBiZSBzZWxlY3RlZFxuICAgIGN5LmdldCgnLmFjdGlvbi1zZWxlY3QnKVxuICAgICAgLnNob3VsZCgnaGF2ZS52YWx1ZScsICctLVNlbGVjdCBhIGZydWl0LS0nKVxuXG4gICAgLy8gU2VsZWN0IG9wdGlvbihzKSB3aXRoIG1hdGNoaW5nIHRleHQgY29udGVudFxuICAgIGN5LmdldCgnLmFjdGlvbi1zZWxlY3QnKS5zZWxlY3QoJ2FwcGxlcycpXG4gICAgLy8gY29uZmlybSB0aGUgYXBwbGVzIHdlcmUgc2VsZWN0ZWRcbiAgICAvLyBub3RlIHRoYXQgZWFjaCB2YWx1ZSBzdGFydHMgd2l0aCBcImZyLVwiIGluIG91ciBIVE1MXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpLnNob3VsZCgnaGF2ZS52YWx1ZScsICdmci1hcHBsZXMnKVxuXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAuc2VsZWN0KFsnYXBwbGVzJywgJ29yYW5nZXMnLCAnYmFuYW5hcyddKVxuICAgIGN5LmdldCgnLmFjdGlvbi1zZWxlY3QtbXVsdGlwbGUnKVxuICAgICAgLy8gd2hlbiBnZXR0aW5nIG11bHRpcGxlIHZhbHVlcywgaW52b2tlIFwidmFsXCIgbWV0aG9kIGZpcnN0XG4gICAgICAuaW52b2tlKCd2YWwnKVxuICAgICAgLnNob3VsZCgnZGVlcC5lcXVhbCcsIFsnZnItYXBwbGVzJywgJ2ZyLW9yYW5nZXMnLCAnZnItYmFuYW5hcyddKVxuXG4gICAgLy8gU2VsZWN0IG9wdGlvbihzKSB3aXRoIG1hdGNoaW5nIHZhbHVlXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpLnNlbGVjdCgnZnItYmFuYW5hcycpXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdCcpXG4gICAgICAvLyBjYW4gYXR0YWNoIGFuIGFzc2VydGlvbiByaWdodCBhd2F5IHRvIHRoZSBlbGVtZW50XG4gICAgICAuc2hvdWxkKCdoYXZlLnZhbHVlJywgJ2ZyLWJhbmFuYXMnKVxuXG4gICAgY3kuZ2V0KCcuYWN0aW9uLXNlbGVjdC1tdWx0aXBsZScpXG4gICAgICAuc2VsZWN0KFsnZnItYXBwbGVzJywgJ2ZyLW9yYW5nZXMnLCAnZnItYmFuYW5hcyddKVxuICAgIGN5LmdldCgnLmFjdGlvbi1zZWxlY3QtbXVsdGlwbGUnKVxuICAgICAgLmludm9rZSgndmFsJylcbiAgICAgIC5zaG91bGQoJ2RlZXAuZXF1YWwnLCBbJ2ZyLWFwcGxlcycsICdmci1vcmFuZ2VzJywgJ2ZyLWJhbmFuYXMnXSlcblxuICAgIC8vIGFzc2VydCB0aGUgc2VsZWN0ZWQgdmFsdWVzIGluY2x1ZGUgb3Jhbmdlc1xuICAgIGN5LmdldCgnLmFjdGlvbi1zZWxlY3QtbXVsdGlwbGUnKVxuICAgICAgLmludm9rZSgndmFsJykuc2hvdWxkKCdpbmNsdWRlJywgJ2ZyLW9yYW5nZXMnKVxuICB9KVxuXG4gIGl0KCcuc2Nyb2xsSW50b1ZpZXcoKSAtIHNjcm9sbCBhbiBlbGVtZW50IGludG8gdmlldycsICgpID0+IHtcbiAgICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vc2Nyb2xsaW50b3ZpZXdcblxuICAgIC8vIG5vcm1hbGx5IGFsbCBvZiB0aGVzZSBidXR0b25zIGFyZSBoaWRkZW4sXG4gICAgLy8gYmVjYXVzZSB0aGV5J3JlIG5vdCB3aXRoaW5cbiAgICAvLyB0aGUgdmlld2FibGUgYXJlYSBvZiB0aGVpciBwYXJlbnRcbiAgICAvLyAod2UgbmVlZCB0byBzY3JvbGwgdG8gc2VlIHRoZW0pXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLWhvcml6b250YWwgYnV0dG9uJylcbiAgICAgIC5zaG91bGQoJ25vdC5iZS52aXNpYmxlJylcblxuICAgIC8vIHNjcm9sbCB0aGUgYnV0dG9uIGludG8gdmlldywgYXMgaWYgdGhlIHVzZXIgaGFkIHNjcm9sbGVkXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLWhvcml6b250YWwgYnV0dG9uJykuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIGN5LmdldCgnI3Njcm9sbC1ob3Jpem9udGFsIGJ1dHRvbicpXG4gICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgIGN5LmdldCgnI3Njcm9sbC12ZXJ0aWNhbCBidXR0b24nKVxuICAgICAgLnNob3VsZCgnbm90LmJlLnZpc2libGUnKVxuXG4gICAgLy8gQ3lwcmVzcyBoYW5kbGVzIHRoZSBzY3JvbGwgZGlyZWN0aW9uIG5lZWRlZFxuICAgIGN5LmdldCgnI3Njcm9sbC12ZXJ0aWNhbCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLXZlcnRpY2FsIGJ1dHRvbicpXG4gICAgICAuc2hvdWxkKCdiZS52aXNpYmxlJylcblxuICAgIGN5LmdldCgnI3Njcm9sbC1ib3RoIGJ1dHRvbicpXG4gICAgICAuc2hvdWxkKCdub3QuYmUudmlzaWJsZScpXG5cbiAgICAvLyBDeXByZXNzIGtub3dzIHRvIHNjcm9sbCB0byB0aGUgcmlnaHQgYW5kIGRvd25cbiAgICBjeS5nZXQoJyNzY3JvbGwtYm90aCBidXR0b24nKS5zY3JvbGxJbnRvVmlldygpXG4gICAgY3kuZ2V0KCcjc2Nyb2xsLWJvdGggYnV0dG9uJylcbiAgICAgIC5zaG91bGQoJ2JlLnZpc2libGUnKVxuICB9KVxuXG4gIGl0KCcudHJpZ2dlcigpIC0gdHJpZ2dlciBhbiBldmVudCBvbiBhIERPTSBlbGVtZW50JywgKCkgPT4ge1xuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby90cmlnZ2VyXG5cbiAgICAvLyBUbyBpbnRlcmFjdCB3aXRoIGEgcmFuZ2UgaW5wdXQgKHNsaWRlcilcbiAgICAvLyB3ZSBuZWVkIHRvIHNldCBpdHMgdmFsdWUgJiB0cmlnZ2VyIHRoZVxuICAgIC8vIGV2ZW50IHRvIHNpZ25hbCBpdCBjaGFuZ2VkXG5cbiAgICAvLyBIZXJlLCB3ZSBpbnZva2UgalF1ZXJ5J3MgdmFsKCkgbWV0aG9kIHRvIHNldFxuICAgIC8vIHRoZSB2YWx1ZSBhbmQgdHJpZ2dlciB0aGUgJ2NoYW5nZScgZXZlbnRcbiAgICBjeS5nZXQoJy50cmlnZ2VyLWlucHV0LXJhbmdlJylcbiAgICAgIC5pbnZva2UoJ3ZhbCcsIDI1KVxuICAgIGN5LmdldCgnLnRyaWdnZXItaW5wdXQtcmFuZ2UnKVxuICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgY3kuZ2V0KCcudHJpZ2dlci1pbnB1dC1yYW5nZScpXG4gICAgICAuZ2V0KCdpbnB1dFt0eXBlPXJhbmdlXScpLnNpYmxpbmdzKCdwJylcbiAgICAgIC5zaG91bGQoJ2hhdmUudGV4dCcsICcyNScpXG4gIH0pXG5cbiAgaXQoJ2N5LnNjcm9sbFRvKCkgLSBzY3JvbGwgdGhlIHdpbmRvdyBvciBlbGVtZW50IHRvIGEgcG9zaXRpb24nLCAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3Njcm9sbHRvXG5cbiAgICAvLyBZb3UgY2FuIHNjcm9sbCB0byA5IHNwZWNpZmljIHBvc2l0aW9ucyBvZiBhbiBlbGVtZW50OlxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHwgdG9wTGVmdCAgICAgICAgdG9wICAgICAgIHRvcFJpZ2h0IHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8IGxlZnQgICAgICAgICAgY2VudGVyICAgICAgICByaWdodCB8XG4gICAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAvLyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgLy8gfCBib3R0b21MZWZ0ICAgYm90dG9tICAgYm90dG9tUmlnaHQgfFxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gaWYgeW91IGNoYWluIC5zY3JvbGxUbygpIG9mZiBvZiBjeSwgd2Ugd2lsbFxuICAgIC8vIHNjcm9sbCB0aGUgZW50aXJlIHdpbmRvd1xuICAgIGN5LnNjcm9sbFRvKCdib3R0b20nKVxuXG4gICAgY3kuZ2V0KCcjc2Nyb2xsYWJsZS1ob3Jpem9udGFsJykuc2Nyb2xsVG8oJ3JpZ2h0JylcblxuICAgIC8vIG9yIHlvdSBjYW4gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgY29vcmRpbmF0ZTpcbiAgICAvLyAoeCBheGlzLCB5IGF4aXMpIGluIHBpeGVsc1xuICAgIGN5LmdldCgnI3Njcm9sbGFibGUtdmVydGljYWwnKS5zY3JvbGxUbygyNTAsIDI1MClcblxuICAgIC8vIG9yIHlvdSBjYW4gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcGVyY2VudGFnZVxuICAgIC8vIG9mIHRoZSAod2lkdGgsIGhlaWdodCkgb2YgdGhlIGVsZW1lbnRcbiAgICBjeS5nZXQoJyNzY3JvbGxhYmxlLWJvdGgnKS5zY3JvbGxUbygnNzUlJywgJzI1JScpXG5cbiAgICAvLyBjb250cm9sIHRoZSBlYXNpbmcgb2YgdGhlIHNjcm9sbCAoZGVmYXVsdCBpcyAnc3dpbmcnKVxuICAgIGN5LmdldCgnI3Njcm9sbGFibGUtdmVydGljYWwnKS5zY3JvbGxUbygnY2VudGVyJywgeyBlYXNpbmc6ICdsaW5lYXInIH0pXG5cbiAgICAvLyBjb250cm9sIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIChpbiBtcylcbiAgICBjeS5nZXQoJyNzY3JvbGxhYmxlLWJvdGgnKS5zY3JvbGxUbygnY2VudGVyJywgeyBkdXJhdGlvbjogMjAwMCB9KVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJjb250ZXh0IiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsInR5cGUiLCJzaG91bGQiLCJkZWxheSIsImZvcmNlIiwiZm9jdXMiLCJwcmV2IiwiYmx1ciIsImNsZWFyIiwiZmluZCIsInN1Ym1pdCIsIm5leHQiLCJjbGljayIsIm11bHRpcGxlIiwiZGJsY2xpY2siLCJyaWdodGNsaWNrIiwibm90IiwiY2hlY2siLCJ1bmNoZWNrIiwic2VsZWN0IiwiaW52b2tlIiwic2Nyb2xsSW50b1ZpZXciLCJ0cmlnZ2VyIiwic2libGluZ3MiLCJzY3JvbGxUbyIsImVhc2luZyIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==