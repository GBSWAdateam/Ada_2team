import "./Main.css";
import Header from "../components/Header";
import Maincontainer from "../components/Main_container";
import Mapitem from "../components/map";
const map = [
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
];

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Maincontainer />
      <div className="recentRoot">
        <h2>최근 저장된 경로</h2>
      </div>
      <div className="RecentPathcontainer">
        {map.map((map) => (
          <Mapitem
            start={map.start}
            end={map.end}
            money={map.money}
            day={map.day}
          />
        ))}
      </div>
      <div className="review_container">
        <div className="review">
          <img
            src="/images/mainpagereview.png"
            alt="광안대교, 도시를 품다"
            style={{ width: "1350px" }}
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer_text">
          <p>tel. 054-000-0000</p>
          <p>© 경상북도 의성군 봉양면 봉호로 14 (경북소프트웨어고등학교)</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
