import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-navy p-4 flex justify-between items-center">
        <div className="text-white">Logo</div>
        <nav className="space-x-6">
          <a href="#products" className="text-white">Products</a>
          <a href="#solutions" className="text-white">Solutions</a>
          <a href="#projects" className="text-white">Projects</a>
          <a href="#brands" className="text-white">Brands</a>
          <a href="#blog" className="text-white">Blog</a>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
      </header>

      {/* Hero Section */}
      <section className="bg-teal-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Explore Our Products</h1>
        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded">Contact Us</button>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16">
        <h2 className="text-teal-500 text-center text-3xl font-bold mb-10">Products</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">Commercial</div>
            <p className="mt-2 text-gray-700">Commercial Products Description</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">Industrial</div>
            <p className="mt-2 text-gray-700">Industrial Products Description</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">Residential</div>
            <p className="mt-2 text-gray-700">Residential Products Description</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-100">
        <h2 className="text-navy-500 text-center text-3xl font-bold mb-10">Solutions</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-teal-500 text-white p-6 rounded-lg">Energy Solutions</div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="text-center">
            <div className="bg-teal-500 text-white p-6 rounded-lg">Custom Solutions</div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="text-center">
            <div className="bg-teal-500 text-white p-6 rounded-lg">Electrical Drawings</div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h2 className="text-teal-500 text-center text-3xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-300 p-6 rounded-lg">
            <h3>Project 1</h3>
            <p>Short project description</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg">
            <h3>Project 2</h3>
            <p>Short project description</p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg">
            <h3>Project 3</h3>
            <p>Short project description</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <h2 className="text-navy-500 text-center text-3xl font-bold mb-10">Client Testimonials</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"Great service and solutions!"</p>
            <p>- Client 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"Professional team and reliable products."</p>
            <p>- Client 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"Excellent support and custom solutions!"</p>
            <p>- Client 3</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <h2 className="text-orange-500 text-center text-3xl font-bold mb-10">Latest News</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3>Blog Post 1</h3>
            <p>Short blog description</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3>Blog Post 2</h3>
            <p>Short blog description</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3>Blog Post 3</h3>
            <p>Short blog description</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Read More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white p-6 text-center">
        <div className="space-x-4">
          <a href="#facebook">Facebook</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#twitter">Twitter</a>
        </div>
        <div>
          <p>Company Address</p>
          <p>Contact Number</p>
          <p>Email Address</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;