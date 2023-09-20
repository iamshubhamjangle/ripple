"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { Button } from "@/app/(client)/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/(client)/_components/ui/form";
import { Textarea } from "@/app/(client)/_components/ui/textarea";
import UserNavProfilePic from "@/app/(client)/_components/LeftSidebar/user-nav-profile-pic";

const postRippleSchema = z.object({
  postBody: z
    .string()
    .min(1, { message: "Ripple must be at least 1 character" })
    .max(512, { message: "Each Ripple can be at max 512 character's" }),
});

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof postRippleSchema>>({
    resolver: zodResolver(postRippleSchema),
    defaultValues: {
      postBody: "",
    },
  });

  function onSubmit(values: z.infer<typeof postRippleSchema>) {
    setLoading(true);
    axios
      .post("/api/post", values)
      .then(() => {
        form.reset();
        toast.success("Posted successfully!");
      })
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  }

  return (
    <div className="my-4 bg-secondary rounded-md flex gap-4">
      <div className="m-2">
        <UserNavProfilePic />
      </div>
      <div className="flex-grow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="postBody"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="resize-none bg-secondary border-none p-2"
                      {...field}
                      placeholder="What's rippling in your mind?"
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            <div style={{ marginTop: "5px" }} className="flex justify-end">
              <Button
                type="submit"
                size="sm"
                className="bg-primary m-2"
                loading={loading}
                disabled={loading}
              >
                Post
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePost;
