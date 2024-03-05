import Welcomemessage from "./comp/mainhead";
import Button from "./comp/button";
import Link from "next/link";

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

  // 사용자에게 앱 설치를 물어보는 조건을 추가
  if(window.matchMedia('(display-mode: standalone)').matches) {
    // PWA가 standalone 모드에서 실행 중인지 확인
    console.log('PWA가 standalone 모드에서 실행 중입니다.');
  } else {
    // PWA가 standalone 모드에서 실행 중이 아닌 경우
    window.addEventListener('beforeinstallprompt', handleInstallPrompt as EventListener);

    console.log('설치 팝업을 트리거합니다.');
  }

  return (
    <main className="bg-green-800 w-full h-full flex items-center justify-center ">
      <div className="outline-1 w-11/12 outline h-2/5 rounded-md bg-gray-200 flex justify-center items-center flex-col">
        <Welcomemessage />
        <Link href="/main" className="w-11/12 h-1/6">
            <Button value='start' />
        </Link>
      </div>
    </main>
  );
}
