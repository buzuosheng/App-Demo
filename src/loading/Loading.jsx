import { Loading } from "@buzuosheng/loading";
import "./loading.css";
import Helmet from "react-helmet";

const LdComponent = () => {
  return (
    <div>
      <Helmet>
        <title>loading demo</title>
      </Helmet>
      <div className="header">
        <h1>8种loading样式</h1>
      </div>
      <div className="loading-wrap">
        <Loading type={"Oval"} />
        <Loading type={"LittleCircle"} />
        <Loading type={"HalfCircle"} />
        <Loading type={"Audio"} />
        <Loading type={"Rain"} />
        <Loading type={"Stretch"} />
        <Loading type={"Flicker"} />
        <Loading type={"StretchFlicker"} />
      </div>
      <div className="footer">
        <a href="https://github.com/buzuosheng/my-react-loading">源码</a>
      </div>
    </div>
  );
};

export default LdComponent;
