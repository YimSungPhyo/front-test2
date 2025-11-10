import type { Post } from "./types";

//입력타입 정의
interface PostListProps {
    posts: Post[];
}

//컴포넌트
const PostList: React.FC<PostListProps> = ({posts}) => {

    return (

        <ul style={{ listStyle: 'none', padding: 0 }}>

            {
                posts.map( post => (
                
                    <li key={post.id} style={{ border: '1px solid #eee', margin: '10px' }}>
                        {post.title} - {post.date}
                    </li>

                    )  
                )   
            }

        </ul>
    );

} 

/*
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map(post => (
        <li key={post.id} style={{ border: '1px solid #eee', margin: '10px' }}>
          **{post.title}** ({post.date})
        </li>
      ))}
    </ul>

*/

export default PostList;