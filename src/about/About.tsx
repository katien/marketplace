const faqs = [
  {
    question: 'Why is the data scrambled?',
    answer:
      'Katie set out to build a basic real estate marketplace over the weekend. She quickly learned that MLS data is extremely well guarded, but did not give up. She was able to source Canadian MLS data from the Repliers API, but descriptions and addresses are scrambled and some property info is missing for users who are not registered with an MLS. She considered attempting to circumvent this limitation with a CORS proxy that would allow her to query against a separate API for unscrambled address data, but decided against it, not wanting to antagonize the MLSs this early on in her career in real estate. If Frank passes his real estate exam, his connections with Triangle MLS should be enough to source some real data, although an investor platform would be more likely to draw from an internal database than MLS databases.',
  },
  {
    question: 'Is it responsive?',
    answer:
      'Yes. At least an hour of effort went into ensuring that this site would look nice on both desktop and mobile devices, so please look at it on your phones as well.',
  },
  {
    question: 'What tools were used in the development of this platform?',
    answer:
      'Tailwind CSS, Typescript, React, and the Repliers real estate API.',
  },
  {
    question: 'Why was this built?',
    answer:
      "Katie opted to build a simplified version of the investor platform because she’d already worked on something <a class='font-medium text-indigo-600 hover:text-indigo-500' target='_blank' href='https://achroma.io/'>very similar</a> to the buyer onboarding system that will likely be the company’s immediate focus. She’s also coming off of a long stint of back end development at both Katasi and Portis, so she wanted a refresher on the front end.",
  },
  {
    question: "Why don't the forms do anything?",
    answer:
      "The forms don’t work at the moment because this platform is a single page application that exists purely in the browser. Katie opted to focus on the UI only, because it’s a lot easier to show off a responsive web application than a well structured database. Katie’s <a href='https://github.com/katien/foxex' target='_blank' class='font-medium text-indigo-600 hover:text-indigo-500'>github</a> features some decent server side code and her references will all attest to the fact that she’s really more of a back end developer.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              About this platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Looking for the code? It's open source on Katie's{' '}
              <a
                target="_blank"
                href="https://github.com/katien/marketplace"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                rel="noreferrer"
              >
                github
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd
                    className="mt-2 text-base text-gray-500"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
