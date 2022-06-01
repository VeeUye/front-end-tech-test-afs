# Junior Front-End Developer Tech Task

First off, **don't worry**! This is a simple coding challenge just to see how you approach the task and how you work.

If you have any questions or need some help, we're here to give you a hand! Helping each other out is a big part of working at AFS. Just give us a shout at [careers@accommodationforstudents.com](mailto:careers@accommodationforstudents.com).

## What we'd like you to do

We'd like you to build a `PropertyCard` component using [these designs in Figma](https://www.figma.com/file/fkaZlLzbUTSg4f5fQmhyPM/Tech-test?node-id=0%3A1) as a guide.

![Example Image](/example.png "Example")

The property card should support different property data values - like property type, distance, bills, etc. - as shown in the designs.

You can find out what styles should be applied to different elements by clicking on them and viewing the details in Figma's Inspect panel in the tools column on the right.

![Example Image](/inspect-panel.png "Inspect panel")

### Tasks

1. Replace the placeholder `Message` component with the `PropertyCard`
2. Build the `PropertyCard` component using the example images as a reference
3. Use the property data to render all the properties in a list

### Bonus challenges if you have time

- Write some unit tests to check the correct information is displayed on the card
- Add a filter button to toggle between rendering all properties and rendering properties with `propertyType: 'house'` when it is clicked

## Tips

- You can find mock data for some properties in `src/data/properties.js`
- You will find variables for all the colours you need in `src/styles/settings.scss`
- All icons have been provided for you as components in `src/components/icons`
- The font used `Apax` is already available and can be used with the following property in your selectors `font-family: 'Apax', Helvetica, Arial, sans-serif;`

## Running the app

This task is built using `create-react-app` and everything is installed and ready for you to begin coding.

### `npm start`

Runs the app and opens [http://localhost:3000](http://localhost:3000) in the browser.

### `npm test`

Runs the suite of unit tests using Jest. All test results will be logged to the console.
