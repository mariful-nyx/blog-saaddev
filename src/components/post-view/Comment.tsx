import { useEffect, useState } from "react"
import useApi from "../../utils/api"
import { TimeFormat } from "../../utils";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export interface CommentTypes {
    id: number;
    post: number;
    user: string;
    text: string;
    created: string;
    updated: string;
    post_id: number;
    post_title: string;
}
const Comment = ({ id }: { id?: number | any }) => {
    const api = useApi()
    const [comments, setComments] = useState<CommentTypes[]>([])
    const name = Cookies.get("name")
    useEffect(() => {
        getComments()
    }, [])
    const getComments = async () => {
        try {
            const response = await api.comments(id)
            setComments(response.data)
        } catch (error) {
            console.log("Error fetching comments", error)
        }
    }
    const handleComment = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('post_id', id)
        formData.append('user', name ? name : e.target.email.value.split('@')[0])
        formData.append('text', e.target.comment.value)
        try {
            const response = await api.createComment(formData)
            if (response.data) {
                console.log("Successfully comment")
            }
            e.target.reset()
            getComments()
        } catch (error) {
            console.log("Error in comment", error)
        }
    }
    const handleEdit = async (e: any, id: number) => {
        e.preventDefault()
        try {
            await api.deleteComment(id)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (e: any, id: number) => {
        e.preventDefault()
        try {
            await api.deleteComment(id)
            getComments()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="flex flex-col gap-6 mt-8">
                <strong className="text-2xl">Comments</strong>
                <div className="flex flex-col gap-6">
                    {comments?.map((comment, i) => (
                        <div className="flex flex-col gap-0" key={i}>
                            <div className="flex justify-between items-centers">
                                <Link to={`/profile/${comment.user}`} className="font-semibold hover:text-blue-600 hover:underline cursor-pointer">{comment?.user}</Link> <span className="text-[12px] text-gray-500">{TimeFormat(comment?.updated)}</span>
                            </div>
                            <div>
                                <p className="text-gray-500 pl-2 my-1">{comment?.text}</p>
                            </div>
                            <div className="flex gap-2 text-sm text-gray-400">
                                <span onClick={(e) => handleEdit(e, comment.id)} className="text-blue-600 cursor-pointer hover:underline">Edit</span>
                                <span onClick={(e) => handleDelete(e, comment.id)} className="text-red-600 cursor-pointer hover:underline">Delete</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-10 flex flex-col gap-6">
                <strong>Write Comment</strong>
                <form className="" onSubmit={handleComment}>
                    {!name ?
                        <input type="email" name="email" placeholder="Email" className="border-gray-300 w-full rounded-md mb-4" required />
                        : <></>}

                    <input type="text" name="comment" placeholder="Write your comment..." className="w-full border-gray-300 rounded-md mb-4" required />
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white text-md rounded-md float-right hover:bg-blue-700">Comment</button>
                </form>

            </div>
        </div>
    )
}

export default Comment