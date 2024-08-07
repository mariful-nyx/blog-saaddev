import { Link, useParams } from "react-router-dom";
import { Github, Linkedin, Location, Twitter } from "../Icons";
import { useState, ChangeEvent, useEffect } from "react";
import useApi from "../utils/api";
import { PostTypes } from "../components/Home/HomeMain";
import { CommentTypes } from "../components/post-view/Comment";
import UserPosts from "../components/profile/UserPosts";
import UserComments from "../components/profile/UserComments";


const Profile = () => {
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const { name } = useParams()
    const api = useApi()
    const [userPosts, setUserPosts] = useState<PostTypes[]>([])
    const [userComments, setUserComments] = useState<CommentTypes[]>([])
    useEffect(() => {
        getUserPosts()
        getUserComments()
    }, [])
    const getUserPosts = async () => {
        try {
            const response = await api.userPosts(name ? name : "")
            setUserPosts(response.data)
        } catch (error) {
            console.log("Error fetching user posts", error)
        }
    }
    const getUserComments = async () => {
        try {
            const response = await api.userComments(name ? name : "")
            setUserComments(response.data)
        } catch (error) {
            console.log("Error fetching user posts", error)
        }
    }
    const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProfileImage(e.target.files[0]);
        }
    };
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="px-4 md:px-[10%] flex flex-col gap-8">
            <div className="h-[400px] relative border border-blue-600">
                <div className="bg-blue-600 h-[150px]"></div>
                <div className="absolute top-[85px] right-[50%] translate-x-[50%] rounded-full h-[120px] w-[120px] border border-blue-600 group">
                    <label htmlFor="profile_image">
                        {profileImage ? (
                            <img
                                src={URL.createObjectURL(profileImage)}
                                alt="Profile"
                                className="rounded-full h-[120px] w-[120px] group-hover:opacity-75 cursor-pointer"
                            />
                        ) : (
                            <img
                                src="https://picsum.photos/id/1/200/300"
                                alt="Placeholder"
                                className="rounded-full h-[120px] w-[120px] group-hover:opacity-75 cursor-pointer"
                            />
                        )}
                    </label>
                    <input
                        id="profile_image"
                        type="file"
                        className="hidden"
                        onChange={onChangeImage}
                    />
                </div>
                <div className="pt-16 flex justify-center">
                    <strong className="text-2xl">{name}</strong>
                </div>
                <div className="pt-6 flex flex-col gap-6">
                    <div className="flex justify-center items-center gap-2">
                        <Location className="h-6 w-6" /> Rajshahi, Bangladesh
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <Link to="#"><Linkedin className="h-6 w-6" /></Link>
                        <Link to="#"><Github className="h-6 w-6" /></Link>
                        <Link to="#"><Twitter className="h-6 w-6" /></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-6">
                <div className="p-4 flex flex-col gap-3 border border-blue-600 shadow-lg rounded-md w-full">
                    <strong className="text-xl border-b">Bio</strong>
                    <p className="text-md text-gray-500 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi necessitatibus numquam eligendi ex, asperiores facilis, eveniet autem labore officia iste illo, distinctio tempore mollitia perferendis. Impedit, numquam libero! Incidunt, consectetur.
                    </p>
                </div>
                <div className="flex flex-col sm:flex sm:flex-row gap-4 w-full pb-10">
                    <div className="border border-blue-600 shadow-lg rounded-md h-[200px] w-full sm:w-[30%] p-4">
                        <ul className="list-none">
                            <li className={`text-gray-500 cursor-pointer flex justify-between items-center px-3 py-1 ${!open ? 'bg-gray-100' : ''}`}
                                onClick={() => setOpen(false)}>
                                <span>Posts</span> <span>{userPosts.length}</span></li>
                            <li className={`text-gray-500 cursor-pointer flex justify-between items-center px-3 py-1 ${open ? 'bg-gray-100' : ''}`}
                                onClick={() => setOpen(true)}>
                                <span>Comments</span>  <span>{userComments.length}</span></li>
                        </ul>
                    </div>


                    <div className={`${!open ? '' : 'hidden'} w-full sm:w-[70%]`}>
                        <UserPosts name={name ? name : ''} />

                    </div>

                    <div className={`${open ? '' : 'hidden'} w-full sm:w-[70%]`}>
                        <UserComments userComments={userComments} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;
