import { useState } from 'react';
import "./Testamonails.css";

function Testamonails() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
        {
            quote: "Absolutely fantastic! Worth every penny.",
            author: "Emily Davis",
        },
        {
            quote: "Reliable, fast, and easy to use. I love it!",
            author: "Michael Lee",
        },
        {
            quote: "Five stars! Will buy again for sure.",
            author: "Sarah Williams",
        },
        {
            quote: "Customer support was top-notch. Solved my issue in minutes.",
            author: "David Brown",
        },
        {
            quote: "I can't believe I didn't start using this earlier.",
            author: "Laura Wilson",
        },
        {
            quote: "It does exactly what it promises — and more!",
            author: "Chris Martinez",
        },
        {
            quote: "The design is sleek and the functionality is flawless.",
            author: "Amy Taylor",
        },
        {
            quote: "A must-have tool for anyone serious about productivity.",
            author: "Daniel Anderson",
        },
        {
            quote: "Affordable, powerful, and user-friendly. Great combo!",
            author: "Olivia Thomas",
        },
        {
            quote: "I recommend this to all my colleagues now. Game changer!",
            author: "Mark Robinson",
        },
        {
            quote: "Exceeded all my expectations. Truly amazing!",
            author: "Natalie Moore",
        },
        {
            quote: "Perfect for both beginners and pros. Super intuitive!",
            author: "Kevin Harris",
        },
    ];


    function handlePrev(){
        setCurrentIndex(pr => (pr + testimonials.length - 1) % testimonials.length);
    };

    function handleNext(){
        setCurrentIndex(pr => (pr + 1) % testimonials.length);
    }

  return (
    <>
    <div className='testimonials'>
        <div className='testimonials-quote'>
            {testimonials[currentIndex].quote}
        </div>

        <div className='testimonials-author'>
            - {testimonials[currentIndex].author}
        </div>

        <div className='testimonials-nav'>
            <button className=' border-2 p-2 rounded-xl' onClick={handlePrev}>Prev</button>
            <button className=' border-2 p-2 rounded-xl' onClick={handleNext}>Next</button>
        </div>

    </div>
    </>
  );
};

export default Testamonails;