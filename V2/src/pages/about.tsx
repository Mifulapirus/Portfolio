import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Angel's Portfolio</title>
        <meta name="description" content="Learn more about Angel and their work" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="max-w-3xl space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm a maker and developer passionate about creating innovative solutions that bridge 
            the gap between hardware and software. My work spans across embedded systems, IoT devices, 
            web applications, and AI-powered tools.
          </p>
          
          <p>
            With experience in technologies ranging from ESP32 microcontrollers to full-stack web 
            development with TypeScript and Next.js, I enjoy tackling diverse challenges and 
            building projects that solve real-world problems.
          </p>
          
          <p>
            Whether it's designing custom PCBs, developing robotics systems, or creating web 
            applications, I'm always exploring new technologies and pushing the boundaries of 
            what's possible.
          </p>
        </div>
      </div>
    </>
  );
}
