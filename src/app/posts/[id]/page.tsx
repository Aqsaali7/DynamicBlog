"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Commentsection from "@/components/Commentsection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";
import Image from "next/image";

// Define the Post type with explicit field names (note the capitalization of 'Image')
interface Post {
    id: string;
    title: string;
    description: string;
    Image: string; // This matches the property name in your posts array
}

// Sample posts array (you might fetch this data in a real app)
const posts: Post[] = [
    {
        id: '1',
        title: 'Barrel Leg Jeans & How To Wear Them',
        description: "I’m not cool when it comes to fashion. I rarely take risks with my wardrobe and I tend to have the same outfit formula time and time again. But there was one trend I was kind of excited about: barrel jeans.",
        Image: "/images/bog2.jpeg",
    },
    {
        id: '2',
        title: 'How to Style a Barn Jacket',
        description: "The barn jacket has taken the fashion world by storm this season, and for good reason. They are incredibly versatile and are a great transitional piece that provides extra warmth while still being stylish.",
        Image: "/images/blog3.jpg",
    },
    {
        id: '3',
        title: 'Summer Pieces to Transition to Fall',
        description: "Summer is coming to an end But temperatures are still warm and summer will be sticking around for a few more weeks. These are items that are lightweight and breathable so they can be worn now.",
        Image: "/images/blog4.png",
    },
    {
        id: '4',
        title: 'U Beauty Review',
        description: "I was a little hesitant to try it because of the price but when the brand reached out to see if I’d like to try a few products, it would be the perfect opportunity! U Beauty sent me two products to try and ahh! ILOVEIT",
        Image: "/images/blog5.jpeg",
    },
    {
        id: '5',
        title: 'Shoes to Wear Walking Around NYC',
        description: "New Yorkers walk a lot and while a pair of pretty pumps are the perfect finishing touch to your outfit, but they’re not practical for the amount of walking you’ll be doing, if you invest in good, comfortable shoes, your feet will thank you.",
        Image: "/images/blog6.jpg",
    },
    {
        id: '6',
        title: 'Summer Vacation Packing List',
        description: "There is nothing quite like a vacation in the summer. The sun is out, it’s finally warm enough to wear all of your favorite shorts and dresses. Local beach for the weekend or there are so many opportunities to make memories.",
        Image: "/images/blog7.png",
    },
];

export default function Post() {
    // Explicitly define the type for the `id` parameter
    const { id } = useParams<{ id: string }>();

    // Set the `post` state to either a `Post` or `null`
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (id) {
            // Find the post based on the `id`
            const foundPost = posts.find((p) => p.id === id);
            // Set the `post` state, or `null` if not found
            setPost(foundPost || null);
        }
    }, [id]);

    if (!post) {
        return <h2>Post not found</h2>;
    }

    // Function to render paragraphs (if description contains line breaks)
    const renderParagraphs = (description: string) => {
        return description.split("\n").map((para, index) => (
            <p key={index} className="mt-4 text-justify">
                {para.trim()}
            </p>
        ));
    };

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="md:text-4xl text-3xl font-bold text-emerald-800 text-center">
                {post.title}
            </h1>

            {post.Image && (
                <Image
                    src={post.Image} // Use Image (capital I) based on the data structure
                    alt={post.title}
                    className="w-full h-auto rounded-md mt-4"
                />
            )}

            <div className="mt-6 text-lg text-slate-700">
                {renderParagraphs(post.description)}
            </div>

            <Commentsection postId={post.id} />
            <AuthorCard />
            <Footer />
        </div>
    );
}
