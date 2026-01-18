import React from 'react'

const HeroCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0d26a4b4aa47.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-orbitron">Shoes!</h2>
                    <p className='font-orbitron'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary font-orbitron">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard