import React from "react";

export default function DealBox(props) {
  const deal = props.deal;

  // Get the steam rating color
  const getSteamRatingColor = () => {
    let ratingColor;

    if (
      deal.steamRatingText === "Very Positive" ||
      deal.steamRatingText === "Mostly Positive"
    ) {
      ratingColor = "green";
    } else {
      ratingColor = "red";
    }

    return ratingColor;
  };

  return (
    <div className='deal-box'>
      <img src={deal.thumb} alt={deal.internalName} className='thumbnail' />

      <h3 className='title'>{deal.title}</h3>

      <p className='price'>
        <span>${deal.normalPrice}</span> ${deal.salePrice}
      </p>

      <p className='rating' style={{ color: getSteamRatingColor() }}>
        {deal.steamRatingText}
      </p>

      <p className='redirect-link'>
        <a
          href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
          target='_blank'
          rel='noreferrer'
        >
          Deal Link
        </a>
      </p>
    </div>
  );
}
