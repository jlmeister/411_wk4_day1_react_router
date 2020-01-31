import React from 'react'
import cars from '../cars.json'
import { Container, Chip, Card } from "@material-ui/core";

const Car = ({match}) => {
    const id = match.params.id;
    const car = cars.find(car => car.id === Number(id));
    const styles = {
        card: {
            padding: '2.5em',
            marginTop: '4.5em',
        },
        chip: {
            margin: '4px'
        }
    }

    // Below, Object.entries creates an array of tuples for key/value pairs.
    // Map over this array, assigning the key prop the 'key' portion of the tuple.
    // Since the Chip component doesn't support the 'children' prop, the text needs to go in the 'label' prop instead.
    return (
        <Container maxWidth='sm'>
            <Card style={styles.card}>
                <h1>{car.Name}</h1>
                {Object.entries(car).map((value) => (
                    <Chip key={value[0]} label={`${value[0]}: ${value[1]}`} style={styles.chip}></Chip>
                ))}
            </Card>
        </Container>
    )
}

export default Car