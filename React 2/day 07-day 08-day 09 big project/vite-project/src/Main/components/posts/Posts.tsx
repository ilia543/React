import { useState } from "react";
import "./Posts.css";
import Interactions from "./Interactions/Interactions";

const Posts = () => {
  const [errorText, setErrorText] = useState("");

  const [allPostsOnWeb, SetAllPostsOnWeb] = useState(JSON.parse(localStorage.getItem("posts") || "[]"));

  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem("counter");
    return stored ? JSON.parse(stored) : 0;
  });

  const user = localStorage.getItem("currentUser");
  const UserEmail = user !== null ? JSON.parse(user).email : "";
  const UserName = user !== null ? JSON.parse(user).name : "";
  const userProfileimg = user !== null ? JSON.parse(user).profimg : "";

  function addPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const titleInp = formData.get("title");
    const textInp = formData.get("bigText");
    const imgFile = formData.get("img") as File;

    if (
      typeof titleInp === "string" &&
      titleInp.length < 100 &&
      typeof textInp === "string" &&
      textInp.length < 1000 &&
      ((imgFile instanceof File && imgFile.size > 0) || typeof(imgFile) !== "string")
    ) {
      const reader = new FileReader();

      reader.onload = function () {
        const base64Image = reader.result as string;

        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("counter", JSON.stringify(newCount));

        const newPost = {
          id: newCount,
          title: titleInp,
          text: textInp,
          img: base64Image,
          currentEmail: UserEmail,
          currentUserName: UserName,
          currentUserImg: userProfileimg,
        };

        const updatedPosts = [...allPostsOnWeb, newPost];
        SetAllPostsOnWeb(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));

        setErrorText("");
        formEl.reset();
      };

      reader.readAsDataURL(imgFile);
    } else {
      setErrorText("invalido");
    }
  }

  function deletePost(postId: number) {
  const updatedPosts = allPostsOnWeb.filter((post: any) => post.id !== postId);
  SetAllPostsOnWeb(updatedPosts);
  localStorage.setItem("posts", JSON.stringify(updatedPosts));
  localStorage.removeItem(`postInteractions${postId}`);
}

  return (
    <>
      <section className="addPosts mt-4 flex justify-center">
          <form onSubmit={addPost} action="" className=" w-[50%] min-w-[400px] max-w-[600px] border-2 rounded-xl flex flex-col gap-6 items-center p-4">

            <input className="border-2 w-[40%] rounded-xl" type="text" name="title" placeholder="title"/>

            <div className="flex flex-col gap-4 w-[100%] items-center">
              <textarea className="border-2 rounded-xl w-[80%]" name="bigText" placeholder="text"></textarea>

              <input defaultValue={""} type="file" accept="image/*" name="img" placeholder="img" className="border-2 rounded-xl max-w-[200px] h-[40%]"/>
            </div>

            <p>{errorText}</p>

            <button type="submit" className=" border-2 rounded-xl w-[20%] max-w-[100px]">submit</button>

          </form>
      </section> 


      <section className="allPosts flex flex-col gap-6 items-center mt-6">

        {allPostsOnWeb.map((el: any) => (
          <div key={el.id} className="border-2 rounded-xl p-4 w-[60%] max-w-[600px] shadow-lg">
            <div className="flex p-4 gap-16">
              <p className="text-2xl font-bold">{el.currentUserName}</p>
              <img className="w-[50px] h-[50%] rounded-[100%]" src={el.currentUserImg} alt="" />
            </div>
            <div className=" flex justify-between">
              <h2 className="text-xl font-bold mb-2">{el.title}</h2>
              {el.currentEmail === UserEmail && <button onClick={() => deletePost(el.id)} className="text-red-600 border-2 border-white p-2 rounded-xl">delete</button>}
            </div>
            <div className="mb-4 break-words">{el.text}</div>
            {el.img && (
              <img src={el.img} alt="" className="max-w-full h-auto rounded-lg" />
            )}
            <Interactions postId={el.id} user={{ email: UserEmail, name: UserName }} />
          </div>
        ))}
        
      </section>
    </>
  )
}

export default Posts