# Progress Record
This is my progress record where i'll be storing and recording my progress. It'll act as a guide to me for future reference and keep me tethered to the project.

## 13/12/2022
- ### Setup
    - Initialised a github repo and installed all the dependencies.
    - Initialised the express app and made the initial ejs "views" folder.
- ### Campground Model
    - Initialised the campground model (Basic structure which will be modified later).
    - Connected the database to the express app with mongoose.
    - Made a seeding script which seeds the database with 50 new entries and deletes all the past data from the database.
    - Created an index page and a show page bare connection.

## 15/12/2022
- ### Campground Model
    - Created a "New" model i.e. add new campground infra bones.
    - Created a "Update/Edit" model.
    - Created a "Delete" model. With this basic CRUD is done.

## 16/12/2022
- ### Basic Styling
    - Added bootstrap
    - Created navbar and footer partials in the ejs views.
    - Added images

## 21/12/2022
- ### Basic Styling
    - Changed the style of index page to cards format.
    - Changed the style of the New page and added more input criterion.
    - Changed the style of the Show page and added more display criterion.

## 22/12/2022
- /### Error handling and Data validation
    - Added basic client side form validation in the new and edit forms.
    - Added async and express custom error handlers.
    - Added server side validation in adding new campground with JOI schema validation.
    
## 23/12/2022
- Added a new review model.

## 25/12/2022
- Added server side and client side validations on the add review form.
- Added Reviews to the show page of a campgroud and added some basic layout styling.
- Added a "Delete Review" option.
- Added a delete middleware to delete all reviews of a campground when it is deleted from the database.

## 27/12/2022
- Made seperate routers for campgrounds and reviews.
- Made a public served directory.
- Added session config to the app.
- Added flash messages.

## 28/12/2022
- Created a new user registration form with backend validation and passport.
- Created a new Login form with backend validation.
- Added author record with campgrounds.
- Added client side authorisation for deleting and editing a campground as author user.
- Added server side authorisation to the editing permission for a campground.
- Added authorisation in reviews. Set review deleting perms for authors.
- Refactored routes to their respective controllers to clean the routes code.
- Added starability for using stars to rate campgrounds.

## 29/12/2022
- Added images upload funactionality.
- Added delete images functionality in campground edit form.
- Added Maps in show page.
    - Issue
        - JSON.stringify() returns a string in JSON format not a JS object. Used this to get campground object from the ejs file to the js script to be used in it.
    - Solution
        - Used JSON.parse in the js file to parse the string into a JS object.
    - Issue
        - Line breaks in description break the JSON parse and hence the map display.