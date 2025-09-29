import problem from '@/assets/project/troubleshooting/kuphilWeb/problem.png';
import solution1 from '@/assets/project/troubleshooting/kuphilWeb/solution1.png';
import solution2 from '@/assets/project/troubleshooting/kuphilWeb/solution2.png';

interface KuphilWebProps {
  openedContent: boolean;
  handleOpen: () => void;
}
const KuphilWeb = ({ openedContent, handleOpen }: KuphilWebProps) => {
  return (
    <div className="w-full mt-20 text-start rounded-10 overflow-hidden">
      <div
        onClick={handleOpen}
        className="bg-main-400 p-10 flex items-center gap-10 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 stroke-black"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {openedContent ? (
            <path d="M18 15l-6-6-6 6" />
          ) : (
            <path d="M6 9l6 6 6-6" />
          )}
        </svg>
        <p>트러블 슈팅</p>
      </div>
      <div
        className={`${openedContent && 'px-15 py-10 bg-main-300 rounded-b-10'}`}
      >
        {openedContent && <TroubleShooting />}
      </div>
    </div>
  );
};

const TroubleShooting = () => {
  return (
    <div className="leading-28">
      <div>
        <p className="font-bold mt-10">1. 이미지 로딩 시간 문제</p>
        <p>
          ‘사용자를 위한 즐길 거리’를 위한 콘텐츠인 ‘클래식 이상형 월드컵’은 두
          개의 선택지 중 하나를 골라 최종 1등을 뽑는 식으로 진행됩니다. 최대
          64강으로 이루어지며, 모든 선택지는 ‘위키피디아’에서 불러오는 이미지를
          포함합니다.
        </p>
        <p>
          배포 이후, 사용자 평가를 진행하면서 이미지가 로드되는 시간이 너무
          길다는 의견을 접수했습니다. 개발 도구를 통해 확인한 결과, 이미지의
          총소요 시간이 최대 2초인 것을 확인했습니다.
        </p>
        <p>
          실제로 페이지 로딩 속도가 3초 이상이면 32퍼센트의 사용자가 떠난다는
          구글 리서치를 통해 봤을 때, 충분히 사용성이 떨어질 수 있는 수치입니다.
        </p>
        <p className="font-bold mt-10">해결</p>
        <p>
          이미지를 로컬에 저장하기도 하고 압축을 하기도 했지만, 크게 개선되지
          않았습니다. 많은 고민 끝에, 이미지를 미리 로드하여 매번 이미지가
          로드되는 시간을 줄이기로 했습니다.
        </p>
        <p>
          이미지 주소를 백엔드에서 받은 직후, 미리 로드하는 과정을 거쳤습니다.
        </p>
        <p>
          하지만 콘텐츠를 진행하면서 로드되는 이미지의 총소요 시간이 1~2밀리초인
          것을 확인했고, 실제로 눈에 띄게 개선되었습니다.
        </p>
        <p>
          추가로 미리 로드하는 소요 시간 자체를 줄일 수 없다고 판단했고, 이에 더
          나은 사용자 경험을 위해 로딩 중임을 알리는 UI를 생성했습니다.
        </p>
        <div>{/* 코드 */}</div>
        <div className="flex justify-center gap-30 gc:flex-nowrap flex-wrap">
          <div className="w-3/5 mt-10">
            <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              (기존 방법의 소요 시간)
            </p>
            <img className="w-full mt-10" src={problem} />
            <p>
              사용자가 진행할 때마다 2개의 이미지가 로드되며, 이미지의 용량이 큰
              경우 최대 2초까지 걸리는 것을 확인했습니다.
            </p>
          </div>
          <div className="w-3/5 mt-10">
            <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              (개선된 방법의 소요 시간)
            </p>
            <img className="w-full mt-10" src={solution1} />
            <p>
              최대 64개의 이미지 주소를 받은 직후 미리 로드됩니다. 외부 이미지가
              처음 로드되는 것이고, 용량도 작지 않기 때문에 이 시간 동안 로딩
              중임을 알리는 UI를 생성하여 더 나은 사용자 경험을 제공합니다.
            </p>
            <img className="w-full mt-10" src={solution2} />
            <p>
              최대 64개의 이미지가 미리 로드되었기 때문에 사용자가 콘텐츠를
              진행할 때마다 2개의 이미지가 1 ~ 2밀리초 동안 로드되는 것을
              확인했습니다.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold mt-10">2. AWS를 이용한 배포의 어려움</p>
        <p>
          AWS의 프리티어를 이용하여 EC2와 RDS를 생성하는 것은 어렵지 않게
          수행했습니다. 또한, 리액트를 사용하지 않은 버전의 웹사이트를 배포할
          때는 Node.js에 프론트엔드를 담아서 서버를 가동했습니다.
        </p>
        <p>
          그러나 NGINX를 통해 리액트를 실행시키는 과정에서 많이 헤맸습니다.
          NGINX의 기본 세팅을 진행하여 리액트를 실행시켰을 때 500 에러가
          출력되어 접근 권한을 변경해서 해결했습니다. 또한, 백엔드와의 API
          통신을 위해 추가 세팅을 진행하면서 계속 502 에러나 Network Error가
          출력되어 proxy_pass의 설정을 변경해서 해결했습니다.
        </p>
        <p>
          배포에 성공하기까지 많은 오류를 만났지만, 이 과정을 통해 AWS에서
          Express 서버와 React를 동시에 실행시키는 것을 배웠습니다.
        </p>
      </div>
    </div>
  );
};

export default KuphilWeb;
