import Welcomemessage from "./comp/mainhead";
import Button from "./comp/button";
import Link from "next/link";
import { MouseEvent } from "react";

// BeforeInstallPromptEvent 타입 정의
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;
  prompt(): Promise<void>;
}

export default function Home() {
  const handleInstallPrompt = (event: BeforeInstallPromptEvent) => {
    event.preventDefault();
    const installPrompt = event;
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('사용자가 설치를 수락했습니다.');
      } else {
        console.log('사용자가 설치를 거부했습니다.');
      }
      // 설치 팝업을 다시 트리거하기 위한 로직을 추가할 수 있음
    });
  };

  const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // Do something when the button is clicked
  };

  return (
    <main className="bg-green-800 w-full h-full flex items-center justify-center ">
      <div className="outline-1 w-11/12 outline h-2/5 rounded-md bg-gray-200 flex justify-center items-center flex-col">
        <Welcomemessage />
        <Link href="/main">
          <a onClick={onClickHandler} className="w-11/12 h-1/6">
            <Button value='start' />
          </a>
        </Link>
      </div>
    </main>
  );
}
