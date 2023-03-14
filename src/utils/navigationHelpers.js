import { createBrowserHistory } from 'history';

import { BASE_URL, HOME } from '../constants/AppRoutes';

export const history = createBrowserHistory({ basename: BASE_URL });

export const isInHome = () => history.location.pathname.split('/').length === 2;

export const { goBack } = history;

export const goTo = (url) => {
    history.push(url);
};

export const goHome = () => {
    if (!isInHome()) {
        goTo(`/${HOME}`);
    }
};

export const goToMovieDetails = (movieId) => {
    goTo(`/${HOME}/${movieId}`);
};
