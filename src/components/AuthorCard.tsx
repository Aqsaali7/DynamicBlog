import React from "react";
import Image from "next/image";

export default function AuthorCard() {
    return(
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
<div className="flex items-center animate-fadeIn">
<Image
width={64}
height={64}
 className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red"
 src="../images/blog8.jpg"
 alt=""/>
 

 <div>
<h3 className="text-xl font-extrabold font-sans">Aqsa Ali</h3>


 </div>
</div>



<p className="mt-4 text-black leading-relaxed">
Fashion is not just about clothes; it&apos;s a reflection of individuality creativity and passion &rsquo; The love for fashion transcends mere trends and instead becomes an expression of one&apos;s personality mood and vision &rsquo; For many fashion is a form of art that enables them to experiment with colors textures and shapes crafting a unique identity through their wardrobe choices &rsquo; The passion for fashion is a deep-rooted drive that pushes individuals to explore innovate and inspire &rsquo; It encourages confidence and allows people to communicate without words &rsquo; From the first spark of creativity to the final ensemble fashion passion is an ongoing journey of self-discovery pushing boundaries and challenging norms making it a powerful tool for self-expression&rsquo;
</p>

<div className="mt-4 flex space-x-3"> 
    <a
    href="#"
    className="px-4 py-2 text-white bg-emerald-900 rounded-md hover:bg-green-800 transition duration-300">
Twitter
    </a>

    <a
    href="#"
    className="px-4 py-2 text-white bg-emerald-900 rounded-md hover:bg-green-800 transition duration-300">
Instagram
    </a>

    <a
    href="#"
    className="px-4 py-2 text-white  bg-emerald-900 rounded-md hover:bg-green-800 transition duration-300">
Facebook
    </a>


</div>








    </div>
    )
}
