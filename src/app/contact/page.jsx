"use client";
import React from "react";
import Navigation from "../../components/navigation";
import SocialLinks from "../../components/social-links";

function MainComponent() {
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      e.target.reset();
    } catch (error) {
      setFormStatus("error");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="/contact" />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h1>
          <p className="font-inter text-gray-600 dark:text-gray-300">
            Software Developer based in Kajiado, Kenya. Available for new
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0077B5] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0077B5] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0077B5] dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0077B5] text-white font-inter font-medium py-2 px-4 rounded-lg hover:bg-[#005885] transition-colors duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {formStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-sm font-inter text-center">
                  Message sent successfully!
                </p>
              )}

              {formStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm font-inter text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </h3>
                  <a
                    href="mailto:dweyrah39@gmail.com"
                    className="font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885]"
                  >
                    dweyrah39@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </h3>
                  <a
                    href="tel:+254798970024"
                    className="font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885]"
                  >
                    +254 798 970 024
                  </a>
                </div>

                <div>
                  <h3 className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </h3>
                  <p className="font-inter text-gray-600 dark:text-gray-400">
                    Kajiado, Kenya
                  </p>
                </div>

                <div>
                  <h3 className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                    Working Hours
                  </h3>
                  <p className="font-inter text-gray-600 dark:text-gray-400">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM EAT
                  </p>
                </div>

                <div>
                  <h3 className="font-inter text-sm font-medium text-gray-700 dark:text-gray-300">
                    Connect with me
                  </h3>
                  <SocialLinks
                    links={[
                      {
                        platform: "linkedin",
                        url: "https://linkedin.com/in/dweyrah",
                        primary: true,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;