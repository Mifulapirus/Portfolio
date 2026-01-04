import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Angel's Portfolio</title>
        <meta name="description" content="Learn more about Angel and their work" />
      </Head>

      <div className="px-4 md:px-6 py-6 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h1>

          <div className="max-w-3xl space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Yup, my name is Ángel, but you can call me Angel.
            </p>
            <p>
              By day, I work in robotics and automation, helping autonomous systems make sense of and in the real world.
              By night, I’m usually in my home lab, wiring up ESP32s, designing PCBs, or turning half-baked ideas into projects
              that mostly work.
            </p>
            <p>
              Most of my projects involve some sort of embedded electronics, but the end goal is not always obvious.
              Why can't a robot be controlled by a crowd of people? How come my dog values that stick more than us, humans?
              So this page is just my way to make sense of all the “what if…” that cross my mind and end up in a github repo.
              I like learning by building, breaking, and rebuilding until something interesting emerges.
            </p>
            <p>
              Want to build something together? Let’s talk.
            </p>
            <div className="mt-8">
              <p>
                Message me on{' '}
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>{' '}
                or{' '}
                <a
                  href="https://calendly.com/angel_h/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  book a 15-minute meeting
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
