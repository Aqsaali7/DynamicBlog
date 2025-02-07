import React from "react"; 
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";

interface BlogCardProps {
    post: { 
        id: string;
        title: string;
        description: string;
        date: string; 
        ImageUrl: string;
    };
    isDarkbackGround: boolean;
}

export default function BlogCard({ post , isDarkbackGround }: BlogCardProps) {
    return (
        <Card className={`p-4 ${isDarkbackGround ? "bg-slate-800 text-white" : "text-slate-800"} 
            rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            
            <Image
            width={100}
            height={100}
                src={post.ImageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />

            <CardTitle className="text-xl font-normal mt-4 text-center">
                {post.title}
            </CardTitle>
            
            <CardContent className="text-center">
                <p>{post.description}</p>
            </CardContent>

            <div className="flex flex-col items-center mt-4">
                <p
                    className={`text-sm mb-4 ${isDarkbackGround ? "text-slate-400" : "text-slate-600"}`}>
                    Published on: {new Date(post.date).toLocaleDateString()}
                </p>
                <a
                    href={`/posts/${post.id}`}
                    className={`w-full px-6 text-white bg-emerald-900 rounded hover:bg-green-700 ${isDarkbackGround ? 'bg-black hover:bg-green-700' : 'bg-black hover:bg-green-700'}`}>
                    Read More
                </a>
            </div>
        </Card>
    );
}
