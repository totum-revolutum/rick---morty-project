import { scrollToTop } from '@/helpers/scrollToTop';


export const Footer = () => {
  return (
    <footer>
        <div onClick={scrollToTop}>
          <div>back to top</div>
        </div>
    </footer>
  );
}