"use client";

import { useActionState, useState } from "react";
import {
  Select, SelectTrigger, SelectValue, SelectItem, SelectContent
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function AddMenuForm({ action }) {
  const [formState, formAction, isPending] = useActionState(action, {
    errors: {},
  });

  const [imageUrl, setImageUrl] = useState(null);

  const categories = ["pizza", "chaumin", "fruits", "veg"];

  const handleAction = (formData: FormData) => {
    formData.append("image", imageUrl || "");
    return formAction(formData);
  };

  return (
    <form action={handleAction} className="space-y-4">
      <div>
        <Label>Item Name</Label>
        <Input name="name" required />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea name="description" required />
      </div>

      <div>
        <Label>Price</Label>
        <Input name="price" type="number" required />
      </div>

      <div>
        <Label>Category</Label>
        <input type="hidden" name="category" id="hidden-category" />

        <Select
          onValueChange={(val) => {
            document.getElementById("hidden-category").value = val;
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button disabled={isPending} type="submit" className="w-full">
        {isPending ? "Processing..." : "Add Menu Item"}
      </Button>
    </form>
  );
}
