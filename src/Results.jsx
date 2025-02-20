import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Results.css';

import ProductCard from './ProductCard';

function Results() {
    const [data, setData] = useState({ products: [] });
    const [startIndex, setStartIndex] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    useEffect(() => {
        fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
            .then(res => res.json())
            .then(data => {
                setData({ products: data.products })
                let filtered = filterProducts(data.products);
                setFilteredData(filtered)
                console.log(filtered)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, []);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(storedLikes);
    }, []);

    const retakeQuiz = () => {
        localStorage.clear();
    }

    const showNext = () => {
        setStartIndex((prevIndex) => {
            if (prevIndex + 2 >= filteredData.length) {
                return 0;
            } else {
                return prevIndex + 2;
            }
        });
    };

    const getUserAnswers = () => {
        const type = localStorage.getItem('type')?.slice(3);
        const benefit = localStorage.getItem('benefit')?.slice(3);
        const color = localStorage.getItem('color')?.slice(3);
        const frequency = localStorage.getItem('frequency')?.slice(3);
        const trouble = localStorage.getItem('trouble')?.slice(3);
        return { type, benefit, color, frequency, trouble };
    };

    const filterProducts = (products) => {
        const answers = getUserAnswers();

        const filtered = products.filter(product => {
            const title = product.title.toLowerCase();
            const description = product.body_html?.toLowerCase() || '';
            const tags = product.tags.map(tag => tag.toLowerCase());

            const matchesType = title.includes(answers.type?.toLowerCase()) ||
                description.includes(answers.type?.toLocaleLowerCase()) ||
                tags.some(tag => tag.includes(answers.type?.toLowerCase()));
            const matchesBenefit = title.includes(answers.benefit?.toLowerCase()) ||
                description.includes(answers.benefit?.toLowerCase()) ||
                tags.some(tag => tag.includes(answers.benefit?.toLocaleLowerCase()));
            const matchesColor = title.includes(answers.color?.toLocaleLowerCase()) ||
                description.includes(answers.color?.toLocaleLowerCase()) ||
                tags.some(tag => tag.includes(answers.color?.toLowerCase()))
            const matchesFrequency = title.includes(answers.frequency?.toLocaleLowerCase()) ||
                description.includes(answers.frequency?.toLowerCase()) ||
                tags.some(tag => tag.includes(answers.frequency?.toLowerCase()));
            const matchesTrouble = title.includes(answers.trouble?.toLowerCase()) ||
                description.includes(answers.trouble?.toLowerCase()) ||
                tags.some(tag => tag.includes(answers.trouble?.toLowerCase()));

            return matchesType || matchesBenefit || matchesColor || matchesFrequency || matchesTrouble;
        });

        return filtered;
    };

    const sortProductsByLikes = (products) => {
        return [...products].sort((a, b) => {
            const likedA = likedProducts.includes(a.id) ? 1 : 0;
            const likedB = likedProducts.includes(b.id) ? 1 : 0;
            return likedB - likedA;
        });
    };

    const toggleLike = (productId) => {
        let updatedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
        if (updatedLikes.includes(productId)) {
            updatedLikes = updatedLikes.filter((id) => id !== productId);
        } else {
            updatedLikes.push(productId);
        }
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
        setLikedProducts(updatedLikes)
    };

    const totalPages = Math.ceil(filteredData.length / 2);

    return (
        <>
            <section className='routine'>
                <h2 className='noto-serif-display-tag' style={{ color: "#ffffff" }}>Build you everyday self care routine.</h2>
                <p>Perfect for if you`re looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                <Link to={'/question1'}>
                    <button className='retake' onClick={retakeQuiz}>Retake the quiz</button>
                </Link>
            </section>
            <section className='products'>
                <div className='daily-routine'>
                    <h3 className='noto-serif-display-tag'>Daily routine</h3>
                    <p>Perfect for if youre looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                </div>
                {sortProductsByLikes(filteredData).slice(startIndex, startIndex + 2).map((product, index) => (
                    <div key={index} className="product">
                        <ProductCard
                            key={product.id}
                            product={product}
                            toggleLike={toggleLike}
                            likedProducts={likedProducts} />
                    </div>
                ))}
                <button className='next' onClick={showNext}></button>
            </section>
            <div className="page-indicators">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index}
                        className={`page-indicator ${startIndex / 2 === index ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </>
    )
}

export default Results