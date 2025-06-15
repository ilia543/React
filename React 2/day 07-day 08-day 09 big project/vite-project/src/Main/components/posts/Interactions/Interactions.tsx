import Comments from "./Comments";
import Likes from "./Likes";

type Props = {
  postId: number;
  user: {
    email: string;
    name: string;
  };
};

const Interactions = ({ postId, user }: Props) => {
  return (
    <div className="mt-6">
      <Likes postId={postId} currentUserEmail={user.email} />
      <Comments postId={postId} currentUser={user} />
    </div>
  );
};

export default Interactions;
