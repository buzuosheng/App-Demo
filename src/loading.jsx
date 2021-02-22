import Loading from "@buzuosheng/loading";
import "./loading.css";

const LdComponent = () => {
  return (
    <div>
      <div className="header">
        <h1>8种loading样式</h1>
      </div>
      <div className="loading-wrap">
        <Loading className="loading" type={1} />
        <Loading className="loading" type={2} />
        <Loading className="loading" type={3} />
        <Loading className="loading" type={4} />
        <Loading className="loading" type={5} />
        <Loading className="loading" type={6} />
        <Loading className="loading" type={7} />
        <Loading className="loading" type={8} />
      </div>
      <div className="footer">
        <a href="https://github.com/buzuosheng/my-react-loading-demo">源码</a>
      </div>
    </div>
  );
};

export default LdComponent;
