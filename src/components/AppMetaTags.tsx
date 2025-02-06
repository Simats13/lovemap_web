const AppMetaTags = () => {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isIOS) return null;

  return (
    <>
      <meta
        name="apple-itunes-app"
        content="app-id=123456789, app-argument=lovemap://"
      />
    </>
  );
};

export default AppMetaTags; 