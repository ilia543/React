import "./MainPage.css"
import Profile from "./components/Profile/Profile";
import Posts from "./components/posts/Posts";

const MainPage = () => {

  return (
    <>
      <section className="mainPageMainSection min-w-[550px] min-h-[800px]">
        
        <Profile />

        <Posts />
        
      </section>
    </>
  )
}

export default MainPage