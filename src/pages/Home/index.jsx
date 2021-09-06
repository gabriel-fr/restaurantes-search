import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import { Container, Search, Image, Wrapper, Map, Carrousel, CarrouselTitle } from "./styles";
import logo from '../../assets/logo.svg';
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Image src={logo} />
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input 
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                    </TextField>
                    <CarrouselTitle>Próximo de você</CarrouselTitle>
                    <Carrousel {...settings}>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                        <Card photo={restaurante} title="Restaurante Churrasco"/>
                    </Carrousel>
                </Search>
                <RestaurantCard/>
            </Container>
            <Map></Map>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened ) }></Modal>
        </Wrapper>
    )
    
}

export default Home;