import { user, USER_ROLES } from "../../business/entities/user"
import { task } from "../../business/entities/task"

export const convertBooleanToNumber = (value: boolean): number => {
    if(value){
        return 1
    }

    return 0
}

export const convertNumberToBoolean = (value: number): boolean => {

    return value !== 0

}

export const convertUserRolesToString = (role: USER_ROLES): string => {
    return role === USER_ROLES.ADMIN ? "admin" : "normal"
}

export const convertStringToUserRoles = (role: string): USER_ROLES => {
    if(role === "admin"){
        return USER_ROLES.ADMIN
    }else if(role === "normal"){
        return USER_ROLES.NORMAL
    }

    throw new Error("Invalid user role")
}

export function setTask(myUser: user, task: task[]): user{
    myUser.task = task

    return myUser
}