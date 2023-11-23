import BackgroundTimer from 'react-native-background-timer';

// Define the background task function
const backgroundTask = () => {
  // Get the current time with running seconds
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;

  // Log the current time to the console
  console.log(`Current time: ${currentTime}`);
};

export const startBackgroundTask = () => {
  // Schedule the background task to run every second (adjust as needed)
  const taskInterval = 1000; // 1 second
  BackgroundTimer.runBackgroundTimer(backgroundTask, taskInterval);
};

export const stopBackgroundTask = () => {
  // Stop the background task
  BackgroundTimer.stopBackgroundTimer();
};


// import BackgroundTimer from 'react-native-background-timer';
// import PushNotification from 'react-native-push-notification';

// const logTimeAndScheduleNotification = () => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const currentTime = `${hours}:${minutes}:${seconds}`;

//   console.log(`Current time: ${currentTime}`);

//   // Schedule a local notification
//   PushNotification.localNotification({
//     message: 'Scheduled notification when app is closed',
//     date: new Date(Date.now() + 10000) ,
//   });
// };

// const backgroundTask = () => {
//   logTimeAndScheduleNotification();
// };

// // Run the background task every second
// BackgroundTimer.setInterval(backgroundTask, 1000);

// export default backgroundTask;

// import BackgroundRunner from 'react-native-background-runner';

// BackgroundRunner.register(async () => {
//   const now = new Date();
//   const timeString = now.toLocaleTimeString();
//   console.log(timeString);

//   // You can perform any other background tasks here
// });