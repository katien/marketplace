const faqs = [
  {
    question: 'Why is the data scrambled?',
    answer:
      'Katie set out to build a basic real estate marketplace platform over the weekend. ' +
      'She quickly learned that MLS data is extremely locked down. ' +
      'If Frank passes his real estate exam, his connections with Triangle MLS should be enough to source some real data although an investor ' +
      'platform would be more likely to draw from our own property database than MLS databases.',
  },
  {
    question: 'Is it responsive?',
    answer:
      'Yes. At least an hour of effort went into ensuring that this site would work well on mobile devices, so please look at it on your phones as well. ',
  },
  {
    question: 'What tools were used in the development of this platform?',
    answer:
      'Tailwind CSS, Typescript, React, and the Repliers real estate API.',
  },
];

export default function Platform() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              About this site
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Looking for the code? It's open source{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/katien"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                here
              </a>{' '}
              on Katie's github.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
