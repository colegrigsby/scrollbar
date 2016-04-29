1. In the `assets` folder you will find a file called `bower.json`. This file is used by Bower to manage dependencies in 
   the project. It is currently set up to include only Angular, Angular Route and Bootstrap. In your app, you will be
   using Angular Bootstrap, UI-Router (NOT Angular Route), Angular Animate, Angular Toastr and probably  other libraries
   you find and want to use. Fix up the `bower.json` and use Bower to get the right stuff in bower_components. HINT:
   read about `bower --save` and how to remove packages using Bower commands. You can edit the file directly, but this
   might not be the best way.
   

YOUR TODO LIST AND USER STORIES
===============================

Mitch wants to use UI-ROuter in the app instead of ng-router which he started with. Make this change before doing anything
else. You will need to fix up the bower.json in `assets` and fix what gets injected and the routes definitions.

User Story #1
-------------

When the user goes to the landing page (/), they see a banner with the Overplay logo correctly sized in the black 
banner. When someone clicks on the logo or the HOME link on the right side of the banner, then they go to the landing 
page. The Overplay logo fades in over 500ms when this page is loaded.

There are three menu options shown on the home page: Guests, Experiences, and Media. Clicking on each menu option takes
you to a page when you can look at information on a remote server relevant to Guests, Experiences and Media. For now,
only the Guest page is defined (USer Story 2). But put in stubs of the controllers and pages for the other two.

The links should appear not as a list, but as flat bootstrap buttons. The buttons should grow slightly when the mouse
is hovered over them.


User Story #2
-------------

The Guest page is a bit rough. The page should say "Guests" at the top (under the banner) and the guests should be
shown as table with the headings First Name, Last Name, Email. There needs to be a filter input box at the op of the
table (above it), that implements a live filtering of all fields in each guest object (this is insanely easy in 
Angular, so if you are writing a lot of code, you are doing it wrong.)

Each user should have a "more info" button on their table row. That button will open a popup that will show all
the JSON Information in the Guest. A finished button will be at the bottom of the popup to close it.

Make extensive use of Bootstrap and UI-Bootstrap in this part. No angular material (sorry, Ryan! :))

User Stroy #3
-------------

In this system, Guests go thru a marketing Experience. To get a list of Experiences, use the A8API module and `getResource`
on `'experience'`. This will return a JSON list of experiences. You can see the JSON here: 

http://162.243.133.57:1337/api/v2/experience.

We want a pretty table grouped by Guest Name. The table
will have the following columns:

Experiences for Jane Smith (jsmith@gmail.com)

[DATE (human readable)] | [EXPERIENCE NAME] | [ SCORE ] | [IMAGE from EXPERIENCE]
[DATE (human readable)] | [EXPERIENCE NAME] | [ SCORE ] | [IMAGE from EXPERIENCE]
[DATE (human readable)] | [EXPERIENCE NAME] | [ SCORE ] | [IMAGE from EXPERIENCE]

The image should be no wider than 300px.

There is a filter box at the top that lets me filter by email address or first/last name ONLY. 

The experience table + headings must be implemented as a single Angular directive.


TODO: Ticker
CSS Scrolling or absolute with fixed?