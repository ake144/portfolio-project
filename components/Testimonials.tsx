'use client'
import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface SlideProps {}

const Testimonials: React.FC<SlideProps> = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      

      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
            slides: {
                origin: 'auto',
                perView: 1.5,
                spacing: 32,
              },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    if (keenSliderPrevious && keenSliderNext && keenSliderPreviousDesktop && keenSliderNextDesktop) {
      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
      keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
      keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

      // Cleanup function
      return () => {
        keenSlider.destroy(); // Cleanup the slider when component unmounts
        keenSliderPrevious.removeEventListener('click', () => keenSlider.prev());
        keenSliderNext.removeEventListener('click', () => keenSlider.next());
        keenSliderPreviousDesktop.removeEventListener('click', () => keenSlider.prev());
        keenSliderNextDesktop.removeEventListener('click', () => keenSlider.next());
      };
    }
  }, []);


    return (
        <section className=" my-5 p-4" id='testimonials'>
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight black:text-white  sm:text-4xl">
                             What do people say about me?
                        </h2>

                        <p className="mt-4 dark:text-white text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
                            harum porro optio fugit a culpa sunt id!
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                             
                        <Pagination>
                            <PaginationContent className={'cursor-pointer'}>
                                <PaginationItem >
                                <PaginationPrevious   id="keen-slider-previous-desktop"/>
                                </PaginationItem>
                
                                <PaginationItem>
                                <PaginationNext  id="keen-slider-next-desktop"/>
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div id="keen-slider" className="keen-slider">
                            <div className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between  p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-green-500">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

                                            <p className="mt-4 leading-relaxed dark:text-white text-gray-700">
                                                No, Rose, they are not breathing. And they have no arms or legs … Where are
                                                they? You know what? If we come across somebody with no arms or legs, do we
                                                bother resuscitating them? I mean, what quality of life do we have there?
                                            </p>
                                        </div>
                                    </div>

                                    <footer className="mt-4 text-sm font-medium dark:text-white text-gray-700 sm:mt-6">
                                        &mdash; Michael Scott
                                    </footer>
                                </blockquote>
                            </div>

                            {[...Array(2)].map((_, slideIndex) => (
                                <div key={slideIndex} className="keen-slider__slide">
                                    <blockquote className="flex h-full flex-col justify-between  p-6 shadow-sm sm:p-8 lg:p-12">
                                        <div>
                                            <div className="flex gap-0.5 text-green-500">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className="h-5 w-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

                                                <p className="mt-4 leading-relaxed dark:text-white text-gray-700">
                                                    No, Rose, they are not breathing. And they have no arms or legs … Where
                                                    are they? You know what? If we come across somebody with no arms or legs,
                                                    do we bother resuscitating them? I mean, what quality of life do we have
                                                    there?
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-4 text-sm font-medium dark:text-white text-gray-700 sm:mt-6">
                                            &mdash; Michael Scott
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 lg:hidden">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                id="keen-slider-next"
                                className="rounded-full border border-rose-600 p-3 dark:text-white transition hover:bg-rose-600 dark:bg-slate-600 hover:text-white"
                            >
                                <svg
                                    className="size-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
