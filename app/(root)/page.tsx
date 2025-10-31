import Image from "next/image";
import "../globals.css";
import SearchForm from "../../components/ui/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({searchParams}: {searchParams: {query?: string}}) {
  const query = (await searchParams).query;
  const posts=[
    {
      _createdAt:new Date(),
      views:55,
      author:{_id:1,name:"Manish"},
      _id:1,
      description:"This is a sample description this my first next js project and i want that i learn more and more about next js",
      image:"https://plus.unsplash.com/premium_photo-1760972190929-3974abab84f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=1000",
      category:'robots',
      title:'we Robots'
    }
  ]
  return (
    <>
    <section className="pink_container   pattern">
    <h1 className="heading" ><b>PITCH YOUR STARTUP, <br/> CONNECT WITH ENTREPRENEURS</b></h1>
    <p className="sub-heading  !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition</p>
    <SearchForm query={query}/>
    </section>

    <section className="section_container">
       <p className="text-30-semibold text-3xl">
        {query ? `Search Results for "${query}"` : 'All Startups'}
       </p>
       <ul className="mt-7 card_grid">
         {posts ?. length >0 ? (
          posts.map((post:StartupCardType)=>(
            <StartupCard key={post?._id} post={post}/>
          ))
         ):
         <p className="no-results">No startup found</p>}
       </ul>
    </section>
    </>
  );
}
