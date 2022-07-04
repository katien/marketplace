const features = [
  {
    name: 'Elliptic Curve Playground',
    description:
      'Katie recently took an interest in the mathematics behind ECDSA, the cryptographic algorithm at the center of blockchain. ' +
      "She read up on finite field arithmetic and elliptic curve point multiplication and built a simple library implementing what she'd learned. Her background is in " +
      'software development, not abstract math, so it is likely that some operations could be further optimized using math tricks (looking at you, finite field division). ' +
      'Portis was preparing to write a new cryptography library at the time, so she used this side project to experiment around with testing ' +
      'frameworks and typescript library structure and tooling.',
    link: 'https://github.com/katien/bread-crypto',
  },
  {
    name: 'Order Book Web Server',
    description:
      'This project was a coding challenge for a company that Katie applied to a couple of years ago. It is a node server written with express.js and socket.io ' +
      'that powers a very simple order book front end via websockets. The server consumes from the bittrex and poloniex apis, aggregates the responses' +
      'and serves it to a Vue single page application. The project is fairly simple but Katie focused on demonstrating good architectural best practices, dividing' +
      'the server into layers (presentation > data > remote), setting up a working CI pipeline, and writing tests with mocha and chai. She also provided a detailed description' +
      'in the README of how this project could be scaled into a production system. They hired her.',
    link: 'https://github.com/katien/foxex',
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden">
            <img
              src="https://katien.io/static/ed70b16763239281b0e0232d6a7cae1a/03d34/me.webp"
              alt="katie"
              className="w-full rounded-md object-center object-cover lg:w-full"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
              About the Team
            </p>
            <p className="mt-4 text-gray-500">
              Katie's career in tech started in 2012 when she learned about
              bitcoin and began trading. She was inspired to pursue computer
              science to gain a deeper understanding of the technology. Through
              a series of lucky breaks and good fortune, she secured her first
              full time agency engineering position at SpireMedia in 2014. She
              spent 5 years of her career at agencies, where she was able to
              gain familiarity with the full software development lifecycle and
              see countless products through from concept to market. She's been
              responsible for the development of native mobile applications,
              complex front ends, scalable back ends, and even some devops. Most
              of the code she's written isn't open source because she enjoys
              being paid, but here are a few repositories that she's authored
              which are exposed to the public.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm ">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  <div className="px-8 mt-2 text-right">
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View code <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
