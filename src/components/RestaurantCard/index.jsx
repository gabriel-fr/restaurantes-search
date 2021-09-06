import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante-fake.png'

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome</Title>
            <ReactStars count={5} isHalf edit={false} value={4.5} activeColor="#e7711c"/>
            <Address>Rua Maceió</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="" />
    </Restaurant>
);

export default RestaurantCard;