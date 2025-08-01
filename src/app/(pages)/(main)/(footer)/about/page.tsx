export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          Welcome to <strong>Badminton Gallery</strong> — your ultimate destination for everything badminton.
        </p>

        <p>
          Founded by passionate players, we created Badminton Gallery to make high-quality gear more accessible,
          more personal, and more trusted. Whether you’re a beginner picking up your first racket or a seasoned
          player chasing precision and power, we’re here to help you play your best.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Curated Gear:</strong> Handpicked rackets, strings, shoes, and accessories based on real performance.</li>
          <li><strong>Expert Advice:</strong> Confused about flex, balance, or string tension? Our guides break it down simply.</li>
          <li><strong>Local Focus, Global Reach:</strong> We support both local pickup and nationwide shipping.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
        <p>
          To connect players with the right equipment, build trust through transparency, and support the growth of
          badminton at every level.
        </p>
      </section>
    </main>
  );
}
