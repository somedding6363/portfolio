import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SooolProps {
  openedContent: boolean;
  handleOpen: () => void;
}
const Soool = ({ openedContent, handleOpen }: SooolProps) => {
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
  const codeString = `const mutation = useMutation<
  void,
  Error,
  boolean,
  { previousData?: Wishlist }
>({
  // 서버에 위시리스트 상태 업데이트 요청
  mutationFn: (nextState) => updateWishlist(id, nextState),

  // 낙관적 업데이트 처리
  onMutate: async (nextState): Promise<{ previousData?: Wishlist }> => {
    // 1. 관련 쿼리 취소 → 서버 응답이 도착해서 캐시를 덮어쓰는 상황 방지
    await queryClient.cancelQueries({ queryKey });

    // 2. 현재 데이터 스냅샷 저장 (롤백 대비)
    const previousData = queryClient.getQueryData<Wishlist>(queryKey);

    // 3. 서버 응답을 기다리지 않고, UI에 즉시 반영
    queryClient.setQueryData<Wishlist>(queryKey, {
      isWishlist: nextState,
    });

    // 4. rollback에 쓸 이전 데이터 반환
    return { previousData };
  },

  // 에러 발생 시 롤백
  onError: (_err, _nextState, context) => {
    // 실패했다면 UI 상태를 이전 값으로 되돌림
    if (context?.previousData) {
      queryClient.setQueryData(queryKey, context.previousData);
    }
  },

  // 최종적으로 서버와 동기화
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey });
  },
});
  `;
  return (
    <div className="leading-28">
      <div>
        <p className="font-bold mt-10">1. 좋아요 기능의 UX 개선</p>
        <p>좋아요 기능을 구현할 때 사용자 경험을 향상시키고자 했습니다.</p>
        <p>
          일반적으로 사용자가 데이터를 추가하고 보여주는 것은, 서버에 데이터를
          저장한 후, 응답을 받아서 화면에 보여주게 됩니다.
        </p>
        <p>
          하지만, 좋아요 기능의 경우에는 즉각적인 반응이 필요하다고
          판단했습니다.
        </p>
        <p>
          사용자가 [좋아요 버튼]을 눌렀을 때 서버와 통신이 끝나고 화면에
          표시하게 된다면 통신 시간만큼 딜레이가 생기는 문제가 있었습니다.
        </p>
        <p className="font-bold mt-10">해결</p>
        <p className="font-bold mt-10">[낙관적 업데이트(Optimistic Update)]</p>
        <p>
          처음에는 딜레이만큼 로딩 스피너를 버튼에 추가하는 방식으로 피드백을
          주었습니다. 그러나 스피너는 {`"처리 중"`}임을 알려줄 뿐, 즉각적인
          만족감을 주지 못했습니다.
        </p>
        <p>
          또한, 서버 요청 응답 시간을 줄이는 최적화가 가능하다면 도입하려
          했으나, 네트워크 지연은 사용자가 위치한 환경에 따라 달라지는
          문제이기에 프론트엔드 차원에서 완전히 해결할 수 없었습니다.
        </p>
        <p>
          이후 많은 정보를 보고, 다양한 사이트에서 좋아요 기능이 작동하는 로직을
          보면서 {`"낙관적 업데이트`}의 존재를 알게 되었습니다.
        </p>
        <p>
          낙관적 업데이트는 서버 응답을 기다리지 않고 먼저 UI에 예상 결과를
          반영한 뒤, 실제 서버 응답에 따라 최종 상태를 확정하는 방식입니다.
        </p>
        <p>
          이를 이용하여 사용자가 [좋아요 버튼]을 누르는 순간, UI에 즉시 좋아요
          상태를 업데이트하고, 이후 서버 요청이 실패하면 다시 원래 상태로
          되돌렸습니다.
        </p>
        <p>
          반응 속도가 빠르게 느껴지며, 실패 시에도 롤백과 알림으로 혼란을
          최소화했습니다. 또한 서버 상태와 캐시를 최종 동기화하여 데이터
          정합성을 확보했습니다.
        </p>
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          customStyle={{ fontSize: '12px' }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Soool;
