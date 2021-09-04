import React, { useState } from "react";
import Slider from 'react-slick';
import { Container, Search, Image, Wrapper, Map, CarrouselTitle } from "./styles";
import logo from '../../assets/logo.svg';
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
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
                    <Slider {...settings}>
                        <div>
                            <img src={restaurante} alt="" />
                        </div>
                        <div>
                            <img src={restaurante} alt="" />
                        </div>
                        <div>
                            <img src={restaurante} alt="" />
                        </div>
                        <div>
                            <img src={restaurante} alt="" />
                        </div>
                    </Slider>
                </Search>
                
            </Container>
            <Map></Map>
        </Wrapper>
    )
    
}

export default Home;