import { isNil } from 'lodash';
import Vue from 'vue';

Vue.filter('toFixed', (value: number, decimal = 2) => {
    if (isNil(value)) {
        return null;
    }
    return value.toFixed(decimal);
});
