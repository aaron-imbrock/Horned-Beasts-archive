# Lab: Class 02

## Requirements

Installation:

```shell
npm install react react-bootstrap bootstrap
```

### Feature Tasks

## Feature #1: Display Images

Why are we implementing this feature?

    As a user, I want to view the images on the page so that I can browse the photo collection.

What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the beasts' images in the gallery.

How are we implementing it?

    The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

```shell
    Number and name of feature: Feature     #1: Display Images
    Estimate of time needed to complete:    45 minutes
    Start time:                             20:54
    Finish time:                            21:37
    Actual time needed to complete:         47 minutes
```

## Feature #2: Allow Users to Favorite Individual Beasts

Why are we implementing this feature?

    As a user, I want to be able to interact with the site and favorite beasts.

What are we going to implement?

Given that a user opens the application in the browser
When a user clicks on an image of a beast
Then the number of "Favorites" displayed on that beast will increase by one.

How are we implementing it?

    Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited.

    Put a heart in each HornedBeast component with the number of “Favorites” next to it.

```shell
    Number and name of feature: Feature     #2: Allow Users to Favorite Individual Beasts
    Estimate of time needed to complete:    45 minutes
    Start time:                             18:22
    Finish time:                            18:46
    Actual time needed to complete:         24 minutes
```

## Feature 3: Bootstrap

Why are we implementing this feature?

    As a user, I want to see a visually pleasing application that
    is also reponsive when I view this application on different screen sizes.

What are we going to implement?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.

How are we implementing it?

    Bring in the react-bootstrap library and use it to style your 
    application making sure that it is responsive.

```shell
    Number and name of feature:             Feature 3: Bootstrap
    Estimate of time needed to complete:    45 minutes 
    Start time:                             18:50
    Finish time:                            19:34
    Start time:                             
    Finish time:                            
    Actual time needed to complete: 
```

## Stretch Goal: Add Interaction

Why are we implementing this feature?

    As a user, I want to be able to interact with each item on the page.

What are we going to implement?

    Given that a user opens the application in the browser
    When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
    Then the information and styles should change.

How are we implementing it?

    When the user clicks on elements such as the header, footer or title of page, make something change using state.
    You can update the words, change the styles or add something new. Be creative.

```shell
    Number and name of feature: 
    Estimate of time needed to complete: 
    Start time:  
    Finish time:  
    Actual time needed to complete: 
```

## How To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
