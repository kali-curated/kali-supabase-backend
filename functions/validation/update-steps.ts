import { BadRequestError } from "../utils/errors.ts";

type ReturnType =
  | { error: boolean; data: Response }
  | {
      error: boolean;
      data: {
        steps: number;
        timeZone: string;
      };
    };

async function updateUserSteps(
  req: Request,
  headers: Headers
): Promise<ReturnType> {
  const { steps, timeZone } = await req.json();

  if (!steps) {
    return {
      error: true,
      data: BadRequestError("steps is required", headers),
    };
  }

  if (steps && typeof steps !== "number") {
    return {
      error: true,
      data: BadRequestError("steps must be a number", headers),
    };
  }

  if (steps < 0) {
    return {
      error: true,
      data: BadRequestError("steps must be a positive number", headers),
    };
  }
  if (!timeZone) {
    return {
      error: true,
      data: BadRequestError("timeZone is required", headers),
    };
  }

  if (timeZone && typeof timeZone !== "string") {
    return {
      error: true,
      data: BadRequestError("timeZone must be a string", headers),
    };
  }

  if (timeZone && typeof timeZone !== "string") {
    return {
      error: true,
      data: BadRequestError("timeZone must be a string", headers),
    };
  }

  return {
    error: false,
    data: {
      steps,
      timeZone,
    },
  };
}
export default updateUserSteps;
