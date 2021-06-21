export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `You're in Luck!. This site has been updated... ` +
      `Please reload and thanks for your support!`,
  );

  if (answer === true) {
    window.location.reload();
  }
};
