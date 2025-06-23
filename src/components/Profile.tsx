import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

const Profile = () => {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the auth"
        width={165}
        height={165}
        priority // 넥스트야 이거 제일 먼저 받아와줘.
      />
      <h2 className="text-3xl font-bold mt-2">{"블로그 연습"}</h2>
      <h3 className="text-xl font-semibold ">프론트엔드</h3>
      <p>어떻게 살아야 할 것인가.</p>
      <Link
        className="bg-green-300 font-bold rounded-xl py-1 px-4 mt-2"
        href="/contact"
      >
        <button>Contact</button>
      </Link>
    </section>
  );
};

export default Profile;
