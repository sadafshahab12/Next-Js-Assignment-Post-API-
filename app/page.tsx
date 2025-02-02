import { auth } from "@/auth";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import { SessionWrapper } from "./components/SessionWrapper";

export default async function Home() {
  const session = await auth();
  const isAuthentication = !!session?.user;
  return (
    <>
      <SessionWrapper>
        <Hero />
        {isAuthentication ? <Posts /> : ""}
      </SessionWrapper>
    </>
  );
}
