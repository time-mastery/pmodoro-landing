import React from "react";
import Link from "next/link";
import Image from "next/image";

function Download() {
  return (
    <section
      className="py-12 md:py-16 bg-gradient-to-b from-[#fafafa] to-white relative overflow-hidden"
      id="download"
    >
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <h2 className="font-bold text-4xl md:text-5xl mb-4 text-[#1a1a1a]">
          Available on Mobile
        </h2>
        <p className="text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
          Download Pmodoro on your favorite platform and start boosting your
          productivity today
        </p>
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap mb-6">
          <Link
            href="https://github.com/time-mastery/pmodoro-application/releases/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black hover:-translate-y-1 hover:scale-105"
          >
            <Image
              src="/icons/android.svg"
              alt="Android"
              width={24}
              height={24}
              className="brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-base">Download for Android</span>
          </Link>
          <Link
            href="https://github.com/time-mastery/pmodoro-application/releases/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black hover:-translate-y-1 hover:scale-105"
          >
            <Image
              src="/icons/apple.svg"
              alt="iOS"
              width={24}
              height={24}
              className="brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-base">Download for iOS</span>
          </Link>
        </div>
        <p className="text-sm md:text-base text-gray-500">
          Or visit our{" "}
          <Link
            href="https://github.com/time-mastery/pmodoro-application/releases/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01ED64] hover:text-[#00d856] hover:underline font-semibold transition-colors duration-300"
          >
            GitHub Releases
          </Link>{" "}
          page for the latest version
        </p>
      </div>
    </section>
  );
}

export default Download;
