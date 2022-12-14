import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                background='model-s.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                background='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                background='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                background='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Monay-back guarantee'
                background='solar-panel.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Cost Less Than a New Roof Plus Solar Panels'
                background='solar-roof.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn More'
            />
            <Section
                title='Accessories'
                description=''
                background='accessories.jpg'
                leftBtnText='Shop Now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
