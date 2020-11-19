import React from "react";

export default function DealBox(props) {
  const deal = props.deal;

  // Get the steam rating color
  const getSteamRatingColor = () => {
    let ratingColor;

    if (deal.steamRatingPercent >= 70) {
      ratingColor = "#6ab04c";
    } else if (deal.steamRatingPercent >= 40 && deal.steamRatingPercent <= 70) {
      ratingColor = "#f0932b";
    } else {
      ratingColor = "#eb4d4b";
    }

    return ratingColor;
  };

  return (
    <div className='deal-box'>
      <div className='savings-percent'>{Math.floor(deal.savings)}%</div>

      <div className='price'>
        <span>${deal.normalPrice}</span> ${deal.salePrice}
      </div>

      <div className='title'>
        <img src={deal.thumb} alt={deal.internalName} />
        <h3>{deal.title}</h3>
      </div>

      <div className='release-date'>{deal.releaseDate}</div>

      <div className='rating' style={{ color: getSteamRatingColor() }}>
        {deal.steamRatingText === null ? "n/a" : deal.steamRatingText}
      </div>

      <div className='redirect-link'>
        <a
          href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
          target='_blank'
          rel='noreferrer'
        >
          Buy Game
        </a>
      </div>
    </div>
  );
}
