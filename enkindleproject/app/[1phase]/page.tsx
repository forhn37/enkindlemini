'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface StudyData {
  content: string;
  author: string;
}

export default function Phase1() {
  const [effectdata, setEffectdata] = useState<StudyData[]>([]);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  // const [startX, setStartX] = useState<number>(0);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/study.json')
      .then(response => response.json())
      .then((data: StudyData[]) => {
        setEffectdata(data);
        console.log(data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 동안 오류가 발생했습니다:', error);
      });
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartY(event.touches[0].clientY);
    // setStartX(event.touches[0].clientX);
    setIsSliding(false);
  };

  const handleTouchMoveY = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isSliding) {
      const deltaY = event.touches[0].clientY - startY;
      if (deltaY < -50 || deltaY > 50) {
        setIsSliding(true);
        setCurrentContentIndex((prevIndex) => {
          let nextIndex = prevIndex + (deltaY < -50 ? 1 : -1);
          nextIndex = Math.max(0, Math.min(nextIndex, effectdata.length - 1));
          return nextIndex;
        });
      }
    }
  };
  
  // const handleTouchMoveX = (event: React.TouchEvent<HTMLDivElement>) => {
  //   if (!isSliding) {
  //     const deltaX = event.touches[0].clientX - startX;
  //     if (deltaX < -70 || deltaX > 70) {
  //       setIsSliding(true);
  //       setCurrentContentIndex((prevIndex) => {
  //         let nextIndex = prevIndex + (deltaX < -70 ? 1 : -1);
  //         nextIndex = Math.max(0, Math.min(nextIndex, effectdata.length - 1));
  //         return nextIndex;
  //       });
        
  //       // router.push(`/${currentContentIndex}/${currentContentIndex}`);
  //     }
  //   }
  // };

  const handleTouchEnd = () => {
    setIsSliding(false);
  };

  return (
<main 
  className="outline outline-2 flex justify-center items-center w-11/12 h-2/3 rounded-md bg-slate-200"
  onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => handleTouchStart(event)}
  onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => {
    handleTouchMoveY(event);
    // handleTouchMoveX(event);
  }}
  onTouchEnd={handleTouchEnd}
>
  <div className="m">
    <p>{effectdata.length > 0 ? effectdata[currentContentIndex].content : ''}</p>
    <p>- {effectdata.length > 0 ? effectdata[currentContentIndex].author : ''}</p>
  </div>
</main>

  );
}
