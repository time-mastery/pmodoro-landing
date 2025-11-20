import React from "react";
import useSwr from "swr";
import Link from "next/link";
import Image from "next/image";

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Contributors() {
  const { data } = useSwr("/api/github", fetcher);

  return (
    <>
      {data ? (
        <section className="text-center bg-gradient-to-b from-[#fafafa] via-white to-[#f5f5f5] py-12 md:py-16 px-5">
          <h3 className="font-bold text-3xl md:text-4xl mb-2 text-[#1a1a1a]">
            Contributors of{" "}
            <span className="bg-gradient-to-r from-[#01ED64] to-[#00d856] bg-clip-text text-transparent">
              Pmodoro
            </span>
          </h3>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            Amazing people who make Pmodoro possible
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 max-w-4xl mx-auto">
            {data?.contributors.map((contributor) => (
              <Link
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#01ED64]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 group-hover:border-[#01ED64] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="https://github.com/time-mastery/pmodoro-application"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-800 rounded-full px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 hover:bg-[#01ED64] hover:border-[#01ED64] hover:-translate-y-1 hover:shadow-lg text-sm md:text-base"
          >
            Contribute
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}
