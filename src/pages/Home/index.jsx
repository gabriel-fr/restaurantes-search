import React, { useState } from "react";
import Slider from 'react-slick';
import { Container, Search, Image, Wrapper, Map, Carrousel, CarrouselTitle } from "./styles";
import logo from '../../assets/logo.svg';
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, GoogleMap } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    function handleKeyPress(e){
        if (e.key == 'Enter'){
            setQuery(inputValue);
        }
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
                            onKeyPress={handleKeyPress}
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
            <GoogleMap query={query}></GoogleMap>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened ) }></Modal>
        </Wrapper>
    )
    
}

export default Home;