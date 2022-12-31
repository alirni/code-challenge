function Home() {
  return (
    <div>
      <div className='p-6 text-purple-400'>
        NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}
      </div>
      Welcome to Home!
    </div>
  );
}

export default Home;
