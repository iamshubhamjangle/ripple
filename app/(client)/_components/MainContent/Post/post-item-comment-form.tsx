"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/app/(client)/_components/ui/button";
import { Textarea } from "@/app/(client)/_components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/(client)/_components/ui/form";
import toast from "react-hot-toast";

const postItemPostCommentformSchema = z.object({
  commentBody: z.string().min(1).max(512),
});

interface PostItemCommentFormProps {
  postId: string;
}

const PostItemCommentForm: React.FC<PostItemCommentFormProps> = ({
  postId,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof postItemPostCommentformSchema>>({
    resolver: zodResolver(postItemPostCommentformSchema),
    defaultValues: {
      commentBody: "",
    },
  });

  function onSubmit(values: z.infer<typeof postItemPostCommentformSchema>) {
    setLoading(true);
    axios
      .post(`/api/post/${postId}/action/comment`, values)
      .then(() => {
        form.reset();
        router.refresh();
      })
      .catch((e) => toast.error(e?.response?.data || "Something went wrong!"))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="commentBody"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea rows={2} placeholder="Post your reply" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div style={{ marginTop: "5px" }} className="flex flex-row-reverse">
            <Button
              type="submit"
              size="sm"
              loading={loading}
              disabled={loading}
            >
              Reply
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default PostItemCommentForm;
