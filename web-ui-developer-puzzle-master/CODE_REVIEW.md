`Improvements:


`Functional:

Provide a shimmering or loading indication while searching the results 

Search textbox and Search icon can be initially at the middle of the screen to enage users more (similar to good or bing homepage) 

Load only abovefold items initially and then lazy load other books based on the scroll

Provide pagination 

Provide Autosuggest feature for booknames while typing in search textbox.

Provide links to recent search 

After adding book to readinglist, remove the book card. 



`Technical: 

After subscribing to store, unsubscription should be implemented.

FormatData can be a pipe. 



`Lighthouse issues (Accessibility)

button.mat-focus-indicator.mat-icon-button.mat-button-base.ng-tns-c71-1 no aria label

Background and foreground colors do not have a sufficient contrast ratio.



`Other accessibility issues 

1) No focus indicator around book item on keyboard navigation 

2) No aria labels for screen readers to work 

3) No announcements while fetching search results. 