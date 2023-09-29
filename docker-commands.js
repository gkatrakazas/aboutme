const Docker = require('dockerode');

// Create a Docker instance
const docker = new Docker();

// Default container name and port
const defaultContainerName = 'cv';
const defaultPort = '4001';

// Function to create an image
async function createImage(imageName, dockerfilePath) {
  try {
    console.log(`Building image ${imageName}...`);
    await docker.buildImage({
      context: __dirname,
      src: ['Dockerfile'], // List of files needed for building
      dst: `/app/${imageName}`,
    }, { t: imageName });
    console.log(`Image ${imageName} created successfully.`);
  } catch (error) {
    console.error(`Error creating image: ${error.message}`);
  }
}

// Function to start a container
async function startContainer(imageName, containerName, port) {
  try {
    console.log(`Starting container ${containerName} on port ${port}...`);
    await docker.createContainer({
      Image: imageName,
      name: containerName,
      HostConfig: {
        PortBindings: {
          [`${port}/tcp`]: [{ HostPort: port }],
        },
      },
    });
    const container = docker.getContainer(containerName);
    await container.start();
    console.log(`Container ${containerName} started.`);
  } catch (error) {
    console.error(`Error starting container: ${error.message}`);
  }
}

// Function to stop a container
async function stopContainer(containerName) {
  try {
    console.log(`Stopping container ${containerName}...`);
    const container = docker.getContainer(containerName);
    await container.stop();
    console.log(`Container ${containerName} stopped.`);
  } catch (error) {
    console.error(`Error stopping container: ${error.message}`);
  }
}

// Function to delete a container
async function deleteContainer(containerName) {
  try {
    console.log(`Deleting container ${containerName}...`);
    const container = docker.getContainer(containerName);
    await container.remove({ force: true });
    console.log(`Container ${containerName} deleted.`);
  } catch (error) {
    console.error(`Error deleting container: ${error.message}`);
  }
}

// Parse command-line arguments
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node docker-commands.js <action> [<container_name> <port>]');
  process.exit(1);
}

const action = args[0];
const containerName = args[1] || defaultContainerName;
const port = args[2] || defaultPort;

// Perform the specified action
switch (action) {
  case 'up':
    // Example: node docker-commands.js up [cv] [4001]
    startContainer('my-backbone-app', containerName, port);
    break;
  case 'down':
    // Example: node docker-commands.js down [cv]
    stopContainer(containerName);
    break;
  case 'delete':
    // Example: node docker-commands.js delete [cv]
    deleteContainer(containerName);
    break;
  default:
    console.error('Invalid action. Use "up", "down", or "delete".');
}
