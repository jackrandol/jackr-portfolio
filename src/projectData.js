export const projectData = [
  {
    title: 'Knitables',
    description:
      'Knitables-I is a space for knitters to upload patterns or images they would like to make into patterns made with Vue.js.',
    image:
      'https://github.com/jackrandol/knitables-imageboard/blob/master/ModalTour.gif?raw=true',
    features: `Images are uploaded in the yellow bar at the top with a title, comment and username. There is no actual user sign up for the site but users can enter in their name or handle if they wish. Photos are uploaded to the cloud with AWS and then appear in a reverse chronological order, latest image will up upper left most corner.

When the image cards are clicked a modal slides out from the left-hand side and the image appears larger and there is a section where people can leave comments and feedback. Images can also be deleted here and will be removed from the imageboard completely.

Users can navigate with the left and right arrow inside the modal to click to next and previous images.`,
    stack:
      'HTML, CSS, JavaScript, Node.js, Express, PostgreSQL, AWS S3, Vue.js',
    gitHubUrl: 'https://github.com/jackrandol/knitables-imageboard',
  },
  {
    title: 'Petition Project',
    description:
      'This site is a petition to legitamize the fictitious instrument, the pickle-o, by making it an official part of the Berliner Philharmonie.',
    image:
      'https://github.com/jackrandol/petition/raw/master/registerGuide.gif',
    features:
      'Users can create an account, update their profile information with age, city and website, and sign their name by drawing on a canvas. People who have signed the petition can view the names and cities of others who have signed. By clicking on the city of someone who has signed they can view all the people in that location who have also signed.',
    stack: 'Node.js, Express with Handlebars, PostgreSQL, JavaScript',
    gitHubUrl: 'https://github.com/jackrandol/petition',
    liveUrl: 'https://pickle-o.herokuapp.com',
  },
  {
    title: 'Knitables-II',
    description:
      'Knitables-II is a tool for visualizing sweater patterns on a three dimensional form developed with React. User projects are visible to other users who can comment and share ideas.',
    image:
      'https://github.com/jackrandol/knitables-II/raw/master/public/PreviewProjectPages.gif',
    features: `Users can sign up or log in with a user account and first edit their profile with a picture of themselves and a small text about themselves. In the 'Knit' section users are asked to upload different images to three segments of a sweater, body, left sleeve and right sleeve. After the users uploads three images ( stored with AWS S3 in the cloud ) they will choose a color for the "ribbed" edges of the sweater. In the 'Preview' section users can then view their sweater with their images mapped onto a three dimensional model. In the 'Projects' section users can view all projects from other users and make/read comments on a comment wall.`,
    stack:
      'HTML, CSS, JavaScript, Node.js, Express, bcrypt/salt, PostgreSQL, Three.js, bcrypt/salt, Moment.js, React with Redux',
    gitHubUrl: 'https://github.com/jackrandol/knitables-II',
    liveUrl: 'http://knitables.herokuapp.com/',
    requestPassword: `This project is live but you will need a password to access the page, just drop me a line and I'm happy to share!`,
  },
];
