const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage({
  keyFilename: 'config/vostedelista-9d76819fd3d4.json',
  projectId: 'vostedelista',
});

async function generateV4ReadSignedUrl() {
  // These options will allow temporary read access to the file
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };

  // Get a v4 signed URL for reading the file
  const [url] = await storage
    .bucket("qreasy-data-folder")
    .file("Uploadfile_1688905504251_test.jpg")
    .getSignedUrl(options);

  console.log('Generated GET signed URL:');
  console.log(url);
  console.log('You can use this URL with any user agent, for example:');
  console.log(`curl '${url}'`);
}

generateV4ReadSignedUrl().catch(console.error);