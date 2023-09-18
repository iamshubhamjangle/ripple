"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/app/(client)/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/(client)/_components/ui/form";
import { Textarea } from "@/app/(client)/_components/ui/textarea";

const postRippleSchema = z.object({
  body: z
    .string()
    .min(1, { message: "Ripple must be at least 1 character" })
    .max(255, { message: "Ripple can be at max 255 character's" }),
});

const CreatePost = () => {
  const form = useForm<z.infer<typeof postRippleSchema>>({
    resolver: zodResolver(postRippleSchema),
    defaultValues: {
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof postRippleSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    {...field}
                    placeholder="What's rippling in your mind?"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div style={{ marginTop: "5px" }} className="flex justify-end">
            <Button type="submit" size="sm" className="bg-primary">
              Post
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreatePost;
