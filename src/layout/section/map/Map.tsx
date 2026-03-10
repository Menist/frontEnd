import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";

export const Map = () => {
    return (
        <Fade cascade damping={.9}>
        <MapSection>
            <FlexWrapper>
                <iframe title={'yandexMap'}
                        src="https://yandex.by/map-widget/v1/?ll=27.555696%2C53.902735&z=12"
                        width="100%"
                >
                </iframe>
            </FlexWrapper>
        </MapSection>
        </Fade>
    );
};
 const MapSection=styled.section`
     padding-top: 70px;
     margin-bottom: 30px;
   
     iframe {
         border: none;
         min-height: 300px;
     }
 `