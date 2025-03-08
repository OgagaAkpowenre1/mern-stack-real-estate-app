import Searchbar from "../../components/Searchbar/Searchbar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eligendi obcaecati at, recusandae impedit ea reiciendis, quam sequi
            dolore aliquid a, amet labore quos soluta accusamus aliquam mollitia
            nesciunt accusantium?
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gains</h2>
            </div>
            <div className="box">
                <h1>1200</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
