import React from 'react';

import classes from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformdeIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformdeIngredients.length === 0) {
        transformdeIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformdeIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformdeIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;