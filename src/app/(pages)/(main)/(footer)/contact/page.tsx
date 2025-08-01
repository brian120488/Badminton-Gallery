export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Get in touch with us!</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        {/* <div>
          <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
          <p className="text-gray-600">123 Racket Street, New York, NY 10001</p>
        </div> */}

        <div>
          <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
          <p className="text-gray-600">(646) 251-6684</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">✉️ Email</h2>
          <p className="text-gray-600">support@badmintongallery.us</p>
        </div>

        {/* <div>
          <h2 className="text-xl font-semibold mb-2">🔗 Socials</h2>
          <div className="flex gap-4 text-blue-600 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
