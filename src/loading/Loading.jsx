import { Loading } from "@buzuosheng/loading";
import Helmet from "react-helmet";

const LdComponent = () => {
  return (
    <div className="m-8 p-16 border rounded-xl bg-gray-50">
      <Helmet>
        <title>loading demo</title>
      </Helmet>
      <div className="text-3xl text-center text-green-400">
        8种loading样式
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-8">
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type="Oval" color="#1890ff" hegiht={40} width={40} />
        </div>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'LittleCircle'} />
        </div>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'HalfCircle'} />
        </div>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'Audio'} />
        </div>
        <dvi className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'Rain'} />
        </dvi>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'Stretch'} />
        </div>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'Flicker'} />
        </div>
        <div className="w-52 mb-4 mr-4 p-4 flex justify-center items-center">
          <Loading type={'StretchFlicker'} />
        </div>
      </div>
      <div className="text-center text-2xl mt-8">
        Created by
        <a href="https://github.com/buzuosheng/my-react-loading">
          <span className="text-green-400 hover:text-green-500"> buzusheng</span>
        </a>
      </div>
    </div>
  )
};

export default LdComponent;
