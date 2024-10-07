import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Image
        src='/img/logo.svg'
        alt='logo'
        width={60}
        height={60}
      />
    </>
  );
};
