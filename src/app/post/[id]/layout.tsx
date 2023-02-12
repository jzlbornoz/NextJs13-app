import { PostCard } from '@/components/PostCard';

import { PostsModel } from '@/models/post.model';
import { UsersModel } from '@/models/users.model';
import { ImagesModel } from '@/models/image.model';

import { API } from '@/services/API.services';


const PostByIdPage = async ({ children, params }
    : { children: React.ReactNode, params: { id: string } })
    : Promise<JSX.Element> => {

    const { id } = params;

    const PostAPIService = new API<PostsModel>();
    const Post = await PostAPIService.getPostById(id);

    const UserAPIService = new API<UsersModel>();
    const User: UsersModel = await UserAPIService.getUserById(Post.userId);


    const ImageAPIService = new API<ImagesModel>();
    const image = await ImageAPIService.getImage();

    //--
    return (
        <>
            <PostCard post={Post} user={User} image={image.urls.small} />
            {children}
        </>
    )



}

export default PostByIdPage