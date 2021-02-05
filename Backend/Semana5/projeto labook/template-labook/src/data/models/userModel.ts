import { POST_TYPES, user } from "../../business/entities/user";
import { task } from "../../business/entities/task";

export const convertBooleanToNumber = (value: boolean): number => {
    if (value) {
        return 1;
    }
    return 0;
}

export const convertNumberToBoolean = (value: number): boolean => {
    return value !== 0;
}



export const convertPostTypeToString = (type: POST_TYPES): string => {
    return type === POST_TYPES.EVENT ? "event" : "normal";
}

export const convertStringToPostType = (type: string): POST_TYPES => {
    if (type === "event") {
        return POST_TYPES.EVENT
    } else if (type === "normal") {
        return POST_TYPES.NORMAL
    }
    throw new Error("Invalid Post Type");
}

export function setTasks(myUser: user, tasks: task[]): user {
    myUser.tasks = tasks;
    return myUser;
}