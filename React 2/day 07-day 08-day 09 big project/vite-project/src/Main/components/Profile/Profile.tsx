import { useState } from "react";
import React from 'react';
import "./Profile.css";

const Profile = () => {

  const [errorText, setErrorText] = useState<string>("");

  const user = (localStorage.getItem("currentUser"));

  const [backLocalImg, setbackLocalImg] = useState(user !== null ? JSON.parse(user).backimg : "#");
  const [profileLocalImg, setProfileLocalImg] = useState(user !== null ? JSON.parse(user).profimg : "#");

  const userName = user !== null ? JSON.parse(user).name : "";


  function addImagse(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const profileBackgroundImg = formData.get("backImg");
    const profileImg = formData.get("profImg");

    if(typeof(profileBackgroundImg) !== "string" || typeof(profileImg) !== "string"){
      setErrorText("iputs ar invalid");
      return;
    }

    setbackLocalImg(profileBackgroundImg);
    setProfileLocalImg(profileImg);
    if(user !== null){

      const parsedUser = JSON.parse(user);
      parsedUser.backimg = profileBackgroundImg;
      parsedUser.profimg = profileImg;
      localStorage.setItem("currentUser", JSON.stringify(parsedUser));

      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

      const updatedUsers = registeredUsers.map((u: any) => {
        if (u.email === parsedUser.email) {
          return { ...u, backimg: profileBackgroundImg, profimg: profileImg };
        }
        return u;
      });

      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
    }

    formEl.reset();
  }
  return (
    <>
        <section className="userProfile w-[100%]">

          <div className="profileBackground rounded-xl">
            <img src={backLocalImg} alt="" className="w-[100%] h-[100%] rounded-xl"/>
          </div>

          <section className="userImgAndName">

            <div className="userfoto">
              <img src={profileLocalImg} alt="" className="w-[100%] h-[100%] rounded-[100%]"/>
            </div>

            <div className="flex gap-10 justify-between">
              <p className="UserNameP">{userName}</p>

              <form className="addBackAndImage" onSubmit={addImagse}>
                <label>
                  enter background img address:
                  <input name="backImg" className=" border-2 rounded-lg border-gray-500" type="text" placeholder="enter background img address"/>
                </label>
                <label>
                  enter profile img address:
                  <input name="profImg" className=" border-2 rounded-lg border-gray-500" type="text" placeholder="enter profile img address"/>
                </label>
                <p>{errorText}</p>

                <button type="submit" className="border-2 rounded-2xl w-20">submit</button>
              </form>
            </div>

          </section>
        </section>
    </>
  )
}

export default Profile