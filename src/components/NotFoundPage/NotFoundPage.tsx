import Image from 'next/image'

export const NotFoundPage = () => {
  return (
    <>
      <Image src="/img/notFound.svg" alt="Page not found" width={800} height={500} />
    </>
  );
};
