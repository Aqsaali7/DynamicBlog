import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {
    const posts = [
        {
            id: '1',
            title: 'Barrel Leg Jeans & How To Wear Them',
            description: "I’m not cool when it comes to fashion. I rarely take risks with my wardrobe and I tend to have the same outfit formula time and time again. But there was one trend I was kind of excited about: barrel jeans.",
            date: "2024-11-23",
            ImageUrl: "../images/bog2.jpeg", // Fixed the case here
        },
        {
            id: '2', // Unique id
            title: 'How to Style a Barn Jacket',
            description: "The barn jacket has taken the fashion world by storm this season, and for good reason. They are incredibly versatile and are a great transitional piece that provides extra warmth while still being stylish.",
            date: "2024-11-23",
            ImageUrl: "../images/blog3.jpg", // Fixed the case here
        },
        {
            id: '3', // Unique id
            title: 'Summer Pieces to Transition to Fall',
            description: "Summer is coming to an end But temperatures are still warm and summer will be sticking around for a few more weeks. These are items that are lightweight and breathable so they can be worn now. ",
            date: "2024-11-23",
            ImageUrl: "../images/blog4.png", // Fixed the case here
        },
        {
            id: '4', // Unique id
            title: 'U Beauty Review',
            description: " I was a little hesitant to try it because of the price but when the brand reached out to see if I’d like to try a few products, it would be the perfect opportunity! U Beauty sent me two products to try and ahh! ILOVEIT",
            date: "2024-11-23",
            ImageUrl: "../images/blog5.jpeg", // Fixed the case here
        },
        {
            id: '5', // Unique id
            title: 'Shoes to Wear Walking Around NYC',
            description: " New Yorkers walk a lot and while a pair of pretty pumps are the perfect finishing touch to your outfit, but they’re not practical for the amount of walking you’ll be doing,if you invest in good, comfortable shoes, your feet will thank you. ",
            date: "2024-11-23",
            ImageUrl: "../images/blog6.jpg", // Fixed the case here
        },
        {
            id: '6', // Unique id
            title: 'Summer Vacation Packing List',
            description: "There is nothing quite like a vacation in the summer. The sun is out, it’s finally warm enough to wear all of your favorite shorts and dresses.  local beach for the weekend or  there are so many opportunities to make memories. ",
            date: "2024-11-23",
            ImageUrl: "../images/blog7.png", // Fixed the case here
        },
    ];

    return (
        <div className="my-8">
            <h1 className="text-3xl font-poppins text-center my-8 text-green-900 animate-color">
               CURRENTLY LOVING 
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className="blog-card">
                            <BlogCard post={post} isDarkbackGround={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
