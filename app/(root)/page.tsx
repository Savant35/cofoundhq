import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your startup, <br />
        Connect With Entreprenuerus
      </h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      <SearchForm />
    </section>
    </>
      
  );
}
