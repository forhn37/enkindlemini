'use client'
import { useEffect, useState } from "react";

export default function Phase1() {
  const [contentIndex, setContentIndex] = useState(0);
  const [effectdata, setEffectdata] = useState([]);
  const [contents, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // study.json 파일을 가져오기 위해 fetch를 사용합니다.
    fetch('/study.json')
      .then(response => response.json()) // JSON 형태로 변환합니다.
      .then(data => {
        // 가져온 JSON 데이터를 contents 상태에 설정합니다.
        setEffectdata(data);
        // 배열의 첫 번째 요소의 content와 author를 설정합니다.
        setContent(data[0].content);
        setAuthor(data[0].author);
      })
      .catch(error => {
        console.error('데이터를 불러오는 동안 오류가 발생했습니다:', error);
      });
  }, []);


  const goToNextPage = () => {
    // 다음 배열 요소의 인덱스를 계산합니다.
    const nextIndex = (contentIndex + 1) % contents.length;
    // 다음 배열 요소의 content와 author를 설정합니다.
    setContent(contents[nextIndex].content);
    setAuthor(contents[nextIndex].author);
    // 다음 배열 요소의 인덱스를 상태에 업데이트합니다.
    setContentIndex(nextIndex);
  };

  return (
    <main className="outline outline-2 flex justify-center items-center w-11/12 h-2/3 rounded-md bg-slate-200 ">
      {contents}
      <br/>
      {author}
    </main>
  );
}
