function HomePage() {
  return (
    <div>
      <div className='p-6 text-purple-400'>
        NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}
      </div>
      <div>API_KEY: {process.env.NEXT_PUBLIC_API_KEY}</div>
      Welcome to Next.js!
    </div>
  );
}

export default HomePage;
