/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "You're in Luck,there's an updated! Please reload and thanks for your support",
  );

  if (answer === true) {
    window.location.reload();
  }
};
