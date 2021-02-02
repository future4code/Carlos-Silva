import { task } from "../../business/entities/task"

export function toTaskModel(object: any): task{
    return{
        id: object.id,
        title: object.title,
        description: object.description,
        deadline: object.deadline,
        authorId: object.author_id
    }
 }