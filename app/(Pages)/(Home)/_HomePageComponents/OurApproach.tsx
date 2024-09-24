import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const OurApproach = () => {
  return (
    <section className="section">
      <div className="w-full ">
        <h1 className="text-4xl font-bold text-center py-4 sm:py-8">
          Our Proven Approach
        </h1>
        <Tabs defaultValue="discovery" className="w-full">
          <TabsList className="w-full  flex justify-between rounded-3xl">
            <TabsTrigger
              className="rounded-xl w-full text-[9px] sm:text-[13px]"
              value="discovery"
            >
              Discovery
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl w-full text-[9px] sm:text-[13px]"
              value="strategy"
            >
              Strategy
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl w-full text-[9px] sm:text-[13px]"
              value="execution"
            >
              Execution
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xl w-full text-[9px] sm:text-[13px]"
              value="optimization"
            >
              Optimization
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="w-full flex flex-col md:flex-row  gap-8"
            value="discovery"
          >
            <div className="w-full md:w-1/2 flex-1 justify-center flex flex-col gap-4 mt-8">
              <h1 className="text-lightGreen">DISCOVERY</h1>
              <p className="font-semibold">
                Understanding Your Goals and Audience
              </p>
              <div className="space-y-4">
                <p className="">
                  Before we dive into any project, we start by getting to know
                  you and your business inside out. We take the time to
                  understand your goals, objectives, target audience, and
                  competitive landscape.
                </p>
                <p className="">
                  Through in-depth discussions, workshops, and research, we
                  uncover valuable insights that inform our strategy moving
                  forward.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-1 justify-center items-center flex flex-col">
              <Image
                src="/Discovery.svg"
                height={250}
                width={250}
                alt="brush"
              />
            </div>
          </TabsContent>
          <TabsContent
            className="w-full flex flex-col md:flex-row  "
            value="strategy"
          >
            <div className="w-full md:w-1/2 flex-1 justify-center flex flex-col gap-4">
              <h1 className="text-lightGreen">STRATEGY</h1>
              <p className="font-semibold">
                Crafting a tailored plan to achieve your objectives.
              </p>
              <div className="space-y-4">
                <p className="">
                  Before we dive into any project, we start by getting to know
                  you and your business inside out. We take the time to
                  understand your goals, objectives, target audience, and
                  competitive landscape.
                </p>
                <p className="">
                  Through in-depth discussions, workshops, and research, we
                  uncover valuable insights that inform our strategy moving
                  forward.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-1 justify-center items-center flex flex-col">
              <Image src="/Strategy.svg" height={250} width={250} alt="brush" />
            </div>
          </TabsContent>
          <TabsContent
            className="w-full flex flex-col md:flex-row  "
            value="execution"
          >
            <div className="w-full md:w-1/2 flex-1 justify-center flex flex-col gap-4">
              <h1 className="text-lightGreen">OPTIMIZATION</h1>
              <p className="font-semibold">
                Continuous refinement for maximum impact.
              </p>
              <div className="space-y-4">
                <p className="">
                  Before we dive into any project, we start by getting to know
                  you and your business inside out. We take the time to
                  understand your goals, objectives, target audience, and
                  competitive landscape.
                </p>
                <p className="">
                  Through in-depth discussions, workshops, and research, we
                  uncover valuable insights that inform our strategy moving
                  forward.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-1 justify-center items-center flex flex-col">
              <Image
                src="/fixingCard.svg"
                height={250}
                width={250}
                alt="brush"
              />
            </div>
          </TabsContent>
          <TabsContent className="w-full flex flex-col md:flex-row  " value="optimization">
          <div className="w-full md:w-1/2 flex-1 justify-center flex flex-col gap-4">
              <h1 className="text-lightGreen">OPTIMIZATION</h1>
              <p className="font-semibold">
                Continuous refinement for maximum impact.
              </p>
              <div className="space-y-4">
                <p className="">
                  Before we dive into any project, we start by getting to know
                  you and your business inside out. We take the time to
                  understand your goals, objectives, target audience, and
                  competitive landscape.
                </p>
                <p className="">
                  Through in-depth discussions, workshops, and research, we
                  uncover valuable insights that inform our strategy moving
                  forward.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex-1 justify-center items-center flex flex-col">
              <Image
                src="/optimization.svg"
                height={250}
                width={250}
                alt="brush"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OurApproach;
