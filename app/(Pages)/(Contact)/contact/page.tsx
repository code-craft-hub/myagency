"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactValidation } from "@/Validation/zodValidation";
import { Textarea } from "@/components/ui/textarea";
import CallToActionGrid from "@/components/CallToActionGrid";
import { toast } from "sonner";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { contactInfo } from "@/constants";

type TContactValidation = z.infer<typeof contactValidation>;
const Contact = () => {
  const form = useForm<TContactValidation>({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: TContactValidation) => {
    const promise = () =>
      new Promise((resolve, reject) =>
        setTimeout(() => reject({ name: "Sonner" }), 2000)
      );

    toast.promise(promise, {
      loading: "Loading...",
      success: (data: any) => {
        return `${data.name} toast has been added`;
      },
      error: () => {
        return "An error occured.";
      },
    });
    console.log(values);
  };

  return (
    <main>
      <section className="bg-accent gap-4 py-8 lg:py-16 flex-col flex relative items-center ">
        <div className="flex gap-2 rounded-full p-2 px-4 bg-bgBackground dark:text-black font-bold text-sm w-fit">
          <Image src="/stack.svg" height={15} width={15} alt="brush" />
          <p className="text-xs">Contact</p>
        </div>
        <p className=" text-center text-4xl">Get in Touch With Us</p>
      </section>

      <section className="section ">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-screen-lg mx-auto w-full"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                      <Input placeholder="Durk Williams" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="lildurk@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Request for my website design and development"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Durk Williams"
                        {...field}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-full bg-greenColor text-white hover:text-greenColor"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <section className="section flex-col ">
        <div className="items-center justify-center flex flex-col">
          <p className="text-center">FAQ</p>
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        <div className="max-w-screen-lg mx-auto w-full">
          <FAQ />
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 py-8 md:py-16 items-center justify-center">
          {contactInfo?.map(({ title, des,img }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border-2 max-w-72 gap-4 text-center p-4 sm:p-8"
            >
              <Image src={img} height={45} width={45} alt="brush" />
              <h1 className="font-bold text-2xl">{title}</h1>
              <h1 className="">
                {des}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
