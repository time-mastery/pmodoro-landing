import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src="/images/pmodoro-transparent.png"
        alt="pmodoro logo"
        width={40}
        height={40}
      />
    </div>
  );
}

export default Logo;
