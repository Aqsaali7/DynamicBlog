import React from "react";
import Image from "next/image";

export default function Feature() {
    return (
        <div>
            <section className="py-8 bg-neutral-100 mb-40">
                <h2 className=" ml-12 mt-13 font-poppins text-center text-2xl font-bold md:text-4xl lg:text-left animate-fade-in-up transition-all duration-ease-in-out
                transform hover:translate-y-[-5px] hover:text-black text-emerald-900">
                    ITS CAUSUAL: &quot; A PLACE WHERE STYLE MEETS ALL THINGS NYC &quot;
                </h2>
                <p className=" font-sans text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 "></p>

                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-sans text-center my-8 text-emerald-900"> 
                        FASHION 
                    </h1>

                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100"> 
                        {[
                            <Image
                                key="purse"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/mini-purse.webp"
                                alt="purse"
                            />,
                            <Image
                                key="jacket"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/jacket-1.webp"
                                alt="jacket"
                            />,
                            <Image
                                key="accessories"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/photo-1.jpg"
                                alt="accessories"
                            />,
                            <Image
                                key="women"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/women-1.jpg"
                                alt="women"
                            />,
                            <Image
                                key="makeup"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/images-21.jpg"
                                alt="makeup"
                            />,
                            <Image
                                key="hijab"
                                width={200}
                                height={250}
                                className="w-[250px] h-[250px] rounded"
                                src="../images/hijab1.jpg"
                                alt="hijab"
                            />
                        ].map((category, index) => (
                            <div key={index}
                                 className="group w-[200px] h-[250px] rounded-lg shadow-lg hover:bg-sk-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                                <p className="text-center text-lg font-semibold">{category.props.alt}</p>
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="flex items-center text-sm md:text-base text-black font-serif mb-6 px-4 animate-fade-in-down delay-100 mt-10 ml-[200px] mr-[200px]">
                    &quot;Fashion is a powerful form of self-expression that goes beyond just clothing—it&apos;s a way to showcase individuality creativity and culture &rsquo; From iconic designers to streetwear trend  fashion is constantly evolving shaped by societal changes technological advancements and global influences &rsquo; Whether through high-end couture or casual everyday wear fashion allows people to communicate their personality and values &rsquo; As sustainability becomes increasingly important many brands are turning to eco-friendly practices creating a positive impact on both the industry and the environment&rsquo; Ultimately, fashion is more than trends—it &apos:s an art form that tells a story about who we are and how we see the world &quot;
                </p>
            </section>
        </div>
    );
}
