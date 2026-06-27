import Image from "next/image";
import Link from "next/link";
const Banner = () => {
    return (
           <section className="relative bg-[url('https://images.unsplash.com/photo-1623387641168-d9803ddd3f35')] 
           bg-no-repeat  
           bg-cover
           bg-center  
           h-[100vh]"
           style={{
            backgroundImage:
            ` linear-gradient(to bottom right, rgba(249,115,22,.6), rgba(59,130,246,.6)),
      url('https://images.unsplash.com/photo-1623387641168-d9803ddd3f35')`,
           }}>
      <div className=" max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left ">
            <span className="inline-block absolute top-5 left-5 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              🐾 Find Your Forever Friend
            </span>

            <h1 className="mt-6 text-center text-4xl font-extrabold leading-tight  bg-linear-to-br text-transparent bg-clip-text from-purple-400 to-orange-300 sm:text-5xl lg:text-6xl">
              Give a Loving Pet
              <span className="block ">
                a Forever Home
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white text-center w-2xl mx-auto">
              Discover adorable pets waiting for a loving family. Browse
              verified pets, connect with shelters, and make a life-changing
              difference by adopting today.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/pets"
                className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Adopt Now
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-orange-500">500+</h3>
                <p className="text-gray-600">Pets Adopted</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500">100+</h3>
                <p className="text-gray-600">Trusted Shelters</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-500">5K+</h3>
                <p className="text-gray-600">Happy Families</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35"
              height={400}
              width={400}
              alt="Happy adopted pet"
              className="w-full max-w-md lg:max-w-xl"
            />
          </div> */}
        </div>
      </div>
    </section>
    );
};

export default Banner;