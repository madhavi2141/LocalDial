import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 font-sans">

      {/* Header Section
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to LocalDial</h1>
          <p className="text-lg mt-2">Your Trusted Local Calling Solution</p>
        </div>
      </header> */}

      <section className="py-2 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">About Us</h2>
        </div>
      </section>

      {/* About Us Section with Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Who We Are</h2>
          <div className="flex items-center justify-between gap-8">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At <strong>LocalDial</strong>, we believe in the power of seamless communication within our community.
                Our goal is simple: to provide reliable, affordable, and easy-to-use local dialing services that connect you to what matters most — locally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a small business needing dependable local communication or a resident looking for hassle-free dialing services,
                <strong>LocalDial</strong> is here to meet your needs with unmatched customer support and service.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img className="rounded-lg shadow-lg w-full object-cover" src="https://i.pinimg.com/736x/bf/8a/40/bf8a40a5b924b01f9fb31053b0c393a1.jpg" alt="Local Dial Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission & Vision</h2>
          <div className="flex justify-around">
            <div className="w-full max-w-sm mb-8">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Mission</h3>
              <p className="text-lg text-gray-700">Our mission is to provide reliable, affordable, and easy-to-use local dialing solutions that bring people and businesses closer together.</p>
            </div>
            <div className="w-full max-w-sm mb-8">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Vision</h3>
              <p className="text-lg text-gray-700">We aim to become the go-to local dialing service, ensuring seamless connections and fostering stronger community ties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            When we recognized a gap in the market for a reliable, easy-to-use local dialing service.
            We wanted to create a service that not only kept people connected but also helped local businesses thrive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we proudly serve thousands of customers in the community, and we remain dedicated to offering affordable, high-quality local dialing services that our customers can rely on.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section with 6 Members */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          {/* Grid for Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" alt="Omkar" />
              <h3 className="text-xl font-semibold text-blue-600">Omkar</h3>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg" alt="Sneha" />
              <h3 className="text-xl font-semibold text-blue-600">Sneha</h3>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg" alt="Rutuja" />
              <h3 className="text-xl font-semibold text-blue-600">Rutuja</h3>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg" alt="Samiksha" />
              <h3 className="text-xl font-semibold text-blue-600">Samiksha</h3>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg" alt="Madhavi" />
              <h3 className="text-xl font-semibold text-blue-600">Madhavi</h3>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <img className="rounded-full w-32 mx-auto mb-4" src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" alt="Ketan" />
              <h3 className="text-xl font-semibold text-blue-600">Ketan</h3>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default AboutUs;