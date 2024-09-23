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
      <section className="bg-accent gap-4 py-8 lg:py-16 flex-col flex">
        <h1 className="font-bold text-4xl text-center">Contact Us</h1>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          expedita.
        </p>
      </section>

      <section className="section mx-auto">
        <div className="flex gap-4">

        
        <div className="sm:w-1/2 gap-4 sm:gap-8 flex flex-col">
          <div className="bg-greenColor p-4 sm:p-8 rounded-3xl max-w-xs flex flex-col gap-4">
            <IoCall />
            <h1 className="font-bold text-2xl">Speak to us now.</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, quam.
            </p>
            <Button className="rounded-full bg-yellowColor">
              Book an Appointment
            </Button>
          </div>
          <div className="bg-yellowColor p-4 sm:p-8 rounded-3xl max-w-xs flex flex-col gap-4">
            <IoSend className="text-black" />
            <h1 className="font-bold text-2xl text-black">Speak to us now.</h1>
            <p className=" text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, quam.
            </p>
            <Button className="rounded-full bg-greenColor text-white hover:text-greenColor">
              Send a Mail
            </Button>
          </div>
        </div>
        <div className="sm:w-1/2 gap-4 sm:gap-8 flex flex-col">
          <div className="bg-greenColor h-[65%] p-4 sm:p-8 rounded-3xl max-w-xs flex flex-col gap-4">
            <IoCall />
            <h1 className="font-bold text-2xl">Speak to us now.</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, quam.
            </p>
            <Button className="rounded-full bg-yellowColor">
              Book an Appointment
            </Button>
          </div>
          <div className="bg-yellowColor h-[30%] p-4 sm:p-8 rounded-3xl max-w-xs flex flex-col gap-4">
            <IoSend className="text-black" />
            <h1 className="font-bold text-2xl text-black">Speak to us now.</h1>
            {/* <p className=" text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, quam.
            </p> */}
            <Button className="rounded-full bg-greenColor text-white hover:text-greenColor">
              Send a Mail
            </Button>
          </div>
        </div>
        
        </div>
        <div className="sm:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border-[1px] p-4 sm:p-8">
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
              <Button type="submit" className="rounded-full bg-greenColor text-white hover:text-greenColor">Submit</Button>
            </form>
          </Form>
        </div>
      </section>
        <CallToActionGrid /> 
    </main>
  );
};

export default Contact;
