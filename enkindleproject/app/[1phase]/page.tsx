'use client'

import { useEffect, useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";

export default function Phase1() {
  const [effectdata, setEffectdata] = useState([]);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // 슬라이딩 중 상태 추가
  const router =useRouter();
  // const searchParams = useSearchParams()

  useEffect(() => {
    fetch('/study.json')
      .then(response => response.json())
      .then(data => {
        setEffectdata(data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 동안 오류가 발생했습니다:', error);
      });
  }, []);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
    setStartX(event.touches[0].clientX);
    setIsSliding(false); // 터치 시작 시, 슬라이딩 중 상태를 false로 설정
  };

  const handleTouchMoveY = (event) => {
    if (!isSliding) { // 슬라이딩 중이 아닐 때만 실행
      const deltaY = event.touches[0].clientY - startY;
      if (deltaY < -50 || deltaY > 50) {
        setIsSliding(true); // 슬라이드를 인식하면 슬라이딩 중으로 설정
        setCurrentContentIndex((prevIndex) => {
          let nextIndex = prevIndex + (deltaY < -50 ? 1 : -1);
          nextIndex = Math.max(0, Math.min(nextIndex, effectdata.length - 1));
          return nextIndex;
        });
      }
    }
  };
  
  const handleTouchMoveX = (event) => {
    if (!isSliding) {
      const deltaX = event.touches[0].clientX - startX;
      console.log(deltaX)
      if(deltaX < -70) {
        setIsSliding(true);
        router.push('/');
      }
    }
  }

  const handleTouchEnd = () => {
    setIsSliding(false); // 터치가 끝나면 슬라이딩 중 상태를 false로 재설정
  };

  return (
    <main 
      className="outline outline-2 flex justify-center items-center w-11/12 h-2/3 rounded-md bg-slate-200"
      onTouchStart={handleTouchStart}
      onTouchMove={(event) => {
        handleTouchMoveY(event);
        handleTouchMoveX(event);
      }}
      onTouchEnd={handleTouchEnd} // 터치 엔드 이벤트 핸들러 추가
    >
      <div>
        <p>{effectdata.length > 0 ? effectdata[currentContentIndex].content : ''}</p>
        <p>- {effectdata.length > 0 ? effectdata[currentContentIndex].author : ''}</p>
      </div>
    </main>
  );
}
