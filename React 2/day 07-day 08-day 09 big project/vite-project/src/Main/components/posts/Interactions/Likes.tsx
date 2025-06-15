import { useEffect, useState } from "react";

type LikesProps = {
  postId: number;
  currentUserEmail: string;
};

type LikeData = {
  likeCount: number;
  likeEmail: string[];
};

const Likes = ({ postId, currentUserEmail }: LikesProps) => {
  const [likeData, setLikeData] = useState<LikeData>({ likeCount: 0, likeEmail: [] });

  useEffect(() => {
    const saved = localStorage.getItem(`likes_${postId}`);
    if (saved) {
      try {
        setLikeData(JSON.parse(saved));
      } catch (err) {
        console.error("Error parsing likes", err);
      }
    }
  }, [postId]);

  const toggleLike = () => {
    const alreadyLiked = likeData.likeEmail.includes(currentUserEmail);
    const updatedEmails = alreadyLiked
      ? likeData.likeEmail.filter(email => email !== currentUserEmail)
      : [...likeData.likeEmail, currentUserEmail];

    const updated = {
      likeEmail: updatedEmails,
      likeCount: updatedEmails.length,
    };

    setLikeData(updated);
    localStorage.setItem(`likes_${postId}`, JSON.stringify(updated));
  };

  return (
    <div className="mt-4 flex gap-2 items-center">
      <button onClick={toggleLike} className="border p-2 rounded">
        {likeData.likeEmail.includes(currentUserEmail) ? "Unlike" : "Like"}
      </button>
      <p>{likeData.likeCount} ❤️ {likeData.likeCount === 1 ? "Like" : "Likes"}</p>
    </div>
  );
};

export default Likes;
