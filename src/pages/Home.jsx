const styles = [
  'absolute',
  'top-1/2',
  'left-1/2',
  '-translate-x-1/2',
  "'-translate-y-1/2'",
  'text-4xl',
].join(' ');

const Home = () => {
  return <h1 className={styles}>📖 Welcome to phonebook 📱</h1>;
};

export default Home;
