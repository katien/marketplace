export default function Landing() {
  return (
    <div className="relative bg-gray-100 mt-8">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://live.staticflickr.com/5453/9451726866_f16a001d07_b.jpg"
                    alt="House"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Take control of your
                    </span>
                    <span className="block text-indigo-200">
                      investment strategy
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                    Our fractional real estate investment platform gives you the
                    power to purchase shares in individual residential
                    properties for only $100.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="/marketplace"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        View the Marketplace
                      </a>
                      <a
                        href="tel:(720) 682-0321"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by investors all over the globe
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                With our security tokens, US residential real estate becomes
                accessible globally. Leverage the flexibility and
                interoperability of the blockchain while enjoying full
                protections from the SEC.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Regulated
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        100%
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Trading
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        24/7
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Properties
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        20k+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
