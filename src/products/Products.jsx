import React from 'react';
import ProductStyle from './products.module.css';
import {AiFillStar} from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs";
function Products() {
    return (
        <>
            <section className={ProductStyle.cardContainer}>
                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>

                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>

                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>

                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>

                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>

                <section className={ProductStyle.card}>
                    <img className={ProductStyle.cardImage}
                         src="https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg" alt="Shoe"/>
                    <div className={ProductStyle.cardDetails}>
                        <h3 className={ProductStyle.cardTitle}>Shoe</h3>

                        <section className={ProductStyle.cardReviews}>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <AiFillStar className={ProductStyle.ratingStar}/>
                            <span className={ProductStyle.totalReviews}>4</span>
                        </section>

                        <section className={ProductStyle.cardPrice}>
                            <div className={ProductStyle.price}>
                                <del>$300</del>
                                200
                            </div>

                            <div className={ProductStyle.bag}>
                                <BsFillBagHeartFill className={ProductStyle.bagIcon}/>
                            </div>
                        </section>

                    </div>
                </section>
            </section>
        </>
    );
}

export default Products;