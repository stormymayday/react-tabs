import { z } from "zod";
import { JobType } from "@/types";

const JobSchema = z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    dates: z.string(),
    duties: z.array(z.string()),
    company: z.string(),
});

interface FetchDataResult {
    data: JobType[];
    isError: boolean;
    errorMessage: string;
}

export const fetchData = async (url: string): Promise<FetchDataResult> => {
    const apiURL = url;

    if (!apiURL) {
        return {
            data: [],
            isError: true,
            errorMessage: "failed to fetch data",
        };
    }

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            return {
                data: [],
                isError: true,
                errorMessage: "failed to fetch data",
            };
        }

        const rawData: JobType[] = await response.json();

        const validatedData = JobSchema.array().safeParse(rawData);

        if (!validatedData.success) {
            return {
                data: [],
                isError: true,
                errorMessage: validatedData.error.errors
                    .map((err) => err.message)
                    .join(", "),
            };
        }

        return {
            data: validatedData.data,
            isError: false,
            errorMessage: "",
        };
    } catch (error) {
        const errorMsg =
            error instanceof Error
                ? error.message
                : "Oops! Something went wrong!";

        return {
            data: [],
            isError: true,
            errorMessage: errorMsg,
        };
    }
};
