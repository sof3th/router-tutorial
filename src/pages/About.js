import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  console.log(detail);
  console.log(mode);
  const onToggleDetail = () => {
    console.log(detail);
    console.log(typeof detail);
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  const onIncreaseMode = () => {
    console.log(mode);
    console.log(typeof mode);
    // mode === null 를 mode === "null" 로 비교.
    const nextMode = mode === 'null' ? 1 : parseInt(mode) + 1;
    console.log(typeof nextMode);
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
