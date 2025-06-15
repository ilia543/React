import { useState } from 'react';

interface UserProfileState{
    name: string;
    age: number;
    email: string;
};

const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfileState>({
        name: "",
        age: 0,
        email: ""
    });

    function updateName(e: string): void{
        setProfile(pr => {
            return {
                ...pr,
                name: e
            };
        });
    };

    function updateAge(e: number): void{
        if(e > -1 && e < 120){
            setProfile(pr => ({...pr, age:e}));
        };
    };

    const updateEmail = (e: string): void => {
        if(e.includes("@gmail.com")){
            setProfile(pr => ({...pr, email: e}));
        }else{
            setProfile(pr => ({...pr, email: ""}));
        };
    };

  return (
    <>
        <h2>User profile</h2>

        <input type="text" placeholder='name' value={profile.name} onChange={e => updateName(e.target.value)} />

        <input type="number" placeholder='age' value={profile.age > 0 ? profile.age : ""} onChange={e => updateAge(Number(e.target.value))} />

        <input type="text" placeholder='email' onChange={e => updateEmail(e.target.value)} />

        <p>name: {profile.name}</p>
        <p>age: {profile.age}</p>
        <p>email: {profile.email}</p>
    </>
  );
};

export default UserProfile;