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
];
