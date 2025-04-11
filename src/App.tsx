import { useMemo, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { useTheme } from './hooks/useTheme';
import Projects from './components/projects/Projects';
// import { useInView } from 'react-intersection-observer';
import Contact from './components/contact/\bContact';
import Footer from './components/footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [activeId, setActiveId] = useState<number>(0);
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const projectsRef = useRef<HTMLDivElement>(null);
  // const contactRef = useRef<HTMLDivElement>(null);
  // const { ref: aboutInViewRef, inView: isAboutInView } = useInView({
  //   threshold: 0,
  //   rootMargin: '-50%',
  // });
  // const { ref: projectsInViewRef, inView: isProjectsInView } = useInView({
  //   threshold: 0,
  //   rootMargin: '-50%',
  // });
  // const { ref: contactInViewRef, inView: isContactInView } = useInView({
  //   threshold: 0,
  //   rootMargin: '-50%',
  // });

  //////

  // const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // const scrollTimeoutRef = useRef<number | null>(null);
  // const scrollToSection = (id: number) => {
  //   const headerHeight =
  //     parseInt(
  //       getComputedStyle(document.documentElement).getPropertyValue(
  //         '--header-height',
  //       ),
  //       10,
  //     ) || 0;

  //   let targetRef: Ref<HTMLDivElement> = null;

  //   if (id === 0) {
  //     targetRef = aboutRef;
  //   } else if (id === 1) {
  //     targetRef = projectsRef;
  //   } else if (id === 2) {
  //     targetRef = contactRef;
  //   }

  //   if (targetRef?.current) {
  //     const y = Math.max(targetRef.current.offsetTop - headerHeight, 0);
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isScrolling) {
  //       return;
  //     }
  //     setIsScrolling(true);
  //     if (scrollTimeoutRef.current !== null) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //     scrollTimeoutRef.current = window.setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 100);
  //   };
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isScrolling) return;
  //   if (isAboutInView) {
  //     setActiveId(0);
  //   } else if (isProjectsInView) {
  //     setActiveId(1);
  //   } else if (isContactInView) {
  //     setActiveId(2);
  //   }
  // }, [isAboutInView, isProjectsInView, isContactInView, isScrolling]);

  //////

  // const targetYRef = useRef<number | null>(null);
  // const scrollToSection = (id: number) => {
  //   const headerHeight =
  //     parseInt(
  //       getComputedStyle(document.documentElement).getPropertyValue(
  //         '--header-height',
  //       ),
  //       10,
  //     ) || 0;

  //   let targetRef: Ref<HTMLDivElement> = null;

  //   if (id === 0) {
  //     targetRef = aboutRef;
  //     setActiveId(id);
  //   } else if (id === 1) {
  //     targetRef = projectsRef;
  //     setActiveId(id);
  //   } else if (id === 2) {
  //     targetRef = contactRef;
  //     setActiveId(id);
  //   }

  //   if (targetRef?.current) {
  //     const y = Math.max(targetRef.current.offsetTop - headerHeight, 0);
  //     targetYRef.current = y;
  //     setIsScrolling(true);
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // };

  // useEffect(() => {
  //   if (isScrolling) return;
  //   if (isAboutInView) {
  //     setActiveId(0);
  //   } else if (isProjectsInView) {
  //     setActiveId(1);
  //   } else if (isContactInView) {
  //     setActiveId(2);
  //   }
  // }, [isAboutInView, isProjectsInView, isContactInView, isScrolling]);

  // useEffect(() => {
  //   if (!isScrolling) return;
  //   const scrollEvent = () => {
  //     if (targetYRef.current === window.scrollY) {
  //       setIsScrolling(false);
  //     }
  //     const documentHeight = document.documentElement.scrollHeight;
  //     console.log(documentHeight);
  //   };

  //   document.addEventListener('scroll', scrollEvent);

  //   return () => document.removeEventListener('scroll', scrollEvent);
  // }, [isScrolling]);

  //////

  // const scrollTimeoutRef = useRef<number | null>(null);
  // const headerHeight =
  //   parseInt(
  //     getComputedStyle(document.documentElement).getPropertyValue(
  //       '--header-height',
  //     ),
  //     10,
  //   ) || 0;
  // const scrollToSection = (id: number) => {
  //   let targetRef: Ref<HTMLDivElement> = null;

  //   if (id === 0) {
  //     targetRef = aboutRef;
  //   } else if (id === 1) {
  //     targetRef = projectsRef;
  //   } else if (id === 2) {
  //     targetRef = contactRef;
  //   }

  //   if (targetRef?.current) {
  //     // 현재 스크롤 위치와 목표 위치 간의 거리 계산
  //     const currentPosition = window.scrollY;
  //     const targetPosition = targetRef.current.offsetTop - headerHeight;
  //     const scrollDistance = Math.abs(currentPosition - targetPosition);

  //     // 거리에 비례하여 시간 계산
  //     const timePerPixel = 0.23; // 픽셀당 추가 시간 (ms)
  //     const scrollTime = scrollDistance * timePerPixel;
  //     setIsScrolling(true);

  //     const y = targetPosition;
  //     window.scrollTo({ top: y, behavior: 'smooth' });

  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }

  //     scrollTimeoutRef.current = window.setTimeout(() => {
  //       setActiveId(id);
  //       setIsScrolling(false);
  //     }, scrollTime);
  //   }
  // };

  // useEffect(() => {
  //   if (isScrolling) return;
  //   if (isAboutInView) {
  //     setActiveId(0);
  //   }
  //   if (isProjectsInView) {
  //     setActiveId(1);
  //   }
  //   if (isContactInView) {
  //     setActiveId(2);
  //   }
  // }, [isAboutInView, isProjectsInView, isContactInView, isScrolling]);

  // useTheme();
  // return (
  //   <div>
  //     <Header scrollToSection={scrollToSection} activeId={activeId} />
  //     <Main
  //       ref={(el) => {
  //         aboutRef.current = el;
  //         aboutInViewRef(el);
  //       }}
  //     />
  //     <Projects
  //       ref={(el) => {
  //         projectsRef.current = el;
  //         projectsInViewRef(el);
  //       }}
  //     />
  //     <Contact
  //       ref={(el) => {
  //         contactRef.current = el;
  //         contactInViewRef(el);
  //       }}
  //     />
  //     <Footer />
  //   </div>
  // );

  const ORDER = useMemo(() => [Main, Projects, Contact], []);
  const sortedOrder = useMemo(() => {
    const list = [...ORDER];
    const selected = list.splice(Math.max(activeId - 1, 0), 1);

    return [selected[0], ...list];
  }, [ORDER, activeId]);
  useTheme();
  return (
    <div>
      <Header activeId={activeId} setActiveId={setActiveId} />
      <div className="w-full h-(--header-height)"></div>
      <AnimatePresence mode="popLayout">
        {sortedOrder.map((Component, i) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            key={Component.displayName}
          >
            <div
              className={
                activeId !== 0 && i > 0 ? 'opacity-20 pointer-events-none' : ''
              }
            >
              {<Component />}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
