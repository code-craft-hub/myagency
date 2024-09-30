import ButtonComponent from "@/components/ButtonComponent";
import { BlogInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className="section flex-col">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-4xl">
            Explore Marketing Tips and Trends with Footren
          </h1>
          <p className="max-w-md text-center">
            Discover the latest marketing trends and expert advice with Footren.
            Our blog is your source for insightful articles and practical tips.
          </p>
          <div className="flex gap-4">
            <ButtonComponent text="Get in Touch" icon={true} />
            <ButtonComponent text="View Our Services" fill="outline" />
          </div>
        </div>
        <div>
          <div className=" relative h-[500px] mt-8">
            <Image
              src="/big_blog_optimizing.webp"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="office"
              className="rounded-3xl"
            />
          </div>
          <div className="flex py-8 items-center gap-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/blog_LarssonHussein.webp"
                height={35}
                width={35}
                alt="author"
              />
            </div>
            <span className="font-bold">Larsson Hussein</span>
            <span className="text-gray-200">January 16, 2024 </span>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">
              Optimizing Social Media to Increase Brand Awareness
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              placeat voluptatibus, delectus totam dignissimos et vitae porro
              quae esse repudiandae aliquid repellendus molestiae adipisci.
              Harum nam tempore ipsam iure error.
            </p>
            <Link
              href={`/blog/${2}`}
              className="text-green-500 flex items-center "
            >
              <span className="">Learn More</span>
              <FaArrowRightLong className="ml-4" />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-4xl">Latest Articles</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {BlogInfo?.map(
            ({ id, bigImg, authorImg, authorName, title, des, date },idx) => (
              <div  key={idx}>
                <div className=" relative h-[500px] mt-8">
                  <Image
                    src={bigImg}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="office"
                    className="rounded-3xl"
                  />
                </div>
                <div className="flex py-8 justify-between items-center">
                  <div className="flex items-center gap-4 ">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src={authorImg}
                        height={35}
                        width={35}
                        alt="author"
                      />
                    </div>
                    <span className="font-bold">{authorName}</span>
                  </div>
                  <div className="">
                    <span className="text-gray-200">{date}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-3xl">{title}</h1>
                  <p className="text-gray-300">{des}</p>
                  <Link
                    href={`/blog/${idx}`}
                    className="text-green-500 flex items-center "
                  >
                    <span className="">Learn More</span>
                    <FaArrowRightLong className="ml-4" />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
