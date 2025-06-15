import { useEffect, useState } from "react";

type CommentsProps = {
  postId: number;
  currentUser: {
    email: string;
    name: string;
  };
};

type CommentType = {
  id: string;
  commentText: string;
  commentAuthorEmail: string;
  commentAuthorName: string;
};

const Comments = ({ postId, currentUser }: CommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`comments_${postId}`);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (err) {
        console.error("Error parsing comments", err);
      }
    }
  }, [postId]);

  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const comment = new FormData(form).get("comment");

    if (typeof comment === "string" && comment.trim()) {
      const newComment: CommentType = {
        id: crypto.randomUUID(),
        commentText: comment.trim(),
        commentAuthorEmail: currentUser.email,
        commentAuthorName: currentUser.name,
      };
      const updated = [...comments, newComment];
      setComments(updated);
      localStorage.setItem(`comments_${postId}`, JSON.stringify(updated));
      form.reset();
    }
  };

  const deleteComment = (id: string) => {
    const filtered = comments.filter(c => c.id !== id);
    setComments(filtered);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(filtered));
  };

  return (
    <div className="mt-6">
      <form onSubmit={addComment} className="flex gap-4 w-full">
        <textarea name="comment" placeholder="Add comment" className="border p-2 rounded w-full" />
        <button type="submit" className="border p-2 rounded">Add</button>
      </form>
      <button onClick={() => setShow(prev => !prev)} className="mt-2 underline">
        {show ? "Hide Comments" : "Show Comments"}
      </button>
      {show && (
        <div className="mt-4 space-y-2">
          {comments.map((c) => (
            <div key={c.id} className="border p-2 rounded">
              <p className="font-bold">{c.commentAuthorName}</p>
              <p>{c.commentText}</p>
              {c.commentAuthorEmail === currentUser.email && (
                <button onClick={() => deleteComment(c.id)} className="text-red-500 text-sm mt-1">
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;