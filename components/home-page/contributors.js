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
        <section className="text-center bg-gradient-to-b from-[#f1f1f1] to-[#f5f5f5] h-[210px] p-[10px]">
          <h3 className="font-medium my-4 text-lg">
            Contributors of <div className="inline font-bold">Pmodoro</div>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {data?.contributors.map((contributor) => (
              <section
                key={contributor.id}
                className="mb-[30px] flex items-center justify-center"
              >
                <Link href={contributor.html_url} target="_blank rel=noopener">
                  {contributor ? (
                    <div>
                      <img
                        className="w-[50px] rounded-full ml-[5px] hover:w-[60px] hover:mb-[-10px]"
                        src={contributor.avatar_url}
                        alt={contributor.login}
                      />
                    </div>
                  ) : (
                    <Image src="/spinner.gif" alt="spinner" width={40} height={40} />
                  )}

                  {/* <Image
              src={contributor.avatar_url}
              alt={contributor.login}
              width={30}
              height={30}
            /> */}
                </Link>
              </section>
            ))}
          </div>
          <Link
            href="https://github.com/time-mastery/pmodoro-application"
            className="border-2 border-gray-800 rounded-3xl px-[26px] py-[7px] font-semibold transition-all duration-300 hover:bg-[#01ED64]"
          >
            Contribute
          </Link>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}
