import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BlogInfo, worksData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogChildren = ({ params: { work } }: { params: { work: number } }) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 sm:px-8 mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/work">Work</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">
                {worksData[work].title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="section ">
        <div className=" w-full">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <h1 className="font-bold text-4xl">{worksData[work].title}</h1>
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={BlogInfo[work].authorImg}
                  height={35}
                  width={35}
                  alt="author"
                />
              </div>
              <span className="font-bold">{BlogInfo[work].authorName}</span>
              <span className="text-gray-200">{BlogInfo[work].date}</span>
            </div>
          </div>
          <div>
            <div className=" relative h-[500px] mt-8">
              <Image
                src={worksData[work].img}
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
          <h1 className="font-bold text-4xl my-8">Similar Projects</h1>

          <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {worksData?.map(({ title, des, subtitle, img }, idx) => (
              <div key={idx} className="">
                <div className=" relative h-[500px] mt-8 ">
                  <Image
                    src={img}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="office"
                    className="rounded-3xl"
                  />
                </div>
               
                <div className="space-y-2 mt-8">
                  <h1 className="font-bold text-3xl">{title}</h1>
                  <p className="text-gray-300">{subtitle}</p>
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
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogChildren;
