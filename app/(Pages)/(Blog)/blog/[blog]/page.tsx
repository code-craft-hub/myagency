import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BlogInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogChildren = ({ params: { blog } }: { params: { blog: number } }) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 sm:px-8 mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">
                {BlogInfo[blog].title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="section ">
        <div className=" w-full">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <h1 className="font-bold text-4xl">{BlogInfo[blog].title}</h1>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={BlogInfo[blog].authorImg}
                  height={35}
                  width={35}
                  alt="author"
                />
              </div>
              <span className="font-bold">{BlogInfo[blog].authorName}</span>
              <span className="text-gray-200">{BlogInfo[blog].date}</span>
            </div>
          </div>
          <div>
            <div className=" relative h-[500px] mt-8">
              <Image
                src={BlogInfo[blog].bigImg}
                fill={true}
                style={{ objectFit: "cover" }}
                alt="office"
                className="rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-[900px] py-8">
            <h1 className="font-bold text-4xl">
              Understanding Data Analytics in Marketing
            </h1>
            <p className="">
              Dive into the pivotal role of data analytics in crafting marketing
              campaigns that resonate with target audiences. Explore how
              data-driven insights fuel strategic decision-making, allowing
              marketers to identify consumer preferences, behaviors, and trends.
            </p>
            <ul className="list-disc pl-4 flex flex-col gap-2">
              <li>
                By harnessing the power of data analytics, marketers gain
                valuable insights into campaign performance.
              </li>
              <li>
                Enabling them to optimize strategies for maximum impact and ROI.
              </li>
              <li>
                Discover how data analytics enables personalized marketing
                approaches, delivering tailored messages to the right audience
                segments at the right time.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 max-w-[900px] py-8">
            <h1 className="font-bold text-4xl">
              Understanding Consumer Behavior
            </h1>
            <p className="">
              Data analytics is revolutionizing the way marketers understand
              consumer behavior in today's digital age. By harnessing the power
              of data collected from diverse sources such as social media,
              website interactions, and purchasing patterns, marketers can
              unlock valuable insights into their target audience.
            </p>
            <ul className="list-disc pl-4 flex flex-col gap-2">
              <li>
                By harnessing the power of data analytics, marketers gain
                valuable insights into campaign performance.
              </li>
              <li>
                Enabling them to optimize strategies for maximum impact and ROI.
              </li>
              <li>
                Discover how data analytics enables personalized marketing
                approaches, delivering tailored messages to the right audience
                segments at the right time.
              </li>
            </ul>
          </div>
          <h1 className="font-bold text-4xl my-8">Related Blogs</h1>

          <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {BlogInfo?.slice(0, 4)?.map(
              (
                { id, bigImg, authorImg, authorName, title, des, date },
                idx
              ) => (
                <div key={idx} className="">
                  <div className=" relative h-[500px] mt-8 ">
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
    </section>
  );
};

export default BlogChildren;
