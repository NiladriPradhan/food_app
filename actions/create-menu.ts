"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    category: z.string().min(1),
    price: z.coerce.number().min(0.01),
    imageUrl: z.string().url().optional(),
});

export const createMenuAction = async (formData: FormData) => {
    const result = formSchema.safeParse({
        name: formData.get("name")?.toString() ?? "",
        description: formData.get("description")?.toString() ?? "",
        category: formData.get("category")?.toString() ?? "",
        price: formData.get("price")?.toString() ?? "0",
        imageUrl: formData.get("imageUrl")?.toString() ?? undefined,
    });

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    try {
        await prisma.menuItem.create({
            data: {
                name: result.data.name,
                description: result.data.description,
                category: result.data.category,
                price: result.data.price,
                imageUrl: result.data.imageUrl,
            },
        });
        return { success: true };
    } catch (error: unknown) {
        return {
            errors: {
                formError: [(error as Error).message ?? "Unexpected error"],
            },
        };
    }
};
