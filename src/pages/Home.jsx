const styles = {
  div: [
    'absolute',
    'top-1/4',
    'left-1/2',
    '-translate-x-1/2',
    "'-translate-y-1/2'",
    'text-4xl',
    'text-center',
  ].join(' '),
  welcome: ['text-5xl', 'pb-24'].join(' '),
  title: ['uppercase', 'text-8xl'].join(' '),
};

const Home = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.welcome}>Welcome to</h2>
      <h1 className={styles.title}>phonebook</h1>
    </div>
  );
};

export default Home;
