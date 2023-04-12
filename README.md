# Lab: Class 02

## Requirements

### Feature Tasks

### Feature #1

  - Complete the following steps to setup your repository:
    - Create a React application using create-react-app as demonstrated in class.
          Use the command npx create-react-app `<repo-name>`.
    - Create a new repository on GitHub WITHOUT a README.md. We will import an “existing” repository with its own README
    - Follow the instructions given by GitHub to “push an existing repository from the command line” be sure to select HTTPS or SSH, whichever is relevant for you
    - Create a Branch and begin your work. As always, ACP often.

  - Your App component should render the following, each of which is defined in their own files.
    - Header
    - Footer
    - Main component

  - Your Header component needs to have an `<h1>` with a title.

  - Your Footer component needs to contain your name as the author.

  - The Main component needs to render at least two copies of a component called HornedBeast.

  - The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.
  - The HornedBeast component needs to contain an `<h2>` that displays the title of the animal, an `<img>` element with src, alt and title attributes, and a `<p>` that displays the description.

### Feature #2 Display Images

Why are we implementing this feature?

    As a user, I want to view the images on the page so that I can browse the photo collection.

What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the beasts' images in the gallery.

How are we implementing it?

    The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.



### Feature #3 Bootstrap

Why are we implementing this feature?

    As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

What are we going to implement?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.

How are we implementing it?

    Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.


### Feature #4 Add Interaction

Why are we implementing this feature?

    As a user, I want to be able to interact with each item on the page.

What are we going to implement?

    Given that a user opens the application in the browser
    When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
    Then the information and styles should change.

How are we implementing it?

    When the user clicks on elements such as the header, footer or title of page, make something change using state.
    You can update the words, change the styles or add something new. Be creative.


## How To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
